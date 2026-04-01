// src/components/SearchBar.jsx
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full max-w-md px-4 py-3 rounded-full bg-slate-800 border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;