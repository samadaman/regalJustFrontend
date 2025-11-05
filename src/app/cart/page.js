// src/app/cart/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, X, Plus, Minus, ArrowLeft, Trash2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import CheckoutModal from '../../components/CheckoutModal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CouponInput from '../../components/CouponInput';

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    updateCartItemSize,
    clearCart
  } = useCart();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const shippingCost = 0; // Free shipping for all orders

  // Calculate subtotal from cart items
  const subTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Available coupons
  const COUPONS = {
    'CLOSEFRIEND10': { discount: 10, type: 'percentage', minPurchase: 0 },
    'CLOSEFRIEND15': { discount: 15, type: 'percentage', minPurchase: 0, minQuantity: 2 },
    'SAVE5': { discount: 5, type: 'percentage', minPurchase: 0 },
  };

  // Calculate discount based on coupon type and cart subtotal only
  const calculateDiscount = (cartSubtotal, coupon) => {
    if (!coupon) return 0;
    
    // All discounts are percentage-based and apply to subtotal only
    if (coupon.type === 'percentage') {
      return (cartSubtotal * coupon.discount) / 100;
    }
    return 0;
  };
  
  // Apply coupon to the entire cart
  const applyCoupon = (code) => {
    const coupon = COUPONS[code.toUpperCase()];
    
    if (!coupon) {
      toast.error('Invalid coupon code');
      return false;
    }
    
    // Check minimum purchase requirement based on cart subtotal
    if (subTotal < coupon.minPurchase) {
      toast.error(`Minimum purchase of ₹${coupon.minPurchase} required`);
      return false;
    }
    
    // Check minimum quantity requirement for specific coupons
    if (coupon.minQuantity && itemCount < coupon.minQuantity) {
      toast.error(`Minimum ${coupon.minQuantity} items required`);
      return false;
    }
    
    // Show success message
    toast.success('Coupon applied successfully!');
    
    // Calculate discount based on entire cart subtotal
    const discount = calculateDiscount(subTotal, coupon);
    
    // Apply the coupon
    setAppliedCoupon({ 
      code: code.toUpperCase(), 
      ...coupon,
      discountAmount: discount // Store the actual discount amount
    });
    
    setDiscountAmount(discount);
    
    // All discounts are now percentage-based
    
    return true;
  };
  
  // Remove coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscountAmount(0);
    toast.success('Coupon removed');
  };

  // Calculate final cart total
  const cartTotal = Math.max(0, subTotal + shippingCost - discountAmount);

  const handleCheckout = async (formData) => {
    // Format order details
    const orderDetails = cart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      color: item.color,
      size: item.size,
      total: (item.price * item.quantity).toFixed(2)
    }));
    
    const orderSummary = orderDetails.map(item => 
      `${item.quantity}x ${item.name} (${item.size}) - ₹${item.total}`
    ).join('\n');

  const message = `*New Order!* 🛍️\n\n` +
    `*Customer Details:*\n` +
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone}\n` +
    `Address: ${formData.address}\n` +
    `City: ${formData.city}\n` +
    `State: ${formData.state}\n` +
    `Pincode: ${formData.pincode}\n` +
    `Payment Method: ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online'}\n\n` +
    `*Order Summary:*\n${orderSummary}\n\n` +
    `*Total Amount: ₹${cartTotal.toFixed(2)}*`;

  // Encode the message for WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '+918298877408'; // Your WhatsApp number
  
  try {
    // Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close modal
    clearCart();
    setIsCheckoutOpen(false);
    router.push('/order-confirmation');
  } catch (error) {
    console.error('Error redirecting to WhatsApp:', error);
    // Fallback: Show error message to user
    alert('Could not open WhatsApp. Please try again or contact support.');
  }
};

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 mb-4">
            <ShoppingCart className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-medium text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-500">Looks like you have not added anything to your cart yet.</p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#8B7355] hover:bg-[#7A6348] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Toaster 
      position="top-center"
      toastOptions={{
        style: {
          background: '#1f2937',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '8px',
          fontSize: '14px',
          maxWidth: '500px',
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fff',
          },
        },
      }}
    />
    <Header />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C2416] mb-2">Your Shopping Cart</h1>
            <p className="text-gray-600">{itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart</p>
          </div>
          <button
            onClick={clearCart}
            className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-white border border-red-100 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            <span>Clear Cart</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
          
            {cart.map((item, index) => (
              <div 
                key={`${item.id}-${item.size}-${item.color}`} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-48 h-48 bg-gray-50">
                    <Image
                      src={item.images?.[0] || '/placeholder-product.jpg'}
                      alt={item.name || 'Product image'}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 192px"
                      onError={(e) => {
                        e.target.src = '/placeholder-product.jpg';
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 hover:text-[#8B7355] transition-colors">
                            <Link href={`/product/${item.id}`}>
                              {item.name}
                            </Link>
                          </h3>
                          
                          <div className="mt-2 space-y-1">
                            {item.color && (
                              <div className="flex items-center">
                                <span className="inline-block w-4 h-4 rounded-full border border-gray-200 mr-2" 
                                      style={{ backgroundColor: item.color }} />
                                <span className="text-sm text-gray-600">{item.color}</span>
                              </div>
                            )}
                            {item.size && (
                              <div className="mt-2">
                                <p className="text-sm text-gray-600 mb-1">Size:</p>
                                <div className="flex flex-wrap gap-2">
                                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <button
                                      key={size}
                                      onClick={() => updateCartItemSize(item, size)}
                                      className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                                        item.size === size
                                          ? 'bg-[#8B7355] text-white'
                                          : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                      }`}
                                    >
                                      {size}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="p-1 -mt-2 -mr-2 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="mt-6 flex flex-wrap items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.size, item.color)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-40"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center text-gray-800 font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-xl font-semibold text-gray-900">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-gray-500">
                              ₹{item.price.toFixed(2)} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
                  </div>

                  {/* Order Summary Details */}
                  <div className="space-y-3">
                    {/* Shipping - Always Free */}
                    <div className="flex justify-between">
                      <div>
                        <span className="text-gray-600">Shipping</span>
                        <p className="text-xs text-gray-500 mt-1">
                          Free shipping on all orders
                        </p>
                      </div>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                  </div>
                
               

                {/* Order Summary Details */}
                <div className="space-y-3 pt-2">
                  {/* Subtotal */}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-500 font-semibold">₹{subTotal.toFixed(2)}</span>
                  </div>
                  

                  {/* Discount */}
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <div className="flex items-center">
                        <span>Discount ({appliedCoupon.code})</span>
                        {appliedCoupon.type === 'percentage' && (
                          <span className="ml-2 text-xs bg-green-100 px-2 py-0.5 rounded">
                            {appliedCoupon.discount}% OFF
                          </span>
                        )}
                        {appliedCoupon.type === 'shipping' && (
                          <span className="ml-2 text-xs bg-green-100 px-2 py-0.5 rounded">
                            FREE SHIPPING
                          </span>
                        )}
                      </div>
                      <span className="font-medium">
                        -₹{discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span className="text-xl font-bold text-[#2C2416]">₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Including ₹{(cartTotal * 0.18).toFixed(2)} in taxes</p>
                </div>

                 {/* Coupon Input - Moved to after shipping and before total */}
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <CouponInput 
                    onApplyCoupon={applyCoupon} 
                    isCouponApplied={!!appliedCoupon}
                    appliedCoupon={appliedCoupon}
                    onRemoveCoupon={removeCoupon}
                  />
                </div>
                
                <div className="mt-6 space-y-4">
                  <button
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full flex justify-center items-center px-6 py-3.5 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#8B7355] to-[#6B5A42] hover:opacity-90 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B7355]"
                  >
                    <span>Proceed to Checkout</span>
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      or{' '}
                      <Link 
                        href="/" 
                        className="font-medium text-[#8B7355] hover:text-[#6B5A42] transition-colors inline-flex items-center"
                      >
                        Continue Shopping
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">Secure Checkout</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">Guaranteed Quality</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-3">Need help?</h3>
              <p className="text-sm text-gray-600 mb-4">Our customer service is available 24/7 to assist you with any questions.</p>
              <div className="flex items-center text-[#8B7355] font-medium text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@regaloldmoney.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        onSubmit={handleCheckout}
      />
    </div>
    </div>
    <Footer />
    </>
  
  
  );
}