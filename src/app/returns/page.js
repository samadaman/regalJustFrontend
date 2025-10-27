import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { RefreshCw, Package, Clock, CheckCircle } from 'lucide-react';

export const metadata = {
  title: "Exchange Policy - Size & Color Exchanges",
  description: "Learn about our hassle-free exchange policy for clothing and accessories. Exchange sizes and colors within 15 days of delivery.",
};

export default function Exchanges() {
  const exchangeSteps = [
    {
      step: '1',
      title: 'Initiate Exchange',
      description: 'Contact us within 15 days of delivery',
      icon: <RefreshCw className="w-8 h-8 text-[#8B7355]" />
    },
    {
      step: '2',
      title: 'Package Items',
      description: 'Pack items in original packaging with tags',
      icon: <Package className="w-8 h-8 text-[#8B7355]" />
    },
    {
      step: '3',
      title: 'Ship Back',
      description: 'Use provided prepaid exchange label',
      icon: <Clock className="w-8 h-8 text-[#8B7355]" />
    },
    {
      step: '4',
      title: 'Exchange Processed',
      description: 'New item shipped within 2-3 business days',
      icon: <CheckCircle className="w-8 h-8 text-[#8B7355]" />
    }
  ];

  const exchangeConditions = [
    {
      title: 'Eligible for Exchange',
      items: ['Unworn items with original tags', 'Items in original packaging', 'Items within 15 days of delivery', 'Available sizes/colors in stock'],
      icon: '✅'
    },
    {
      title: 'Not Eligible for Exchange',
      items: ['Worn or used items', 'Underwear and intimate apparel', 'Items without original tags', 'Items damaged due to misuse'],
      icon: '❌'
    }
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
                Exchange Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Not the perfect fit? We offer hassle-free size and color exchanges to ensure you find your ideal piece.
              </p>
              <div className="w-24 h-1 bg-[#8B7355] mx-auto mt-8 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Exchange Process */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-12 text-center">
              How to Exchange
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {exchangeSteps.map((step, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#8B7355] mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exchange Conditions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-12 text-center">
              Exchange Conditions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {exchangeConditions.map((condition, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="text-4xl mb-6">{condition.icon}</div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                    {condition.title}
                  </h3>
                  <ul className="space-y-3">
                    {condition.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                        <span className="text-[#8B7355] font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exchange Information */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8 text-center">
              Exchange Options
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Size Exchanges</h3>
                  <p className="text-gray-600 mb-4">Exchange for different sizes is available for all standard items.</p>
                  <p className="text-gray-600">Size exchanges are processed free of charge within India.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Color Exchanges</h3>
                  <p className="text-gray-600 mb-4">Exchange for different colors is available while stocks last.</p>
                  <p className="text-gray-600">Color exchanges follow the same simple process as size exchanges.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exchange Value Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8 text-center">
              Exchange Process
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
                    <p className="text-gray-600">Exchanges are processed within 2-3 business days after we receive your item.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Exchange Method</h3>
                    <p className="text-gray-600">The new item is shipped using the same method as your original order.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Delivery Timeline</h3>
                    <p className="text-gray-600">Your exchanged item will be delivered within 3-5 business days after processing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Need Help with Exchanges?
            </h2>
            <p className="text-gray-600 mb-8">
              Our customer service team is here to help you with the exchange process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:exchanges@regaloldmoney.com"
                className="inline-flex items-center justify-center gap-2 bg-[#8B7355] hover:bg-[#6B5A45] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Email Exchange Team
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                View FAQ
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}