// src/context/CartContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Load cart from localStorage on client-side
  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addToCart = (product, quantity = 1, size = '', color = '') => {
    setCart(prevCart => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex(
        item => 
          item.id === product.id && 
          item.size === size && 
          item.color === color
      );

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        // Add new item to cart
        return [
          ...prevCart,
          {
            ...product,
            quantity,
            size,
            color,
            addedAt: new Date().toISOString()
          }
        ];
      }
    });
  };

  const removeFromCart = (productId, size = '', color = '') => {
    setCart(prevCart => 
      prevCart.filter(
        item => 
          !(item.id === productId && 
            item.size === size && 
            item.color === color)
      )
    );
  };

  const updateQuantity = (productId, newQuantity, size = '', color = '') => {
    if (newQuantity < 1) {
      removeFromCart(productId, size, color);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && 
        item.size === size && 
        item.color === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculate cart total
  const cartTotal = cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  // Count total items in cart
  const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        itemCount,
        isClient
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};