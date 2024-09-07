import React from "react";
import Sign from "./../assets/images/Sign.png";
const SignUp = () => {
  return (
    <div className="bg-prim-white min-h-screen flex items-center justify-center py-6 px-4 lg:px-0">
      <div className="w-full max-w-screen-lg mx-auto bg-white shadow-lg flex flex-col lg:flex-row rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center">
          {" "}
          {/* تقليل البادينغ هنا */}
          <div className="w-full flex justify-center mb-20">
            {" "}
            {/* تقليل المسافة الرأسية هنا */}
            <img src="" className="w-20" alt="Logo" />
          </div>
          <div className="mt-4 w-full max-w-sm flex flex-col gap-2">
            {" "}
            {/* تقليل المسافات بين العناصر */}
            <label className="block text-sm font-medium text-gray-700">
              Full Name
              <input
                className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text"
                placeholder="Full Name"
              />
            </label>
            <label className="block text-sm font-medium text-gray-700 mt-2">
              {" "}
              {/* تقليل المسافة الرأسية هنا */}
              Email
              <input
                className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Email"
              />
            </label>
            <label className="block text-sm font-medium text-gray-700 mt-2">
              {" "}
              {/* تقليل المسافة الرأسية هنا */}
              Password
              <input
                className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                placeholder="Password"
              />
            </label>
            <label className="block text-sm font-medium text-gray-700 mt-2">
              {" "}
              {/* تقليل المسافة الرأسية هنا */}
              Confirm Password
              <input
                className="mt-1 w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="password"
                placeholder="Confirm Password"
              />
            </label>
            <button className="mt-4 tracking-wide font-semibold bg-prim-button text-white w-full py-3 rounded-lg hover:bg-hover-button transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              {" "}
              {/* تقليل البادينغ هنا */}
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
              <span className="ml-3">Register</span>
            </button>
            {/* إضافة زر تسجيل الدخول باستخدام جوجل */}
            <button className="mt-2 tracking-wide font-semibold bg-[#E9E9E9]  w-full py-3 rounded-lg hover:bg-[#E9E9F8] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              {" "}
              {/* تقليل البادينغ هنا */}
              <span className="ml-3">Login with Google</span>
            </button>
            {/* إضافة النص 'Already have an account? Login' */}
            <p className="mt-4 text-xs text-gray-600 text-center">
              Already have an account?
              <a href="#" className="text-prim-button font-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img src={Sign} className="w-full h-full object-cover" alt="Signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
