'use client';

import Image from 'next/image';
import { ArrowRight, Star, ShoppingBag, Truck, Shield, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['TIMELESS', 'REFINED', 'ELEGANT'];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, 5000);
  return () => clearInterval(interval);
}, [slides.length]);

  return (
    <section className="relative  overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2C2416]/5 border border-[#8B7355]/20 rounded-sm px-5 py-2.5 text-sm">
              <Award className="w-4 h-4 text-[#8B7355]" />
              <span className="text-[#2C2416] font-serif tracking-wide">Est. 2025</span>
            </div>

            {/* Main Heading with Animation */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight">
                <span className="text-[#2C2416] block">
                  The Art of
                </span>
                <span className="relative inline-block my-2">
                  <span className="text-[#8B7355] transition-opacity duration-700">
                    {slides[currentSlide]}
                  </span>
                </span>
                <span className="text-[#2C2416] block">
                  Oversized
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#5C4A3A] max-w-xl leading-relaxed font-light">
                Meticulously crafted oversized tees for the discerning gentleman. 
                Where heritage meets contemporary comfort.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm border-l-2 border-[#8B7355] pl-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8B7355] text-[#8B7355]" />
                  ))}
                </div>
                <span className="text-[#5C4A3A] font-light">Trusted by 15+ connoisseurs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative bg-[#2C2416] text-[#F5F1E8] px-10 py-4 font-serif text-base tracking-wide overflow-hidden transition-all duration-500 hover:bg-[#3D3020]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </button>
              
              <button className="group bg-transparent border-2 border-[#2C2416] text-[#2C2416] px-10 py-4 font-serif text-base tracking-wide hover:bg-[#2C2416] hover:text-[#F5F1E8] transition-all duration-500">
                <span className="flex items-center justify-center gap-3">
                  View Essentials
                </span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-[#8B7355]/20">
              <div className="flex flex-col items-start space-y-2">
                <Truck className="w-5 h-5 text-[#8B7355] mb-1" />
                <span className="text-xs text-[#5C4A3A] font-light uppercase tracking-wider">Complimentary<br/>Delivery</span>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <Shield className="w-5 h-5 text-[#8B7355] mb-1" />
                <span className="text-xs text-[#5C4A3A] font-light uppercase tracking-wider">Secure<br/>Checkout</span>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <Award className="w-5 h-5 text-[#8B7355] mb-1" />
                <span className="text-xs text-[#5C4A3A] font-light uppercase tracking-wider">Heirloom<br/>Quality</span>
              </div>
            </div>
          </div>

          {/* Image Section with Vintage Aesthetic */}
          <div className="relative lg:h-[700px] flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-[#8B7355]/30 -rotate-1 z-0"></div>
              <div className="absolute inset-0 border border-[#8B7355]/20 rotate-1 z-0"></div>
              
              {/* Main Product Card */}
              <div className="relative z-20 bg-[#FAF8F3] border border-[#D4C4B0] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform hover:scale-[1.02] transition-transform duration-700">
                <div className="aspect-[3/4] bg-gradient-to-b from-[#E8E2D5] to-[#D4C4B0] flex items-center justify-center mb-8 overflow-hidden relative">
                  {/* Vintage texture overlay */}
                  <Image src="/palestine.png" alt="Vintage Texture" width={700} height={700} />
                </div>
                
                <div className="space-y-4 text-center">
                  <div className="h-px bg-[#8B7355]/20 w-16 mx-auto"></div>
                  <h3 className="text-3xl font-serif text-[#2C2416] tracking-tight"> Oversized </h3>
                  <p className="text-[#5C4A3A] font-light text-sm tracking-wide uppercase">Terry Cotton · 240 GSM</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-[#8B7355]/20">
                    <div>
                      <span className="text-xs text-[#5C4A3A] uppercase tracking-wider block mb-1">From</span>
                      <span className="text-4xl font-serif text-[#2C2416]">₹599</span>
                    </div>
                    <button className="bg-[#2C2416] text-[#F5F1E8] p-4 hover:bg-[#3D3020] transition-colors duration-500">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtle Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-30 bg-[#2C2416] text-[#F5F1E8] px-6 py-3 font-serif text-sm tracking-wider shadow-lg animate-subtle-float">
                NEW ARRIVAL
              </div>

              {/* Vintage Stamp Effect */}
              <div className="absolute -bottom-6 -left-6 z-30 w-24 h-24 border-2 border-[#8B7355] rounded-full flex items-center justify-center bg-[#FAF8F3] shadow-lg animate-subtle-float-delayed">
                <div className="text-center">
                  <div className="text-xs font-serif text-[#8B7355] uppercase tracking-wider">Limited</div>
                  <div className="text-lg font-serif text-[#2C2416] font-bold">50</div>
                  <div className="text-xs font-serif text-[#8B7355]">pieces</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes subtle-float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }
        .animate-subtle-float {
          animation: subtle-float 6s ease-in-out infinite;
        }
        .animate-subtle-float-delayed {
          animation: subtle-float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}