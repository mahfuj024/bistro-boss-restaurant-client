import { useState } from "react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Cart() {
    const [cart, refetch, isLoading] = useCart(); // useCart hook returns data + refetch + optional isLoading
    const axiosSecure = useAxiosSecure();
    const [showAll, setShowAll] = useState(false);

    // ✅ safe total price calculation
    const totalPrice = (Array.isArray(cart) ? cart : []).reduce(
        (sum, item) => sum + (item.price || 0),
        0
    );

    // ✅ Show first 8 items or all if showAll is true
    const displayItems = showAll
        ? Array.isArray(cart) ? cart : []
        : Array.isArray(cart) ? cart.slice(0, 8) : [];

    // ✅ handle delete item
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/cart/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                            refetch();
                        }
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            }
        });
    };

    // ✅ loading state
    if (isLoading) {
        return <p className="text-center mt-10">Loading cart...</p>;
    }

    // ✅ empty state
    if (!cart || cart.length === 0) {
        return <p className="text-center mt-10 text-gray-500">Your cart is empty.</p>;
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center my-3 md:my-3 lg:my-4">
                My Cart
            </h1>

            <div className="bg-white p-1 sm:p-4 md:p-6 lg:p-9 rounded-sm mt-4 md:mt-5 lg:mt-7">
                {/* Top Summary Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6 pt-2 md:pt-0">
                    <h1 className="cinzel-font text-lg md:text-xl lg:text-[26px] font-bold">
                        Total Orders : {cart.length}
                    </h1>

                    <h1 className="cinzel-font text-lg md:text-xl lg:text-[26px] font-bold">
                        Total Price : ${totalPrice.toFixed(2)}
                    </h1>

                    <Link
                        to={cart.length > 0 ? "/dashboard/payment" : "#"}
                        onClick={(e) => {
                            if (cart.length === 0) e.preventDefault();
                        }}
                    >
                        <button
                            className={`btn bg-[#D1A05A] outline-none cinzel-font text-white text-sm md:text-lg lg:text-xl font-semibold md:font-bold px-4
              ${cart.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#c89245] transition"}`}
                        >
                            Pay
                        </button>
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-t-lg min-h-50 transition-all duration-300">
                    <table className="table w-full border-separate border-spacing-y-2">
                        {/* Table Head */}
                        <thead className="bg-[#D1A05A] text-white h-12 md:h-14 lg:h-16 text-xs sm:text-sm md:text-base lg:text-lg">
                            <tr>
                                <th className="rounded-tl-lg">#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="rounded-tr-lg">Action</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300">
                            {displayItems.map((item, index) => (
                                <tr key={item._id} className="bg-white">
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded"
                                        />
                                    </td>
                                    <td className="font-medium">{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="p-1 sm:p-2 rounded-full bg-red-500 cursor-pointer text-white hover:bg-red-600 transition duration-300"
                                        >
                                            <FaTrashAlt className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Show More / Show Less Button */}
                {cart.length > 8 && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn bg-[#D1A05A] outline-none cinzel-font text-white text-sm md:text-lg lg:text-xl font-semibold md:font-bold px-5 hover:bg-[#b8893f] transition"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;