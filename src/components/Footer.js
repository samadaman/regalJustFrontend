import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, CreditCard, Truck, Shield, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C2416] to-[#1A1410] text-white border-t border-[#D4C4B0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Brand */}
        <div className="mb-12 text-center">
          <Link href="/" className="inline-flex items-center font-serif text-3xl font-bold text-[#D4C4B0] hover:text-white transition-colors duration-300">
            <Image 
              src="/regalLogoWhite.jpg" 
              alt="Regal Logo" 
              width={80} 
              height={80} 
              className="mr-3 drop-shadow-lg"
            />
            Regal Old Money
          </Link>
          <p className="text-[#8B7355] mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Discover timeless elegance and sophistication in every piece. Quality craftsmanship meets classic style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#D4C4B0] border-b border-[#8B7355] pb-2">Our Story</h3>
            <ul className="space-y-3 text-sm text-[#B8A082]">
              <li><Link href="/not-found" className="hover:text-[#D4C4B0] transition-colors duration-200">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4C4B0] transition-colors duration-200">Contact</Link></li>
              <li><Link href="/not-found" className="hover:text-[#D4C4B0] transition-colors duration-200">Careers</Link></li>
              <li><Link href="/not-found" className="hover:text-[#D4C4B0] transition-colors duration-200">Press</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#D4C4B0] border-b border-[#8B7355] pb-2">Categories</h3>
            <ul className="space-y-3 text-sm text-[#B8A082]">
              <li><Link href="/not-found" className="hover:text-[#D4C4B0] transition-colors duration-200">Apparel</Link></li>
              <li><Link href="/not-found" className="hover:text-[#D4C4B0] transition-colors duration-200">Accessories</Link></li>
              <li><Link href="/not-found" className="hover:text-[#D4C4B0] transition-colors duration-200">Shoes</Link></li>
              <li><Link href="/not-found" className="hover:text-[#D4C4B0] transition-colors duration-200">Collections</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[#D4C4B0] border-b border-[#8B7355] pb-2">Support</h3>
            <ul className="space-y-3 text-sm text-[#B8A082]">
              <li><Link href="/faq" className="hover:text-[#D4C4B0] transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-[#D4C4B0] transition-colors duration-200">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-[#D4C4B0] transition-colors duration-200">Exchange Policy</Link></li>
              <li><Link href="/size-guide" className="hover:text-[#D4C4B0] transition-colors duration-200">Size Guide</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#D4C4B0] border-b border-[#8B7355] pb-2 mb-4">Stay Connected</h3>
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-[#B8A082]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8B7355]" />
                  <span>+91 9128198365</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#8B7355]" />
                  <span>info@regaloldmoney.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8B7355]" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-[#B8A082] mb-3">Subscribe for exclusive offers & updates</p>
              <div className="flex shadow-lg rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 text-white placeholder-[#8B7355] border-0 focus:outline-none focus:ring-2 focus:ring-[#D4C4B0]/50 backdrop-blur-sm"
                />
                <button className="bg-[#8B7355] hover:bg-[#D4C4B0] text-[#2C2416] px-2 py-3 font-medium transition-colors duration-300">
                  Subs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#D4C4B0]/20 gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#8B7355] font-medium">Follow Us:</span>
            <div className="flex space-x-3">
              <Link href="https://www.instagram.com/regal_oldmoney/" className="group">
                <div className="p-3 bg-white/10 hover:bg-[#8B7355] rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <Instagram className="w-5 h-5 text-[#D4C4B0] group-hover:text-[#2C2416] transition-colors" />
                </div>
              </Link>
              <Link href="https://www.facebook.com/RegalOldMoneyStore" className="group">
                <div className="p-3 bg-white/10 hover:bg-[#8B7355] rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <Facebook className="w-5 h-5 text-[#D4C4B0] group-hover:text-[#2C2416] transition-colors" />
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="p-3 bg-white/10 hover:bg-[#8B7355] rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <Twitter className="w-5 h-5 text-[#D4C4B0] group-hover:text-[#2C2416] transition-colors" />
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="p-3 bg-white/10 hover:bg-[#8B7355] rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-[#D4C4B0] group-hover:text-[#2C2416] transition-colors" />
                </div>
              </Link>
            </div>
          </div>

          {/* Payment Methods & Features */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 text-xs text-[#8B7355]">
              {/* Payment Methods */}
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span className="font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="font-medium">Authentic</span>
              </div>
            </div>
            
            {/* Payment Options */}
            <div className="flex items-center gap-3 text-xs text-[#B8A082]">
              <span className="px-2 py-1 bg-white/10 rounded border border-[#8B7355]/30">UPI</span>
              <span className="px-2 py-1 bg-white/10 rounded border border-[#8B7355]/30">COD</span>
              <span className="px-2 py-1 bg-white/10 rounded border border-[#8B7355]/30">Cards</span>
              <span className="px-2 py-1 bg-white/10 rounded border border-[#8B7355]/30">Net Banking</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#D4C4B0]/20 pt-8 mt-8 text-center">
          <p className="text-sm text-[#8B7355] flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-red-400" />
            2025 Regal Authorized Team. Crafted with elegance by 
            <a 
              href="https://www.linkedin.com/in/samadaman/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D4C4B0] hover:text-white transition-colors duration-200 font-medium"
            >
              Samad Aman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}