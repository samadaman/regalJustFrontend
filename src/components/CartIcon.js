// src/components/CartIcon.js
'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartIcon() {
  const { itemCount } = useCart();
  
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-6 h-6 text-[#2C2416]" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#8B7355] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {itemCount}
        </span>
      )}
    </Link>
  );
}