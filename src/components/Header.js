// src/components/Header.js
'use client';

import Link from 'next/link';
import { Menu, Search, User, X } from 'lucide-react';
import CartIcon from './CartIcon';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Apparel', href: '/apparel' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Shoes', href: '/shoes' },
    { name: 'Support', href: '/faq' },
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Exchanges', href: '/exchanges' },
    { name: 'Size Guide', href: '/size-guide' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-[#E8E2D5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center font-serif text-xl md:text-2xl font-bold text-[#2C2416] hover:text-[#8B7355] transition-colors duration-300">
              <Image 
                src="/regalLogo.png" 
                alt="Regal Logo" 
                width={45} 
                height={45} 
                className="mr-2 md:mr-3"
              />
              <span className="hidden sm:block">Regal Old Money</span>
            </Link>
          </div>

          {/* Center - Navigation Links (Desktop & Tablet) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#2C2416] hover:text-[#8B7355] font-medium transition-all duration-300 hover:scale-105 relative group text-sm lg:text-base"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B7355] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right side - Icons and Mobile Menu */}
          <div className="flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-4">
              <Link href="/search" className="text-[#2C2416] hover:text-[#8B7355] transition-colors duration-300 hover:scale-110 p-1 lg:p-2">
                <Search className="w-4 h-4 lg:w-5 lg:h-5" />
              </Link>
              <Link href="/account" className="text-[#2C2416] hover:text-[#8B7355] transition-colors duration-300 hover:scale-110 p-1 lg:p-2">
                <User className="w-4 h-4 lg:w-6 lg:h-6" />
              </Link>
              <CartIcon />
            </div>

            {/* Mobile/Tablet Menu Button - Show on smaller tablets too */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#2C2416] hover:text-[#8B7355] transition-colors duration-300 rounded-md hover:bg-[#F5F1E8]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Enhanced for tablets */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#E8E2D5]/50 bg-white/95 backdrop-blur-sm shadow-lg">
            <nav className="py-6 space-y-3 px-2">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-[#2C2416] hover:text-[#8B7355] hover:bg-[#F5F1E8] transition-all duration-300 font-medium rounded-lg text-base"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-[#E8E2D5]/30 pt-4 mt-4 space-y-3">
                <Link href="/search" className="flex items-center gap-3 text-[#2C2416] hover:text-[#8B7355] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[#F5F1E8]">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </Link>
                <Link href="/account" className="flex items-center gap-3 text-[#2C2416] hover:text-[#8B7355] transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-[#F5F1E8]">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
                <div className="flex items-center gap-3 text-[#2C2416] py-3 px-4 rounded-lg">
                  <CartIcon />
                  <span>Cart</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}