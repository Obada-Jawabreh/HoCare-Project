import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../Hooks/customHooks/users/useAuth";
import { useAuthActions } from "../Hooks/customHooks/users/authActions";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

// function StickyNavbar() {
//   const location = useLocation();

//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     // return () => {
//     //   window.removeEventListener("scroll", handleScroll);
//     // };
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-30 transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#44898F]/60 backdrop-blur-xl shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/actions/userActions";
function StickyNavbar() {
  const location = useLocation();
  // const { isLoggedIn, loading, user } = useAuth();
  const { handleLogout } = useAuthActions();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const { loggedIn, user, loading, error } = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUser());

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  const isProfileAuthPage = ["/ProfileAuth", "/TherapistProfile"].includes(
    location.pathname
  );

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        isProfileAuthPage || isScrolled
          ? "bg-[#44898F]/60 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt=" Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            HoCare
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          {loggedIn ? (
            <>
              {user.id ? null : (
                <>
                  {" "}
                  <Link to="/UserType">
                    <button
                      type="button"
                      className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-2"
                    >
                      Register as Practitioner
                    </button>
                  </Link>
                  <p className="text-2xl mt-2">|</p>
                </>
              )}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 text-white"
                >
                  <img
                    src={`http://localhost:5001/${user.profilePicture}`}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <Link to="/profile">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Your Profile
                      </a>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="text-white bg-prim-button hover:bg-hover-button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-lime-500 dark:focus:ring-blue-800"
              >
                Log in
              </button>
            </Link>
          )}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li
              className={`relative group  ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/">
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-prime-white bg-lime-500 rounded md:bg-transparent md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-prim-dark transition-all duration-500 ${
                  location.pathname === "/"
                    ? "w-full "
                    : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li
              className={`relative group ${
                location.pathname === "/Physiotherapy" ? "active" : ""
              }`}
            >
              <Link to="/Physiotherapy">
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-prime-white rounded hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Appointment
                </a>
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-prim-dark transition-all duration-500 ${
                  location.pathname === "/Physiotherapy"
                    ? "w-full"
                    : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li
              className={`relative group ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link to="/about">
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-prime-white rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-prime-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About me
                </a>
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-prim-dark transition-all duration-500 ${
                  location.pathname === "/about"
                    ? "w-full"
                    : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
            <li
              className={`relative group ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact">
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-prime-white rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </Link>
              <span
                className={`absolute top-full mt-1 bottom-0 left-0 h-1 bg-prim-dark transition-all duration-500 ${
                  location.pathname === "/contact"
                    ? "w-full"
                    : "w-0 group-hover:w-full group-hover:left-0"
                }`}
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default StickyNavbar;
