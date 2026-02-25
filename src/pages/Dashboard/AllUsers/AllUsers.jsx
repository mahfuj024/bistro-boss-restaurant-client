import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from "sweetalert2";

function AllUsers() {

    const axiosSecure = useAxiosSecure();
    const [showAll, setShowAll] = useState(false);

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/user");
            return res.data;
        }
    });

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    const displayedUsers = showAll ? users : users.slice(0, 8);

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

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
                axiosSecure.delete(`/user/${user._id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "User deleted.", "success");
                            refetch();
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto">

            {/* Title */}
            <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold text-center my-3 md:my-3 lg:my-4">
                Manage All Users
            </h1>

            <div className="bg-white p-1 sm:p-4 md:p-6 lg:p-9 rounded-sm mt-4 md:mt-5 lg:mt-7">

                {/* Top Section */}
                <div className="flex justify-between items-center mb-2 md:mb-6">
                    <h1 className="cinzel-font text-lg md:text-xl mt-3 md:mt-0 lg:text-[26px] font-bold">
                        Total Users : {users.length}
                    </h1>
                </div>

                {/* Table for Desktop */}
                <div className="overflow-x-auto rounded-t-lg min-h-50 transition-all duration-300 hidden md:block">
                    <table className="table w-full border-separate border-spacing-y-2">

                        <thead className="bg-[#D1A05A] text-white h-12 md:h-14 lg:h-16 text-xs sm:text-sm md:text-base lg:text-lg">
                            <tr>
                                <th className="rounded-tl-lg">#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="text-center">Role</th>
                                <th className="rounded-tr-lg text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300">
                            {displayedUsers.map((user, index) => (
                                <tr key={user._id} className="bg-white">
                                    <td>{index + 1}</td>
                                    <td className="font-medium">{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center">
                                        {user.role === "admin"
                                            ? "Admin"
                                            : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="p-1 sm:p-2 rounded-full bg-[#D1A05A] hover:bg-[#c69146] text-white cursor-pointer transition duration-300"
                                            >
                                                <FaUser className="text-xs sm:text-sm md:text-base lg:text-lg" />
                                            </button>
                                        }
                                    </td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleDeleteUser(user)}
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

                {/* Mobile View */}
                <div className="md:hidden transition-all duration-300">
                    {displayedUsers.map((user, index) => (
                        <div key={user._id} className="bg-white p-4 rounded-lg shadow mb-3">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <p className="font-semibold">Name: {user.name}</p>
                                    <p className="text-gray-500 text-xs mt-1">Email: {user.email}</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex flex-col items-center mr-2 md:mr-0">
                                        <p className="text-sm">Role</p>
                                        {user.role === "admin"
                                            ? <span className="text-gray-500 text-sm">Admin</span>
                                            : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="p-2 mt-1 rounded-full cursor-pointer text-white bg-[#D1A05A]"
                                            >
                                                <FaUser className="text-xs sm:text-sm md:text-base lg:text-lg"/>
                                            </button>
                                        }
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-sm">Action</p>
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="p-2 mt-1 rounded-full cursor-pointer bg-red-500 text-white hover:bg-red-600"
                                        >
                                            <FaTrashAlt className="text-xs sm:text-sm md:text-base lg:text-lg"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More / Show Less */}
                {users.length > 8 && (
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

export default AllUsers;