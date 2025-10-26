// src/components/Header.js
'use client';

import Link from 'next/link';
import { Menu, Search, User } from 'lucide-react';
import CartIcon from './CartIcon';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#2C2416]">
              <Image className="p-2" src="/regalLogo.png" alt="Logo" width={100} height={100} />
            </Link>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/search" className="text-[#2C2416] hover:text-[#8B7355]">
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/account" className="text-[#2C2416] hover:text-[#8B7355]">
              <User className="w-5 h-5" />
            </Link>
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
}