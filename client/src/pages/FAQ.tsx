import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

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
    question: "Can I customize the bot's trading strategy?",
    answer: 'Yes, the tread.fi MM bot offers extensive customization options. You can adjust spread sizes, order sizes, refresh rates, risk parameters, and many other settings to match your trading style and market conditions.',
  },
  {
    question: "How do I monitor my bot's performance?",
    answer: 'The platform provides real-time dashboards showing key metrics like PnL, filled orders, current positions, spread capture, and more. You can track performance over different timeframes and receive alerts for important events.',
  },
  {
    question: 'Do I need programming experience to use TreadFi?',
    answer: 'No programming experience is required. TreadFi is designed for retail market makers with a user-friendly interface. However, a basic understanding of trading concepts and risk management will help you use the bot more effectively.',
  },
  {
    question: 'What exchanges does TreadFi support?',
    answer: 'TreadFi focuses on perpetual DEXs (decentralized exchanges). Check the app.tread.fi platform for the current list of supported exchanges and pairs, as this list grows regularly.',
  },
  {
    question: 'How are incentives and fee rebates distributed?',
    answer: 'Incentives vary by exchange and program. Typically, points and rebates are accumulated based on your trading volume and liquidity provision. TreadFi helps you stay consistently active to maximize accrual. The actual distribution depends on each exchange\'s program terms.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="text-primary" size={28} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about market making and the tread.fi bot.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-testid={`card-faq-${index}`}
              className={`bg-card rounded-xl border transition-all duration-200 overflow-hidden ${
                openIndex === index
                  ? 'border-primary/40 shadow-lg shadow-primary/5'
                  : 'border-card-border hover:border-primary/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                data-testid={`button-faq-${index}`}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="text-base font-semibold text-foreground leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <div className="h-px bg-border/50 mb-4" />
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/15 rounded-xl text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-5 text-sm">
            Join our community or reach out to our support team for personalized assistance.
          </p>
          <a
            href="https://app.tread.fi"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-contact-support"
            className="inline-block px-6 py-2.5 gradient-bg-cyan-emerald text-white rounded-md font-semibold hover:opacity-90 transition-opacity text-sm shadow-lg shadow-primary/20"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
