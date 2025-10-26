// src/app/cart/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, X, Plus, Minus, ArrowLeft, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import CheckoutModal from '../../components/CheckoutModal';

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    itemCount,
    clearCart
  } = useCart();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // In src/app/cart/page.js
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

  // Format message for WhatsApp
  const orderSummary = orderDetails.map(item => 
    `• ${item.name} (${item.color} • ${item.size}) x${item.quantity} - ₹${item.total}`
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#2C2416] mb-8">Your Shopping Cart ({itemCount})</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Cart Header */}
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
              <button
                onClick={clearCart}
                className="flex items-center text-sm text-red-600 hover:text-red-800 transition-colors"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Clear Cart
              </button>
            </div>
          </div>
          
          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-full sm:w-40 h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link 
                            href={`/product/${item.id}`} 
                            className="hover:text-[#8B7355] transition-colors"
                          >
                            {item.name}
                          </Link>
                        </h3>
                        {item.color && (
                          <p className="mt-1 text-sm text-gray-500">
                            <span className="inline-block w-4 h-4 rounded-full border border-gray-300 mr-2" 
                                  style={{ backgroundColor: item.color, verticalAlign: 'middle' }} />
                            {item.color}
                          </p>
                        )}
                        {item.size && (
                          <p className="mt-1 text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                        )}
                      </div>
                      <div className="flex items-start">
                        <button
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 mr-4">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1), item.size, item.color)}
                            className="p-2 text-gray-600 hover:bg-gray-50 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center text-gray-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                            className="p-2 text-gray-600 hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-medium text-gray-900">
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
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="space-y-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>₹{cartTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <p>Shipping</p>
                <p>Calculated at checkout</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <p>Total</p>
                  <p>₹{cartTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#8B7355] hover:bg-[#7A6348] transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
            
            <div className="mt-4 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <Link href="/" className="font-medium text-[#8B7355] hover:text-[#7A6348] transition-colors">
                  Continue Shopping
                </Link>
              </p>
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
  );
}