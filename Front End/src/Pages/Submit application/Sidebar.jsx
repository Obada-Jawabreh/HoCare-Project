import React from 'react';

const Sidebar = ({ children }) => (
  <div className="hidden md:flex md:w-1/3 bg-[#46808B] p-8 flex-col items-center text-white">
    {children}
    <div className="text-center mt-16">
      <h1 className="text-4xl font-bold mb-2">HoCare</h1>
      <p className="text-xl">Join our network of healthcare professionals</p>
    </div>
  </div>
);

export default Sidebar;