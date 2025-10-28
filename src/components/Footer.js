import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, CreditCard, Truck, Shield, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="bg-gradient-to-br from-[#2C2416] to-[#1A1410] text-white border-t border-[#D4C4B0]/20"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Logo and Brand */}
        <div className="mb-12 text-center px-4">
          <Link 
            href="/" 
            className="inline-flex flex-col sm:flex-row items-center justify-center font-serif text-2xl sm:text-3xl font-bold text-[#D4C4B0] hover:text-white transition-colors duration-300"
            aria-label="Regal Old Money Home"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-0 sm:mr-3">
              <Image 
                src="/regalLogoWhite.jpg" 
                alt="" 
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain drop-shadow-lg"
                priority
                aria-hidden="true"
              />
            </div>
            <span>Regal Old Money</span>
          </Link>
          <p className="text-[#8B7355] mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Discover timeless elegance and sophistication in every piece. Quality craftsmanship meets classic style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-4 sm:px-0">
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
              <div className="flex flex-col sm:flex-row shadow-lg rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 text-white placeholder-[#8B7355] border-0 focus:outline-none focus:ring-2 focus:ring-[#D4C4B0]/50 backdrop-blur-sm w-full"
                  aria-label="Email address for newsletter subscription"
                />
                <button 
                  className="bg-[#8B7355] hover:bg-[#D4C4B0] text-[#2C2416] px-4 py-3 font-medium transition-colors duration-300 whitespace-nowrap"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#D4C4B0]/20 gap-8 px-4 sm:px-0">
          {/* Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <span className="text-sm text-[#8B7355] font-medium w-full sm:w-auto text-center sm:text-left">Follow Us:</span>
            <div className="flex flex-wrap justify-center gap-3">
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
            <div>
              <div className="flex items-center gap-6 text-xs text-[#8B7355]">
             {/* Payment Methods */}
              <div className="w-full">
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 max-w-2xl mx-auto px-3 sm:px-4 py-2 sm:py-3 bg-white/5 rounded-full border border-[#8B7355]/20">
                  <div className="flex items-center gap-2 group">
                    <div className="p-2 rounded-full bg-[#8B7355]/10 group-hover:bg-[#8B7355]/20 transition-colors">
                      <CreditCard className="w-4 h-4 text-[#D4C4B0] flex-shrink-0" />
                    </div>
                      <span className="text-[10px] sm:text-xs font-medium text-[#D4C4B0] group-hover:text-white transition-colors whitespace-nowrap">
                      Secure Payment
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <div className="p-2 rounded-full bg-[#8B7355]/10 group-hover:bg-[#8B7355]/20 transition-colors">
                      <Truck className="w-4 h-4 text-[#D4C4B0] flex-shrink-0" />
                    </div>
                      <span className="text-[10px] sm:text-xs font-medium text-[#D4C4B0] group-hover:text-white transition-colors whitespace-nowrap">
                      Free Shipping
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <div className="p-2 rounded-full bg-[#8B7355]/10 group-hover:bg-[#8B7355]/20 transition-colors">
                      <Shield className="w-4 h-4 text-[#D4C4B0] flex-shrink-0" />
                    </div>
                      <span className="text-[10px] sm:text-xs font-medium text-[#D4C4B0] group-hover:text-white transition-colors whitespace-nowrap">
                      Authentic
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>

        
          <div className="flex flex-col items-center gap-4">            
           {/* Payment Options */}
<div className="flex flex-col items-center gap-2 text-center">
  <div className="text-xs text-[#8B7355] font-light">
    We accept UPI payments for a seamless checkout experience
  </div>
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-[#8B7355]/30">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 12H17" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17V7" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="font-medium text-sm text-[#D4C4B0]">UPI</span>
  </div>
  <p className="text-xs text-[#8B7355]/80 mt-1">Fast, secure, and contactless payments</p>
</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#D4C4B0]/20 pt-8 mt-8 text-center px-4">
          <p className="text-xs  text-[#8B7355] flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            <span className="flex items-center">
              <Heart className="w-4 h-4 text-red-400 mx-1" aria-hidden="true" />
              {currentYear} Regal Authorized Team. Crafted with elegance by
            </span>
            <a 
              href="https://www.linkedin.com/in/samadaman/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D4C4B0] hover:text-white transition-colors duration-200 font-medium flex items-center"
              aria-label="Visit Samad Aman's LinkedIn profile (opens in a new tab)"
            >
              Samad Aman
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}