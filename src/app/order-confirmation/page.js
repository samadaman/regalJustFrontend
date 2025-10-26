// src/app/order-confirmation/page.js
'use client';

import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="mt-3 text-2xl font-medium text-gray-900">Order Placed Successfully!</h2>
        <p className="mt-2 text-gray-600">
          Thank you for your order. We have received it and will process it shortly. 
          Our team will contact you soon with the next steps.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#8B7355] hover:bg-[#7A6348]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}