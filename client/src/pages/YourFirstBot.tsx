import { Lightbulb } from 'lucide-react';

const steps = [
  {
    title: 'Connect Your Exchange Account',
    desc: 'Link your perpetual DEX account to TreadFi by providing your API key and secret. Make sure to enable trading permissions but restrict withdrawals for security. Your credentials are encrypted and never stored in plain text.',
  },
  {
    title: 'Choose a Bot Mode',
    desc: 'Select the strategy that best fits current market conditions. If you\'re unsure, start with GRID mode — it\'s the most beginner-friendly and gives you a clear picture of how market making works before you layer in more complexity.',
  },
  {
    title: 'Set Your Parameters',
    desc: 'Configure the key parameters for your chosen mode: spread size, order size, price range, and refresh interval. Start conservative — smaller orders and wider spreads limit your downside while you learn how the bot behaves in live markets.',
  },
  {
    title: 'Run a Simulation First',
    desc: 'Before going live, use the paper trading or simulation mode to see how your strategy would have performed on recent market data. Review the simulated PnL, fill rate, and inventory drift to validate your setup.',
  },
  {
    title: 'Go Live and Monitor',
    desc: 'Deploy your bot with real capital. Check performance regularly — especially in the first few hours. Watch your inventory position, spread capture, and overall PnL. Be ready to pause the bot if market conditions change dramatically.',
  },
];

const tips = [
  {
    title: 'Start Small',
    desc: 'Use a fraction of your intended capital for the first week. This lets you observe the bot\'s behavior without significant exposure while you gain confidence.',
  },
  {
    title: 'Understand the Incentives',
    desc: 'Factor in points programs and fee rebates when evaluating performance. A strategy with slightly negative trading PnL may still be highly profitable when incentives are included.',
  },
  {
    title: 'Don\'t Over-Optimize Early',
    desc: 'Resist the urge to tweak parameters every day. Give each configuration at least a few days to accumulate meaningful data before drawing conclusions.',
  },
];

export default function YourFirstBot() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <section className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            Get Started
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Your First Bot
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to go from zero to a running market making bot. Follow these steps in order and you'll be live faster than you think.
          </p>
        </section>

        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-10">5 Steps to Get Started</h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border/40 mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tips for New Market Makers</h2>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div
                key={i}
                className="bg-card border border-card-border rounded-xl p-6 flex gap-4"
                data-testid={`card-tip-${i}`}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Lightbulb className="text-primary" size={18} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
