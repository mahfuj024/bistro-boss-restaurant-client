import { useState } from "react";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

function Cart() {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const [showAll, setShowAll] = useState(false);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const displayItems = showAll ? cart : cart.slice(0, 8);

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

    return (
        <div className="max-w-7xl mx-auto">

            <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-0 md:mt-2 lg:mt-3">My Cart</h1>

            <div className="bg-white p-1 sm:p-4 md:p-6 lg:p-9 rounded-sm mt-2 md:mt-4 lg:mt-6">

                {/* Top Summary Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-6 pt-2 md:pt-0">
                    <h1 className="cinzel-font text-lg md:text-xl lg:text-[26px] font-bold">
                        Total Orders : {cart.length}
                    </h1>

                    <h1 className="cinzel-font text-lg md:text-xl lg:text-[26px] font-bold">
                        Total Price : ${totalPrice.toFixed(2)}
                    </h1>

                    <button className="btn bg-[#D1A05A] outline-none cinzel-font text-white text-sm md:text-lg lg:text-xl font-semibold md:font-bold px-4">
                        Pay
                    </button>
                </div>

                {/* Table Container with Fixed Min Height (Fix Jump Issue) */}
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