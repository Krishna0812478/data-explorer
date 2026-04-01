// src/components/ProductCard.jsx
const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700 hover:scale-105 transition-transform">
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="w-full h-48 object-contain mb-4" 
      />
      <h3 className="text-white font-bold text-lg">{product.title}</h3>
      <p className="text-green-400 font-bold">${product.price}</p>
      <p className="text-slate-400 text-sm line-clamp-2">{product.description}</p>
      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg w-full hover:bg-purple-700">
        View
      </button>
    </div>
  );
};

export default ProductCard;