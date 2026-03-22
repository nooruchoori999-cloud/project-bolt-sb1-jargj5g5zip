import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Can I be profitable with Tread MM Bot?',
    answer: (
      <div className="space-y-3">
        <p>Yes, many users are profitable with Tread. However, the success rate is similar to normal trading — most users still lose money.</p>
        <p>There's no secret formula. Profitability comes from:</p>
        <ul className="space-y-1.5 pl-1">
          {['Running the bot in the right market conditions', 'Using the right settings', 'Managing risk properly'].map((pt, i) => (
            <li key={i} className="flex items-start gap-2"><span className="mt-1.5 block w-1 h-1 rounded-full flex-shrink-0 bg-primary" />{pt}</li>
          ))}
        </ul>
        <p>One important factor to consider: you also earn points from DEXs and TreadFi, which may convert into tokens during TGE. In some cases, users can still come out ahead overall even with slightly negative trading PnL due to these incentives.</p>
        <p>Early Hyperliquid market makers are a good example — many were profitable overall despite negative PnL from pure market making.</p>
      </div>
    ),
  },
  {
    question: 'Why is my actual loss higher than my stop loss?',
    answer: (
      <div className="space-y-3">
        <p>In MM bots, stop loss works differently from instant execution.</p>
        <ul className="space-y-1.5 pl-1">
          {[
            'Once the max loss threshold is reached, the bot sends a cleanup TWAP order',
            'This process usually takes 1–2 minutes (sometimes faster)',
            'During this time, if the market moves aggressively, your loss can exceed the defined stop loss',
          ].map((pt, i) => (
            <li key={i} className="flex items-start gap-2"><span className="mt-1.5 block w-1 h-1 rounded-full flex-shrink-0 bg-primary" />{pt}</li>
          ))}
        </ul>
        <p>This is expected behavior. It happens because the bot exits using maker-based execution — not instant market orders.</p>
      </div>
    ),
  },
  {
    question: 'Which bot settings should I use?',
    answer: (
      <div className="space-y-3">
        <p>There is no one-size-fits-all setup. Performance depends on:</p>
        <ul className="space-y-1.5 pl-1">
          {['Market conditions', 'Pair liquidity', 'Volatility', 'Your risk tolerance'].map((pt, i) => (
            <li key={i} className="flex items-start gap-2"><span className="mt-1.5 block w-1 h-1 rounded-full flex-shrink-0 bg-primary" />{pt}</li>
          ))}
        </ul>
        <p>You need to adjust your settings based on the environment you are trading in.</p>
      </div>
    ),
  },
  {
    question: 'Can Tread be considered wash trading?',
    answer: (
      <div className="space-y-3">
        <p>No.</p>
        <ul className="space-y-1.5 pl-1">
          {[
            'Around 90% of Tread orders are maker orders, meaning real liquidity is provided and risk is taken',
            'Wash trading typically involves instant entry and exit with no exposure',
            'Tread is officially supported by platforms like Paradex, Pacifica, Extended, and Nado',
          ].map((pt, i) => (
            <li key={i} className="flex items-start gap-2"><span className="mt-1.5 block w-1 h-1 rounded-full flex-shrink-0 bg-primary" />{pt}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    question: 'Does PnL include fees?',
    answer: (
      <div className="space-y-3">
        <p>No. PnL does not include fees.</p>
        <p>Total result should be calculated as:</p>
        <div className="bg-background border border-border/50 rounded-lg px-4 py-3 font-mono text-sm text-foreground">
          Total PnL = Trading PnL − Fees
        </div>
        <p>The fee shown on the MM page includes exchange fees and TreadFi fees.</p>
      </div>
    ),
  },
  {
    question: 'What are the fees on different platforms?',
    answer: (
      <ul className="space-y-2 pl-1">
        {[
          { label: 'Hyperliquid (HIP-3)', value: '0.26 bps exchange + 2 bps Tread = 0.0226%' },
          { label: 'Hyperliquid (Normal pairs)', value: '0.013% + 2 bps = 0.033%' },
          { label: 'Nado', value: '1 bps + 2 bps = 0.03%' },
          { label: 'Pacifica', value: '1.5 bps + 2 bps = 0.035%' },
          { label: 'Extended', value: '0 + 2 bps = 0.02%' },
          { label: 'Paradex', value: '0.3 bps, no Tread fee = 0.003%' },
          { label: 'Aster', value: '0% total fee' },
          { label: 'Kodiak', value: '1.3 bps = 0.013%' },
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 block w-1 h-1 rounded-full flex-shrink-0 bg-primary" />
            <span><span className="text-foreground font-medium">{item.label}</span> → {item.value}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    question: 'Which bot mode should I choose?',
    answer: (
      <div className="space-y-3">
        <p>This depends entirely on market conditions:</p>
        <ul className="space-y-1.5 pl-1">
          {[
            'RGrid → Better for trending markets',
            'Mid / Grid / Blend / Signal → Better for ranging, low-volatility environments',
          ].map((pt, i) => (
            <li key={i} className="flex items-start gap-2"><span className="mt-1.5 block w-1 h-1 rounded-full flex-shrink-0 bg-primary" />{pt}</li>
          ))}
        </ul>
        <p>Choosing the wrong mode for the market is one of the main reasons users lose money.</p>
      </div>
    ),
  },
  {
    question: 'What are some tips to be profitable?',
    answer: (
      <div className="space-y-3">
        <ul className="space-y-1.5 pl-1">
          {[
            'Focus on market conditions first, not just settings',
            'Avoid running bots during high volatility events',
            'Use proper spreads and risk controls',
            'Monitor exposure buildup',
            "Don't rely only on PnL — consider points and incentives",
          ].map((pt, i) => (
            <li key={i} className="flex items-start gap-2"><span className="mt-1.5 block w-1 h-1 rounded-full flex-shrink-0 bg-primary" />{pt}</li>
          ))}
        </ul>
        <p>
          You can also explore optimized strategies and timings here:{' '}
          <a
            href="https://treadtools.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            treadtools.vercel.app
          </a>
        </p>
      </div>
    ),
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
                  openIndex === index ? 'max-h-[600px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <div className="h-px bg-border/50 mb-4" />
                  <div className="text-muted-foreground leading-relaxed text-sm">
                    {faq.answer}
                  </div>
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
