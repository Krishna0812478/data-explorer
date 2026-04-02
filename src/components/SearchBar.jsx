import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm} // Ye zaroori hai!
        onChange={(e) => setSearchTerm(e.target.value)} // Ye bhi zaroori hai!
        className="w-full p-4 pl-12 bg-[#1e293b] border border-purple-500/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-gray-500 shadow-lg"
      />
      {/* Search Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;