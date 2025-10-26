import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex-shrink-0">
            <Link href="/" className="text-xl flex items-center font-bold text-gray-900">
              <Image className='relative right-6 bottom-5' src="/regalLogo.png" alt="Logo" width={100} height={100} />
            </Link>
            
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Social Media Icons */}
          <div>
            <div className="flex space-x-3 mb-6">
              <button className="p-2 bg-gray-300 hover:bg-gray-400 rounded-full transition cursor-pointer">
                <Link href="https://www.instagram.com/regal_oldmoney//">
                <Instagram className="w-5 h-5 text-gray-700" />
                </Link>
              </button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 rounded-full transition cursor-pointer">
                <Link href="https://www.facebook.com/RegalOldMoneyStore">
                <Facebook className="w-5 h-5 text-gray-700" />
                </Link>
              </button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 rounded-full transition cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 rounded-full transition cursor-pointer">
                <Mail className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Payment Methods */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Accepted Payment Methods</p>
              <div className="flex space-x-2">
                <div className="px-3 py-1 bg-white border border-gray-300 rounded text-xs font-semibold text-gray-700">UPI</div>
                <div className="px-3 py-1 bg-white border border-gray-300 rounded text-xs font-semibold text-gray-700">COD</div>
              </div>
            </div>
          </div>

          {/* Newsletter and Links */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {/* Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Regal Old Money Store</h3>
              <ul className="space-y-2">
                <li><a href="/apparel" className="text-gray-600 hover:text-gray-900">Apparel</a></li>
                <li><a href="/accessories" className="text-gray-600 hover:text-gray-900">Accessories</a></li>
                <li><a href="/shoes" className="text-gray-600 hover:text-gray-900">Shoes</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="bg-gray-900 text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Regal Authorized Team. Developed by <a href="https://www.linkedin.com/in/samadaman/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition">Samad Aman </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}