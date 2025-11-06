'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  // Render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-3.5 h-3.5 ${
              index < fullStars
                ? 'fill-[#8B7355] text-[#8B7355]'
                : 'fill-none text-[#D4C4B0]'
            }`}
          />
        ))}
        <span className="text-xs text-[#5C4A3A] ml-1.5 font-light">({rating})</span>
      </div>
    );
  };

  return (
    <div className="group bg-white border border-[#E8E2D5] hover:border-[#D4C4B0] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-full flex flex-col">
      {/* Product Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] bg-[#F5F1E8] overflow-hidden cursor-pointer">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl opacity-30">📷</div>
            </div>
          )}
          
          {/* Wishlist Button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-sm z-10"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                isWishlisted 
                  ? 'fill-[#8B7355] text-[#8B7355]' 
                  : 'text-[#5C4A3A]'
              }`}
            />
          </button>

          {/* Stock Badge */}
          {product.stock && product.stock < 10 && (
            <div className="absolute top-4 left-4 bg-[#2C2416] text-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider">
              Low Stock
            </div>
          )}

          {/* Quick View Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end justify-center">
            <div className="bg-white text-[#2C2416] px-6 py-2.5 text-sm font-medium w-full text-center">
              View Details
            </div>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          {product.category && (
            <span className="text-[10px] text-[#8B7355] uppercase tracking-[0.1em] font-medium font-gray-500">
              {product.category}
            </span>
          )}
          {product.brand && (
            <span className="text-[10px] text-[#5C4A3A] uppercase tracking-wider font-light text-gray-500">
              {product.brand}
            </span>
          )}
        </div>

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm sm:text-base font-serif text-[#2C2416] mb-2 sm:mb-2.5 line-clamp-2 leading-snug min-h-[2.5rem] sm:min-h-[2.8rem] hover:text-[#8B7355] transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="mb-2 sm:mb-3">
            {renderStars(product.rating)}
          </div>
        )}

        {/* Material Info */}
        {product.material && (
          <p className="text-[10px] sm:text-xs text-[#5C4A3A] mb-2 sm:mb-3 font-light">
            {product.material} • {product.gsm} GSM
          </p>
        )}

        {/* Price & Add to Cart */}
        <div className="mt-auto pt-2 sm:pt-3 border-t border-[#E8E2D5]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-[#8B7355] uppercase tracking-wider">Price</span>
              <span className="block text-base sm:text-xl font-serif text-[#2C2416] font-medium leading-tight">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            </div>
            <Link 
              href={`/product/${product.id}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="relative group/icon bg-[#2C2416] text-white p-2 sm:p-2.5 hover:bg-[#3D3020] transition-colors duration-300 rounded-full flex items-center justify-center"
              aria-label="View product details"
              title="View product details"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 group-hover/icon:scale-110 transition-transform" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none">
                View Details
              </span>
            </Link>
          </div>
        </div>

        {/* Size Indicators */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex items-center gap-1 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-[#E8E2D5]">
            <span className="text-[9px] sm:text-[10px] text-[#8B7355] uppercase tracking-wider mr-1">Sizes:</span>
            {product.sizes.slice(0, 5).map((size, index) => (
              <span 
                key={index}
                className="text-[10px] text-[#5C4A3A] px-1.5 py-0.5 border border-[#E8E2D5] font-light"
              >
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>


  );
}