import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import {
    FaHome,
    FaClipboardList,
    FaShoppingCart,
    FaStar,
    FaBook,
    FaCreditCard,
    FaUtensils
} from "react-icons/fa";

function Dashboard() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Dashboard nav items
    const dashboardNavItems = [
        { name: "User Home", path: "/dashboard/home", icon: <FaHome /> },
        { name: "Reservation", path: "/dashboard/reservation", icon: <FaClipboardList /> },
        { name: "Payment History", path: "/dashboard/payment-history", icon: <FaCreditCard /> },
        { name: "My Cart", path: "/dashboard/cart", icon: <FaShoppingCart /> },
        { name: "Add Review", path: "/dashboard/review", icon: <FaStar /> },
        { name: "My Booking", path: "/dashboard/my-booking", icon: <FaBook /> },
    ];

    // Main site nav items (NOW WITH ICONS)
    const mainNavItems = [
        { name: "Home", path: "/", icon: <FaHome /> },
        { name: "Our Menu", path: "/OurMenu", icon: <FaUtensils /> },
        { name: "Order Food", path: "/OrderFood/salad", icon: <FaShoppingCart /> },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen flex flex-col lg:flex-row font-semibold">

            {/* Sidebar for lg devices */}
            <aside className="hidden lg:flex lg:flex-col w-64 bg-[#D1A05A] text-black p-5 fixed top-0 left-0 h-screen overflow-y-auto">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <p className="text-3xl font-bold cinzel-font">
                            BISTRO BOSS
                        </p>
                        <p className="tracking-[4px] font-semibold text-xl mt-1 cinzel-font">
                            RESTAURANT
                        </p>
                    </Link>
                </div>

                {/* Dashboard Nav */}
                <ul className="space-y-4 mt-10">
                    {dashboardNavItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 ${isActive(item.path)
                                    ? "text-white"
                                    : "text-black hover:text-white"
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Divider */}
                <div className="border-t-2 border-white my-6"></div>

                {/* Main Site Nav WITH ICONS */}
                <ul className="space-y-4">
                    {mainNavItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 ${isActive(item.path)
                                    ? "text-white"
                                    : "text-black hover:text-white"
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Top Navbar for sm & md */}
            <nav className="lg:hidden fixed top-0 left-0 right-0 h-16 md:h-19 bg-[#D1A05A] text-black p-4 flex justify-between items-center z-50">
                <div>
                    <Link to="/">
                        <p className="text-2xl font-bold cinzel-font">
                            BISTRO BOSS
                        </p>
                        <p className="tracking-[3px] font-semibold text-base mt-1 cinzel-font">
                            RESTAURANT
                        </p>
                    </Link>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="text-2xl focus:outline-none"
                >
                    <HiMenu />
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="lg:hidden fixed top-16 left-0 right-0 bg-[#D1A05A] text-black p-4 space-y-3 z-40">
                    {dashboardNavItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 ${isActive(item.path)
                                ? "text-white"
                                : "hover:text-white"
                                }`}
                            onClick={() => setOpen(false)}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    ))}

                    <div className="border-t-2 border-white my-4"></div>

                    {mainNavItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-300 ${isActive(item.path)
                                ? "text-white"
                                : "hover:text-white"
                                }`}
                            onClick={() => setOpen(false)}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 p-5 bg-gray-100 lg:ml-64 mt-20 lg:mt-0 min-h-screen">
                <Outlet />
            </main>
        </div>
    );
}

export default Dashboard;
