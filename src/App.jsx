import React, { useState } from "react";
import useProducts from "./hooks/useProducts";

const App = () => {
  const { products, loading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  // --- Logic: Search and Sort ---
  const filteredProducts = (products || [])
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#0f172a]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#0f172a] text-red-400">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* 💎 Glassmorphic Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 p-2 rounded-lg font-bold text-xl w-10 h-10 flex items-center justify-center">P</div>
          <span className="text-xl font-bold tracking-tight hidden md:block">ProStore</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] md:text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30 font-medium">
            Verified Dev: Krishna
          </span>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold text-sm shadow-lg border border-white/20">K</div>
        </div>
      </nav>

      {/* 📂 Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 italic tracking-tighter bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          Product Explorer
        </h1>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto text-sm md:text-base">
          Manage and browse your premium inventory with <span className="text-purple-400 font-medium">real-time analytics</span> and smart sorting.
        </p>

        {/* 🛠️ Controls Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-white/5 p-4 md:p-6 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
          
          {/* 🔍 Search Input with Clear (X) Button */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-gray-500 text-sm"
            />
            <span className="absolute left-4 top-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* ⚡ Sort Dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full md:w-48 bg-[#1e293b] border border-white/10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer text-sm"
          >
            <option value="none">Sort by Price</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* 🛒 Grid Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative bg-[#1e293b]/40 border border-white/5 rounded-3xl p-5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-xl">
                <div className="relative h-48 md:h-56 bg-[#0f172a] rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                  <img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-red-500 text-[9px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                    {Math.round(product.discountPercentage)}% OFF
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] flex items-center gap-1 border border-white/10">
                    <span className="text-yellow-400 text-xs">★</span> {product.rating}
                  </div>
                </div>

                <h3 className="font-semibold text-base mb-1 text-purple-100 truncate">{product.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-bold text-green-400">${product.price}</span>
                  <span className="text-[10px] text-gray-500 line-through">${(product.price / (1 - product.discountPercentage/100)).toFixed(2)}</span>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-500 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95">
                    Add to Cart
                  </button>
                  <button className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
                    👁️
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
            <div className="text-5xl mb-4 opacity-50">🔍</div>
            <h2 className="text-xl font-bold mb-2 text-gray-300">No Items Found</h2>
            <p className="text-gray-500 text-sm">Try searching for something else like "Beauty".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;