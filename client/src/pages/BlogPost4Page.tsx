import { Clock, ArrowLeft, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import img1 from '@assets/1_1777200896798.png';
import img2 from '@assets/2_1777200896799.png';
import img3 from '@assets/3_1777200896799.png';
import img4 from '@assets/4_1777200896799.png';
import img5 from '@assets/5_1777200896800.png';
import img6 from '@assets/6_1777200896800.png';
import img7 from '@assets/7_1777200896800.png';
import img8 from '@assets/8_1777200896801.png';
import img9 from '@assets/9_1777200896801.png';
import img10 from '@assets/10_1777200896802.png';
import img11 from '@assets/11_1777200896802.png';
import img12 from '@assets/12_1777200896802.png';
import img13 from '@assets/13_1777200896803.png';
import img14 from '@assets/14_1777200896803.png';

const Img = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="rounded-xl max-w-full mx-auto block my-5" />
);

const Bullets = ({ items }: { items: (string | JSX.Element)[] }) => (
  <ul className="space-y-2">
    {items.map((pt, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
        <span className="text-muted-foreground text-sm">{pt}</span>
      </li>
    ))}
  </ul>
);

export default function BlogPost4Page() {
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
            Aftermath × Tread Guide: Earn a Share of 60K SUI Every 2 Weeks
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Aftermath recently won the community vote to be integrated with TreadFi — and it's now live. If you're looking for a place to run your TreadFi market making bot with strong incentives, Aftermath is worth your attention.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <Clock size={12} />
              <span>7 min read</span>
            </div>
            <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
              Market Making
            </Badge>
          </div>
        </div>

        {/* Image 1 — announcement */}
        <Img src={img1} alt="TreadFi × Aftermath integration announcement" />

        {/* What is Aftermath */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Aftermath is a fully on-chain DEX native to the Sui ecosystem, heavily backed by the Sui team, and currently the protocol generating the most volume on Sui. Here's why it's an attractive farm:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <Bullets items={[
              'Negative maker rebate of -0.005% — you get paid when your limit orders are matched, instead of paying a fee. Most DEXs charge a 0.1% maker fee.',
              '60,000 SUI in rewards every two weeks, distributed based on your volume generated on Aftermath.',
              'Aftermath points dropped to your wallet every two weeks.',
              'TreadFi points with a current 2x multiplier.',
            ]} />
            <p className="text-muted-foreground text-sm mt-4 font-medium">That's four separate incentive streams running simultaneously on top of your market making activity.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://aftermath.finance/?ref=noorucn1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 gradient-bg-cyan-emerald text-white rounded-md text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20" data-testid="link-aftermath-referral">
              Get started with Aftermath →
            </a>
            <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 text-primary rounded-md text-sm font-semibold hover:bg-primary/5 transition-all duration-200" data-testid="link-treadfi-referral">
              Get started with TreadFi →
            </a>
          </div>
        </section>

        {/* Step 1 */}
        <section className="mb-8 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 1 — Set Up a Sui Wallet</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Since Aftermath is fully on-chain, you'll need a Sui-compatible wallet. TreadFi currently supports OKX Wallet for Aftermath, so that's what I recommend.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <Bullets items={[
              'Download the OKX Wallet extension.',
              'Switch the network to Sui — this will generate a fresh Sui wallet address.',
            ]} />
            <Img src={img2} alt="OKX Wallet — switching to Sui network" />
            <Bullets items={['Copy your Sui wallet address.']} />
            <Img src={img3} alt="Copying Sui wallet address in OKX Wallet" />
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-8 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 2 — Bridge USDC to Sui</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">You'll need USDC on the Sui network to use as margin.</p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <Bullets items={[
              'Go to jumper.exchange.',
              'Bridge USDC from Arbitrum to Sui.',
            ]} />
            <Img src={img4} alt="Jumper Exchange — bridging USDC from Arbitrum to Sui" />
            <Bullets items={['Wait approximately 20 minutes for the bridge to complete.']} />
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-8 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 3 — Set Up Your Aftermath Account</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Once your USDC arrives in your Sui wallet:</p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <Bullets items={[
              'Go to aftermath.finance and connect your OKX wallet.',
              'Click the gas icon and set USDC as your gas token — this ensures USDC is used for transaction fees instead of SUI.',
            ]} />
            <Img src={img5} alt="Aftermath — setting USDC as gas token" />
            <Bullets items={['Click Create Account and sign the transaction.']} />
            <Img src={img6} alt="Aftermath — Create Account screen" />
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <p className="text-muted-foreground text-sm">Note: Sometimes USDC gas doesn't work and you may also need a small amount of SUI for gas (around $1 worth is enough). You can bridge SUI the same way via Jumper, or withdraw from Binance directly to your Sui address.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <p className="text-muted-foreground text-sm">Important: Since Aftermath is fully on-chain, TreadFi needs an agent wallet to place and manage orders without requiring manual approval for every transaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-8 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 4 — Top Up Your Agent Wallet with Gas</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aftermath charges a small gas fee per bot request. From testing, each full bot run costs approximately 1.5–2.5 SUI in gas, regardless of the volume size. Whether you're running 10k or 200k in notional volume, the gas cost is the same — so larger positions are more gas-efficient.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-4">
            <p className="text-foreground font-medium text-sm mb-2">Good news:</p>
            <p className="text-muted-foreground text-sm">The founder has confirmed gas costs will be reduced by approximately 50% in the coming days.</p>
          </div>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">To top up gas on your agent wallet:</p>
            <Bullets items={['Click the Zap button in the top right corner.']} />
            <Img src={img7} alt="Aftermath — Zap button for agent wallet top-up" />
            <Bullets items={[
              'Enable One Click Trading and click Zap.',
              'Select USDC, enter 5 USDC (recommended), and click Enable, then Deposit.',
            ]} />
            <Img src={img8} alt="Aftermath — Zap deposit screen for gas top-up" />
            <p className="text-muted-foreground text-sm mt-4">Your agent wallet now has SUI for gas.</p>
            <p className="text-muted-foreground text-sm mt-2">To withdraw gas back at any time, click Zap → Withdraw and pull your SUI back to your main wallet.</p>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-8 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 5 — Deposit USDC as Margin</h2>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <Bullets items={[
              'Click Deposit (next to the Zap button).',
            ]} />
            <Img src={img9} alt="Aftermath — Deposit button for margin" />
            <Bullets items={[
              'Select your USDC amount.',
              'Click Deposit Collateral and sign the transaction.',
            ]} />
            <p className="text-muted-foreground text-sm mt-4">Your margin is now ready. To withdraw it back at any time, click Withdraw and select your USDC.</p>
          </div>
        </section>

        {/* Step 6 */}
        <section className="mb-8 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 6 — Connect Aftermath to TreadFi</h2>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <Bullets items={[
              'Go to app.tread.fi.',
              'Click the wallet icon.',
            ]} />
            <Img src={img10} alt="TreadFi — wallet icon to connect accounts" />
            <Bullets items={['Click Connect Perp DEX Account and select Aftermath.']} />
            <div className="grid sm:grid-cols-2 gap-4 my-5">
              <img src={img11} alt="TreadFi — Connect Perp DEX Account button" className="rounded-xl w-full" />
              <img src={img12} alt="TreadFi — selecting Aftermath from DEX list" className="rounded-xl w-full" />
            </div>
            <Bullets items={[
              'Enter an account name — use a name, not numbers.',
              'Click Connect Wallet, connect your OKX wallet, and sign the 3 transactions.',
            ]} />
            <Img src={img13} alt="TreadFi — connecting OKX wallet to Aftermath account" />
            <p className="text-muted-foreground text-sm mt-4 font-medium">Aftermath is now linked to your TreadFi account.</p>
          </div>
        </section>

        {/* Step 7 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 7 — Run Your TreadFi Market Making Bot</h2>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <Bullets items={[
              <>Go to the MM Bots section: <a href="https://app.tread.fi/volume_bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://app.tread.fi/volume_bot</a></>,
              'Click Select Account and choose your Aftermath account.',
              'Select a trading pair — BTC is recommended as it\'s the most liquid pair on Aftermath.',
              'Select your margin amount and leverage.',
              'Choose a reference price mode. If you\'re new to TreadFi bots, use dGrid, select Crypto, set a 10% stop loss, and run it.',
            ]} />
            <Img src={img14} alt="TreadFi — configuring MM bot for Aftermath with Crypto dGrid mode" />
            <p className="text-muted-foreground text-sm mt-2">
              If you want to explore other modes and strategies in depth, check out the{' '}
              <a href="https://treadfiacademy--sportytechworld.replit.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                TreadFi Academy
              </a>.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Summary</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Aftermath × TreadFi is one of the more compelling market making opportunities right now — negative maker rebates, SUI campaign rewards, Aftermath points, and TreadFi 2x points, all running simultaneously.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://aftermath.finance/?ref=noorucn1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 gradient-bg-cyan-emerald text-white rounded-md text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20">
                Aftermath referral →
              </a>
              <a href="https://app.tread.fi/referral/59S1TB1X" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 text-primary rounded-md text-sm font-semibold hover:bg-primary/5 transition-all duration-200">
                TreadFi referral →
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
