import React, { useState } from 'react';
import { useProducts } from './hooks/useProducts'; 
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

function App() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // 1. Filtering Logic
  let filteredProducts = products ? products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  // 2. Sorting Logic
  if (sortBy === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Loading State
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#0f172a] text-white">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-purple-500 mb-6 shadow-lg shadow-purple-500/20"></div>
        <p className="text-xl font-bold tracking-widest animate-pulse uppercase text-purple-400">
          Syncing Inventory...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-purple-500/30">
      
      {/* 🆕 Sticky Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-black shadow-lg shadow-purple-500/30">
            P
          </div>
          <span className="font-extrabold text-xl tracking-tight hidden sm:block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            ProStore
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end mr-2">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Verified Dev</p>
            <p className="text-xs font-bold text-purple-400">Krishna</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-purple-600 to-purple-800 flex items-center justify-center text-sm font-bold border-2 border-white/10 shadow-md">
            K
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-16 pb-10 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-b from-white via-white to-purple-500/50 bg-clip-text text-transparent italic tracking-tighter">
          Product Explorer
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium leading-relaxed">
          Manage and browse your premium inventory with <span className="text-purple-400">real-time analytics</span> and smart sorting.
        </p>
      </header>

      {/* Control Panel: Search + Sort */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row gap-4 items-center bg-[#1e293b]/40 p-3 rounded-[2rem] border border-white/5 backdrop-blur-sm shadow-2xl">
          <div className="flex-grow w-full">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          
          <div className="relative w-full md:w-auto">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#0f172a] text-gray-300 border border-purple-500/20 rounded-2xl px-10 py-4 outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer w-full md:w-60 hover:border-purple-500/50 transition-all font-bold text-sm tracking-wide shadow-inner"
            >
              <option value="default">Sort by Price</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-[#1e293b]/20 rounded-[3rem] border-2 border-dashed border-white/5">
            <div className="text-8xl mb-6 grayscale opacity-30">🔍</div>
            <h3 className="text-2xl font-black text-gray-400 tracking-tight">No Items Found</h3>
            <p className="text-gray-600 mt-2">Try adjusting your search for "{searchTerm}"</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center bg-[#0f172a]">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4 text-gray-500 text-sm font-bold uppercase tracking-widest">
            <span>Documentation</span>
            <span>Support</span>
            <span>API Status</span>
          </div>
          <p className="text-gray-600 text-xs">
            &copy; 2026 Developed by <span className="text-purple-500/80">Krishna</span> | Frontend Developer Intern
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;