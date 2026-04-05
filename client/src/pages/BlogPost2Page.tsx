import { Clock, ArrowLeft, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function BlogPost2Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10" data-testid="link-back-to-blog">
          <ArrowLeft size={15} />
          Back to Blog
        </Link>

        {/* Page header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Tag size={14} />
            Market Making
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How I Earned 1160% APY on TreadFi Market Making on ZAMA/USDC (Delta Neutral Strategy)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Market making used to be something only institutions could do efficiently. But tools like TreadFi are changing that, allowing retail users to capture incentives without taking significant market risk. Here's exactly how I generated a 1160% APY using a delta-neutral strategy on the ZAMA/USDC pair.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock size={13} />
              <span>8 min read</span>
            </div>
            <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
              Market Making
            </Badge>
          </div>
        </div>

        {/* Referral intro */}
        <p className="text-muted-foreground leading-relaxed mb-14">
          Before we get into how to do this campaign with TreadFi, the first step is creating an account. Use this referral link:{' '}
          <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://app.tread.fi/referral/59S1TB1X
          </a>{' '}
          — Complete the signup process, set your credentials, and log in.
        </p>

        {/* Section: What Is TreadFi? */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Is TreadFi?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            TreadFi has built a powerful market-making platform that allows users to place automated orders on orderbooks.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">The key idea:</p>
            <ul className="space-y-2.5">
              {[
                'Projects want deeper liquidity → so they offer rewards',
                'You provide liquidity → you earn incentives',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              This creates an opportunity for retail traders to earn yield simply by placing orders.
            </p>
          </div>
        </section>

        {/* Section: The Opportunity */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Opportunity: ZAMA/USDC Campaign</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I participated in a campaign run by Monarch and TreadFi, which offered:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <ul className="space-y-2.5">
              {[
                '$2,500 weekly rewards',
                'Incentives for placing orders on the ZAMA/USDC spot pair',
                'Rewards based on order placement and spread quality',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://x.com/tread_fi/status/2033709586130387232"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            https://x.com/tread_fi/status/2033709586130387232
          </a>
        </section>

        {/* Section: The Challenge */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            As a retail trader, market making manually is tough because:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <ul className="space-y-2.5">
              {[
                'You get filled → you take price risk',
                'You mismanage spreads → you lose money',
                'Execution inefficiency eats profits',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-2">So the goal was clear:</p>
            <ul className="space-y-1.5 mt-2">
              {['Earn rewards', 'Avoid price exposure'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section: The Solution */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Delta Neutral Strategy</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To eliminate price risk, I used a delta-neutral (DN) setup:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <ul className="space-y-2.5">
              {[
                'Buy ZAMA on spot on Hyperliquid',
                'Short ZAMA on perps on Aster DEX',
                'Net exposure = ~0',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you don't already have an Aster account, sign up here:{' '}
            <a href="https://www.asterdex.com/en/referral/79B524" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://www.asterdex.com/en/referral/79B524
            </a>
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-muted-foreground text-sm">
              This way, you're not betting on price direction — just farming rewards.
            </p>
          </div>
        </section>

        {/* Section: Step-by-Step Setup */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">Step-by-Step Setup</h2>

          {/* Step 1 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">1. Capital Requirement</p>
            <p className="text-muted-foreground text-sm mb-3">Minimum: $2,000</p>
            <ul className="space-y-2">
              {['$1,000 in USDC', '$1,000 in ZAMA'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">2. Create a Delta Neutral Position</p>
            <p className="text-muted-foreground text-sm mb-4">Using TreadFi's DN bot:</p>
            <ul className="space-y-2.5 mb-6">
              {[
                'Deposit $2,000 USDC into your Hyperliquid spot account, and around 1000 USDC (you can put 100–200 too, but you will have to balance margin manually to avoid liquidation if price moves against your perps position) in Aster DEX as margin for Aster perps.',
                'Go to the DN bot page: app.tread.fi/delta_neutral_bot',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold mb-3">Configure:</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-background border border-border/50 rounded-lg p-4">
                <p className="text-foreground font-medium text-sm mb-2">Long Side (Spot)</p>
                <p className="text-muted-foreground text-sm">Pair: ZAMA/USDC</p>
              </div>
              <div className="bg-background border border-border/50 rounded-lg p-4">
                <p className="text-foreground font-medium text-sm mb-2">Short Side (Perps)</p>
                <ul className="space-y-1">
                  {['Platform: Aster', 'Pair: ZAMA Perpetual'].map((pt, i) => (
                    <li key={i} className="text-muted-foreground text-sm">{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-foreground font-semibold mb-3">Set:</p>
            <ul className="space-y-2 mb-6">
              {['Notional: $1,000', 'TWAP duration: 60 minutes', 'Stop loss: Uncapped', 'Start the bot'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>

            <img
              src="https://i.postimg.cc/jsmSMpZH/Screenshot-2026-04-05-at-1-17-27-PM.png"
              alt="TreadFi DN bot configuration"
              className="rounded-xl max-w-full mx-auto block mb-6"
            />

            <p className="text-foreground font-semibold mb-3">After execution (will take 60 minutes):</p>
            <ul className="space-y-2">
              {[
                'You hold ZAMA on spot',
                'You\'re short ZAMA on perps',
                'Your position is delta neutral',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">3. Start Market Making</p>
            <p className="text-muted-foreground text-sm mb-4">
              Now go to the Volume Bot:{' '}
              <a href="https://app.tread.fi/volume_bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                app.tread.fi/volume_bot
              </a>
            </p>
            <ul className="space-y-2 mb-6">
              {['Select ZAMA campaign'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>

            <img
              src="https://i.postimg.cc/fwpR8GBC/Screenshot-2026-04-05-at-1-18-07-PM.png"
              alt="Select ZAMA campaign on TreadFi volume bot"
              className="rounded-xl max-w-full mx-auto block mb-6"
            />

            <ul className="space-y-2">
              {['Book as many time slots as possible'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section: Spread Strategy */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Spread Strategy</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You'll see options like:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <ul className="space-y-2.5">
              {['Blend +10', 'Blend +20', 'Blend +50'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="https://i.postimg.cc/9WKQL6J1/Screenshot-2026-04-05-at-1-19-57-PM.png"
            alt="Spread options on TreadFi: Blend +10, +20, +50"
            className="rounded-xl max-w-full mx-auto block mb-6"
          />

          <p className="text-muted-foreground leading-relaxed">
            Spread defines how far your orders are from market price.
          </p>
        </section>

        {/* Section: My Strategy */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">My Strategy (Key Insight)</h2>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">I used: Highest spread (Blend +50)</p>
            <p className="text-foreground font-semibold mb-3">Why?</p>
            <ul className="space-y-2.5">
              {[
                'Lower chance of getting filled',
                'Minimal price exposure',
                'Still eligible for rewards',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Even though tighter spreads give higher rewards, they also increase risk.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-6">
            <p className="text-foreground font-semibold">My goal was simple: earn rewards without getting filled.</p>
          </div>

          <img
            src="https://i.postimg.cc/SS9N3gvW/Screenshot-2026-04-05-at-1-21-08-PM.png"
            alt="Blend +50 spread strategy results"
            className="rounded-xl max-w-full mx-auto block"
          />
        </section>

        {/* Section: Managing Fills */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Managing Fills (Important)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Even with high spreads, ZAMA is illiquid — so fills can happen.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-3">What happens if you get filled?</p>
            <p className="text-muted-foreground text-sm mb-3">You become unbalanced:</p>
            <ul className="space-y-2">
              {['Example: More ZAMA, less USDC'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-3">Now you have price exposure.</p>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-4">How to Handle It</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">You have 3 options:</p>

          <div className="space-y-4">
            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-3">1. Let the Bot Handle It</p>
              <ul className="space-y-2">
                {['Can result in small profit or loss', 'I mostly used this approach'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-3">2. Manual Rebalancing</p>
              <ul className="space-y-2">
                {['Sell excess ZAMA', 'Restore balance'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-6">
              <p className="text-foreground font-semibold mb-4">3. Adjust Bot Spread Manually</p>
              <ul className="space-y-2 mb-4">
                {['Go to orders page (app.tread.fi/volume_bot) and click on your order'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>

              <img
                src="https://i.postimg.cc/Xj57msz8/Screenshot-2026-04-05-at-1-22-05-PM.png"
                alt="TreadFi orders page — click on your order"
                className="rounded-xl max-w-full mx-auto block mb-4"
              />

              <ul className="space-y-2 mb-4">
                {['Move to tighter spread (Blend +0)'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>

              <img
                src="https://i.postimg.cc/pWjX4s6C/Screenshot-2026-04-05-at-1-22-41-PM.png"
                alt="Switch to Blend +0 spread for faster rebalancing"
                className="rounded-xl max-w-full mx-auto block mb-4"
              />

              <ul className="space-y-2">
                {[
                  'Let bot rebalance faster',
                  'Then once it\'s rebalanced to 50-50, change it back to Blend +50',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Pro Tips */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Pro Tips (From Experience)</h2>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-4">
            <ul className="space-y-2.5">
              {[
                'You get filled more when new time slots start',
                'Other users rebalance → your orders get hit',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-3">What I did:</p>
            <ul className="space-y-2.5 mb-4">
              {[
                'Paused bot for first 30 minutes of new slots',
                'Avoided high volatility periods',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold text-sm">Goal: Stay unfilled as much as possible.</p>
          </div>
        </section>

        {/* Section: Results */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Results</h2>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <ul className="space-y-2.5">
              {[
                'Weekly reward captured',
                'Minimal trading losses (~$10–$25)',
                'Total weekly profit ≈ $100 on $2,000',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="https://i.postimg.cc/qJKMS15j/Screenshot-2026-04-05-at-1-45-08-PM.png"
            alt="Weekly results and rewards captured"
            className="rounded-xl max-w-full mx-auto block mb-6"
          />

          <div className="p-6 bg-card border border-card-border rounded-xl text-center">
            <p className="text-foreground font-semibold text-lg">That translates to ~1160% APY</p>
          </div>
        </section>

        {/* Section: Closing the Position */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Closing the Position</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Once the campaign ends:</p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <ul className="space-y-2.5 mb-4">
              {[
                'Go to DN bot (app.tread.fi/delta_neutral_bot)',
                'Unwind your DN position by clicking the two arrows on your DN position',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold mb-3">The bot will:</p>
            <ul className="space-y-2">
              {['Sell ZAMA spot', 'Close perps short'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-4">You're back fully in USDC.</p>
          </div>
        </section>

        {/* Section: Final Thoughts */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This strategy highlights a powerful shift in crypto:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <ul className="space-y-2.5">
              {[
                'Retail traders can now access market-making opportunities',
                'Incentive programs create real yield',
                'Tools like TreadFi remove execution complexity',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-3">However:</p>
            <ul className="space-y-2">
              {[
                '⚠️ Returns vary',
                '⚠️ Market conditions matter',
                '⚠️ Risk still exists if mismanaged',
              ].map((pt, i) => (
                <li key={i} className="text-muted-foreground text-sm">{pt}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className="border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Key Takeaway</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You don't need to predict the market to make money. With the right setup, you can:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Stay delta neutral',
              'Provide liquidity',
              'Earn incentives consistently',
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{pt}</span>
              </li>
            ))}
          </ul>
          <div className="p-6 bg-card border border-card-border rounded-xl text-center">
            <p className="text-foreground font-semibold">
              Ready to start?{' '}
              <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Sign up with the referral link
              </a>{' '}
              and run your first delta-neutral market-making campaign.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
