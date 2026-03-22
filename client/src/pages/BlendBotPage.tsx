export default function BlendBotPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            MM Bot Mode
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Blend
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Blend Mode is essentially a mid-based market making strategy, but instead of using just the standard mid price from one exchange, it uses a blended mid price.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            In simple terms: You're still running a mid bot — but your reference price is smarter.
          </p>
        </section>

        {/* What Is Blend Mode */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Is Blend Mode?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Blend Mode allows you to quote prices based on a combination of two exchanges:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'The exchange you are market making on',
              'Another exchange of your choice (usually more liquid)',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            You can control how much weight each price has in the final reference.
          </p>
        </section>

        {/* Blend Weight Settings */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Blend Weight Settings</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You can adjust how the pricing is calculated:
          </p>
          <div className="bg-card border border-card-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { value: '0%', desc: 'Uses only the price from your trading exchange' },
                  { value: '50% (default)', desc: 'Equal-weighted average between both exchanges' },
                  { value: '100%', desc: 'Uses only the external reference exchange price' },
                ].map((row, i, arr) => (
                  <tr key={i} className={i < arr.length - 1 ? 'border-b border-border/30' : ''}>
                    <td className="px-5 py-3.5 font-mono text-primary text-xs whitespace-nowrap">{row.value}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            This gives you flexibility depending on how reliable your local market is.
          </p>
        </section>

        {/* How It Behaves */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">How It Behaves</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Instead of quoting purely based on your exchange's mid price, the bot:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Takes your exchange price',
              'Takes a reference price from another exchange',
              'Blends them together',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Orders are then placed around this blended price, and they update dynamically as both markets move.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-muted-foreground text-sm mb-2">So even though you are executing trades on one exchange, your pricing is:</p>
            <p className="text-foreground font-semibold">Influenced by a broader, more accurate market view</p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why This Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In theory, the same asset should have the same price across exchanges. But in reality:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Smaller exchanges can be more volatile',
              'Low liquidity can cause price distortions',
              'Temporary price gaps (inefficiencies) happen',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Blend Mode helps you avoid reacting to these misleading local moves.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-muted-foreground text-sm">
              Instead, it positions your orders based on <span className="text-foreground font-semibold">where price should be</span>, not just where it currently is.
            </p>
          </div>
        </section>

        {/* Use Case */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Use Case: Taking Advantage of Price Differences</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Let's say you're market making ETH on a smaller exchange:
          </p>
          <div className="bg-card border border-card-border rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: 'Local mid price', value: '$2,000', note: 'volatile, thin liquidity' },
                  { label: 'Reference exchange price', value: '$2,050', note: 'stable, high volume' },
                  { label: 'Blended price (50%)', value: '$2,025', note: 'your bot quotes around this' },
                ].map((row, i, arr) => (
                  <tr key={i} className={i < arr.length - 1 ? 'border-b border-border/30' : ''}>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.label}</td>
                    <td className="px-5 py-3.5 font-mono text-primary text-xs">{row.value}</td>
                    <td className="px-5 py-3.5 text-muted-foreground text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            So instead of following the local market blindly, you:
          </p>
          <ul className="space-y-3">
            {[
              'Anticipate price convergence',
              'Position yourself ahead of the move',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Final Thought */}
        <section className="border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Final Thought</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            With Blend Mode, instead of relying on a single exchange, you:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Anchor your strategy to a broader price signal',
              'Reduce noise from low liquidity',
              'Position for more efficient execution',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              It's a small tweak in setup… but it can make a big difference in how your bot performs.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
