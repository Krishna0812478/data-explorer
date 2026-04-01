// src/App.jsx
import { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';

function App() {
  const { products, loading, error } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) return <div className="text-red-500 text-center mt-10">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🛍️ Product Explorer</h1>
        <p className="text-slate-400 text-lg">Search and explore products easily</p>
      </header>

      {/* Search Bar Component */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Loading State */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-slate-800 h-64 rounded-xl animate-pulse"></div>
          ))}
        </div>
      ) : (
        /* Product Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-20 text-slate-500 text-xl">
          No products found for "{searchQuery}"
        </div>
      )}
    </div>
  );
}

export default App;