import { ArrowLeft, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

const img = (src: string, alt: string) => (
  <img src={src} alt={alt} className="rounded-xl max-w-full mx-auto block my-4" />
);

export default function PolymarketPage() {
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
            Polymarket
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            TreadFi × Polymarket Integration
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            TreadFi has recently integrated with Polymarket — a process that took months to complete and has turned into one of the most significant integrations for TreadFi so far. This integration unlocks a completely new way to interact with Polymarket — not just placing bets, but doing it smarter, more efficiently, and even algorithmically.
          </p>
          <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
            MM Bot Mode
          </Badge>
        </div>

        {/* Referral */}
        <p className="text-muted-foreground leading-relaxed mb-14">
          Before we get into how to use TreadFi, the first step is creating an account. Use this referral link:{' '}
          <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://app.tread.fi/referral/59S1TB1X
          </a>{' '}
          — Complete the signup process, set your credentials, and log in.
        </p>

        {/* What Does the Integration Offer? */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Does the TreadFi × Polymarket Integration Offer?</h2>

          {/* Feature 1 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold text-lg mb-4">1) Place Bets on Polymarket via TreadFi</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              You can now directly place prediction market bets on Polymarket using the TreadFi interface.
            </p>
            <p className="text-foreground font-semibold mb-3 text-sm">Why is this different from using Polymarket directly?</p>
            <div className="space-y-4">
              <div>
                <p className="text-foreground text-sm font-medium mb-1">First — Region Accessibility</p>
                <p className="text-muted-foreground text-sm">Many users prefer this setup because it can bypass regional restrictions. If you're in a restricted region, you can still access Polymarket markets through TreadFi's frontend.</p>
              </div>
              <div>
                <p className="text-foreground text-sm font-medium mb-2">Second — Institutional-Grade Execution</p>
                <p className="text-muted-foreground text-sm mb-3">TreadFi allows you to use advanced execution algorithms like:</p>
                <ul className="space-y-2">
                  {['VWAP (Volume Weighted Average Price)', 'TWAP (Time Weighted Average Price)', 'Aggressive Maker strategies'].map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                      <span className="text-muted-foreground text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm mt-3">These tools let you scale into positions with minimal market impact, which is critical when entering low-liquidity prediction markets without causing price slippage.</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold text-lg mb-4">2) Market Making on Polymarket</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The real unlock here is the ability to market make on Polymarket's order book using TreadFi's MM bot. This is what most advanced users are interested in — generating yield by providing liquidity rather than just betting.
            </p>
          </div>
        </section>

        {/* Step 1: Setting Up Wallet */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Step 1: Setting Up Your TreadFi Wallet (Important)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Before you start market making, there's a critical setup step. Unlike regular usage, Polymarket requires manual transaction signing for every trade, which makes it unsuitable for automated strategies like market making. To solve this, TreadFi uses a special embedded wallet system.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-3">Key Rule:</p>
            <ul className="space-y-2 mb-4">
              {[
                'You cannot import your existing Polymarket wallet.',
                'You must create a new wallet inside TreadFi that is compatible with automation.',
                'TreadFi does not take custody of your private key — this setup is purely for enabling seamless execution.',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Step 2: Create Wallet */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Step 2: Create Your TreadFi Wallet</h2>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">Go to tread.fi and click on <span className="text-foreground font-medium">Wallet</span></span>
                </div>
                {img('https://i.postimg.cc/j2HXVQ9G/Screenshot-2026-04-19-at-3-51-58-PM.png', 'TreadFi wallet menu')}
              </li>
              <li>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">Select <span className="text-foreground font-medium">Create Wallet</span></span>
                </div>
                {img('https://i.postimg.cc/DvDYXxc7/Screenshot-2026-04-19-at-3-52-19-PM.png', 'Create wallet screen')}
              </li>
              <li>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">Once created, click <span className="text-foreground font-medium">Export Private Key</span></span>
                </div>
                {img('https://i.postimg.cc/ZbgDdwL4/Screenshot-2026-04-19-at-3-52-41-PM.png', 'Export private key')}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground text-sm">Store your private key securely <span className="text-foreground font-medium">(this is extremely important)</span></span>
              </li>
            </ul>
          </div>
        </section>

        {/* Step 3: Fund Wallet */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Step 3: Fund Your Wallet</h2>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">Click on <span className="text-foreground font-medium">Receive</span></span>
                </div>
                {img('https://i.postimg.cc/M64rQ9YT/Screenshot-2026-04-19-at-3-53-21-PM.png', 'Receive funds screen')}
              </li>
              <li>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">Copy your <span className="text-foreground font-medium">EVM address</span></span>
                </div>
                {img('https://i.postimg.cc/JrgdkpQh/Screenshot-2026-04-19-at-3-53-29-PM.png', 'EVM address copy')}
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground text-sm">Transfer USDC to this address using any supported network</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Step 4: Transfer to Polymarket */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Step 4: Transfer Funds to Polymarket</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Once your USDC arrives in your TreadFi wallet:</p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">Click on <span className="text-foreground font-medium">Transfer</span></span>
                </div>
                {img('https://i.postimg.cc/zzMPgxkV/Screenshot-2026-04-19-at-3-53-41-PM.png', 'Transfer button')}
              </li>
              <li>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">Move funds from <span className="text-foreground font-medium">TreadFi Wallet → Polymarket</span></span>
                </div>
                {img('https://i.postimg.cc/TdSHDtc1/Screenshot-2026-04-19-at-3-54-27-PM.png', 'Move funds to Polymarket')}
              </li>
              <li>
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">Confirm the transfer</span>
                </div>
                {img('https://i.postimg.cc/HYKPy6t7/Screenshot-2026-04-19-at-3-54-35-PM.png', 'Confirm transfer')}
              </li>
            </ul>
          </div>
          <p className="text-muted-foreground text-sm mt-4">After this, your funds will be available on Polymarket.</p>
        </section>

        {/* What's Next */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What's Next?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">At this stage, your setup is complete:</p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-4">
            <ul className="space-y-2 mb-4">
              {['Wallet created', 'Funds deposited', 'Polymarket connected'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold text-sm mb-2">You're now ready to:</p>
            <ul className="space-y-2">
              {[
                'Place bets using advanced execution',
                'Or move to the next level — market making using TreadFi\'s MM bot',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How to Place Bets */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Place Bets on Polymarket Using TreadFi</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Once your wallet is funded and connected, you can start placing bets on Polymarket directly through TreadFi.
          </p>

          {/* Step 1 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 1: Navigate to Prediction Markets</p>
            <ul className="space-y-2 mb-4">
              {['Go to the TreadFi dashboard', 'Click on "Predict" from the menu'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            {img('https://i.postimg.cc/4fMF9W1t/Screenshot-2026-04-19-at-4-22-27-PM.png', 'Predict menu in TreadFi')}
            <p className="text-muted-foreground text-sm">This will open up all available Polymarket markets.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Step 2: Choose Your Market</p>
            <p className="text-muted-foreground text-sm mb-4">Browse through the available markets and select the one you want to participate in.</p>
            {img('https://i.postimg.cc/gz5BZgKV/Screenshot-2026-04-19-at-4-22-36-PM.png', 'Browse Polymarket markets')}
          </div>

          {/* Step 3 */}
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">Step 3: Choose Your Order Type</p>
            <p className="text-muted-foreground text-sm mb-4">TreadFi gives you three different ways to enter a position:</p>
            {img('https://i.postimg.cc/HYKPy6t0/Screenshot-2026-04-19-at-4-22-50-PM.png', 'Order type selection')}

            <div className="space-y-6 mt-4">
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-foreground font-semibold text-sm mb-2">1) Market Orders</p>
                <p className="text-muted-foreground text-sm mb-3">A market order executes instantly at the best available price.</p>
                <ul className="space-y-1.5">
                  {['Fast execution', 'Can lead to slippage, especially in low liquidity markets'].map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                      <span className="text-muted-foreground text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm mt-2 italic">Best used when speed matters more than price precision.</p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-foreground font-semibold text-sm mb-2">2) Limit Orders</p>
                <p className="text-muted-foreground text-sm mb-3">A limit order lets you specify the exact price at which you want to buy or sell.</p>
                <ul className="space-y-1.5">
                  {['Full price control', 'No unexpected slippage', 'Execution only happens if the market reaches your price'].map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                      <span className="text-muted-foreground text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm mt-2 italic">Best used when you want precision and patience.</p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-foreground font-semibold text-sm mb-2">3) ALGO Orders (TreadFi Edge)</p>
                <p className="text-muted-foreground text-sm mb-4">Instead of manually placing orders, you can use advanced execution algorithms designed for institutional-level trading.</p>
                {img('https://i.postimg.cc/TxHsFPvs/Screenshot-2026-04-19-at-4-22-57-PM.png', 'ALGO order types')}

                <div className="space-y-5 mt-4">
                  <div>
                    <p className="text-foreground font-medium text-sm mb-2">VWAP (Volume Weighted Average Price)</p>
                    <p className="text-muted-foreground text-sm mb-2">VWAP allows you to execute orders gradually over time.</p>
                    <ul className="space-y-1.5">
                      {['Splits your order into smaller chunks', 'Executes more during high liquidity periods', 'Minimizes market impact and slippage'].map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                          <span className="text-muted-foreground text-sm">{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground text-sm mt-2 italic">Perfect if you're entering with size and don't want to move the market.</p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm mb-2">TWAP (Time Weighted Average Price)</p>
                    <p className="text-muted-foreground text-sm mb-2">TWAP executes your order at a fixed rate over time.</p>
                    <ul className="space-y-1.5">
                      {['Predictable execution schedule', 'Does not adjust based on market conditions', 'Simple and consistent'].map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                          <span className="text-muted-foreground text-sm">{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground text-sm mt-2 italic">Ideal for steady accumulation without overthinking market volume.</p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm mb-2">Aggressive Maker Strategy</p>
                    <p className="text-muted-foreground text-sm mb-2">The Aggressive Maker strategy is built for traders who want:</p>
                    <ul className="space-y-1.5">
                      {['Strong presence on the order book', 'High probability of execution', 'Faster fills while still acting as a liquidity provider'].map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                          <span className="text-muted-foreground text-sm">{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground text-sm mt-2 italic">This strikes a balance between passive and aggressive execution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/30">
              <p className="text-foreground font-semibold text-sm mb-3">Why Use These Algos?</p>
              <p className="text-muted-foreground text-sm mb-3">These tools are especially useful if:</p>
              <ul className="space-y-1.5 mb-4">
                {['You\'re entering with large capital', 'You want minimal price impact', 'You want professional-grade execution'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-4">Instead of manually placing orders and moving the market, these strategies help you enter efficiently and intelligently. Using TreadFi, you're not just placing bets — you're executing them like a professional trader.</p>
              <ul className="space-y-1.5">
                {['Market → Fast but can slip', 'Limit → Precise but requires patience', 'Algo → Smart execution with minimal impact'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Use MM Bots */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Use MM Bots on Polymarket with TreadFi</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This is the most important feature of the TreadFi × Polymarket integration — and something that is not available on any other Polymarket frontend. With TreadFi, you can automate market making on Polymarket, allowing you to provide liquidity and potentially earn consistent returns.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">There are two ways to run an MM bot:</p>

          {/* Reward Markets */}
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold text-lg mb-4">1) Reward Markets (Incentivized Market Making)</p>
            <p className="text-muted-foreground text-sm mb-4">These are markets where you get paid incentives for providing liquidity.</p>
            <p className="text-foreground font-semibold text-sm mb-3">How to access:</p>
            <ul className="space-y-2 mb-4">
              {['Go to Predict', 'Open the Rewards tab'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            {img('https://i.postimg.cc/SS5tMgGV/Screenshot-2026-04-19-at-4-28-49-PM.png', 'Rewards tab in Predict')}
            <ul className="space-y-2 mb-6">
              {['Choose a market offering MM incentives'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold text-sm mb-3">Key characteristics:</p>
            <ul className="space-y-2 mb-6">
              {['Requires higher capital (~$150–$250+, depending on share price)', 'Only limit orders qualify', 'Must meet minimum share size requirements'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold text-sm mb-3">Setup:</p>
            <ul className="space-y-2 mb-4">
              {['Select the market', 'Configure your bot parameters (spread, mode, etc.)'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            {img('https://i.postimg.cc/TxHsFPvZ/Screenshot-2026-04-19-at-4-29-51-PM.png', 'Configure MM bot parameters')}
            <ul className="space-y-2 mb-4">
              {['Start the MM bot'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            {img('https://i.postimg.cc/Y7yPZSw7/Screenshot-2026-04-19-at-4-33-02-PM.png', 'Start MM bot')}
            <div className="mt-4 pt-4 border-t border-border/30">
              <p className="text-foreground font-semibold text-sm mb-2">Who is this for?</p>
              <ul className="space-y-1.5 mb-3">
                {['Advanced users', 'Traders looking to farm rewards + fees'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm italic">⚠️ Note: While rewards can be attractive, the higher capital requirement and stricter conditions make this less suitable for beginners.</p>
            </div>
          </div>

          {/* Any Market */}
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold text-lg mb-4">2) Any Market (Non-Reward Market Making)</p>
            <p className="text-muted-foreground text-sm mb-4">This is the most flexible way to market make and ideal for getting started.</p>
            <p className="text-foreground font-semibold text-sm mb-3">How to access:</p>
            <ul className="space-y-2 mb-6">
              {['Go to Predict', 'Select any market', 'Click MM (top right of the market page)'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold text-sm mb-3">Choosing Your Side</p>
            <p className="text-muted-foreground text-sm mb-2">You can choose:</p>
            <ul className="space-y-2 mb-4">
              {['Yes', 'No'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mb-6">Both sides mirror the same order book, so the choice depends on your preference or strategy.</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-background border border-border/50 rounded-lg p-4">
                <p className="text-foreground font-medium text-sm mb-1">Capital Requirement</p>
                <p className="text-muted-foreground text-sm">Minimum margin: ~$10</p>
                <p className="text-muted-foreground text-sm">Much lower barrier compared to reward markets</p>
              </div>
            </div>
            <p className="text-foreground font-semibold text-sm mb-3">Final Setup</p>
            <p className="text-muted-foreground text-sm mb-3">Once you choose your mode:</p>
            <ul className="space-y-2">
              {['Set your spread', 'Define Stop Loss (SL)', 'Define Take Profit (TP)', 'Click Start MM Bot'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-border/30 space-y-1.5">
              {['Reward Markets → Higher capital, incentivized, advanced', 'Any Market → Low capital, flexible, beginner-friendly'].map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimum Margin */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Minimum Margin for Reward Eligibility</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            On Polymarket, every reward market has a minimum shares requirement that your orders must meet to be eligible for incentives. This value usually ranges between 200–250 shares, depending on the market.
          </p>
          {img('https://i.postimg.cc/dsXSy59s/liquidity-rewards-market-(1).png', 'Minimum margin for reward eligibility')}
          <div className="bg-card border border-card-border rounded-xl p-5 mt-4">
            <p className="text-foreground font-semibold">
              Using $200–$250 margin per market is generally enough to meet the minimum share requirement and qualify for rewards.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              This works across most markets and ensures your MM bot stays consistently eligible without needing constant adjustments.
            </p>
          </div>
        </section>

        {/* Strategies */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Strategies for Market Making on Polymarket</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Market making on Polymarket is still very new, and there's no "perfect strategy" yet. The market structure is quite different from traditional trading:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-8">
            <ul className="space-y-2">
              {['Prone to manipulation', 'High chances of adverse selection', 'Liquidity can shift quickly'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-4">So while a lot of strategies are still being tested, here are a few approaches that have shown promising results so far when using TreadFi.</p>
          </div>

          {/* RGRID */}
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold text-lg mb-4">1) RGRID for Trending Markets</p>
            <p className="text-muted-foreground text-sm mb-4">
              One key behavior in Polymarket is that prices often move directionally rather than staying range-bound. Because of this, RGRID (Reactive Grid) tends to perform better than static strategies.
            </p>
            <p className="text-foreground font-semibold text-sm mb-3">Why RGRID works:</p>
            <ul className="space-y-2 mb-6">
              {['Adjusts dynamically to price movement', 'Follows trends instead of fighting them', 'Captures momentum more effectively than standard grid'].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground font-semibold text-sm mb-4">Where this has worked well:</p>

            <div className="space-y-6">
              <div>
                <p className="text-foreground font-medium text-sm mb-2">BTC 15-Minute Markets</p>
                <ul className="space-y-1.5 mb-3">
                  {['These markets tend to trend strongly once a direction is established', 'RGRID can ride these moves and generate consistent profits'].map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                      <span className="text-muted-foreground text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
                {img('https://i.postimg.cc/6K1PgQNw/Screenshot-2026-04-19-at-5-11-44-PM.png', 'RGRID on BTC 15-minute markets')}
              </div>
              <div>
                <p className="text-foreground font-medium text-sm mb-2">Sports Markets (e.g., Football Matches)</p>
                <ul className="space-y-1.5 mb-3">
                  {['Prices often stay flat initially', 'Then move aggressively in one direction (goal, momentum shift, etc.)', 'RGRID adapts quickly and benefits from these sudden trends'].map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                      <span className="text-muted-foreground text-sm">{pt}</span>
                    </li>
                  ))}
                </ul>
                {img('https://i.postimg.cc/pv1S4dt2/Screenshot-2026-04-19-at-5-12-52-PM.png', 'RGRID on sports markets')}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/30">
              <p className="text-foreground font-semibold text-sm mb-2">Key Insight</p>
              <p className="text-muted-foreground text-sm mb-4">
                Unlike traditional market making where you benefit from sideways action, on Polymarket, trend-following MM strategies are often more effective.
              </p>
              <p className="text-foreground font-semibold text-sm mb-2">Important Note</p>
              <p className="text-muted-foreground text-sm mb-3">These strategies are still evolving.</p>
              <ul className="space-y-1.5 mb-3">
                {['Results can vary by market', 'Conditions change quickly', 'Continuous testing is required'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm italic">
                What works today may not work tomorrow — so treat this as a starting point, not a fixed system. As more data comes in, strategies will get sharper — but for now, RGRID in trending markets is one of the most practical approaches.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/30 pt-12">
          <div className="p-6 bg-card border border-card-border rounded-xl text-center">
            <p className="text-foreground font-semibold">
              Ready to start market making on Polymarket?{' '}
              <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Sign up with the referral link
              </a>{' '}
              and launch your first bot.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
