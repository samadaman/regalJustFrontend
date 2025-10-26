// src/app/product/[id]/page.js
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getProductById, getFeaturedProducts } from '../../../productsData';
import { Star, ShoppingCart, Heart, Truck, Shield, RefreshCw, ChevronLeft, Check, Minus, Plus, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';
import { useCart } from '../../../context/CartContext';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const productData = getProductById(parseInt(params.id));
    if (productData) {
      setProduct(productData);
      setSelectedSize(productData.sizes[0]);
      setSelectedColor(productData.colors[0]);
    }
    
    // Get featured products excluding current product
    const featured = getFeaturedProducts().filter(p => p.id !== parseInt(params.id));
    setFeaturedProducts(featured);
  }, [params.id]);

  const handleAddToCart = () => {
    addToCart(
      product,
      quantity,
      selectedSize,
      selectedColor
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const scrollLeft = () => {
    const container = document.getElementById('featured-products-scroll');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('featured-products-scroll');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < Math.floor(rating)
                ? 'fill-[#8B7355] text-[#8B7355]'
                : 'fill-none text-[#D4C4B0]'
            }`}
          />
        ))}
        <span className="text-sm text-[#5C4A3A] ml-2 font-light">({rating})</span>
      </div>
    );
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <p className="text-[#5C4A3A]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Header />
      {/* Back Button */}
      <div className="bg-white border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#5C4A3A] hover:text-[#2C2416] transition-colors"
          >
            <Link href="/">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-light">Back to Collection</span>
            </Link>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-white border border-[#E8E2D5] overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              
              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 w-11 h-11 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-md"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isWishlisted
                      ? 'fill-[#8B7355] text-[#8B7355]'
                      : 'text-[#5C4A3A]'
                  }`}
                />
              </button>

              {/* Stock Badge */}
              {product.stock < 10 && (
                <div className="absolute top-4 left-4 bg-[#2C2416] text-white px-4 py-2 text-xs font-medium uppercase tracking-wider">
                  Only {product.stock} Left
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[3/4] border-2 transition-all overflow-hidden ${
                    selectedImage === index
                      ? 'border-[#2C2416]'
                      : 'border-[#E8E2D5] hover:border-[#D4C4B0]'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category & Brand */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#8B7355] uppercase tracking-[0.15em] font-medium">
                {product.category}
              </span>
              <span className="text-xs text-[#5C4A3A] uppercase tracking-wider font-light">
                {product.brand}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-serif text-[#2C2416] leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              {renderStars(product.rating)}
              <span className="text-sm text-[#5C4A3A] font-light">128 Reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 py-4 border-y border-[#E8E2D5]">
              <span className="text-4xl font-serif text-[#2C2416] font-medium">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-[#8B7355] uppercase tracking-wider">Inclusive of all taxes</span>
            </div>

            {/* Description */}
            <div>
              <p className="text-[#5C4A3A] leading-relaxed font-light">
                {product.detailedDescription}
              </p>
            </div>

            {/* Material Info */}
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-[#8B7355] uppercase tracking-wider text-xs">Material</span>
                <p className="text-[#2C2416] font-medium mt-1">{product.material}</p>
              </div>
              <div>
                <span className="text-[#8B7355] uppercase tracking-wider text-xs">Weight</span>
                <p className="text-[#2C2416] font-medium mt-1">{product.gsm} GSM</p>
              </div>
            </div>

            {/* Color Selector */}
            <div>
              <label className="text-sm text-[#2C2416] font-medium mb-3 block">
                Color: <span className="font-light text-[#5C4A3A]">Selected</span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-[#2C2416] scale-110'
                        : 'border-[#E8E2D5] hover:border-[#D4C4B0]'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <label className="text-sm text-[#2C2416] font-medium mb-3 block">
                Size: <span className="font-light text-[#5C4A3A]">{selectedSize}</span>
              </label>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium border-2 transition-all ${
                      selectedSize === size
                        ? 'border-[#2C2416] bg-[#2C2416] text-white'
                        : 'border-[#E8E2D5] text-[#5C4A3A] hover:border-[#D4C4B0]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="text-sm text-[#2C2416] font-medium mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E8E2D5]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-[#F5F1E8] transition-colors"
                  >
                    <Minus className="w-4 h-4 text-[#5C4A3A]" />
                  </button>
                  <span className="px-6 text-[#2C2416] font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-3 hover:bg-[#F5F1E8] transition-colors"
                  >
                    <Plus className="w-4 h-4 text-[#5C4A3A]" />
                  </button>
                </div>
                <span className="text-sm text-[#5C4A3A] font-light">
                  {product.stock} available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="cursor-pointer flex-1 bg-[#2C2416] text-white py-4 px-8 font-medium hover:bg-[#3D3020] transition-colors flex items-center justify-center gap-3"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>
              <button className="border-2 cursor-pointer border-[#2C2416] text-[#2C2416] py-4 px-8 font-medium hover:bg-[#2C2416] hover:text-white transition-colors">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="bg-white border border-[#E8E2D5] p-6 space-y-3">
              <h3 className="text-sm font-medium text-[#2C2416] uppercase tracking-wider mb-4">
                Product Features
              </h3>
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#8B7355]" />
                  <span className="text-sm text-[#5C4A3A] font-light">{feature}</span>
                </div>
              ))}
            </div>

            {/* Service Info */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-white border border-[#E8E2D5]">
                <Truck className="w-6 h-6 text-[#8B7355] mx-auto mb-2" />
                <p className="text-xs text-[#5C4A3A] font-light">Free Shipping</p>
              </div>
              <div className="text-center p-4 bg-white border border-[#E8E2D5]">
                <RefreshCw className="w-6 h-6 text-[#8B7355] mx-auto mb-2" />
                <p className="text-xs text-[#5C4A3A] font-light">Easy Returns</p>
              </div>
              <div className="text-center p-4 bg-white border border-[#E8E2D5]">
                <Shield className="w-6 h-6 text-[#8B7355] mx-auto mb-2" />
                <p className="text-xs text-[#5C4A3A] font-light">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8E2D5]">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-[#2C2416] mb-2">
                  You May Also Like
                </h2>
                <p className="text-sm text-[#5C4A3A] font-light">
                  Handpicked products just for you
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Scroll Buttons */}
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={scrollLeft}
                    className="p-2 border border-[#E8E2D5] hover:border-[#2C2416] hover:bg-[#F5F1E8] transition-colors"
                    aria-label="Scroll left"
                  >
                    <ArrowLeft className="w-5 h-5 text-[#5C4A3A]" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="p-2 border border-[#E8E2D5] hover:border-[#2C2416] hover:bg-[#F5F1E8] transition-colors"
                    aria-label="Scroll right"
                  >
                    <ArrowRight className="w-5 h-5 text-[#5C4A3A]" />
                  </button>
                </div>
                <button 
                  onClick={() => router.push('/')}
                  className="flex items-center gap-2 text-sm text-[#8B7355] hover:text-[#2C2416] transition-colors font-medium"
                >
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Products Carousel */}
            <div className="relative">
              <div 
                id="featured-products-scroll"
                className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {featuredProducts.map((featuredProduct) => (
                  <div key={featuredProduct.id} className="flex-none w-[280px] sm:w-[300px]">
                    <ProductCard product={featuredProduct} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}