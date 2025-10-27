import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Ruler, Shirt, Users } from 'lucide-react';

export const metadata = {
  title: "Size Guide - Find Your Perfect Fit",
  description: "Comprehensive size charts and measurement guides for all our clothing categories. Find your perfect fit with detailed sizing information and international conversions.",
};

export default function SizeGuide() {
  const sizeCharts = [
    {
      category: 'Men\'s Shirts',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      measurements: [
        { label: 'Chest (inches)', values: ['34-36', '36-38', '38-40', '40-42', '42-44', '44-46'] },
        { label: 'Shoulder (inches)', values: ['16', '17', '18', '19', '20', '21'] },
        { label: 'Sleeve Length (inches)', values: ['24', '25', '25.5', '26', '26.5', '27'] }
      ]
    },
    {
      category: 'Men\'s Trousers',
      sizes: ['28', '30', '32', '34', '36', '38', '40'],
      measurements: [
        { label: 'Waist (inches)', values: ['28', '30', '32', '34', '36', '38', '40'] },
        { label: 'Hip (inches)', values: ['34', '36', '38', '40', '42', '44', '46'] },
        { label: 'Length (inches)', values: ['40', '40.5', '41', '41.5', '42', '42.5', '43'] }
      ]
    },
    {
      category: 'Women\'s Dresses',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      measurements: [
        { label: 'Bust (inches)', values: ['32-33', '34-35', '36-37', '38-39', '40-41', '42-43'] },
        { label: 'Waist (inches)', values: ['24-25', '26-27', '28-29', '30-31', '32-33', '34-35'] },
        { label: 'Hip (inches)', values: ['34-35', '36-37', '38-39', '40-41', '42-43', '44-45'] }
      ]
    }
  ];

  const measurementTips = [
    {
      title: 'Chest/Bust',
      description: 'Measure around the fullest part of your chest/bust, keeping the tape parallel to the ground.',
      icon: <Shirt className="w-6 h-6 text-[#8B7355]" />
    },
    {
      title: 'Waist',
      description: 'Measure around your natural waistline, typically the narrowest part of your torso.',
      icon: <Ruler className="w-6 h-6 text-[#8B7355]" />
    },
    {
      title: 'Hip',
      description: 'Measure around the fullest part of your hips, keeping the tape parallel to the ground.',
      icon: <Users className="w-6 h-6 text-[#8B7355]" />
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
                Size Guide
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Find your perfect fit with our comprehensive size charts and measurement guide.
                All measurements are in inches unless otherwise specified.
              </p>
              <div className="w-24 h-1 bg-[#8B7355] mx-auto mt-8 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Measurement Tips */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-12 text-center">
              How to Measure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {measurementTips.map((tip, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-4">
                    {tip.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Size Charts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-12 text-center">
              Size Charts
            </h2>
            <div className="space-y-12">
              {sizeCharts.map((chart, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-8 text-center">
                    {chart.category}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Size</th>
                          {chart.sizes.map((size, sizeIndex) => (
                            <th key={sizeIndex} className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                              {size}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {chart.measurements.map((measurement, measurementIndex) => (
                          <tr key={measurementIndex} className="hover:bg-gray-50">
                            <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                              {measurement.label}
                            </td>
                            {measurement.values.map((value, valueIndex) => (
                              <td key={valueIndex} className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* International Sizes */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8 text-center">
              International Size Conversion
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-white">
                      <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">India</th>
                      <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">US</th>
                      <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">UK</th>
                      <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">EU</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { india: 'XS', us: '34', uk: '34', eu: '44' },
                      { india: 'S', us: '36', uk: '36', eu: '46' },
                      { india: 'M', us: '38', uk: '38', eu: '48' },
                      { india: 'L', us: '40', uk: '40', eu: '50' },
                      { india: 'XL', us: '42', uk: '42', eu: '52' },
                      { india: 'XXL', us: '44', uk: '44', eu: '54' }
                    ].map((conversion, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-900">{conversion.india}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">{conversion.us}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">{conversion.uk}</td>
                        <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">{conversion.eu}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Fit Tips */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8 text-center">
              Fit Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Slim Fit</h3>
                <p className="text-gray-600 mb-4">Fitted silhouette, perfect for formal occasions.</p>
                <p className="text-sm text-gray-500">Go with your regular size or size up for comfort.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Regular Fit</h3>
                <p className="text-gray-600 mb-4">Comfortable, classic fit for everyday wear.</p>
                <p className="text-sm text-gray-500">Your regular size provides the perfect balance.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Relaxed Fit</h3>
                <p className="text-gray-600 mb-4">Loose, comfortable fit for casual occasions.</p>
                <p className="text-sm text-gray-500">Size down if you prefer a more fitted look.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Fit</h3>
                <p className="text-gray-600 mb-4">Tailored to your exact measurements.</p>
                <p className="text-sm text-gray-500">Contact us for custom sizing options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Still Unsure About Your Size?
            </h2>
            <p className="text-gray-600 mb-8">
              Our sizing experts are here to help you find the perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sizing@regaloldmoney.com"
                className="inline-flex items-center justify-center gap-2 bg-[#8B7355] hover:bg-[#6B5A45] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Get Size Help
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}