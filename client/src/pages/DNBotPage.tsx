import { ArrowLeft, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import img1 from '@assets/1_1776762373784.png';
import img2 from '@assets/2_1776762373784.png';
import img3 from '@assets/3_1776762373780.png';
import img4 from '@assets/4_1776762373781.png';
import img5 from '@assets/5_1776762373782.png';
import img6 from '@assets/6_1776762373782.png';
import img7 from '@assets/7_1776762373782.png';
import img8 from '@assets/8_1776762373783.png';
import img9 from '@assets/9_1776762373783.png';
import img10 from '@assets/10_1776762373785.png';

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="rounded-xl max-w-full mx-auto block my-5" />
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((pt, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
        <span className="text-muted-foreground text-sm">{pt}</span>
      </li>
    ))}
  </ul>
);

export default function DNBotPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <Link to="/lessons" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10" data-testid="link-back-to-lessons">
          <ArrowLeft size={15} />
          Back to Lessons
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Tag size={14} />
            DN Bot
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How to Run a DN Bot on Tread + The Strategies That Actually Work
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            A Delta Neutral (DN) bot is one of the most powerful tools in treadfi — especially when used correctly. At its core, a DN bot lets you build a position where your price exposure is close to zero, while still earning yield from inefficiencies in the market.
          </p>
          <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
            MM Bot Mode
          </Badge>
        </div>

        {/* Referral */}
        <p className="text-muted-foreground leading-relaxed mb-14">
          Before we get into how to use Tread, the first step is creating an account. Use this referral link:{' '}
          <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://app.tread.fi/referral/59S1TB1X
          </a>{' '}
          — Complete the signup process, set your credentials, and log in.
        </p>

        {/* What is a DN Position */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What is a DN Position?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Imagine you want to buy a spot asset. Normally, you're exposed to price movements. If price drops, you lose.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">Now what if you could hold that asset but completely remove price risk?</p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-3">You can do that by:</p>
            <Bullets items={['Buying the asset in spot', 'Shorting the same asset in futures']} />
            <p className="text-muted-foreground text-sm mt-4">This creates a delta neutral position — your gains and losses from price cancel each other out.</p>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Sounds simple, but execution is where most people fail.</p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-4">
            <p className="text-foreground font-semibold mb-3">If you:</p>
            <Bullets items={['Market buy spot', 'Market sell futures']} />
          </div>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-3">You get hit by:</p>
            <Bullets items={['Slippage', 'Taker fees', 'Poor execution']} />
            <p className="text-muted-foreground text-sm mt-4">Over time, this eats into your profits significantly.</p>
          </div>
        </section>

        {/* How Tread DN Bot Solves This */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How Tread DN Bot Solves This</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The DN bot uses a sophisticated execution algorithm to handle both legs simultaneously. Instead of large market orders, it:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <Bullets items={['Splits orders into multiple micro orders', 'Executes both sides at the same time', 'Minimizes slippage and fees']} />
            <p className="text-foreground font-semibold mt-4">Result:</p>
            <p className="text-muted-foreground text-sm mt-2">You enter a properly hedged position with efficient pricing and minimal cost.</p>
          </div>
        </section>

        {/* What Can You Use a DN Bot For */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Can You Use a DN Bot For?</h2>

          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold text-lg mb-3">1) Funding Rate Arbitrage</p>
            <p className="text-muted-foreground text-sm mb-4">One of the most popular strategies. Funding rates can differ across exchanges.</p>
            <p className="text-foreground font-semibold text-sm mb-3">Example:</p>
            <Bullets items={['Exchange A → Positive funding (shorts get paid)', 'Exchange B → Negative funding (longs get paid)']} />
            <div className="mt-4 border-t border-border/30 pt-4">
              <p className="text-foreground font-semibold text-sm mb-3">You can:</p>
              <Bullets items={['Short on Exchange A (get paid)', 'Long on Exchange B (get paid)']} />
              <div className="mt-3 space-y-1">
                <p className="text-muted-foreground text-sm">Your price exposure = ~0</p>
                <p className="text-muted-foreground text-sm">Your profit = funding from both sides</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4 italic">There are tools like loris.tools that help identify these opportunities. This is covered later in this post.</p>
          </div>

          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold text-lg mb-3">2) Cross Pair Trades</p>
            <p className="text-muted-foreground text-sm mb-4">You're bullish on one asset and bearish on another. Instead of taking directional risk, you can:</p>
            <Bullets items={['Long the strong asset', 'Short the weak asset']} />
            <p className="text-muted-foreground text-sm mt-4 mb-3">Both executed simultaneously using the DN bot.</p>
            <p className="text-foreground font-semibold text-sm mb-3">Examples of Pair Trades</p>
            <Bullets items={[
              'Long HYPE / Short SOL',
              'Long ETH / Short BTC',
              'Long BTC / Short weaker altcoins',
              'Long BTC / Short altcoin basket (you can use the TOTAL2-USDC pair on Para/Hyperliquid, which tracks the altcoin market excluding BTC)',
            ]} />
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-muted-foreground text-sm mb-3">There are countless ways to structure pair trades using the DN bot. The edge comes from:</p>
              <Bullets items={['Identifying relative strength', 'Positioning accordingly']} />
              <p className="text-muted-foreground text-sm mt-4">You just have to keep exploring and finding setups where the imbalance is clear. DN bots unlock a completely different way of trading — focused on efficiency, structure, and edge, rather than pure speculation.</p>
            </div>
          </div>
        </section>

        {/* How to Actually Run a DN Bot */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Actually Run a DN Bot on Tread</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">Here's exactly how you can set up and run a Delta Neutral (DN) bot on Tread.</p>

          {/* Step 1 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 1: Select DN Bot</p>
            <Bullets items={['Go to the Tread menu', 'Select DN Bot']} />
            <Img src={img1} alt="Select DN Bot from the Tread menu" />
          </div>

          {/* Step 2 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 2: Choose Your Account</p>
            <p className="text-muted-foreground text-sm mb-3">Pick the account where you want to:</p>
            <Bullets items={['Long one leg', 'Short the other leg']} />
            <Img src={img2} alt="Choose account for DN bot" />
            <Bullets items={['Same exchange', 'Or across different exchanges']} />
          </div>

          {/* Step 3 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 3: Select the Pair</p>
            <p className="text-muted-foreground text-sm mb-3">Choose the asset you want to run the DN strategy on. This could be:</p>
            <Bullets items={['Same asset (for funding arb)', 'Or different assets (for relative trades)']} />
          </div>

          {/* Step 4 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 4: Enter Notional</p>
            <p className="text-muted-foreground text-sm mb-3">This is your total position size.</p>
            <div className="bg-background border border-border/50 rounded-lg p-4 mb-4">
              <p className="text-foreground font-medium text-sm mb-2">Example:</p>
              <Bullets items={['If you enter $500 notional', 'The bot will open: $250 long + $250 short']} />
              <p className="text-muted-foreground text-sm mt-3">So your total exposure = $500, but your net exposure ≈ 0</p>
            </div>
            <p className="text-muted-foreground text-sm italic">If you are running DN on exchanges like Nado, recommended minimum notional is 3–4k as Nado has a higher minimum size.</p>
          </div>

          {/* Step 5 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 5: Set TWAP Duration</p>
            <p className="text-muted-foreground text-sm mb-3">This is one of the most important settings.</p>
            <div className="bg-background border border-border/50 rounded-lg p-4 mb-4">
              <p className="text-foreground font-medium text-sm mb-2">TWAP duration = how long the bot takes to build your position</p>
              <p className="text-muted-foreground text-sm italic">It does NOT mean how long the trade stays open.</p>
            </div>
            <p className="text-foreground font-semibold text-sm mb-3">How to Choose TWAP?</p>
            <p className="text-muted-foreground text-sm mb-3">It depends on pair liquidity and your position size.</p>
            <p className="text-foreground font-semibold text-sm mb-2">General guideline:</p>
            <Bullets items={['< $10k on liquid pairs → 10–20 minutes works well', 'Larger size / illiquid pairs → use longer duration']} />
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-foreground font-semibold text-sm mb-3">Why This Matters</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-background border border-border/50 rounded-lg p-4">
                  <p className="text-foreground font-medium text-sm mb-2">Short duration</p>
                  <Bullets items={['Bot may use market orders', 'Higher fees', 'More slippage']} />
                </div>
                <div className="bg-background border border-border/50 rounded-lg p-4">
                  <p className="text-foreground font-medium text-sm mb-2">Longer duration</p>
                  <Bullets items={['Slower execution', 'Better pricing', 'Lower fees']} />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-4">So you're deciding between: ⚡ Faster entry vs 💰 Better execution</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 6: Position Duration</p>
            <p className="text-muted-foreground text-sm mb-3">This defines when the bot will close your position.</p>
            <Bullets items={['Leave empty → runs indefinitely', 'Set a time → auto-unwinds after that']} />
            <p className="text-muted-foreground text-sm mt-3 italic">If you don't set this, you'll need to close it manually.</p>
          </div>

          {/* Step 7 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 7: Set Stop Loss (SL)</p>
            <p className="text-muted-foreground text-sm mb-3">This is a safety mechanism.</p>
            <Bullets items={[
              'You define a % distance from liquidation',
              'If price moves close to liquidation on one leg',
              'The bot automatically unwinds the entire position',
            ]} />
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-foreground font-semibold text-sm mb-2">Why this matters:</p>
              <Bullets items={['Prevents one side from getting liquidated', 'Keeps your strategy from breaking']} />
            </div>
          </div>

          {/* Step 8 */}
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">Step 8: Start the Bot</p>
            <p className="text-muted-foreground text-sm mb-3">Click Start. The bot will:</p>
            <Bullets items={[
              'Gradually build both legs',
              'Execute over your chosen TWAP duration',
              'Optimize for minimal slippage and fees',
            ]} />
          </div>
        </section>

        {/* Monitoring */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Monitoring Your Position</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Once live, head to the Position Tab.</p>
          <Img src={img3} alt="Position tab in TreadFi DN bot" />
          <p className="text-muted-foreground leading-relaxed mb-6">Here's what matters:</p>

          <div className="space-y-4">
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-3">Net Exposure</p>
              <p className="text-muted-foreground text-sm mb-3">This shows how balanced your position is.</p>
              <Bullets items={['~0% → Perfectly delta neutral', 'Positive → More long exposure', 'Negative → More short exposure']} />
              <p className="text-muted-foreground text-sm mt-3 italic">If it goes above ±1%, you may see an "Unbalanced" warning.</p>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-3">Funding Rate</p>
              <p className="text-muted-foreground text-sm mb-3">This is your net funding across both legs.</p>
              <Bullets items={['Green → You\'re earning funding ✅', 'Red → You\'re paying funding ❌']} />
              <p className="text-muted-foreground text-sm mt-3 font-medium">Your goal (in funding arb): Stay delta neutral and collect positive funding</p>
            </div>
          </div>
        </section>

        {/* How to Close */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Close (Unwind)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">To exit the position:</p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-muted-foreground text-sm mb-3">Click the two-arrow unwind button</p>
            <Img src={img4} alt="Unwind button for DN position" />
            <Bullets items={['The bot will close both legs', 'Bring you back to neutral (no exposure)']} />
          </div>
          <div className="mt-6 bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-3">The DN bot is not just a tool — it's an edge. You can use it to:</p>
            <Bullets items={[
              'Build hedged positions',
              'Run funding arbitrage',
              'Trade relative strength (long vs short)',
              'Avoid unnecessary fees and slippage',
            ]} />
          </div>
        </section>

        {/* DN Strategy #1: Funding Rate Arbitrage */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">DN Strategy #1: Funding Rate Arbitrage</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            One of the most powerful ways to use a DN bot is funding arbitrage. This is where you earn yield from differences in funding rates across exchanges, while keeping your price exposure close to zero.
          </p>

          {/* Step 1 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 1: Find Opportunities (Using loris.tools)</p>
            <ul className="space-y-2 mb-4">
              {['Go to loris.tools', 'Open Exchange Filter'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <Img src={img5} alt="loris.tools exchange filter" />
            <div className="mt-2">
              <Bullets items={['Select: DEX only', 'Tread-integrated exchanges']} />
            </div>
            <p className="text-muted-foreground text-sm mt-4 mb-2">Click on <span className="text-foreground font-medium">"Max Arb"</span></p>
            <Img src={img6} alt="Max Arb column in loris.tools" />
            <p className="text-muted-foreground text-sm mb-3">You'll see:</p>
            <Bullets items={['Pairs', 'Funding rates across exchanges']} />
          </div>

          {/* How Funding Works */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-3">How Funding Actually Works (Important)</p>
            <p className="text-muted-foreground text-sm mb-3">Most people misunderstand this.</p>
            <Bullets items={['Negative funding → Longs get paid', 'Positive funding → Shorts get paid']} />
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-foreground font-semibold text-sm mb-2">But here's the key insight:</p>
              <p className="text-muted-foreground text-sm mb-3">The arb doesn't require one side to be positive and the other negative.</p>
              <p className="text-muted-foreground text-sm">You're simply looking for: <span className="text-foreground font-medium">where you get paid more on one side than you pay on the other.</span></p>
            </div>
          </div>

          {/* Extra Edge */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-3">Extra Edge: Let the Tool Guide Your Execution</p>
            <p className="text-muted-foreground text-sm mb-3">When using loris.tools, for each pair it already shows:</p>
            <Bullets items={['Which exchange to long (buy)', 'Which exchange to short (sell)']} />
          </div>

          {/* Example */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Example</p>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm mb-2">On Hyperliquid → -806% funding → You get paid to long</p>
                <Img src={img7} alt="Hyperliquid funding rate -806%" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-2">On Aster → -500% funding → You pay to short</p>
                <Img src={img8} alt="Aster funding rate -500%" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-foreground font-semibold text-sm mb-3">So you:</p>
              <Bullets items={['Long on Hyperliquid (earn 806%)', 'Short on Aster (pay 500%)']} />
              <div className="mt-4 p-3 bg-background border border-primary/20 rounded-lg">
                <p className="text-foreground font-semibold text-sm">806% (earned) – 500% (paid) = net positive funding</p>
              </div>
              <p className="text-muted-foreground text-sm mt-3">Even though both sides have negative funding, you're still profitable.</p>
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-3">Key Insight</p>
            <p className="text-muted-foreground text-sm mb-2">Funding arb is NOT about: "Long negative, short positive"</p>
            <p className="text-foreground font-medium text-sm mb-4">It's about: Capturing the net funding spread</p>
            <p className="text-muted-foreground text-sm mb-3">As long as what you earn &gt; what you pay → you have a profitable setup</p>
            <p className="text-foreground font-semibold text-sm mb-3">What You Should Look For</p>
            <Bullets items={['High funding differences (300%+ preferred)', 'Stable funding (not flipping instantly)']} />
            <p className="text-muted-foreground text-sm mt-4">Because funding changes fast and you still pay entry fees and exit fees. Small spreads can get wiped out easily.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 2: Execute Using DN Bot</p>
            <p className="text-muted-foreground text-sm mb-4">Once you find the opportunity, go to Tread DN Bot and set up both legs:</p>
            <Img src={img9} alt="DN bot configuration for funding arb" />
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-background border border-border/50 rounded-lg p-4">
                <p className="text-foreground font-medium text-sm mb-2">Long Side</p>
                <Bullets items={['Select Hyperliquid account', 'Choose the pair (e.g., UMA)']} />
              </div>
              <div className="bg-background border border-border/50 rounded-lg p-4">
                <p className="text-foreground font-medium text-sm mb-2">Short Side</p>
                <Bullets items={['Select Aster account', 'Choose the same pair']} />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 3: Configure</p>
            <Bullets items={[
              'Set your notional',
              'Choose TWAP duration',
              'Leave position duration empty (run continuously)',
              'Start the bot',
            ]} />
          </div>

          {/* Step 4 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 4: Monitor</p>
            <p className="text-muted-foreground text-sm mb-3">Check the Net Funding Rate:</p>
            <Bullets items={['Green → You\'re earning ✅', 'Red → You\'re losing ❌']} />
            <Img src={img10} alt="Net funding rate monitoring" />
          </div>

          {/* Step 5 */}
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">Step 5: Exit</p>
            <p className="text-muted-foreground text-sm mb-3">This is critical.</p>
            <Bullets items={[
              'Monitor funding regularly',
              'Once net funding turns unfavorable (red)',
              'Click unwind (two arrows)',
            ]} />
            <p className="text-muted-foreground text-sm mt-4">Lock in your gains and exit.</p>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-border/30 pt-12">
          <div className="bg-card border border-card-border rounded-xl p-6 text-center">
            <p className="text-foreground font-semibold text-lg mb-4">You're not farming direction. You're farming inefficiency.</p>
            <p className="text-muted-foreground text-sm mb-4">And inefficiencies don't last forever. The faster you identify, execute, and exit — the better your edge.</p>
            <p className="text-foreground font-medium">
              Ready to start?{' '}
              <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Sign up with the referral link
              </a>{' '}
              and run your first DN bot.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
