interface Props {
  mode: 'GRID' | 'MID' | 'RGRID' | 'RSI' | 'BLEND';
}

const modeData: Record<string, {
  intro: string;
  steps: { title: string; desc: string }[];
  bestUsed: string[];
  params: { name: string; description: string; default: string }[];
}> = {
  GRID: {
    intro: 'The GRID mode places buy and sell orders at fixed price intervals above and below the current market price, forming a grid of limit orders. It is one of the most straightforward market making strategies and works well in ranging, sideways markets where price oscillates within a defined band.',
    steps: [
      { title: 'Define Your Price Range', desc: 'Set the upper and lower bounds for the grid. The bot will distribute orders evenly across this range.' },
      { title: 'Configure Order Spacing', desc: 'Specify the interval between each grid level. Tighter spacing captures more trades but requires more capital per level.' },
      { title: 'Bot Places and Manages Orders', desc: 'The bot continuously places and refreshes orders at each grid level, filling buys and sells as price moves up and down.' },
    ],
    bestUsed: [
      'When the market is ranging sideways with no strong trend',
      'When volatility is moderate and price oscillates predictably',
      'When you want a simple, set-and-forget strategy with defined risk',
    ],
    params: [
      { name: 'grid_levels', description: 'Number of price levels in the grid', default: '10' },
      { name: 'grid_spacing', description: 'Percentage distance between each level', default: '0.5%' },
      { name: 'order_size', description: 'Size of each order at each grid level', default: '100 USDC' },
    ],
  },
  MID: {
    intro: 'The MID mode focuses on placing orders symmetrically around the mid-price of the order book. Rather than using a fixed grid, it dynamically adjusts the bid and ask based on the current best mid-price, keeping your spread tight and competitive while adapting to market movements.',
    steps: [
      { title: 'Fetch Current Mid-Price', desc: 'The bot reads the live order book to compute the mid-price between the best bid and best ask.' },
      { title: 'Place Symmetric Orders', desc: 'Orders are placed a defined spread distance on each side of the mid-price, creating a balanced two-sided market.' },
      { title: 'Refresh on Price Move', desc: 'When the mid-price moves beyond a threshold, the bot cancels and replaces orders to stay close to fair value.' },
    ],
    bestUsed: [
      'When you want to stay competitive around the current market price',
      'In liquid markets where the mid-price is a reliable fair value reference',
      'When minimizing inventory drift is a priority',
    ],
    params: [
      { name: 'spread', description: 'Total spread in percentage around mid-price', default: '0.2%' },
      { name: 'refresh_tolerance', description: 'Price move percentage that triggers an order refresh', default: '0.05%' },
      { name: 'order_size', description: 'Size of each bid and ask order', default: '200 USDC' },
    ],
  },
  RGRID: {
    intro: 'The RGRID (Recursive Grid) mode builds on the standard GRID by adding recursive re-entry logic. When a grid level is filled, the bot automatically opens a new level beyond the current range, effectively following the market as it trends while still capturing spread income along the way.',
    steps: [
      { title: 'Initialize the Grid', desc: 'Like GRID mode, the bot sets up initial buy and sell orders across a defined price range.' },
      { title: 'Detect Filled Orders', desc: 'When an order at any grid level is filled, the bot records the fill and evaluates whether to extend the grid.' },
      { title: 'Recursively Extend the Range', desc: 'A new order is placed beyond the original boundary, effectively trailing the market and maintaining grid density.' },
    ],
    bestUsed: [
      'When the market has a mild trend but still exhibits short-term mean reversion',
      'When you want the grid to adapt rather than become one-sided in a trend',
      'For extended market-making sessions where ranges may shift significantly',
    ],
    params: [
      { name: 'initial_levels', description: 'Starting number of grid levels', default: '8' },
      { name: 'extension_ratio', description: 'How far beyond the range new levels are placed', default: '1.0x spacing' },
      { name: 'max_levels', description: 'Maximum total levels including extensions', default: '20' },
    ],
  },
  RSI: {
    intro: 'The RSI mode uses the Relative Strength Index indicator to bias the bot\'s order placement. When RSI signals overbought conditions, the bot skews towards more aggressive asks. When RSI signals oversold, it skews towards more aggressive bids. This creates a mean-reverting edge on top of standard market making.',
    steps: [
      { title: 'Calculate RSI', desc: 'The bot continuously computes RSI over a configurable period using recent price data from the exchange.' },
      { title: 'Determine Order Skew', desc: 'Based on RSI value, the bot shifts its bid/ask placement — leaning harder on one side when the indicator reaches extreme zones.' },
      { title: 'Place Skewed Orders', desc: 'Orders are placed with adjusted sizes or spreads to reflect the RSI-derived directional bias, then refreshed as conditions change.' },
    ],
    bestUsed: [
      'When you believe short-term price extremes tend to revert to the mean',
      'In markets with identifiable overbought/oversold cycles',
      'When you want a data-driven edge layered on top of passive spread collection',
    ],
    params: [
      { name: 'rsi_period', description: 'Number of candles used to calculate RSI', default: '14' },
      { name: 'overbought_threshold', description: 'RSI level considered overbought', default: '70' },
      { name: 'oversold_threshold', description: 'RSI level considered oversold', default: '30' },
    ],
  },
  BLEND: {
    intro: 'The BLEND mode combines multiple strategies into a single cohesive bot, allowing you to run a weighted mix of approaches simultaneously. You can blend GRID with RSI signals, or combine MID with RGRID extensions — giving you the benefits of multiple strategies while managing a single position.',
    steps: [
      { title: 'Choose Your Strategy Weights', desc: 'Define what percentage of your capital and order activity each sub-strategy controls. Weights must sum to 100%.' },
      { title: 'Strategies Run in Parallel', desc: 'Each sub-strategy operates according to its own rules, placing orders in its designated portion of the order book.' },
      { title: 'Unified Position Management', desc: 'The bot tracks your aggregate inventory and exposure across all sub-strategies, applying global risk limits as a unified position.' },
    ],
    bestUsed: [
      'When no single strategy fits current market conditions and you want diversification',
      'For advanced users comfortable tuning multiple strategy parameters simultaneously',
      'When you want to experiment with strategy mixing without running separate bots',
    ],
    params: [
      { name: 'strategy_weights', description: 'Comma-separated weights per sub-strategy (must sum to 100)', default: '50,50' },
      { name: 'rebalance_interval', description: 'How often weights are rebalanced based on performance', default: '1h' },
      { name: 'global_max_exposure', description: 'Maximum total position size across all sub-strategies', default: '1000 USDC' },
    ],
  },
};

export default function MMBotMode({ mode }: Props) {
  const data = modeData[mode];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <section className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            MM Bot Mode
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {mode}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {data.intro}
          </p>
        </section>

        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-8">How It Works</h2>
          <div className="space-y-6">
            {data.steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Best Used When</h2>
          <ul className="space-y-3">
            {data.bestUsed.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Key Parameters</h2>
          <div className="bg-card border border-card-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left px-5 py-3.5 text-foreground font-semibold">Parameter</th>
                  <th className="text-left px-5 py-3.5 text-foreground font-semibold">Description</th>
                  <th className="text-left px-5 py-3.5 text-foreground font-semibold">Default</th>
                </tr>
              </thead>
              <tbody>
                {data.params.map((param, i) => (
                  <tr key={i} className={i < data.params.length - 1 ? 'border-b border-border/30' : ''}>
                    <td className="px-5 py-3.5 font-mono text-primary text-xs">{param.name}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{param.description}</td>
                    <td className="px-5 py-3.5 text-muted-foreground font-mono text-xs">{param.default}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
