import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is a market making bot and how does it work?',
      answer: 'A market making bot is an automated trading system that continuously places buy and sell orders on both sides of the order book. It profits from the bid-ask spread while providing liquidity to the market. The bot adjusts its orders based on market conditions, volatility, and configured parameters.',
    },
    {
      question: 'How much capital do I need to start market making?',
      answer: 'The capital requirements vary depending on the markets you want to trade and your strategy. Generally, you should start with capital you can afford to have locked in positions. Most traders begin with smaller amounts to test their strategies before scaling up.',
    },
    {
      question: 'What are the main risks of running a market making bot?',
      answer: 'The primary risks include inventory risk (holding positions that decrease in value), adverse selection (being picked off by informed traders), and technical risks like connectivity issues or bugs. Proper risk management, position limits, and stop-losses are essential.',
    },
    {
      question: 'Can I customize the bot\'s trading strategy?',
      answer: 'Yes, the tread.fi MM bot offers extensive customization options. You can adjust spread sizes, order sizes, refresh rates, risk parameters, and many other settings to match your trading style and market conditions.',
    },
    {
      question: 'How do I monitor my bot\'s performance?',
      answer: 'The platform provides real-time dashboards showing key metrics like PnL, filled orders, current positions, spread capture, and more. You can track performance over different timeframes and receive alerts for important events.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400">
            Find answers to common questions about market making and the tread.fi bot.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-500/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-cyan-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-4">
            Join our community or reach out to our support team for personalized assistance.
          </p>
          <a
            href="https://app.tread.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-emerald-600 transition-all duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
