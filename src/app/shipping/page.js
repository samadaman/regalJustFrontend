import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Truck, Clock, Globe, MapPin } from 'lucide-react';

export const metadata = {
  title: "Shipping Information - Fast & Reliable Delivery",
  description: "Learn about our shipping options, delivery times, and coverage areas. Fast and reliable delivery across India with real-time tracking.",
};

export default function Shipping() {
  const shippingOptions = [
    {
      type: 'Standard Shipping',
      time: '3-5 Business Days',
      cost: '₹99',
      description: 'Reliable delivery within India',
      icon: <Truck className="w-8 h-8 text-[#8B7355]" />
    },
    {
      type: 'Express Shipping',
      time: '1-2 Business Days',
      cost: '₹199',
      description: 'Fast delivery for urgent orders',
      icon: <Clock className="w-8 h-8 text-[#8B7355]" />
    },
    {
      type: 'International Shipping',
      time: 'Coming Soon',
      cost: 'TBA',
      description: 'Global delivery launching soon - Stay tuned!',
      icon: <Globe className="w-8 h-8 text-gray-400" />,
      comingSoon: true
    }
  ];

  const shippingZones = [
    { zone: 'North India', areas: ['Delhi', 'Punjab', 'Haryana', 'Uttarakhand', 'Himachal Pradesh'] },
    { zone: 'South India', areas: ['Kerala', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana'] },
    { zone: 'East India', areas: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand', 'Assam'] },
    { zone: 'West India', areas: ['Maharashtra', 'Gujarat', 'Rajasthan', 'Goa', 'Madhya Pradesh'] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Shipping Information
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Fast, reliable delivery to your doorstep. We ensure your orders reach you safely and on time.
              </p>
              <div className="w-24 h-1 bg-[#8B7355] mx-auto mt-8 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {shippingOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-6">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 text-center">
                    {option.type}
                  </h3>
                  <div className="text-center space-y-2">
                    <p className="text-lg font-semibold text-[#8B7355]">{option.time}</p>
                    <p className="text-2xl font-bold text-gray-900">{option.cost}</p>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-12 text-center">
              How Shipping Works
            </h2>
            <div className="space-y-8">
              {[
                { step: '1', title: 'Order Processing', description: 'Your order is processed within 1-2 business days' },
                { step: '2', title: 'Quality Check', description: 'Each item undergoes a final quality inspection' },
                { step: '3', title: 'Packaging', description: 'Carefully packaged to prevent damage during transit' },
                { step: '4', title: 'Shipping', description: 'Shipped via trusted courier partners with tracking' },
                { step: '5', title: 'Delivery', description: 'Delivered to your doorstep with signature confirmation' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6 bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Zones */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-12 text-center">
              Shipping Zones in India
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {shippingZones.map((zone, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#8B7355]" />
                    <h3 className="text-xl font-semibold text-gray-900">{zone.zone}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {zone.areas.map((area, areaIndex) => (
                      <span key={areaIndex} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8 text-center">
              Important Information
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Free Shipping</h3>
                  <p className="text-gray-600 mb-4">Free standard shipping on orders above ₹2,000 within India.</p>
                  <p className="text-gray-600">Orders below ₹2,000 will incur a ₹99 shipping fee.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tracking Updates</h3>
                  <p className="text-gray-600 mb-4">Receive real-time tracking updates via SMS and email.</p>
                  <p className="text-gray-600">Track your package 24/7 through our website.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}