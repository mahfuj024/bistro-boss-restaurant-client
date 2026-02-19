import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // path check
import { toast } from "react-toastify";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import useCart from "../hooks/useCart";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully ✅"))
      .catch(() => toast.error("An error occurred ❌"));
  };

  const navItem = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/OurMenu" },
    { name: "Order Food", path: "/OrderFood/salad" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="navbar px-0 md:px-8 lg:px-12 bg-[#15151580] fixed top-0 z-50 text-white py-0 md:py-2 lg:py-4">

      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#15151580] rounded-box z-10 mt-3 w-52 p-2 shadow font-bold"
          >
            {navItem.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:bg-transparent ${isActive ? "text-[#EEFF25] font-bold" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold cinzel-font">BISTRO BOSS</p>
          <p className="tracking-[3px] md:tracking-[4px] font-semibold text-base md:text-lg lg:text-2xl mt-0 lg:mt-1 cinzel-font">
            RESTAURANT
          </p>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-lg space-x-5">
          {navItem.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:bg-transparent ${isActive ? "text-[#EEFF25] font-bold" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2 mr-2 md:mr-0">

          {/* Cart Icon */}
        <Link to="/dashboard/cart" className="relative cursor-pointer flex items-center justify-center mr-4 md:mr-6">
          <FaShoppingCart className="w-5 h-5 md:w-6 md:h-6 block" />

          <span className="absolute -top-3 -right-3 md:-top-3 md:-right-4 bg-red-500 text-white text-[10px] md:text-xs font-semibold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center">
            {cart.length}
          </span>
        </Link>

        {user ? (
          <div className="flex items-center gap-2 md:gap-3">
            {/* Logout Button */}
            <button
              onClick={handleLogOut}
              className="text-base font-medium md:font-bold md:text-lg hover:text-[#EEFF25] cursor-pointer"
            >
              Log out
            </button>

            {/* User Profile Pic or Icon */}
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-gray-500 w-5 h-5 md:w-7 md:h-7" />
              )}
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-base font-medium md:font-bold md:text-lg hover:text-[#EEFF25] cursor-pointer"
          >
            Sign In
          </Link>
        )}
      </div>


    </div>
  );
}

export default Navbar;
