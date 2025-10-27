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
    <div className="group bg-white border border-[#E8E2D5] hover:border-[#D4C4B0] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
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
      <div className="p-5">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-2">
          {product.category && (
            <span className="text-[10px] text-[#8B7355] uppercase tracking-[0.1em] font-medium">
              {product.category}
            </span>
          )}
          {product.brand && (
            <span className="text-[10px] text-[#5C4A3A] uppercase tracking-wider font-light">
              {product.brand}
            </span>
          )}
        </div>

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="text-base font-serif text-[#2C2416] mb-2.5 line-clamp-2 leading-snug min-h-[2.8rem] hover:text-[#8B7355] transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="mb-3">
            {renderStars(product.rating)}
          </div>
        )}

        {/* Material Info */}
        {product.material && (
          <p className="text-xs text-[#5C4A3A] mb-3 font-light">
            {product.material} • {product.gsm} GSM
          </p>
        )}

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E8E2D5]">
          <div className="flex flex-col">
            <span className="text-xs text-[#8B7355] uppercase tracking-wider mb-0.5">Price</span>
            <span className="text-xl font-serif text-[#2C2416] font-medium">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
              toast.success(`${product.name} added to cart!`);
            }}
            className="bg-[#2C2416] text-white p-2.5 hover:bg-[#3D3020] transition-colors duration-300 group/btn cursor-pointer"
          >
            <ShoppingBag className="w-4.5 h-4.5 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>

        {/* Size Indicators */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#E8E2D5]">
            <span className="text-[10px] text-[#8B7355] uppercase tracking-wider mr-1">Sizes:</span>
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