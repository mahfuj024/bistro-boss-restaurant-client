import { FaEdit, FaTrashAlt } from "react-icons/fa"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function ManageItems() {

    const axiosSecure = useAxiosSecure()
    const [showAll, setShowAll] = useState(false);

    const { data: menu = [], isLoading, refetch } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosSecure.get("/menu")
            return res.data
        }
    })

    const displayItems = showAll ? menu : menu.slice(0, 8);

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>
    }

    const handleDeleteItem = (id) => {
        console.log("delete this item : ", id)
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
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Item deleted.", "success")
                            refetch()
                        }
                    })
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto">

            <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center my-3 md:my-3 lg:my-4">
                Manage All Items
            </h1>

            <div className="bg-white p-1 sm:p-4 md:p-6 lg:p-9 rounded-sm mt-4 md:mt-5 lg:mt-7">

                {/* Top Section */}
                <div className="flex justify-between items-center mb-2 md:mb-6">

                    <h1 className="cinzel-font text-lg md:text-xl mt-3 md:mt-0 lg:text-[26px] font-bold">
                        Total Items : {menu.length}
                    </h1>

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

                                <th className="text-center">
                                    Update
                                </th>

                                <th className="rounded-tr-lg text-center">
                                    Action
                                </th>

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

                                    <td className="font-medium">
                                        {item.name}
                                    </td>

                                    <td>
                                        ${item.price}
                                    </td>

                                    {/* Update Button */}
                                    <td className="text-center">

                                        <Link to={`/dashboard/update-item/${item._id}`}>
                                            <button
                                                className="p-1 sm:p-2 rounded-full bg-[#D1A05A] hover:bg-[#c69146] text-white cursor-pointer transition duration-300"
                                            >
                                                <FaEdit className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                            </button>
                                        </Link>

                                    </td>

                                    {/* Delete Button */}
                                    <td className="text-center">

                                        <button
                                            onClick={() => handleDeleteItem(item._id)}
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

                {/* Show More Button */}
                {menu.length > 8 && (

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
    )
}

export default ManageItems