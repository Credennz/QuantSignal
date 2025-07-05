import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How accurate are your trading indicators?',
      answer: 'Our indicators have been backtested across multiple market conditions and timeframes, with accuracy rates ranging from 87% to 96%. However, past performance doesn\'t guarantee future results, and all trading involves risk.'
    },
    {
      question: 'Do I need prior trading experience to use these indicators?',
      answer: 'While our indicators are designed to be user-friendly, we recommend having basic knowledge of trading concepts. We provide comprehensive documentation and video tutorials to help you get started.'
    },
    {
      question: 'Which trading platforms are supported?',
      answer: 'We only support TradingView at the moment. For any other requirements please contact us at support@quantsignal.in.'
    },
    {
      question: 'Do you provide ongoing support and updates?',
      answer: 'Yes. we provide ongoing support our paid users and consistently been putting effort on improving on your feedbacks'
    },
    {
      question: 'Can I use these indicators for cryptocurrency trading?',
      answer: 'Absolutely! Our indicators work across all financial markets including forex, stocks, commodities, and cryptocurrencies.'
    },
    {
      question: 'How do I receive the indicators after purchase?',
      answer: 'After the purchase, you will receive the e-bill and our support team will contact you for the installation within hours.'
    }
  ];

  const handleTelegramJoin = () => {
    window.open('https://t.me/+SfIDPbYr-sI5ZjE1', '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our trading indicators
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-lg overflow-hidden shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/40 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button 
            onClick={handleTelegramJoin}
            className="px-6 py-3 font-semibold rounded-lg transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            style={{ backgroundColor: '#22C55E' }}
          >
            Join Telegram
          </button>
        </div>
      </div>
    </section>
  );
}