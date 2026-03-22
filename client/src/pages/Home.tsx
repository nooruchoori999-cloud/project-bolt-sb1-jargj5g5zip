import { ArrowRight, TrendingUp, Zap, Lock, AlertCircle, Lightbulb } from 'lucide-react';
import { Link } from 'wouter';

const sections = [
  {
    title: 'What the TreadFi MM Bot Does',
    icon: TrendingUp,
    iconColor: 'text-primary',
    intro: 'The TreadFi MM bot executes market making strategies based on your settings.',
    items: [
      'Places buy and sell orders according to your defined parameters',
      'Earns from spreads between orders',
      'Manages inventory to control exposure',
      'Helps you clearly define and limit risk',
    ],
    highlight: "It doesn't predict the market — it follows your strategy.",
    highlightColor: 'border-primary/20 bg-primary/5 text-primary',
    clarification: 'Performance depends entirely on your setup and market conditions.',
  },
  {
    title: "This Isn't a Vault — It's a Tool",
    icon: Lock,
    iconColor: 'text-secondary',
    intro: 'Most DeFi products ask you to deposit funds and trust a strategy. TreadFi is different.',
    items: [
      'You control your capital',
      'You define your risk',
      'You customize how the bot behaves',
    ],
    comparison: true,
  },
  {
    title: 'Where the Real Profit Comes From',
    icon: Zap,
    iconColor: 'text-primary',
    intro: 'Market making is not just about trading PnL. Most perpetual DEXs reward liquidity providers through:',
    items: [
      'Points programs',
      'Fee rebates',
      'Trading incentives',
    ],
    highlight: 'Your true PnL = Trading PnL + Incentives Value',
    highlightColor: 'border-primary/20 bg-primary/5 text-primary',
    example: 'Early market makers earned significant value from incentive programs, even when their trading PnL was flat or slightly negative.',
  },
  {
    title: 'Important Reality',
    icon: AlertCircle,
    iconColor: 'text-chart-4',
    intro: 'This is not guaranteed income.',
    items: [
      'Incentives are speculative',
      'Token values can change',
      'Market conditions can move against you',
    ],
    highlight: 'You are betting on your strategy and the growth of the DEX.',
    highlightColor: 'border-chart-4/20 bg-chart-4/5 text-chart-4',
  },
  {
    title: 'Why This Model Exists',
    icon: Lightbulb,
    iconColor: 'text-primary',
    items: [
      'DEXs need liquidity to grow',
      'Market makers provide that liquidity',
      'Incentives attract participation',
    ],
    highlight: 'DEX wins → better liquidity. You win → rewards, rebates, and opportunity',
    highlightColor: 'border-primary/20 bg-primary/5 text-primary',
  },
  {
    title: 'What TreadFi Does',
    icon: Zap,
    iconColor: 'text-secondary',
    intro: 'TreadFi does not create these incentives. It helps you capture them efficiently.',
    items: [
      'Automates market making',
      'Manages inventory and exposure',
      'Keeps you active in the market',
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <Zap size={14} />
              Market Making for Everyone
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Market Making
              <span className="block mt-2 gradient-text-cyan-emerald">
                Made for Everyone
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Run your own market making strategy on perp DEXs — not by depositing into a vault, but by running your own customizable system.
            </p>

            <Link
              to="/get-started"
              data-testid="link-start-learning"
              className="group inline-flex items-center gap-2 px-8 py-4 gradient-bg-cyan-emerald text-white rounded-md font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Start Learning
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </section>

        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <section key={idx} className="py-14 border-t border-border/30">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-md bg-card border border-border/50 flex items-center justify-center flex-shrink-0">
                    <Icon className={section.iconColor} size={20} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{section.title}</h2>
                </div>

                {section.intro && (
                  <p className="text-muted-foreground mb-6 leading-relaxed">{section.intro}</p>
                )}

                {(section as any).comparison ? (
                  <div className="space-y-3 mb-6">
                    <div className="pl-4 border-l-2 border-border py-2.5 bg-muted/30 rounded-r-md pr-4">
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-semibold">Vault</span> → Give us your money, we handle it
                      </p>
                    </div>
                    <div className="pl-4 border-l-2 border-primary/60 py-2.5 bg-primary/5 rounded-r-md pr-4">
                      <p className="text-primary/80">
                        <span className="text-primary font-semibold">TreadFi</span> → Here's a tool. You run it your way
                      </p>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-3 mb-6">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlight && (
                  <div className={`p-4 border rounded-md mb-6 ${section.highlightColor || 'border-primary/20 bg-primary/5 text-primary'}`}>
                    <p className="font-medium italic">{section.highlight}</p>
                  </div>
                )}

                {(section as any).clarification && (
                  <div className="p-4 bg-muted/30 rounded-md border border-border/50 mb-6">
                    <p className="text-muted-foreground">{(section as any).clarification}</p>
                  </div>
                )}

                {(section as any).example && (
                  <div className="p-4 bg-muted/30 rounded-md border border-border/50">
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-semibold">Example:</span> {(section as any).example}
                    </p>
                  </div>
                )}
              </div>
            </section>
          );
        })}

        <section className="py-14 border-t border-border/30">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Vision</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Market making has always been dominated by institutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              TreadFi changes that.
            </p>
            <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-md">
              <p className="text-secondary font-medium italic">
                A world where retail doesn't just trade — but powers the market itself.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 border-t border-border/30">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Final Note</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TreadFi is not a profit machine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              It is a tool — just like a trading terminal.
            </p>
            <ul className="space-y-3 mb-6">
              {['No guaranteed profits', 'No risk removal', 'No automated success'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-muted-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-card border border-border/50 rounded-md">
              <p className="text-foreground font-medium italic">What you earn depends on how you use it.</p>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border/30 text-center pb-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Start Learning Market Making
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">Simple concepts. Real strategies. No fluff.</p>
          <Link
            to="/lessons"
            data-testid="link-begin-lessons"
            className="group inline-flex items-center gap-2 px-8 py-4 gradient-bg-cyan-emerald text-white rounded-md font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Begin
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}
