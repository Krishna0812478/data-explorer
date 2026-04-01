import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products from DummyJSON API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data.products);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on search input
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        Fake Store Products
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
        </div>
      )}

      {/* Error message */}
      {error && <p className="text-red-500 text-center font-semibold">{error}</p>}

      {/* Products grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-40 object-contain mb-4"
                />
                <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                  {product.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-center">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  {product.category}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;