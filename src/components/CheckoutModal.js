// src/components/CheckoutModal.js
'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Loader2, Check, CreditCard, Package, MapPin, Phone, Mail, User as UserIcon, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function CheckoutModal({ isOpen, onClose, cart = [], cartTotal = 0, onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
  });

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Format order details for WhatsApp
      const orderDetails = cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color || '',
        size: item.size || '',
        total: (item.price * item.quantity).toFixed(2)
      }));

      // Format message for WhatsApp
      const orderSummary = orderDetails.map(item => 
        `• ${item.name}${item.color ? ` (${item.color}${item.size ? ` • ${item.size}` : ''})` : ''} x${item.quantity} - ₹${item.total}`
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
        `Payment Method: ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online'}\n\n` +
        `*Order Summary:*\n${orderSummary}\n\n` +
        `*Total Amount: ₹${cartTotal.toFixed(2)}*`;

      // Encode the message for WhatsApp
      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = '+918298877408'; // Your WhatsApp number
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // Show success state
      setIsSuccess(true);
      
      // Wait for animation to show
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Close modal after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      onClose();
      setIsSuccess(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
      });
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Success Animation Overlay */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-20"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center p-8"
                >
                  <div className="relative">
                    <motion.div
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500" />
                    </motion.div>
                    <motion.h2
                      className="text-2xl font-bold text-gray-900 mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Order Confirmed!
                    </motion.h2>
                    <motion.p
                      className="text-gray-600"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Redirecting to WhatsApp...
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Header */}
          <div className="bg-[#2C2416] text-white p-6 relative z-10">
            <div className="flex justify-between items-center">
              <motion.h2 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold"
              >
                {isSuccess ? 'Order Successful!' : 'Complete Your Order'}
              </motion.h2>
              <button 
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors"
                disabled={isSubmitting}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {!isSuccess && (
              <motion.div 
                className="flex items-center mt-2 space-x-2 text-sm text-white/80"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Check className="w-4 h-4 text-green-400" />
                <span>Secure Checkout</span>
              </motion.div>
            )}
          </div>

          <div className="flex-1 overflow-auto">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Shipping Information */}
                <div className="lg:col-span-2 space-y-6">
                  <motion.div 
                    className="bg-[#F9F8F6] p-5 rounded-xl border border-gray-100"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="flex items-center text-lg font-medium text-[#2C2416] mb-4">
                      <MapPin className="w-5 h-5 mr-2 text-[#8B7355]" />
                      Shipping Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                        <div className="relative">
                          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Pincode *</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">State *</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                          required
                        />
                      </div>
                      <div className="md:col-span-2 space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Full Address *</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows="3"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-[#8B7355] transition-all"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </motion.div>

                  {/* Payment Method */}
                  <motion.div 
                    className="bg-[#F9F8F6] p-5 rounded-xl border border-gray-100"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="flex items-center text-lg font-medium text-[#2C2416] mb-4">
                      <CreditCard className="w-5 h-5 mr-2 text-[#8B7355]" />
                      Payment Method
                    </h3>
                    <div className="space-y-3">
                      <motion.label 
                        className={`flex items-center p-4 border rounded-lg transition-all cursor-pointer ${
                          paymentMethod === 'cod' 
                            ? 'border-[#8B7355] bg-[#8B7355]/5' 
                            : 'border-gray-200 hover:border-[#8B7355]'
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={() => handlePaymentMethodChange('cod')}
                          className="h-4 w-4 text-[#8B7355] focus:ring-[#8B7355] border-gray-300"
                        />
                        <div className="ml-3">
                          <span className="block text-sm font-medium text-gray-900">Cash on Delivery (COD)</span>
                          <span className="block text-sm text-gray-500">Pay when you receive your order</span>
                        </div>
                      </motion.label>

                       <motion.label 
                        className={`flex items-center p-4 border rounded-lg transition-all cursor-pointer ${
                          paymentMethod === 'Online' 
                            ? 'border-[#8B7355] bg-[#8B7355]/5' 
                            : 'border-gray-200 hover:border-[#8B7355]'
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="Online"
                          checked={paymentMethod === 'Online'}
                          onChange={() => handlePaymentMethodChange('Online')}
                          className="h-4 w-4 text-[#8B7355] focus:ring-[#8B7355] border-gray-300"
                        />
                        <div className="ml-3">
                          <span className="block text-sm font-medium text-gray-900">Online Payment</span>
                          <span className="block text-sm text-gray-500">This form will redirect you to the Whatsapp in Admin Chat </span>
                        </div>
                      </motion.label>
                      
                     
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Order Summary */}
                <motion.div 
                  className="lg:col-span-1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-[#F9F8F6] p-5 rounded-xl border border-gray-100 sticky top-6">
                    <h3 className="flex items-center text-lg font-medium text-[#2C2416] mb-4">
                      <Package className="w-5 h-5 mr-2 text-[#8B7355]" />
                      Order Summary
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-3 max-h-60 overflow-y-auto pr-2 -mr-2">
                        {cart.map((item, index) => (
                          <div key={`${item.id}-${index}`} className="flex items-start">
                            <div className="flex-shrink-0 h-16 w-16 bg-white rounded-lg border border-gray-200 overflow-hidden">
                              {item.images && item.images[0] && (
                                <Image
                                  src={item.images[0]}
                                  alt={item.name}
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover"
                                />
                              )}
                            </div>
                            <div className="ml-4 flex-1">
                              <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</h4>
                              <p className="text-xs text-gray-500">
                                {item.color && `${item.color} • `}
                                {item.size && `${item.size} • `}
                                Qty: {item.quantity}
                              </p>
                              <p className="text-sm font-medium text-gray-900 mt-1">
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4 space-y-3">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Subtotal</span>
                          <span>₹{cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Shipping</span>
                          <span className="text-green-600">Free</span>
                        </div>
                        <div className="border-t border-gray-200 pt-3">
                          <div className="flex justify-between font-medium text-gray-900">
                            <span>Total</span>
                            <span className="text-lg">₹{cartTotal.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-6 bg-[#8B7355] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#7A6348] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          'Place Order'
                        )}
                      </motion.button>

                      <p className="text-xs text-center text-gray-500 mt-3">
                        By placing your order, you agree to our{' '}
                        <a href="/terms" className="text-[#8B7355] hover:underline">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-[#8B7355] hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}