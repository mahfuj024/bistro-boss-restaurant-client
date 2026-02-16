import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // path check
import { toast } from "react-toastify";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully ✅"))
      .catch(() => toast.error("An error occurred ❌"));
  };

  const navItem = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/OurMenu" },
    { name: "Order Food", path: "/OrderFood/salad" },
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
        {user ? (
          <div className="flex items-center gap-2">
            {/* User Icon */}
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {user.photoURL ? (
                <img src={user.photoURL} alt="User" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm font-bold text-gray-700">
                  {user.displayName ? user.displayName[0] : "U"}
                </span>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogOut}
              className="btn bg-white border border-gray-300 text-black hover:bg-[#D99904] hover:text-white"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-white border border-gray-300 text-black hover:bg-[#D99904] hover:text-white"
          >
            Sign In
          </Link>
        )}
      </div>

    </div>
  );
}

export default Navbar;
