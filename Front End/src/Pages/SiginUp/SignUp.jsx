import React from "react";
import Signup from "./../../assets/images/Signup.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/users/userThunk";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  if (isAuthenticated) {
    navigate("/");
  }
  return (
    <div className="bg-prime-white min-h-screen flex items-center justify-center py-6">
      <div className="max-w-screen-xl w-full bg-white shadow sm:rounded-lg flex">
        <div className="w-full lg:w-1/2 p-1 sm:p-12 flex flex-col items-center">
          <div>
            <img src="" className="w-32 mx-auto" alt="Logo" />
          </div>
          <div className="mt-8 w-full max-w-xs flex flex-col gap-0">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex gap-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                  <input
                    className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                  <input
                    className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </label>
              </div>
              {/* <label className="block text-sm font-medium text-gray-700 mt-4">
                Company Name (Optional)
                <input
                  className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Company Name"
                />
              </label> */}
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Email
                <input
                  className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Password
                <input
                  className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label className="block text-sm font-medium text-gray-700 mt-4">
                Confirm Password
                <input
                  className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </label>
              <button
                type="submit"
                className="mt-4 tracking-wide font-semibold bg-prim-button text-white w-full py-4 rounded-lg hover:bg-hover-button transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Sign up</span>
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-600 text-center">
              Already have an account ? {}
              <a href="/login" className="text-prim-button font-semibold ">
                Login here
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center bg-prim-dark">
          <img
            src={Signup}
            className="w-full h-full object-cover sm:rounded-r-lg"
            alt="Signup"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
