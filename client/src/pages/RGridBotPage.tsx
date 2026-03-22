export default function RGridBotPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            MM Bot Mode
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            RGRID
          </h1>
          <p className="mt-6 mb-6 text-muted-foreground leading-relaxed max-w-3xl">
            Before we get into how to use Tread, the first step is creating an account. Use this referral link:{' '}
            <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              https://app.tread.fi/referral/59S1TB1X
            </a>{' '}
            — Complete the signup process, set your credentials, and log in.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            RGRID is often misunderstood because people assume it's just a "reverse grid bot." It's not that simple.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
            This guide explains RGRID in simple terms: how it works, when to run it, when to avoid it, and what actually creates the edge.
          </p>
        </section>

        {/* What Is RGRID */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Is RGRID — In Simple Words</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            According to <span className="text-primary">@tread_fi</span> founder <span className="text-primary">@davidyjeong</span>, RGRID is designed to behave opposite to a traditional grid bot.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Grid bots thrive in choppy, sideways markets',
              'RGRID thrives in clean, directional moves',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If a normal grid keeps getting stopped out in a trend, RGRID is built to turn that same directional behavior into profit capture instead of stop-loss damage.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            But this does not mean RGRID is safer. It just means it needs a different environment.
          </p>
          <div className="space-y-4">
            <img
              src="https://i.postimg.cc/4GqR5Xgn/1.jpg"
              alt="RGRID vs Grid comparison"
              className="w-full rounded-xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <img
              src="https://i.postimg.cc/KbwhNm2k/2.jpg"
              alt="RGRID behavior illustration"
              className="w-full rounded-xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </section>

        {/* How RGRID Actually Works */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">How RGRID Actually Works (Mechanics Explained Simply)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">RGRID logic is built around one central reference point:</p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-foreground font-semibold">Your average exposure price (combined average of current buys and sells)</p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Unlike a normal grid bot that places fixed ladder orders above and below price, RGRID continuously recalculates its order levels based on your live average exposure.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">According to the documentation:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Buy orders are placed at: average exposure × (1 + spread)',
              'Sell orders are placed at: average exposure × (1 − spread)',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Orders only execute when price crosses those calculated levels.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Right now, RGRID spread is set to 0. That simplifies the logic:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'If price moves above your average exposure price → bot places buy orders',
              'If price moves below your average exposure price → bot places sell orders',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Now let's understand core mechanics of RGRID with an example.
          </p>
          <img
            src="https://i.postimg.cc/Fv8XZh40/rgrid.png"
            alt="RGRID chart mechanics example"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            Think of this chart as showing three things at the same time: how the bot builds position, where it buys and sells, and when it resets profit.
          </p>

          <div className="space-y-6">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-2">🟩 Green/Red Dotted Line = Average Exposure Price</p>
              <p className="text-muted-foreground text-sm mb-3">This is the core anchor of RGRID.</p>
              <ul className="space-y-2">
                {[
                  'It represents your current average position price',
                  'The bot makes decisions based on this line',
                  'It keeps shifting as the bot trades',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-3">Think of it as the bot's "center of gravity."</p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-2">⚪ Grey Line = Current Market Price</p>
              <p className="text-muted-foreground text-sm">
                This is just the live price moving up and down. RGRID reacts to how price behaves relative to the average exposure line.
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">🔹 How RGRID Trades Around This Line</p>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground text-sm font-medium mb-2">✅ When price goes ABOVE the exposure line → Bot BUYS</p>
                  <ul className="space-y-1">
                    {[
                      'As market price crosses above the average exposure',
                      'RGRID places buy orders',
                      'It adds in the direction of movement',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-sm mt-2">This is opposite of a normal grid (which usually sells above).</p>
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium mb-2">✅ When price goes BELOW the exposure line → Bot SELLS</p>
                  <ul className="space-y-1">
                    {[
                      'When price drops below the exposure average',
                      'RGRID places sell orders',
                      'It reduces or flips exposure',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">🔹 Why It's Called "Reverse Grid" Behavior</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-foreground text-sm font-medium mb-2">In a normal grid:</p>
                  <ul className="space-y-1">
                    {['Above = sell', 'Below = buy', 'Designed for chop'].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium mb-2">In RGRID:</p>
                  <ul className="space-y-1">
                    {['Above = buy', 'Below = sell', 'Designed for directional movement'].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4">That's the reversal.</p>
            </div>
          </div>

          <img
            src="https://i.postimg.cc/wzZYV9pR/4.jpg"
            alt="RGRID exposure and limits panel"
            className="w-full rounded-xl mt-8 mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />

          <div className="space-y-6">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">🔹 Top Panel — Exposure & Limits</p>
              <div className="space-y-3">
                <div>
                  <p className="text-foreground text-sm font-medium mb-2">⚪ White Stepped Line = Net Exposure</p>
                  <ul className="space-y-1">
                    {[
                      'Shows how large the bot\'s position is over time',
                      'When it rises → exposure increasing',
                      'When it drops → exposure decreasing',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium mb-2">🟧 Dashed Bands = Exposure Limits</p>
                  <p className="text-muted-foreground text-sm mb-2">These are safety boundaries. When max exposure is hit:</p>
                  <ul className="space-y-1">
                    {[
                      'Bot stops adding more size',
                      'It waits for profit reset instead of growing risk further',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <img
              src="https://i.postimg.cc/zzY8tp1q/exposure.jpg"
              alt="RGRID top panel exposure and limits"
              className="w-full rounded-xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />

            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">🔹 Profit Reset</p>
              <p className="text-muted-foreground text-sm mb-3">Here's what happens:</p>
              <div className="space-y-2">
                {[
                  'Bot builds position around the exposure line',
                  'Market trends away cleanly',
                  'Distance reaches your Profit Reset %',
                  'Bot closes the position in profit',
                  'Exposure resets to zero',
                  'Average price jumps to current market',
                  'New RGRID cycle begins',
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-xs">
                      {i + 1}
                    </div>
                    <span className="text-muted-foreground text-sm">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4">This is the moment RGRID "locks the win."</p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">🔹 Why RGRID Loses in Ranging Markets</p>
              <p className="text-muted-foreground text-sm mb-3">When market ranges tightly:</p>
              <ul className="space-y-2 mb-4">
                {[
                  'Price keeps crossing above/below exposure line',
                  'Bot keeps buying and selling repeatedly',
                  'No sustained move away from average',
                  'Profit reset never triggers',
                  'Small losses stack up',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm font-medium">RGRID needs clean movement — not internal chop.</p>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-5 mt-6">
            <p className="text-foreground font-semibold mb-3">In short, RGRID behaves like a dynamic mid-point trader:</p>
            <ul className="space-y-2">
              {[
                'Uses your average exposure as the anchor',
                'Buys above it',
                'Sells below it',
                'Builds position gradually',
                'Waits for expansion',
                'Closes everything when profit reset distance is reached',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Example 1 */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Example 1: How RGRID Generates Positive PnL</h2>
          <img
            src="https://i.postimg.cc/szqCc3rY/5.png"
            alt="RGRID positive PnL example"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <p className="text-muted-foreground leading-relaxed mb-6">
            This example shows a full RGRID profit cycle, from position building to profit reset.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Price moves above the average exposure line, so the bot keeps buying and building a long position.',
              'Net exposure (white line in the top panel) increases until it reaches the max exposure limit.',
              'During this directional move, PnL rises because price continues trending away from the average.',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">Next phase:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Price continues far enough from the average exposure price to hit the Profit Reset % target.',
              'The bot then sells to close the position in profit.',
              'Exposure drops back down and the average resets to the new market price.',
              'That completes one profitable RGRID cycle.',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">After that:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Market starts ranging again.',
              'RGRID behaves like a mid-based trader (buy above / sell below average).',
              'In this ranging phase, PnL slowly gets eaten, which shows why RGRID works best when a clean trend appears after position building.',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-semibold">In one line: </span>
              RGRID builds during movement, locks profit on expansion, and gives back edge during chop — timing and structure decide profitability.
            </p>
          </div>
          <img
            src="https://i.postimg.cc/8G9gHTSF/6.jpg"
            alt="RGRID positive PnL cycle detail"
            className="w-full rounded-xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </section>

        {/* Example 2 */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Example 2: When RGRID Loses — Sideways & Mean-Reverting Market</h2>
          <img
            src="https://i.postimg.cc/MwNJDzSy/7.png"
            alt="RGRID loss in sideways market example"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <p className="text-muted-foreground leading-relaxed mb-6">
            This example shows RGRID running during a sideways, slow, mean-reverting market — which is its weakest environment.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">What's happening here:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Price keeps moving slightly above and below the average exposure line',
              'The bot keeps buying above average and selling below average',
              'Small micro-trends appear, but they don\'t extend',
              'Each push quickly mean-reverts back into the range',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">Because there is no strong continuation:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Profit Reset % never gets hit',
              'Positions keep getting adjusted back and forth',
              'Fees and small adverse moves stack up',
              'Net PnL slowly trends downward',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">Even though there are mini trends, they are:</p>
          <ul className="space-y-3 mb-8">
            {['too slow', 'too choppy', 'too mean-reverting'].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            RGRID needs fast, directional expansion — not slow rotational movement.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-semibold">In one line: </span>
              RGRID bleeds in chop and thrives in expansion — speed and continuation matter more than direction alone.
            </p>
          </div>
        </section>

        {/* The Most Important Edge */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Most Important Edge: Identifying Trendy Price Action</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The real edge with RGRID is not the settings — it's the market condition.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most traders look at higher timeframes to judge trend. That works for swing trading, but not for RGRID execution.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For RGRID, the decision must come from very short-term structure. The most reliable lens:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-8">
            <p className="text-foreground font-semibold">👉 1-minute timeframe price action</p>
            <p className="text-muted-foreground text-sm mt-2">Anything higher and the signal becomes too slow and too averaged out. RGRID needs micro-structure trend, not macro trend.</p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">You want to see price behavior that looks like:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Continuous directional movement',
              'Small or shallow pullbacks',
              'Minimal consolidation inside the move',
              'Order-flow driven pushes',
              'A "TWAP-like" steady grind in one direction',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The move should feel like: <span className="text-foreground italic">price is being executed steadily rather than debated.</span>
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">When you look at the 1-minute chart, the structure should show:</p>
          <ul className="space-y-3 mb-8">
            {[
              'consecutive pushes',
              'weak retracements',
              'no repeated back-and-forth inside the same band',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-foreground mb-6">Ideal Price Action Structure for RGRID</h3>
          <img
            src="https://i.postimg.cc/qrSHLpTX/8.png"
            alt="Ideal RGRID price action chart structure"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <p className="text-muted-foreground leading-relaxed mb-6">
            The chart above shows a textbook structure where RGRID performs best. Notice the highlighted zone — price is moving in a steady, directional manner with very little internal friction. The move feels almost like a continuous TWAP execution rather than a battle between buyers and sellers.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">Key characteristics of this structure:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Strong directional move',
              'Minimal pullbacks between pushes',
              'No repeated sideways compression',
              'No heavy rejection wicks inside the move',
              'Momentum flows cleanly from one level to the next',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            This is what I call "low internal resistance" price action.
          </p>

          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-3">Why "Left-Side Cleanliness" Matters</p>
            <p className="text-muted-foreground text-sm mb-4">
              One important concept when evaluating RGRID conditions is what's on the left side of the chart. In the example, the left side is relatively clean — there is no dense consolidation cluster or heavy trading range acting as friction. That means:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Fewer trapped positions',
                'Less opposing liquidity',
                'Lower mean-reversion pressure',
                'Smoother continuation probability',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">
              When the left side is crowded with consolidation, price tends to keep snapping back into those areas. That behavior hurts RGRID because the bot depends on continuation, not repeated rotation. When the left side is clean, price doesn't keep revisiting prior ranges — it accepts new levels quickly. That's where RGRID thrives.
            </p>
          </div>
        </section>

        {/* Best Time */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Time Does RGRID Work Best?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            RGRID performs best during high-participation market sessions, especially:
          </p>
          <ul className="space-y-3 mb-8">
            {['London Open', 'New York Open'].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">These sessions typically produce:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Strong order flow',
              'Directional continuation after the opening impulse',
              'Sustained short-term trends',
              'Momentum-driven execution',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-8">
            This is exactly the environment RGRID is designed for.
          </p>

          <h3 className="text-lg font-bold text-foreground mb-6">Why Market Opens Favor RGRID</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">At London and New York open, markets often show:</p>
          <div className="space-y-4 mb-8">
            {[
              { num: 1, title: 'Initial volatility spike' },
              { num: 2, title: 'Quick direction establishment' },
              { num: 3, title: 'Follow-through trend moves' },
              { num: 4, title: 'Reduced micro mean-reversion (for a period)' },
            ].map((item) => (
              <div key={item.num} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-sm">
                  {item.num}
                </div>
                <div className="flex items-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            After the first burst of volatility, price frequently transitions into a steady directional push — the "micro-trend" behavior that RGRID captures well.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">This creates:</p>
          <ul className="space-y-3 mb-6">
            {[
              'Cleaner 1-minute structure',
              'Lower internal chop',
              'More continuation than rotation',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">Which is ideal for RGRID logic.</p>
        </section>

        {/* Contrast With Grid Bots */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Exact Contrast With Grid Bots</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is where RGRID and traditional grid bots behave like opposites.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Grid bots perform worst during London/NY opens because:</p>
              <ul className="space-y-2">
                {[
                  'Breakouts keep extending',
                  'Pullbacks are shallow',
                  'Mean reversion fails',
                  'Stop losses get hit repeatedly',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">RGRID performs best during London/NY opens because:</p>
              <ul className="space-y-2">
                {[
                  'Momentum extends',
                  'Continuation beats reversion',
                  'Stop-style behavior turns into profit capture',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Passive Participation Rate */}
        <section className="mb-16 border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why RGRID Works Best With Passive Participation Rate</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            RGRID performs best when configured with a passive participation rate, not an aggressive one.
          </p>
          <img
            src="https://i.postimg.cc/zN6YjqrR/9.jpg"
            alt="RGRID passive participation rate setting"
            className="w-full rounded-xl mb-8"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Even though RGRID is designed for trending moves, its strength is not in chasing price — it's in position building during quiet structure and monetizing expansion when breakout happens.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">With a passive participation rate:</p>
          <ul className="space-y-3 mb-6">
            {[
              'Orders get filled gradually',
              'Exposure builds slowly during ranging or low-volatility phases',
              'Risk grows in a more measured way',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Then when a directional breakout starts, RGRID's directional logic begins working in your favor — and the move away from your average exposure allows the profit reset trigger to close the cycle in profit.
          </p>
        </section>

        {/* Short Conclusion */}
        <section className="border-t border-border/30 pt-14">
          <h2 className="text-2xl font-bold text-foreground mb-6">Short Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            RGRID is not a replacement for grid — it's a different weapon.
          </p>
          <div className="bg-card border border-card-border rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { bot: 'Grid', role: 'harvests chop' },
                  { bot: 'RGRID', role: 'harvests expansion' },
                ].map((row, i, arr) => (
                  <tr key={i} className={i < arr.length - 1 ? 'border-b border-border/30' : ''}>
                    <td className="px-5 py-3.5 font-mono text-primary text-xs">{row.bot}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">→ {row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              It builds during structure and gets paid during continuation. Your real edge is not configuration — it's choosing the right market condition and session timing.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
