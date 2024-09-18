import React from "react";
import { FaUser, FaUserMd, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
const UserType = () => {
  return (
    <div className="flex justify-center min-h-screen py-16 ">
      <div className="flex flex-col md:flex-row max-h-full overflow-hidden max-w-fit ">
        <div className="bg-[#46808B] rounded-l-lg text-white flex-1 flex flex-col justify-center items-center p-4 md:p-8 ">
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">
            Access to Quality Physical Therapy and Home Nursing is Now Easier
          </h1>
          <FaAccessibleIcon className="w-20 h-20 md:w-32 md:h-32" />
        </div>
        <div className="bg-zinc-100 flex-1 flex flex-col justify-center items-center p-4 md:p-8 rounded-r-lg">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Step 1</h2>
            <h3 className="text-base md:text-lg mb-6">
              Choose Your Account Type
            </h3>
            <div className="flex space-x-4 justify-center">
              <Link to="/">
                <button className="border border-prim-dark text-black rounded-lg p-4 w-32 h-32 flex flex-col items-center justify-center hover:bg-prim-dark hover:text-white transition">
                  <FaUserMd className="w-12 h-12 mb-2" />
                  Practitioner
                </button>
              </Link>
              <Link to="/RequestPage">
                <button className="border border-prim-dark text-black rounded-lg p-4 w-32 h-32 flex flex-col items-center justify-center hover:bg-prim-dark hover:text-white transition">
                  <FaUser className="w-12 h-12 mb-2" />
                  User
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserType;
