import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  FaUserCircle,
  FaCaretDown,
  FaTachometerAlt,
  FaUser,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";

import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const menus = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch((err) => console.log(err));

    setProfileMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            className="text-3xl font-bold text-cyan-400"
          >
            Dev Duo
          </Link>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8 text-white">
            <Link to="/">
              Home
            </Link>
            {menus.map((menu) => (
              <li key={menu}>
                <a
                  href={`#${menu.toLowerCase()}`}
                  className="hover:text-cyan-400 transition"
                >
                  {menu}
                </a>
              </li>
            ))}

          </ul>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-5">

            {user ? (
              <div className="relative">

                <button
                  onClick={() =>
                    setProfileMenu(!profileMenu)
                  }
                  className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 hover:border-cyan-400 transition"
                >
                  <FaUserCircle className="text-3xl text-cyan-400" />

                  <div className="text-left">

                    <h2 className="text-white font-semibold text-sm">
                      {user.displayName || "User"}
                    </h2>

                    <p className="text-xs text-gray-400">
                      {user.email}
                    </p>

                  </div>

                  <FaCaretDown className="text-gray-400" />
                </button>

                {profileMenu && (

                  <div className="absolute right-0 mt-4 w-64 bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">

                    <div className="px-5 py-4 border-b border-slate-700">

                      <h3 className="text-white font-semibold">
                        {user.displayName}
                      </h3>

                      <p className="text-gray-400 text-sm break-all">
                        {user.email}
                      </p>

                    </div>

                    <Link
                      to="/dashboard"
                      onClick={() =>
                        setProfileMenu(false)
                      }
                      className="flex items-center gap-3 px-5 py-4 hover:bg-slate-800 text-white"
                    >
                      <FaTachometerAlt />

                      Dashboard
                    </Link>

                    <Link
                      to="/profile"
                      onClick={() =>
                        setProfileMenu(false)
                      }
                      className="flex items-center gap-3 px-5 py-4 hover:bg-slate-800 text-white"
                    >
                      <FaUser />

                      My Profile
                    </Link>

                    <Link
                      to="/security"
                      onClick={() => setProfileMenu(false)}
                      className="flex items-center gap-3 px-5 py-4 hover:bg-slate-800 text-white"
                    >
                      <FaShieldAlt />
                      Security
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-red-600 text-white"
                    >
                      <FaSignOutAlt />

                      Logout
                    </button>

                  </div>

                )}

              </div>
            ) : (
              <Link
                to="/login"
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl text-white font-semibold transition"
              >
                Login
              </Link>
            )}

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="lg:hidden text-3xl text-white"
          >
            {mobileMenu ? (
              <IoClose />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileMenu && (

        <div className="lg:hidden bg-slate-900 border-t border-slate-800">

          {menus.map((menu) => (

            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              onClick={() =>
                setMobileMenu(false)
              }
              className="block px-6 py-4 text-white border-b border-slate-800 hover:bg-slate-800"
            >
              {menu}
            </a>

          ))}

          <div className="p-5">

            {user ? (

              <>

                <div className="mb-4">

                  <h3 className="text-white font-semibold">
                    {user.displayName}
                  </h3>

                  <p className="text-gray-400 text-sm break-all">
                    {user.email}
                  </p>

                </div>

                <Link
                  to="/dashboard"
                  className="block bg-slate-800 text-white p-3 rounded-xl mb-3 text-center"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  Dashboard
                </Link>

                <Link
                  to="/profile"
                  className="block bg-slate-800 text-white p-3 rounded-xl mb-3 text-center"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >
                  My Profile
                </Link>

                <Link
                  to="/security"
                  className="block bg-slate-800 text-white p-3 rounded-xl mb-3 text-center"
                  onClick={() => setMobileMenu(false)}
                >
                  Security
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 p-3 rounded-xl text-white"
                >
                  Logout
                </button>

              </>

            ) : (

              <Link
                to="/login"
                className="block bg-cyan-500 text-white p-3 rounded-xl text-center"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Login
              </Link>

            )}

          </div>

        </div>

      )}

    </nav>
  );
};

export default Navbar;