export default function GridBotPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            MM Bot Mode
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Grid Bot
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            The most popular Tread bot.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            Grid Bot is where most people make money, and also where most people lose money.
          </p>
        </section>

        {/* What Is Grid Bot */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Is a Grid Bot</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Grid is used to lock in profit at a specific spread.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-semibold">For example: </span>
              Grid +1 means every buy price is lower than the sell price, locking in 1 basis point profit per cycle.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            However, if price moves against you before your TP fills:
          </p>
          <ul className="space-y-3 mb-8">
            {['Your bot can stall', 'And eventually hit stop loss'].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is why grid bots work best in sideways, zig-zag markets — not trending markets.
          </p>

          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-foreground font-semibold mb-3">Spread ranges:</p>
            <ul className="space-y-2 mb-4">
              {[
                '+1 to +50 → locks profit but higher chance of stalling',
                '-1 to -50 → accepts small losses to avoid stalling',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mb-3">Negative spreads like -1 are popular because:</p>
            <ul className="space-y-2">
              {['Less stalling', 'Higher fill probability'].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">Grid bots perform well in slow-moving markets:</p>
          <ul className="space-y-3 mb-8">
            {[
              'When price mean-reverts',
              'When trends are gradual',
              'When the market trades within tight, well-defined ranges',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <img
            src="https://i.postimg.cc/bqFTZK3y/MIDGRID.png"
            alt="Grid bot sideways market performance"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            However, grid bots have a critical disadvantage.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When price moves violently against your position, a grid bot does not realign with the current market price. Instead, it continues to wait for price to return to its predefined take-profit levels. In fast or aggressive markets, this can be fatal — price can hit your stop loss in a blink, leaving no room for recovery.
          </p>
          <img
            src="https://i.postimg.cc/Vz77jSLF/2.jpg"
            alt="Grid bot critical disadvantage in trending market"
            className="w-full rounded-xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </section>

        {/* How the Grid Bot Works */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">How the Grid Bot Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            So what is the mechanism behind a grid bot?
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            As discussed in the mid bot guide, the reference price is the main difference between the different modes in TreadFi. It determines where in the market orders are placed.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The original MM bot uses the mid price as a reference and places limit orders of varying quantities at different levels in the order book.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">The main mechanism of the MM bot is:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Deciding where in the book to place orders (to get the best fills)',
              'Deciding how much to place (to stay delta neutral)',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-foreground font-semibold mb-2">The grid bot is PnL-aware.</p>
            <p className="text-muted-foreground text-sm">
              It does everything the MM bot does, but instead of just using the mid price, it uses a lagging executed price of the exposure.
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">In the example:</p>
          <img
            src="https://i.postimg.cc/csrFTsr8/grid4.png"
            alt="Grid bot reference price lines explained"
            className="w-full rounded-xl mb-6"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <ul className="space-y-3 mb-8">
            {[
              'Green line = lagging average sell price − spread → highest price the bot will buy at',
              'Red line = lagging average buy price + spread → lowest price the bot will sell at',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">This ensures that:</p>
          <ul className="space-y-3">
            {[
              'Greens are always, on average, lower than the reds',
              'Which ensures positive PnL while trading',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Best Case Scenario */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Best Case Scenario</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The ideal scenario is when price oscillates within a range. The grid bot is then able to:
          </p>
          <ul className="space-y-3 mb-6">
            {['Buy low', 'Sell high'].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Depending on the duration of your order, the most optimal condition is around 10 oscillations throughout the order.
          </p>
          <img
            src="https://i.postimg.cc/bq66QGNQ/4g.png"
            alt="Grid bot ideal oscillating market"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <p className="text-muted-foreground leading-relaxed mb-4">
            In reality, your order will look more irregular, with oscillations of different sizes. However, due to the grid mechanism:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Reds (sells) generally stay above',
              'Greens (buys) stay below',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <img
            src="https://i.postimg.cc/qpmm8tMX/5.png"
            alt="Grid bot irregular oscillations with mechanism intact"
            className="w-full rounded-xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </section>

        {/* Why Doesn't This Always Work */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Doesn't This Always Work?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Imagine this scenario:</p>
          <ul className="space-y-3 mb-6">
            {[
              'The bot keeps buying as price goes down',
              'The cost basis for sells keeps moving down with it',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">But… price never goes back up to sell. Now:</p>
          <ul className="space-y-3 mb-8">
            {[
              'The bot is stuck with long exposure',
              'In a trending market',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <img
            src="https://i.postimg.cc/SmZZWXNf/6.png"
            alt="Grid bot stuck in trending market"
            className="w-full rounded-xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </section>

        {/* Grid Reset */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Grid Reset</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Grid Reset is a feature that activates when price moves beyond a certain threshold.
          </p>
          <img
            src="https://i.postimg.cc/2CHH4q8d/7.png"
            alt="Grid reset feature illustration"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <p className="text-muted-foreground leading-relaxed mb-4">At that point:</p>
          <ul className="space-y-3 mb-8">
            {[
              'The bot gives up the grid-based PnL pricing',
              'And resumes a normal mid-based MM strategy',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">In this case:</p>
          <ul className="space-y-3">
            {[
              'Greens may move above reds',
              'The bot sacrifices some gains',
              'To manage risk and potentially recover',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Managing Grid Reset */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Managing Grid Reset</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You can configure grid reset both at entry and during runtime.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you want the bot to be more patient and wait for price to return:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Increase the grid reset threshold',
              'Increase the stop loss (SL) %',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-muted-foreground text-sm">
              Grid reset is calculated as a percentage of how far price can move against your average executed price, before it realizes loss and starts a new cycle.
            </p>
          </div>
        </section>

        {/* How to Run a Successful Grid Bot */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Run a Successful Grid Bot</h2>
          <div className="space-y-4">
            {[
              { title: 'Choose the right market', desc: 'Use it in quiet, sideways markets (e.g., equity perps like XYZ100, SP500), commodities like gold $XAU / $PAXG.' },
              { title: 'Focus on liquid assets', desc: 'Liquid assets like $BTC, $ETH, $SOL give you better fill rates and tighter spreads.' },
              { title: 'Avoid volatile periods', desc: 'Stay away from Fed announcements, US market open, and other high-impact events.' },
              { title: 'Mind your duration', desc: 'The longer the bot runs, the more risk it is exposed to.' },
              { title: 'Use +1 spread or higher', desc: 'Running grid +0 does not allow the bot to collect spreads during oscillations — this increases the chance of reset or SL without meaningful profit.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How Spread Works */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">How Does Spread Work for a Grid Bot?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Spread determines your locked-in profit. It defines how far away the bot places orders relative to your average executed price.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-foreground font-semibold mb-2">In simple terms:</p>
            <p className="text-muted-foreground text-sm">The spread decides at what distance the bot takes profit.</p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">A higher spread means:</p>
          <ul className="space-y-3 mb-8">
            {[
              'The bot needs a larger price move',
              'So it will wait longer before locking in profit',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-foreground font-semibold mb-3">Example: Grid +5</p>
            <ul className="space-y-2">
              {[
                'The bot will place a sell order 0.05% above your average buy price',
                'And similarly, a buy order below your average sell price',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-2">Higher spread ✅</p>
              <p className="text-muted-foreground text-sm">Higher profit per trade</p>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-2">Trade-off ❌</p>
              <p className="text-muted-foreground text-sm">Higher chance of stalling if price doesn't reach your take-profit levels</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            So while larger spreads increase potential profit, they also increase the risk of the bot getting stuck without executing trades.
          </p>
        </section>

        {/* Ideal Price Action */}
        <section className="border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Ideal Price Action for Grid Bot</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Here are some examples of the ideal price action for a grid bot.
          </p>
          <div className="space-y-4">
            <img
              src="https://i.postimg.cc/jsLMvsLN/Screenshot-2026-03-22-at-4-30-13-PM.png"
              alt="Ideal grid bot price action example 1"
              className="w-full rounded-xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <img
              src="https://i.postimg.cc/T2Gq8G33/Screenshot-2026-01-12-at-5-37-28-PM.png"
              alt="Ideal grid bot price action example 2"
              className="w-full rounded-xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </section>

      </div>
    </div>
  );
}
