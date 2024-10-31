import React, { useState } from "react";
const SearchBar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const professions = ['All', 'Home Nurse', 'Physical Therapist'];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mb-8">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full pl-9 pr-4 py-2 text-sm bg-[#74C0EE] bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-prim-button placeholder-gray-500 text-gray-900"
          />
        </div>

        {/* Filter Select */}
        <div className="w-full sm:w-48">
          <select
            onChange={(e) => onFilterChange(e.target.value)}
            className="w-full px-4 py-2 text-sm bg-[#74C0EE] bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-prim-button text-gray-900 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.75rem center',
              backgroundSize: '1.25em 1.25em',
              paddingRight: '2.5rem'
            }}
          >
            {professions.map((profession) => (
              <option 
                key={profession} 
                value={profession}
                className="bg-white"
              >
                {profession}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;