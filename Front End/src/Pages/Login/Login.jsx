import React from "react";
import login from "./../../assets/images/login.jpg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/users/userThunk";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  ); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    dispatch(loginUser(formData)); 
  };

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <div className="bg-prime-white min-h-screen flex items-center justify-center py-6 px-4 lg:px-0">
      <div className="w-full max-w-screen-lg mx-auto bg-white shadow-lg flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center">
          <div className="w-full flex justify-center mb-20">
            <img src="" className="w-20" alt="Logo" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-4 w-full max-w-sm flex flex-col gap-2"
          >
            <label className="block text-sm font-medium text-gray-700">
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
            <label className="block text-sm font-medium text-gray-700 mt-2">
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
            <button
              className="mt-4 tracking-wide font-semibold bg-prim-button text-white w-full py-3 rounded-lg hover:bg-hover-button transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={loading} // تعطيل الزر أثناء التحميل
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
            {/* {error && <p className="text-red-500 text-xs mt-2">{error}</p>} */}
            <button className="mt-2 tracking-wide font-semibold bg-[#E9E9E9] w-full py-3 rounded-lg hover:bg-[#E9E9F8] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <span className="ml-3">Login with Google</span>
            </button>
            <p className="mt-4 text-xs text-gray-600 text-center">
              Don't have an account ? {}
              <a href="/signup" className="text-prim-button font-semibold">
                Register
              </a>
            </p>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={login} className="w-full h-full object-cover" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;