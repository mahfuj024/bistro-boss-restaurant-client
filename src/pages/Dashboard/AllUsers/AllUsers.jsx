import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { FaTrashAlt, FaUser } from 'react-icons/fa'
import Swal from "sweetalert2";

function AllUsers() {

    const axiosSecure = useAxiosSecure()
    const [showAll, setShowAll] = useState(false)

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/user")
            return res.data
        }
    })

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>
    }

    // Show first 8 users or all users
    const displayedUsers = showAll ? users : users.slice(0, 8)

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = (user) => {
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
                    .delete(`/user/${user._id}`)
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
    }

    return (
        <div className="max-w-7xl mx-auto">

            <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-3">
                Manage All Users
            </h1>

            <div className="bg-white p-4 md:p-6 lg:p-9 rounded-sm mt-4 lg:mt-6">

                {/* Top Summary Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="cinzel-font text-lg md:text-xl lg:text-[26px] font-bold">
                        Total Users : {users.length}
                    </h1>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-t-lg transition-all duration-300">

                    <table className="table w-full border-separate border-spacing-y-2">

                        {/* Table Head - Hide on Small Device */}
                        <thead className="hidden md:table-header-group bg-[#D1A05A] text-white h-14 text-base">
                            <tr>
                                <th className="rounded-tl-lg">#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className="rounded-tr-lg">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-sm md:text-base transition-all duration-300">

                            {displayedUsers.map((item, index) => (
                                <tr
                                    key={item._id}
                                    className="bg-white block md:table-row rounded-lg md:rounded-none shadow md:shadow-none p-3 md:p-0 mb-3 md:mb-0"
                                >

                                    {/* Index */}
                                    <td className="hidden md:table-cell px-4 py-2">
                                        {index + 1}
                                    </td>

                                    {/* Mobile View */}
                                    <td className="md:hidden flex justify-between items-center mb-2">
                                        <div>
                                            <p className="font-semibold">Name : {item.name}</p>
                                            <p className="text-gray-500 text-xs mt-1">
                                                Email : {item.email}
                                            </p>
                                        </div>

                                        <div className="flex gap-4">
                                            <div>
                                                <p className="text-xs">Role</p>
                                                {item.role === "admin" ? "Admin" : <button
                                                    onClick={() => handleMakeAdmin(item)}
                                                    className="p-2 mt-1 rounded-full cursor-pointer text-white bg-[#D1A05A]">
                                                    <FaUser />
                                                </button>}
                                            </div>

                                            <div>
                                                <p className="text-xs">Action</p>
                                                <button
                                                    onClick={() => handleDeleteUser(item)}
                                                    className="p-2 mt-1 rounded-full cursor-pointer bg-red-500 text-white hover:bg-red-600">
                                                    <FaTrashAlt />
                                                </button>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Desktop Name */}
                                    <td className="hidden md:table-cell font-medium px-4 py-2">
                                        {item.name}
                                    </td>

                                    {/* Desktop Email */}
                                    <td className="hidden md:table-cell font-medium px-4 py-2">
                                        {item.email}
                                    </td>

                                    {/* Desktop Role */}
                                    <td className="hidden md:table-cell px-4 py-2">
                                        {item.role === "admin" ? "Admin" : <button
                                            onClick={() => handleMakeAdmin(item)}
                                            className="p-2 rounded-full text-white cursor-pointer bg-[#D1A05A]">
                                            <FaUser />
                                        </button>}
                                    </td>

                                    {/* Desktop Delete */}
                                    <td className="hidden md:table-cell px-4 py-2">
                                        <button
                                            onClick={() => handleDeleteUser(item)}
                                            className="p-2 rounded-full cursor-pointer bg-red-500 text-white hover:bg-red-600">
                                            <FaTrashAlt />
                                        </button>
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

                {/* Show More / Show Less Button */}
                {users.length > 8 && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-[#D1A05A] text-white cursor-pointer px-6 py-2 rounded-md font-semibold hover:bg-[#b8893f] transition duration-300"
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default AllUsers