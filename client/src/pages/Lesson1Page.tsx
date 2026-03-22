import { BookOpen, Clock, BarChart2, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import imgTrendingPullbacks from '@assets/lesson-trending-pullbacks.jpg';
import imgSidewaysTight from '@assets/lesson-sideways-tight.jpg';
import imgConsolidationSetup from '@assets/lesson-consolidation-setup.jpg';
import imgTrendingControlled from '@assets/lesson-trending-controlled.jpg';
import imgOrderBreakdown from '@assets/lesson-order-breakdown.jpg';
import imgRangeCalculation from '@assets/lesson-range-calculation.jpg';

export default function Lesson1Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <Link to="/lessons" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10" data-testid="link-back-to-lessons">
          <ArrowLeft size={15} />
          Back to Lessons
        </Link>

        {/* Page header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <BookOpen size={14} />
            Lesson 1
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How to Select Ranges & Configure MM Bot Settings
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Most people lose money with market-making bots not because the bot doesn't work, but because they run it at the wrong time, in the wrong market conditions, and with mismatched settings.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock size={13} />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart2 size={13} />
              <span>Intermediate</span>
            </div>
            <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
              Intermediate
            </Badge>
          </div>
        </div>

        {/* Section: Time Is the Most Important Factor */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Time Is the Most Important Factor</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Before looking at charts or indicators, I always look at time. There are specific periods during the day when markets move aggressively. Running an MM bot during these windows is risky because sudden volatility can easily push price into your stop loss.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">I avoid running MM bots during:</p>
            <ul className="space-y-2.5">
              {[
                '30–40 minutes before and after red level news',
                'New York market open: 8:30 – 10:30 NY time',
                'New York lunch volatility: 1:30 – 2:30 NY time',
                'London / Europe open: 2:00 – 4:00 NY',
                'Asia open: 19:00 – 21:00 NY',
                'Red-level news on Forex Factory: don\'t run bot from 10 minutes before the release up to 30 minutes after',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              These sessions often produce fast, impulsive moves driven by liquidity shifts and market opens — exactly the type of movement that can wipe MM positions.
            </p>
          </div>
        </section>

        {/* Section: Understanding Market Behavior */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Understanding Market Behavior for MM Bots</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Outside these high-volatility windows, the market usually behaves in one of the following ways:
          </p>

          <div className="space-y-8">
            {/* 1. Trending With Pullbacks */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-2">1. Trending With Pullbacks</p>
              <p className="text-muted-foreground text-sm mb-4">
                Price moves directionally but keeps making small pullbacks. This is actually good for MM bots when using passive settings. In this scenario, the bot:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Gradually averages into positions',
                  'Builds exposure slowly up to max exposure',
                  'Closes positions during small retracements',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-4">
                This back-and-forth movement allows the bot to work efficiently without overloading exposure.
              </p>
              <img
                src={imgTrendingPullbacks}
                alt="Slow BTC trending market on a weekend — ideal for passive settings"
                className="w-full rounded-xl"
              />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Slow BTC trending market on a weekend. Ideal for passive setting as it averages in your entry.
              </p>
            </div>

            {/* 2. Sideways Market */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-2">2. Sideways Market With Tight Ranges</p>
              <p className="text-muted-foreground text-sm mb-4">
                This is where aggressive settings perform best. When price chops within a small range:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'The bot buys and sells frequently',
                  'Captures tight spreads',
                  'Generates more volume and fees',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-4">
                Aggressive mode is ideal only when the range is small and clearly defined.
              </p>
              <img
                src={imgSidewaysTight}
                alt="Sideways market with tight range — ideal for aggressive settings"
                className="w-full rounded-xl"
              />
            </div>

            {/* 3. Large Ranges */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-2">3. Large Ranges</p>
              <p className="text-muted-foreground text-sm">
                For larger ranges, passive settings are safer. Using aggressive mode in wide ranges stacks too much exposure around a single price. If price moves slightly away from the average entry, the stop loss can get hit quickly. Passive mode ladders entries more evenly, resulting in a better average entry price and improved risk control.
              </p>
            </div>
          </div>
        </section>

        {/* Section: How I Actually Determine Trading Ranges */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How I Actually Determine Trading Ranges</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Once I'm outside the high-volatility time windows, I don't immediately deploy the bot. I wait for price behavior to confirm a range. There are two main setups I look for:
          </p>

          <div className="space-y-8">
            {/* Setup 1 */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-2">1. Consolidation After Key Levels</p>
              <p className="text-muted-foreground text-sm mb-4">
                This is one of my most reliable range signals. I look for price to:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Reach a previously consolidated area',
                  'Sweep or tap an important high or low',
                  'Then slow down',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-2 font-medium text-foreground">The key confirmation is multiple inside candles. Typically:</p>
              <ul className="space-y-2 mb-4">
                {[
                  '5–6 consecutive inside or overlapping candles',
                  'Small candle bodies',
                  'Reduced volatility',
                  'Clear rejection of expansion',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-6">
                This tells me that aggressive participants are done, liquidity is balanced, and price is likely to oscillate within a defined range — ideal for MM bots. Look at the example below: the market aggressively dropped during London open, then took an important level and reached a previously consolidated area. Once multiple inside candles appeared, the bot was deployed during the 4:00–6:00 UTC window.
              </p>
              <img
                src={imgConsolidationSetup}
                alt="Consolidation after key level — bot deployment example"
                className="w-full rounded-xl"
              />
            </div>

            {/* Setup 2 */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-2">2. Trending Market With Controlled Pullbacks</p>
              <p className="text-muted-foreground text-sm mb-4">
                The second setup is when the market is trending, but not impulsively. What I want to see:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Directional bias (up or down)',
                  'Regular pullbacks',
                  'No large single-candle expansions',
                  'Price constantly retracing and continuing',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-6">
                This kind of back-and-forth trending behavior creates a dynamic range. With passive MM settings, the bot averages into positions during trend continuation, builds exposure gradually, and closes positions on small retracements.
              </p>
              <img
                src={imgTrendingControlled}
                alt="Trending market with controlled pullbacks"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Section: Matching Market Behavior With MM Settings */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Matching Market Behavior With MM Settings</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Sideways, tight ranges → Aggressive settings</p>
              <ul className="space-y-2">
                {['Frequent fills', 'Higher turnover', 'Better fee capture'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Larger or dynamic ranges → Passive settings</p>
              <ul className="space-y-2">
                {['Better average entry', 'Reduced concentration of exposure', 'Lower risk of SL being hit on small moves'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-5 mt-4">
            <p className="text-muted-foreground text-sm">
              Aggressive mode in large ranges often stacks exposure too close to one price — that's where most SLs come from.
            </p>
          </div>
        </section>

        {/* Section: How I Calculate Range, Margin, and Stop Loss */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How I Calculate Range, Margin, and Stop Loss</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is the most important part. Most MM bots will use around 4–5% of your total notional size as maximum exposure at any given time.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-6">
            <p className="text-foreground font-semibold mb-3">Example:</p>
            <ul className="space-y-2 mb-4">
              {['Bot order size: $10,000', 'Max exposure at any time: ~$450 (with a small buffer)'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={imgOrderBreakdown}
            alt="Order breakdown for an 11k notional PAXG order with Paradex"
            className="w-full rounded-xl mb-2"
          />
          <p className="text-xs text-muted-foreground mb-6 text-center">
            Order breakdown for a 11k notional PAXG order with Paradex
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-6">
            <p className="text-foreground font-semibold mb-3">Now assume:</p>
            <ul className="space-y-2 mb-4">
              {['Margin: $20', 'Stop loss: 10% → $2'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mb-3">To calculate how much price can move against you:</p>
            <div className="bg-background border border-border/50 rounded-lg px-4 py-3 font-mono text-sm text-foreground mb-3">
              2 / 450 = 0.45%
            </div>
            <p className="text-muted-foreground text-sm">
              This means price can move ~0.45% away from your average entry before the stop loss is hit. That 0.45% becomes your <span className="text-foreground font-semibold">effective trading range</span>.
            </p>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Look at the current range and add some buffer — that should give you safety from wicks. In this example, looking at a 0.6% range means max exposure should have room for a 0.6% price change before hitting the SL amount.
          </p>
          <img
            src={imgRangeCalculation}
            alt="Range calculation example"
            className="w-full rounded-xl"
          />
        </section>

        {/* Section: Matching the Range With the Chart */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Matching the Range With the Chart</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Once you know your maximum allowable range:</p>
          <ul className="space-y-3 mb-6">
            {[
              'Open the chart',
              'Observe how price behaves during your chosen time window',
              'Ask whether that percentage range is realistic',
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{pt}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If the market frequently exceeds that range, you must adjust your settings.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-3">How to Increase Your Range Safely</p>
            <p className="text-muted-foreground text-sm mb-3">
              If you want more room — say 0.6% instead of 0.45%:
            </p>
            <ul className="space-y-2 mb-3">
              {['0.6% of $450 ≈ $2.7 SL', 'If SL is 10%, margin ≈ $27'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">
              You can also tweak leverage if you don't want to change margin to get your desired range. By adjusting stop loss and margin, you directly control how much room price has before hitting your SL — this lets you tune the bot logically instead of guessing settings.
            </p>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Successful market making isn't about copying someone else's settings. It's about:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Right pair',
              'Choosing the right time',
              'Understanding market behavior',
              'Matching range, exposure, and stop loss',
              'Selecting aggressive vs passive modes correctly',
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{pt}</span>
              </li>
            ))}
          </ul>
          <div className="p-6 bg-card border border-card-border rounded-xl text-center">
            <p className="text-foreground font-semibold">
              Get these right, and MM bots become far more consistent and predictable.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
