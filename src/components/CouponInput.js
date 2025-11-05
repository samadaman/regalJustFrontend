'use client';

import { useState } from 'react';

export default function CouponInput({ onApplyCoupon, isCouponApplied, appliedCoupon, onRemoveCoupon }) {
  const [couponCode, setCouponCode] = useState('');
  const [error, setError] = useState('');

  const handleApply = () => {
    if (!couponCode.trim()) {
      setError('Please enter a coupon code');
      return;
    }
    onApplyCoupon(couponCode.trim());
  };

  if (isCouponApplied) {
    return (
      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center text">
            <span className="text-green-700 font-medium">Coupon Applied: {appliedCoupon.code}</span>
            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
              {appliedCoupon.discount}% OFF
            </span>
          </div>
          <button
            onClick={onRemoveCoupon}
            className="text-red-500 hover:text-red-700 text-sm font-medium"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="flex">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 text-[#2C2416] px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent"
        />
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-[#2C2416] text-white font-medium rounded-r-lg hover:bg-[#3D3020] transition-colors"
        >
          Apply
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <p className="mt-2 text-sm text-gray-500">Available coupons: SAVE5 (5% off)</p>
    </div>
  );
}
