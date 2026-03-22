export default function MidBotPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            MM Bot Mode
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Mid Bots
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A Complete Guide to Mid Bot in Tread
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            If you've ever run a grid bot in a fast market and got stopped out instantly, this is exactly what you should be using instead.
          </p>
        </section>

        {/* What Is a Mid Bot */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Is a Mid Bot (Simple Explanation)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A mid bot places buy and sell orders based on the current mid price of the market. On Tread, all bot modes are built around one core idea: Place buy and sell limit orders around a reference price.
          </p>
          <p className="text-foreground font-medium mb-3">These bots:</p>
          <ul className="space-y-3 mb-6">
            {[
              'Use only limit orders (like real market makers)',
              'Continuously provide liquidity',
              'Manage your inventory (exposure)',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <img
            src="https://i.postimg.cc/zzY8tp1q/exposure.jpg"
            alt="Mid bot inventory management diagram"
            className="w-full rounded-xl mb-6"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
              <span className="text-muted-foreground">Prevent you from getting stuck too heavily on one side</span>
            </li>
          </ul>
        </section>

        {/* The Key Difference: Reference Price */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Key Difference: Reference Price</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Each mode is defined by what reference price it uses.
          </p>
          <ul className="space-y-6 mb-4">
            <li>
              <div className="flex items-start gap-3 mb-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Mid Bot</span> → uses current mid price</span>
              </div>
              <img
                src="https://i.postimg.cc/Tdvf7QXY/Mid-bot.png"
                alt="Mid bot reference price illustration"
                className="w-full rounded-xl"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </li>
            <li>
              <div className="flex items-start gap-3 mb-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground"><span className="text-foreground font-medium">Grid Bot</span> → uses averages of your entry price</span>
              </div>
              <img
                src="https://i.postimg.cc/xfVnxgSn/grid.png"
                alt="Grid bot reference price illustration"
                className="w-full rounded-xl"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            This one difference completely changes how they behave.
          </p>
        </section>

        {/* How a Mid Bot Works */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">How a Mid Bot Works (Example)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Let's say:</p>
          <ul className="space-y-3 mb-6">
            {[
              'Current mid price = 65,000',
              'You\'re running mid +1 (0.01% spread)',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">The bot will:</p>
          <ul className="space-y-3">
            {[
              'Place a buy order 0.01% below mid',
              'Place a sell order 0.01% above mid',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What Happens After First Fill */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Happens After First Fill</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Let's say your buy gets filled first → now you are net long.
          </p>

          <div className="space-y-8">
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Scenario 1: Price Moves Up (Ideal)</h3>
              <ul className="space-y-3">
                {[
                  'Your sell order gets filled',
                  'Position closes in profit',
                  'Bot continues cycling',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Scenario 2: Price Moves Down (Important Part)</h3>
              <p className="text-muted-foreground mb-4">This is where mid bots shine. If price drops:</p>
              <ul className="space-y-3 mb-4">
                {[
                  'Your sell order doesn\'t get filled',
                  'You are temporarily in drawdown',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mb-4">But the bot does NOT stay stuck. Instead:</p>
              <ul className="space-y-3">
                {[
                  'It updates the reference price to the new mid',
                  'Places a new sell order closer to current price (still 0.01% away)',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why This Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The bot follows price. So even if price moves against you:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Your exit keeps getting closer to market price',
              'You are not waiting for a full reversal',
              'Losses are controlled and managed dynamically',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">This is how mid bots work:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Actively manage inventory',
              'Reduce risk during drawdowns',
              'Stay relevant in moving markets',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <img
            src="https://i.postimg.cc/BSf4YNGv/middgood.jpg"
            alt="Mid bot managing inventory during drawdown"
            className="w-full rounded-xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </section>

        {/* How Grid Bots Differ */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">How Grid Bots Differ</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Grid bots behave very differently. Orders are placed at average entry levels and your exits are PNL focused. They do NOT adjust with price.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">So if price moves away:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Your position gets stuck',
              'Exit levels remain far away',
              'You wait for price to come back OR stop loss / grid reset',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <img
            src="https://i.postimg.cc/Tdvf7QX2/gridfail.jpg"
            alt="Grid bot stuck position illustration"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <p className="text-muted-foreground leading-relaxed">
            Mid bots don't eliminate losses. But they actively manage them. Instead of hoping price comes back, the bot works to close your position near current price.
          </p>
        </section>

        {/* Where Mid Bots Work Best */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Where Mid Bots Work Best</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mid bots are NOT magic. They perform best in:
          </p>
          <div className="space-y-6">
            {[
              { num: 1, title: 'Controlled Trending Markets', desc: 'Price is moving up or down but with regular pullbacks. Not aggressive spikes.' },
              { num: 2, title: 'Choppy / Sideways Markets', desc: 'Constant small movements, frequent opportunities to trade.' },
              { num: 3, title: 'Short-Term Opportunities (15–20 mins)', desc: 'When you have a clear directional view.' },
            ].map((item) => (
              <div key={item.num} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Real Edge: Directional Bias */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Real Edge: Directional Bias</h2>
          <p className="text-muted-foreground leading-relaxed">
            Instead of being neutral, you can tell the bot: <span className="text-foreground font-medium">Bullish bias</span>, <span className="text-foreground font-medium">Bearish bias</span>, or <span className="text-foreground font-medium">Neutral</span>.
          </p>
        </section>

        {/* What Directional Bias Actually Does */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Directional Bias Actually Does</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-medium">Bullish Bias (Example)</span> — The bot:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Accumulates more long exposure during the first half of the bot order',
              'Keeps you net long ~90% of the time',
              'Avoids building meaningful short exposure',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            But the key part most people miss: It doesn't hold that exposure forever. During the second half of the bot order, the bot gradually unwinds those long positions and starts reducing exposure as the cycle progresses.
          </p>
        </section>

        {/* What This Means in Practice */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-8">What This Means in Practice</h2>

          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span className="text-foreground font-medium">If price moves in your direction (up):</span>
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Your longs are built earlier at lower prices',
                  'They are unwound later at higher prices',
                  'So your average exit > average entry → You end up in profit',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <img
                src="https://i.postimg.cc/Tdvf7QXd/longbias.jpg"
                alt="Bullish bias profit scenario"
                className="w-full rounded-xl"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <span className="text-foreground font-medium">If price moves against you (down):</span>
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Your longs are built at higher prices',
                  'They are unwound at lower prices → You take a loss',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <img
                src="https://i.postimg.cc/byfpCLjw/longfail.jpg"
                alt="Bullish bias loss scenario"
                className="w-full rounded-xl"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6 mt-8">
            <p className="text-foreground font-semibold mb-4">Simple Way to Think About It:</p>
            <ul className="space-y-3">
              {[
                'First half = accumulation phase',
                'Second half = distribution phase',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4">Your PnL depends on what price does between those two phases.</p>
          </div>
        </section>

        {/* Important Insight */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Important Insight</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Your profit is not just about direction — it's about where price is during the second half compared to the first half.
          </p>
          <ul className="space-y-3">
            {[
              'Higher → profit (bullish bias)',
              'Lower → loss',
              'Same → close to breakeven',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Normal Mid Bot vs Biased Mid Bot */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Normal Mid Bot vs Biased Mid Bot</h2>
          <div className="bg-card border border-card-border rounded-xl overflow-hidden">
            <div className="border-b border-border/40 px-5 py-4">
              <p className="text-foreground font-semibold mb-1">Without bias</p>
              <p className="text-muted-foreground text-sm">Long → neutral → short → repeat. Pure market making. No directional edge.</p>
            </div>
            <div className="px-5 py-4">
              <p className="text-foreground font-semibold mb-1">With bullish bias</p>
              <p className="text-muted-foreground text-sm mb-3">Long → partial exit → long again. Rarely goes short. Builds net long exposure.</p>
              <p className="text-muted-foreground text-sm">If price goes up: Exit &gt; average entry → you make extra directional profit on top of spread capture, trading volume, and reward points.</p>
            </div>
          </div>
        </section>

        {/* The Trade-Off */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Trade-Off (Very Important)</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">Directional bias increases both:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Upside ✅</p>
              <ul className="space-y-2">
                {[
                  'Higher PnL when right',
                  'More volume',
                  'Better rewards',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Risk ❌</p>
              <ul className="space-y-2">
                {[
                  'Bigger losses when wrong',
                  'Exposure is concentrated',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            This is NOT safer than neutral mode. It's a conviction-based strategy.
          </p>
        </section>

        {/* When to Use Directional Bias */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">When to Use Directional Bias</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Use it only when:</p>
          <ul className="space-y-3">
            {[
              'You expect a clear directional move',
              'The market is already showing strength (not random chop)',
              'Your timeframe matches your bot speed',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What Actually Matters */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Actually Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            What you should care about is how long your bot takes to fill ~60–70% of its notional. That is your real timeframe.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">A mid bot with bias works in two phases:</p>
          <ul className="space-y-3 mb-6">
            {[
              'First half → builds exposure',
              'Second half → unwinds exposure',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            For the strategy to work: Price must move in your direction by the time the bot starts unwinding.
          </p>
        </section>

        {/* Practical Examples */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-8">Practical Examples</h2>
          <div className="space-y-6 mb-8">
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Smaller Size + Aggressive Settings</h3>
              <ul className="space-y-2">
                {[
                  'Target: $15K–$20K, high participation rate, liquid market',
                  'Fill time ≈ 15–20 minutes',
                  'Price should be above your entry after ~15–20 mins (bullish bias)',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Larger Size + Passive Settings</h3>
              <ul className="space-y-2">
                {[
                  'Higher notional, slower participation rate',
                  'Fill time = 30–60+ minutes',
                  'Your directional view must hold for a longer duration',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6 mb-8">
            <p className="text-foreground font-semibold mb-4">Simple Rule: Don't think in minutes. Think in fill progress.</p>
            <ul className="space-y-2 mb-4">
              {[
                '0–50% filled → accumulation phase',
                '50–100% filled → unwind phase',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">Your edge comes from what price does between these two phases. Directional bias is not just about being right on direction. It's about being right on direction AND timing relative to your bot speed. If your timing is off, even a correct bias can lose money.</p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Avoid using it when: Market is unpredictable, high volatility sessions (news, opens), or you don't have a clear bias.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Here are a few more examples of mid bots with directional bias. The resulting PnL is largely driven by how far price moves after the bot begins placing orders.
          </p>
          <div className="space-y-4">
            <img
              src="https://i.postimg.cc/4fRsLwTG/biasa1.jpg"
              alt="Mid bot directional bias example 1"
              className="w-full rounded-xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <img
              src="https://i.postimg.cc/0k1PWZqx/bias2.jpg"
              alt="Mid bot directional bias example 2"
              className="w-full rounded-xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </section>

        {/* Mid Bot Settings Mindset */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Mid Bot Settings Mindset</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Instead of copying settings, think like this:</p>
          <ul className="space-y-3">
            {[
              'Aggressive Settings → best for tight ranges, more trades, higher volume',
              'Passive Settings → best for trends, better average entries, lower risk of SL',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Common Mistakes */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Common Mistakes With Mid Bots</h2>
          <div className="space-y-6">
            {[
              { num: 1, title: 'Using bias without a real view', desc: 'this turns into gambling' },
              { num: 2, title: 'Running during high volatility windows', desc: 'fast moves = instant SL' },
              { num: 3, title: 'Over-leveraging', desc: 'mid bots still carry exposure risk' },
              { num: 4, title: 'Expecting guaranteed profit', desc: 'this is still trading, not automation magic' },
            ].map((item) => (
              <div key={item.num} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Simple Mental Model */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Simple Mental Model</h2>
          <div className="bg-card border border-card-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { bot: 'Grid Bot', role: 'Range tool' },
                  { bot: 'Mid Bot', role: 'Adaptive tool' },
                  { bot: 'Mid + Bias', role: 'Conviction tool' },
                ].map((row, i, arr) => (
                  <tr key={i} className={i < arr.length - 1 ? 'border-b border-border/30' : ''}>
                    <td className="px-5 py-3.5 font-mono text-primary text-xs">{row.bot}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">→ {row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mid bots are not better than grid bots — they are just built for a different job.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">If you:</p>
              <ul className="space-y-2">
                {[
                  'Understand market timing',
                  'Can identify short-term direction',
                  'Manage your risk properly',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Then a mid bot can:</p>
              <ul className="space-y-2">
                {[
                  'Trade efficiently',
                  'Generate consistent volume',
                  'Capture directional moves',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              And most importantly: <span className="text-foreground font-medium">👉 It allows you to combine market making + trading edge in one system.</span>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
