import { Clock, ArrowLeft, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import img01 from '@assets/01_1776796062651.png';
import img02 from '@assets/02_1776796062652.png';
import img03 from '@assets/03_1776796062653.png';
import img04 from '@assets/04_1776796062653.png';
import img05 from '@assets/05_1776796062654.jpeg';

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

export default function BlogPost3Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10" data-testid="link-back-to-blog">
          <ArrowLeft size={15} />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Tag size={14} />
            Market Making
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How to Earn 400–500% APY Market Making on Your Stablecoins (TreadFi × Paragon Campaign)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            What if you could earn a solid 400–500% APY — market making on your stablecoins? It's possible and happening right now through TreadFi's campaign partnership with Paragon. By placing limit orders around trading pairs, you can qualify for $15,000 USD in rewards per week.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <Clock size={12} />
              <span>6 min read</span>
            </div>
            <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
              Market Making
            </Badge>
          </div>
        </div>

        {/* Intro */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          Before you think it's already too diluted — TreadFi hasn't marketed this enough, and slots aren't fully filled yet even though only 25 spots are available. Most people assume it's too complex. The truth? It only takes a couple of clicks.
        </p>

        {/* How It Works */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How Does It Work?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            TreadFi uses an API to market make on Hyperliquid on your behalf. Your money never leaves your Hyperliquid account — you are not depositing anything onto TreadFi. This eliminates the smart contract risk that most DeFi strategies carry.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">The two primary risks to be aware of:</p>
            <div className="space-y-4">
              <div>
                <p className="text-foreground font-medium text-sm mb-1">Smart Contract Risk</p>
                <p className="text-muted-foreground text-sm">Minimal, since your funds stay in your HL account.</p>
              </div>
              <div>
                <p className="text-foreground font-medium text-sm mb-1">PnL / Price Exposure Risk</p>
                <p className="text-muted-foreground text-sm">If your limit orders get filled, you may have brief price exposure. However, there are simple tricks to minimize this (covered below).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">Getting Started</h2>

          {/* Step 1 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 1 — Set Up Your Accounts</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <p className="text-muted-foreground text-sm">
                  Create a TreadFi account using this referral link:{' '}
                  <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://app.tread.fi/referral/59S1TB1X
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <div>
                  <p className="text-muted-foreground text-sm mb-2">Make sure you have a Hyperliquid (HL) Perps account with:</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-muted-foreground text-sm">• Minimum 1,000 USDC to participate in at least one campaign</p>
                    <p className="text-muted-foreground text-sm">• 3,000 USDC if you want to participate in all available campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 2 — Access the Campaigns</p>
            <p className="text-muted-foreground text-sm mb-3">
              Once both accounts are ready, head to the TreadFi MM Bot page:{' '}
              <a href="https://app.tread.fi/volume_bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://app.tread.fi/volume_bot
              </a>
            </p>
            <p className="text-muted-foreground text-sm mb-4">Click on <span className="text-foreground font-medium">Campaigns</span>.</p>
            <Img src={img01} alt="TreadFi campaigns page showing Paragon campaign options" />
            <p className="text-muted-foreground text-sm mb-4">You'll see four options. You can skip the Zama campaign for now (it's a separate campaign with a different structure). The three Paragon campaigns to focus on are:</p>
            <div className="space-y-3">
              {[
                { pair: 'BTCD:PERP-USDC (Week 1)', detail: 'Hosted on Hyperliquid, offering $5,000 USDC per week with a minimum capital requirement of $1,000 USDC.' },
                { pair: 'OTHERS:PERP-USDC (Week 1)', detail: 'Hosted on Hyperliquid, offering $5,000 USDC per week with a minimum capital requirement of $1,000 USDC.' },
                { pair: 'TOTAL2:PERP-USDC (Week 3)', detail: 'Hosted on Hyperliquid, offering $5,000 USDC per week with a minimum capital requirement of $1,000 USDC.' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <p className="text-muted-foreground text-sm"><span className="text-foreground font-medium">{c.pair}</span> — {c.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">You can join one, two, or all three — personally, I enroll in all to maximize rewards.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 3 — Configure Your Slots</p>
            <p className="text-muted-foreground text-sm mb-4">Click on any campaign, and you'll be able to choose from 28 slots for the week.</p>
            <Img src={img02} alt="Campaign slot selection calendar" />
          </div>

          {/* Step 4 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 4 — Select Your Spread</p>
            <p className="text-muted-foreground text-sm mb-4">I choose 50 bps.</p>
            <Img src={img03} alt="Spread configuration — selecting 50 bps slot" />

            <div className="border-t border-border/30 pt-5 mt-2">
              <p className="text-foreground font-semibold text-sm mb-3">Important: Rewards are distributed based on:</p>
              <Bullets items={[
                '50% Volume — the total trading volume your orders generate',
                '50% Order Uptime — how long your orders sit in the order book',
              ]} />
              <p className="text-muted-foreground text-sm mt-4">This means you don't need to get filled to earn rewards.</p>
            </div>

            <div className="border-t border-border/30 pt-5 mt-5">
              <p className="text-foreground font-semibold text-sm mb-3">How to Minimize Price Exposure</p>
              <p className="text-muted-foreground text-sm mb-3">
                To avoid getting filled (and taking on price risk), choose a higher spread. The spread determines how far your orders are placed from the current mid price — the higher the spread, the less likely you are to get filled.
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                My personal recommendation: set the spread to <span className="text-foreground font-medium">50 bps</span> (40 bps also feels safe). After selecting your spread, click Schedule — and you're done.
              </p>
            </div>

            <div className="bg-background border border-border/50 rounded-lg p-4">
              <p className="text-foreground font-medium text-sm mb-2">What If You Do Get Filled?</p>
              <p className="text-muted-foreground text-sm">
                If a large price candle hits and fills your order, you can immediately close the position using a market order to stay delta neutral. Keep in mind that closing via market order typically incurs a 0.08% fee. In practice, at 50 bps spread, fills are rare unless there's significant market-moving news.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 5 — Click Schedule</p>
            <Img src={img04} alt="Scheduled campaign slot with configuration details" />
          </div>

          {/* Step 6 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 6 — Done. Passive from here.</p>
            <blockquote className="border-l-4 border-primary pl-4 mb-5">
              <p className="text-muted-foreground text-sm italic">
                "I received $130 for a single week, quoting 1,000 USDC across 28 slots at 50 bps spread. That's an exceptional return for a week's work. I did experience some minor negative exposure, but nothing significant."
              </p>
            </blockquote>
            <Img src={img05} alt="136.67 USDC received — completed reward payment" />
            <div className="mt-4 p-4 bg-background border border-primary/20 rounded-lg">
              <p className="text-foreground font-semibold text-sm">That translates to roughly $520/month on just $1,000 USDC — without actively trading.</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Summary</h2>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <Bullets items={[
              'Strategy: TreadFi market making bot on Hyperliquid as part of the TreadFi × Paragon campaign',
              'Total weekly rewards pool: $15,000 USDC across three pairs',
              'Minimum capital requirement: $1,000 USDC',
              'Recommended spread: 50 bps',
              'Custody risk: Essentially zero — funds stay in your HL account at all times',
              'Setup time: A few minutes, runs passively from there',
            ]} />
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/30 pt-12">
          <div className="bg-card border border-card-border rounded-xl p-6 text-center">
            <p className="text-foreground font-semibold text-lg mb-4">
              If you're holding stables and not putting them to work, this is one of the most capital-efficient strategies available right now.
            </p>
            <p className="text-muted-foreground text-sm mb-5">Give it a try.</p>
            <a
              href="https://app.tread.fi/referral/59S1TB1X"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 gradient-bg-cyan-emerald text-white rounded-md text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
              data-testid="link-cta-referral"
            >
              Get Started with TreadFi →
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
