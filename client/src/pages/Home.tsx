import { ArrowRight, TrendingUp, Zap, Lock, AlertCircle, Bot, Layers, MonitorUp, Network } from 'lucide-react';
import { Link } from 'wouter';

const sections = [
  {
    title: 'What TreadFi Has Become',
    icon: Layers,
    iconColor: 'text-primary',
    intro: 'TreadFi started with accessible market-making automation. It has evolved into a broader trading and execution platform for retail and professional users.',
    items: [
      'Market-making bots for automated liquidity strategies',
      'Delta-neutral bots for hedged, multi-venue positions',
      'AI agents that research, plan, execute, and monitor',
      'A trading terminal with institutional-grade execution tools',
    ],
    highlight: 'What began as an MM bot is now a complete execution workspace.',
    highlightColor: 'border-primary/20 bg-primary/5 text-primary',
  },
  {
    title: 'MM Bots and DN Bots',
    icon: TrendingUp,
    iconColor: 'text-secondary',
    intro: 'Automation remains at the core of TreadFi, but it now covers more than one kind of strategy.',
    items: [
      'GRID, MID, RGRID, RSI, and BLEND market-making modes',
      'Configurable ranges, spreads, participation, and inventory controls',
      'Delta-neutral execution across spot, perpetuals, and multiple venues',
    ],
    highlight: 'Choose the workflow that matches the market instead of forcing one bot into every condition.',
    highlightColor: 'border-secondary/20 bg-secondary/5 text-secondary',
  },
  {
    title: 'AI Trading Agents',
    icon: Bot,
    iconColor: 'text-primary',
    intro: 'TreadFi Agents turn plain-English instructions into coordinated trading workflows.',
    items: [
      'Research markets and pressure-test ideas',
      'Prepare and execute trades through specialist agents',
      'Run market-making and delta-neutral strategies',
      'Monitor positions and maintain context over time',
    ],
    highlight: 'You bring the strategy. The agents help turn it into an executable process.',
    highlightColor: 'border-primary/20 bg-primary/5 text-primary',
  },
  {
    title: 'A Terminal for Retail and Professional Execution',
    icon: MonitorUp,
    iconColor: 'text-secondary',
    intro: 'TreadFi brings execution tools that were traditionally built for trading desks into one accessible interface.',
    items: [
      'Trade manually from a multi-venue terminal',
      'Use algorithms such as TWAP and other execution workflows',
      'Reduce slippage and execution costs on larger orders',
      'Manage connected trading accounts without giving up custody',
    ],
  },
  {
    title: 'One Platform, Many Markets',
    icon: Network,
    iconColor: 'text-primary',
    intro: 'The platform is expanding across perpetual DEXs, prediction markets, stock-token venues, and new exchange ecosystems.',
    items: [
      'Connect and trade across supported venues',
      'Participate in market-making and liquidity campaigns',
      'Explore integrations such as Polymarket, Aftermath, Ondo, and emerging exchanges',
      'Use research and platform data to find new opportunities',
    ],
    highlight: 'TreadFi is becoming the layer where strategies, venues, automation, and execution come together.',
    highlightColor: 'border-primary/20 bg-primary/5 text-primary',
  },
  {
    title: 'Powerful Tools, User-Controlled Risk',
    icon: AlertCircle,
    iconColor: 'text-chart-4',
    intro: 'TreadFi expands what you can do, but it does not remove the responsibility of choosing and managing a strategy.',
    items: [
      'You control your capital and connected accounts',
      'You choose the strategy, venues, limits, and risk',
      'Bots and agents execute instructions — they do not guarantee outcomes',
    ],
    highlight: 'Better execution does not eliminate market risk.',
    highlightColor: 'border-chart-4/20 bg-chart-4/5 text-chart-4',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-20 pb-20 relative">
          <div className="pointer-events-none absolute -top-16 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8">
              <Zap size={14} />
              From Market-Making Bots to a Complete Trading Stack
            </div>

            <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Trading Infrastructure
              <span className="block mt-2 gradient-text-cyan-emerald">
                Made Accessible
              </span>
            </h1>

            <p className="relative text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              TreadFi has evolved beyond a market-making bot into a platform for automated strategies, AI agents, multi-venue execution, and professional trading tools.
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
              Advanced execution, automation, and coordinated trading workflows were once available mainly to institutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              TreadFi is making more of that infrastructure available to individual traders, builders, and smaller teams.
            </p>
            <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-md">
              <p className="text-secondary font-medium italic">
                A world where traders do more than place orders — they build, automate, and operate complete strategies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 border-t border-border/30">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Final Note</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TreadFi is not a profit machine or a substitute for judgment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              It is a growing toolkit for research, execution, automation, and risk-controlled trading.
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
              <p className="text-foreground font-medium italic">The platform provides the tools. The strategy and risk decisions remain yours.</p>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border/30 text-center pb-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Explore the TreadFi Platform
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">Bots, agents, execution tools, exchange guides, and real strategies.</p>
          <Link
            to="/lessons"
            data-testid="link-begin-lessons"
            className="group inline-flex items-center gap-2 px-8 py-4 gradient-bg-cyan-emerald text-white rounded-md font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Start Learning
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}
