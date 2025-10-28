'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products as productsData } from '../productsData';
import { Loader2, SlidersHorizontal, Grid3x3, LayoutGrid } from 'lucide-react';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  const [gridCols, setGridCols] = useState(4);
  
  // Responsive grid columns
  const getGridColsClass = (cols) => {
    switch(cols) {
      case 2: return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3';
      case 3: return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3';
      case 4: 
      default: 
        return 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    }
  };

  useEffect(() => {
    // Simulate loading for better UX
    const loadProducts = () => {
      setTimeout(() => {
        let sortedProducts = [...productsData];
        
        // Sort products based on selection
        switch(sortBy) {
          case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
          case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
          case 'featured':
          default:
            sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }
        
        setProducts(sortedProducts);
        setLoading(false);
      }, 500);
    };

    loadProducts();
  }, [sortBy]);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <Loader2 className="w-10 h-10 text-[#8B7355] animate-spin" />
            <p className="text-[#5C4A3A] font-light text-base">Loading collection...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2C2416] mb-1 sm:mb-2 tracking-tight leading-tight">
                Our Collection
              </h2>
              <p className="text-[#5C4A3A] font-light text-xs sm:text-sm">
                {products.length} Products
              </p>
            </div>
          </div>

          {/* Filters & Sort Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D5]">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-4 h-4 text-[#8B7355]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs sm:text-sm text-[#2C2416] bg-white border border-[#E8E2D5] px-3 sm:px-4 py-1.5 sm:py-2 focus:outline-none focus:border-[#8B7355] transition-colors cursor-pointer font-light"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Grid Layout Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 sm:p-2 border transition-colors flex items-center ${
                  gridCols === 3
                    ? 'border-[#2C2416] bg-[#2C2416] text-white'
                    : 'border-[#E8E2D5] text-[#5C4A3A] hover:border-[#D4C4B0]'
                }`}
                aria-label="Switch to 3-column layout"
              >
                <Grid3x3 className="w-4 h-4" />
                <span className="sr-only sm:not-sr-only sm:ml-1.5">3 columns</span>
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-1.5 sm:p-2 border transition-colors flex items-center ${
                  gridCols === 4
                    ? 'border-[#2C2416] bg-[#2C2416] text-white'
                    : 'border-[#E8E2D5] text-[#5C4A3A] hover:border-[#D4C4B0]'
                }`}
                aria-label="Switch to 4-column layout"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="sr-only sm:not-sr-only sm:ml-1.5">4 columns</span>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid ${getGridColsClass(gridCols)} gap-4 sm:gap-6`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Product Count Info */}
        <div className="mt-12 pt-8 border-t border-[#E8E2D5] text-center">
          <p className="text-xs sm:text-sm text-[#5C4A3A] font-light">
            Showing <span className="font-medium text-[#2C2416]">{products.length}</span> of <span className="font-medium text-[#2C2416]">{productsData.length}</span> products
          </p>
        </div>
      </div>
    </section>
  );
}