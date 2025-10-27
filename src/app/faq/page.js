import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: "FAQ - Customer Support & Help",
  description: "Find answers to frequently asked questions about our products, shipping, exchanges, and customer service. Get help with your orders and find the information you need.",
};

export default function FAQ() {
  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 3-5 business days within India. Express shipping is available for 1-2 business days delivery. International shipping varies by location.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship worldwide. International shipping typically takes 7-14 business days depending on the destination. Customs duties may apply.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes, once your order is shipped, you will receive a tracking number via email. You can track your package in real-time through our website.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for unworn items in original packaging. Items must be returned within 30 days of delivery for a full refund or exchange.'
        },
        {
          question: 'How do I initiate a return?',
          answer: 'Contact our customer service team or use the returns portal in your account. We will provide a prepaid return label for eligible items.'
        }
      ]
    },
    {
      category: 'Products & Quality',
      questions: [
        {
          question: 'Are your products authentic?',
          answer: 'Absolutely. We source all our products directly from authorized manufacturers and provide certificates of authenticity where applicable.'
        },
        {
          question: 'How do I care for my items?',
          answer: 'Each product comes with specific care instructions. Generally, we recommend dry cleaning for formal wear and gentle washing for casual items.'
        }
      ]
    },
    {
      category: 'Payments & Security',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, UPI, net banking, and Cash on Delivery for orders within India.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard SSL encryption and secure payment gateways. Your payment information is never stored on our servers.'
        }
      ]
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about our products, shipping, returns, and more.
                If you can't find what you're looking for, our customer service team is here to help.
              </p>
              <div className="w-24 h-1 bg-[#8B7355] mx-auto mt-8 rounded-full"></div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our customer service team is ready to assist you with any inquiries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@regaloldmoney.com"
                    className="inline-flex items-center justify-center gap-2 bg-[#8B7355] hover:bg-[#6B5A45] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Email Us
                  </a>
                  <a
                    href="tel:+919128198365"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                    {category.category}
                  </h2>
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-l-4 border-[#8B7355] pl-6 bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Need More Help?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse our comprehensive guides or get in touch with our expert support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/shipping"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#8B7355] border-2 border-[#8B7355] px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Shipping Guide
              </a>
              <a
                href="/returns"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#8B7355] border-2 border-[#8B7355] px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Return Policy
              </a>
              <a
                href="/size-guide"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#8B7355] border-2 border-[#8B7355] px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Size Guide
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}