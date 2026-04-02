import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    // 2 second baad message hata do
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-[#1e293b] border border-white/5 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group flex flex-col h-full relative">
      
      {/* Discount Badge (Top Right) */}
      {product.discountPercentage > 0 && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
          {Math.round(product.discountPercentage)}% OFF
        </div>
      )}

      {/* Product Image Section */}
      <div className="relative h-56 bg-[#0f172a]/50 m-2 rounded-[1.5rem] overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-6"
        />
        
        {/* Rating Overlay */}
        <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1 rounded-xl flex items-center gap-1.5 border border-white/10 text-xs text-yellow-400">
          <span className="text-sm">⭐</span> {product.rating}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-purple-400 transition-colors flex-grow">
            {product.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-black text-green-400">
            ${product.price}
          </span>
          {/* Real Price before discount (Optional but looks pro) */}
          <span className="text-sm text-gray-500 line-through">
            ${(product.price * (1 + product.discountPercentage/100)).toFixed(2)}
          </span>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>

        {/* Buttons Row */}
        <div className="flex gap-2 mt-auto">
          <button 
            onClick={handleAddToCart}
            className={`flex-grow py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
              isAdded 
              ? 'bg-green-500 text-white' 
              : 'bg-purple-600 hover:bg-purple-700 text-white active:scale-95 shadow-lg shadow-purple-500/20'
            }`}
          >
            {isAdded ? (
              <>✅ Added!</>
            ) : (
              <><span>🛒</span> Add to Cart</>
            )}
          </button>
          
          <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-gray-300">
            👁️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;