import React from "react";

const TherapistHeader = ({ user }) => (
  <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-[#46808B] to-[#5A9BAE] text-[#EEF6F9] rounded-lg shadow-lg">
    <img src={`http://localhost:5001/${user?.profilePicture}`} alt="Therapist Avatar" className="w-24 h-24 rounded-full border-4 border-[#EEF6F9] shadow-md" />
    <div>
      <h1 className="text-3xl font-bold">{user?.firstName} {" "} {user?.lastName}</h1>
      <p className="text-xl text-[#B9D9D6]">{user?.profession}</p>
    </div>
  </div>
);

export default TherapistHeader;