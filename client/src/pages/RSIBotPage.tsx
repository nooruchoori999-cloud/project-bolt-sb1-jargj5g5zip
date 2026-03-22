export default function RSIBotPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            MM Bot Mode
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Signal Mode (RSI)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A Smarter Way to Trade Pullbacks
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            TreadFi's Signal Mode is basically a mid-based market making strategy with directional bias.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            Instead of placing orders symmetrically like a normal mid bot, it uses RSI (Relative Strength Index) to slightly tilt your positioning.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            So you're still market making… but now you're doing it with an edge.
          </p>
        </section>

        {/* What Signal Mode Actually Does */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Signal Mode Actually Does</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">At its core, Signal Mode:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Uses mid price as the reference (just like a mid bot)',
              'Applies a technical signal (currently RSI) from kiyotaka.ai',
              'Skews your buy/sell placement based on that signal',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-muted-foreground text-sm mb-1">So instead of being neutral, the bot becomes:</p>
            <p className="text-foreground font-semibold">Slightly directional — but still controlled</p>
          </div>
        </section>

        {/* How RSI Changes the Bot's Behavior */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">How RSI Changes the Bot's Behavior</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">The logic is simple.</p>

          <div className="space-y-6 mb-8">
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-3">When RSI is High (&gt;50):</p>
              <ul className="space-y-2 mb-4">
                {[
                  'Market is showing bullish momentum',
                  'Bot assumes price may be overbought',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-3">So it:</p>
              <ul className="space-y-2 mb-4">
                {[
                  'Places sell orders closer to mid (easier to get filled)',
                  'Pushes buy orders further away',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary text-sm font-medium">👉 You're prioritizing sells, expecting a pullback</p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-3">When RSI is Low:</p>
              <ul className="space-y-2 mb-4">
                {[
                  'Market is showing weakness',
                  'Bot assumes price may be oversold',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-3">So it:</p>
              <ul className="space-y-2 mb-4">
                {[
                  'Places buy orders closer to mid',
                  'Pushes sell orders further away',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary text-sm font-medium">👉 You're prioritizing buys, expecting a bounce</p>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-foreground font-semibold mb-3">In Simple Terms:</p>
            <ul className="space-y-2 mb-3">
              {['Buy when RSI is low', 'Sell when RSI is high'].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">But instead of market orders, you're doing it through smart limit placement.</p>
          </div>

          <img
            src="https://i.postimg.cc/v1HT8xfw"
            alt="RSI signal mode buy/sell placement illustration"
            className="w-full rounded-xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </section>

        {/* Why This Is Different From Grid Bots */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why This Is Different From Grid Bots</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">This is important.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Grid bots:</p>
              <ul className="space-y-2">
                {[
                  'Use fixed executed price levels',
                  'Can get stuck if price trends',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Signal Mode:</p>
              <ul className="space-y-2">
                {[
                  'Uses live mid price as reference',
                  'Continuously adjusts',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <ul className="space-y-2 mb-3">
              {['No grid anchoring', 'No need for resets'].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">It stays flexible because it's always reacting to current price.</p>
          </div>
        </section>

        {/* Where the Edge Comes From */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Where the Edge Comes From</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">The edge comes from timing pullbacks.</p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            When price moves too far in one direction: RSI reflects that momentum, and the bot positions for the snap-back move.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-2">But here's the catch:</p>
            <p className="text-muted-foreground text-sm mb-3">The pullback needs to happen fast. Because:</p>
            <ul className="space-y-2">
              {[
                'Orders are still based on spread',
                "If price doesn't retrace quickly → no fills",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Spread Still Matters */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Spread Still Matters (A Lot)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Even with RSI, spread is still your main control.</p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-6">
            <p className="text-foreground font-semibold mb-2">For example: +10 spread</p>
            <p className="text-muted-foreground text-sm">
              Orders are placed 0.1% away from current mid price. That is if RSI above 50, bot places sell order at current mid price and places a buy order at 0.1% from current price. So if the market pulls back fast, you capture a 0.1% price movement in your favor.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-1">Higher spread</p>
              <p className="text-muted-foreground text-sm">Bigger profit per trade</p>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-1">But requires</p>
              <p className="text-muted-foreground text-sm">Stronger, faster pullbacks</p>
            </div>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-3">That's why the recommended range is: +3 to +10 bps</p>
            <p className="text-muted-foreground text-sm mb-3">It balances:</p>
            <ul className="space-y-2">
              {['Fill probability', 'Profit per trade'].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* When This Strategy Works Best */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">When This Strategy Works Best</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">From experience, this performs best when:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Market has clean structure',
              'Price moves with pullbacks',
              'Not just straight trending',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Good conditions ✅</p>
              <ul className="space-y-2">
                {['NY session (more structured moves)', 'Liquid assets'].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Avoid ❌</p>
              <ul className="space-y-2">
                {['First hour of NY open (too volatile)', 'Aggressive one-sided trends'].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-muted-foreground text-sm">
              Because if price just keeps running: You won't get the pullbacks you need → and you'll likely hit stop loss.
            </p>
          </div>

          <img
            src="https://i.postimg.cc/GBht3TY6"
            alt="RSI signal mode best conditions chart"
            className="w-full rounded-xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </section>

        {/* The Real Limitation */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Real Limitation</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Signal Mode still isn't predictive. It's reactive.</p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-6">
            <p className="text-muted-foreground text-sm mb-3">RSI tells you:</p>
            <p className="text-muted-foreground text-sm mb-4 pl-4 border-l-2 border-primary/30">"Price has moved a lot"</p>
            <p className="text-muted-foreground text-sm mb-3">But it doesn't guarantee:</p>
            <p className="text-muted-foreground text-sm pl-4 border-l-2 border-primary/30">"Price will reverse right now"</p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">So if the market keeps pushing:</p>
          <ul className="space-y-3">
            {[
              'Your bias can be wrong',
              'And exposure builds on one side',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Passive Participation */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Passive Participation Works Best With RSI</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Passive participation works best with RSI, as it allows you to gradually scale into positions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you deploy all your orders at once, RSI can stay overbought or oversold and continue trending, which increases the risk of hitting your stop loss.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-muted-foreground text-sm">
              Instead, by scaling in around the <span className="text-foreground font-semibold">50–60 RSI range</span>, you give yourself more room to manage the trade if it moves against you.
            </p>
          </div>
        </section>

        {/* Final Thought */}
        <section className="border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Final Thought</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Signal Mode sits somewhere between a pure market maker and a light directional strategy. It doesn't try to predict the market fully… but it helps you lean in the right direction.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you use it in the right conditions — structured markets with clean pullbacks — it can be a very efficient way to:
          </p>
          <ul className="space-y-3">
            {[
              'Capture quick reversals',
              'Improve your fill quality',
              'Add an edge to mid-based strategies',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
