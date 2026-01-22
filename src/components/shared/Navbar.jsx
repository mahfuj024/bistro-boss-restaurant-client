
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

  const navItem = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "User", path: "/user" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <div className="navbar px-0 md:px-8 lg:px-12 bg-[#15151580] fixed top-0 z-50 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {
              navItem.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `hover:bg-transparent ${isActive ? "text-[#EEFF25] font-bold" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <Link to="/">
          <p className='text-xl md:text-2xl lg:text-3xl font-bold cinzel-font'>BISTRO BOSS</p>
          <p class="tracking-[3px] md:tracking-[4px] font-semibold text-base md:text-lg lg:text-2xl mt-0 lg:mt-1 cinzel-font">RESTAURANT</p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navItem.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:bg-transparent ${isActive ? "text-[#EEFF25] font-bold" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}

export default Navbar
