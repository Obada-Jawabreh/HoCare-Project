import React from "react";
import profile from "./../assets/images/dr.png";
function Card() {
  return (
    <>
      {/* <div className="flex gap-6 mt-16"> */}
        <div className="bg-[#D9F2F0] p-4 rounded-lg shadow-md flex flex-col items-center h-fit ml-8">
          <img
            src={profile}
            alt="Profile Picture"
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <p className="text-gray-600 text-sm">Physiotherapist</p>
          <h3 className="text-lg font-semibold mt-2">Hoda Khoori</h3>
        </div> 

        {/* <div className="bg-[#D9F2F0]  p-4 rounded-lg shadow-md flex flex-col items-center">
          <img
            src={profile}
            alt="Profile Picture"
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 text-sm text-center">Physiotherapist</p>
          <h3 className="text-lg font-semibold text-center mt-2">
            Hoda Khoori
          </h3>
        </div> */}
      {/* </div> */}
    </>
  );
}
export default Card;
