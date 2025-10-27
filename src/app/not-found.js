import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';

export const metadata = {
  title: "Page Not Found - Coming Soon | Regal Old Money",
  description: "The page you're looking for is under construction and will be available soon. Discover our collection of timeless fashion pieces at Regal Old Money.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C2416] via-[#1A1410] to-[#0F0C08] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#8B7355]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D4C4B0]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center font-serif text-2xl font-bold text-[#D4C4B0] hover:text-white transition-colors duration-300">
            <Image 
              src="/regalLogoWhite.jpg" 
              alt="Regal Logo" 
              width={60} 
              height={60} 
              className="mr-3 drop-shadow-lg"
            />
            Regal Old Money
          </Link>
        </div>

        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4C4B0] to-[#8B7355] mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B7355] to-[#D4C4B0] mx-auto rounded-full"></div>
        </div>

        {/* Main Message */}
        <div className="mb-12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <div className="space-y-4">
            <p className="text-xl text-[#B8A082] font-light leading-relaxed max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off into the elegance of time.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-[#8B7355]/30">
              <Sparkles className="w-5 h-5 text-[#D4C4B0]" />
              <span className="text-[#D4C4B0] font-medium">Coming Soon - Stay Tuned</span>
              <Clock className="w-5 h-5 text-[#8B7355]" />
            </div>
            <p className="text-lg text-[#8B7355] font-light max-w-xl mx-auto leading-relaxed">
              We're crafting something extraordinary just for you. This page is under construction
              and will be available soon with the same timeless elegance you expect.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 bg-[#8B7355] hover:bg-[#D4C4B0] text-[#2C2416] px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <Link 
            href="/apparel" 
            className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-[#D4C4B0] border border-[#8B7355]/30 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Explore Collection
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center items-center gap-8 text-[#8B7355]/50">
          <div className="w-2 h-2 bg-[#D4C4B0] rounded-full animate-pulse"></div>
          <div className="w-3 h-3 border border-[#8B7355] rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-[#D4C4B0] rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Footer Message */}
        <div className="mt-16 pt-8 border-t border-[#D4C4B0]/20">
          <p className="text-sm text-[#8B7355] flex items-center justify-center gap-2">
            <span>© 2025 Regal Old Money</span>
            <span className="text-[#D4C4B0]">•</span>
            <span>Timeless Elegance Awaits</span>
          </p>
        </div>
      </div>
    </div>
  );
}