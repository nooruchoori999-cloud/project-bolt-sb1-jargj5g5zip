interface Section {
  title: string;
  content: string;
  images?: string[];
}

const sections: Section[] = [
  {
    title: 'Adding Your Trading Account',
    content:
      'Tread supports HyperliquidX, Aster DEX, Pacifica, Paradex, Extended, and NadoHQ. For this tutorial we\'ll use Paradex — it\'s the cheapest place to start as it has zero trading fees and no builder fee from Tread. With other exchanges you pay: Exchange trading fees + 0.02% builder fee to Tread on every trade. So for beginners, Paradex makes the most sense.',
  },
  {
    title: 'Connecting Paradex',
    content:
      'Click the wallet icon, then click "Connect Perp Dex account". Choose Paradex from the dropdown. Choose an account name, click Connect Wallet, select your wallet, and sign the transaction. Your wallet is now linked.',
    images: ['https://drive.google.com/uc?export=view&id=1Si6g8zAomzjB3ZHqJJr9CwwnbPb9X1tA'],
  },
  {
    title: 'Setting Up the Market Maker Bot',
    content:
      'Go to the Bot section and click Market Maker Bot. Under Account, select your Paradex account. Choose your trading pair.',
    images: ['https://drive.google.com/uc?export=view&id=1dwqxiKQ3-HMy-lLFtQ6VF5755-yDQOt2'],
  },
  {
    title: 'Choosing the Right Pair & Time',
    content:
      'Look for clear ranging price action. On Paradex, BTCUSD usually works well. Avoid running during NY market open (9:30 AM NY time). Instead use: NY afternoon after 11:30 AM NY time, around 2:30 PM NY time, or London session after 5:00 AM NY time.',
    images: ['https://drive.google.com/uc?export=view&id=1snPoU5D_Mfy1p4mjYbhrupVD0JFW6MHS'],
  },
  {
    title: 'Margin & Leverage',
    content:
      'Margin determines how much balance you use and how much volume you target. Example: $10,000 volume at 20x leverage = ~$25 margin needed. Always keep 2x buffer — have $50 balance for a $25 margin order.',
  },
];

const refModes = [
  {
    name: 'MID',
    desc: 'Best for volume, not PNL. Works in trending or ranging markets but usually incurs small negative PNL. Easiest for beginners. Supports directional bias: Long, Short, or Neutral.',
    images: ['https://drive.google.com/uc?export=view&id=1PuO0q7OoXVY7lRn4sxDU7Gz_eTQr6Nj0'],
  },
  {
    name: 'GRID',
    desc: 'Most popular. Locks in profit at a specific spread. Grid +1 means every buy is lower than sell, locking in 1 basis point per cycle. Works best in sideways markets. Spread ranges: +1 to +50 (locks profit, higher stall risk), -1 to -50 (small losses, higher fill rate).',
    images: ['https://drive.google.com/uc?export=view&id=1jF-E7PWYtYl3-iYKDw7SZ3fLyL9usbO5'],
  },
  {
    name: 'RGRID',
    desc: 'Opposite of Grid. Designed for clean directional moves, not choppy markets. If price is trending with speed on a 1 min chart, RGRID is built for that.',
    images: [
      'https://drive.google.com/uc?export=view&id=1fRXaxe4GNnoRwuw_6nNAPgxba8SZRoG6',
      'https://drive.google.com/uc?export=view&id=1ggmz43wAH7DLblt3V2jiLPR8aeXMRj4K',
    ],
  },
  {
    name: 'RSI (SIGNAL)',
    desc: 'Uses RSI indicator from kiyotaka.ai. Buys when RSI is low, sells when RSI is high. Good for mean reverting trends.',
    images: [
      'https://drive.google.com/uc?export=view&id=1gAg7i0d_8v8I98j-jqArVHSKA92fmUAG',
      'https://drive.google.com/uc?export=view&id=1SEyudPNxPDj2G9iyhFCNZDq4h-Y5yKEK',
    ],
  },
  {
    name: 'BLEND',
    desc: 'A Mid bot that uses blended reference price from other venues. Useful for low liquidity tokens where you prefer quoting based on price from a higher liquidity exchange.',
  },
];

const stopLossImages = [
  'https://drive.google.com/uc?export=view&id=1snPoU5D_Mfy1p4mjYbhrupVD0JFW6MHS',
  'https://drive.google.com/uc?export=view&id=1L1OS8WwG1xDg4LbRSDH4INW0Vo6IN3yV',
];

const monitorImages = [
  'https://drive.google.com/uc?export=view&id=1_pTj4X_Jzp0lmSsJENfQTrW_DIkedsy0',
  'https://drive.google.com/uc?export=view&id=14jwfxoiMP_ll23aI3xdirK4F27XdjYCp',
];

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-xl border border-border/40 my-4 object-contain"
      data-testid="img-section"
    />
  );
}

function SectionBlock({ title, children }: { title: string; children: JSX.Element | JSX.Element[] }) {
  return (
    <section className="border-t border-border/30 pt-10 mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default function YourFirstBot() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <section className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            Get Started
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 tracking-tight">
            How to Start Your First Bot with Tread
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Before we get into how to use Tread, the first step is creating an account. Use this referral link:{' '}
            <a
              href="https://app.tread.fi/referral/59S1TB1X"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
              data-testid="link-referral"
            >
              https://app.tread.fi/referral/59S1TB1X
            </a>{' '}
            — Complete the signup process, set your credentials, and log in.
          </p>
        </section>

        {sections.map((s, i) => (
          <SectionBlock key={i} title={s.title}>
            <p className="text-muted-foreground leading-relaxed mb-2">{s.content}</p>
            {s.images?.map((img, j) => (
              <SectionImage key={j} src={img} alt={`${s.title} screenshot ${j + 1}`} />
            ))}
          </SectionBlock>
        ))}

        <SectionBlock title="Participation Rate">
          <SectionImage src="https://drive.google.com/uc?export=view&id=1pT7ZVaDiyAh-M2CH9it19cu0uHoXVlBl" alt="Participation Rate" />
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">Aggressive</span> — builds position quickly around one price point, best in tight ranges.{' '}
            <span className="text-foreground font-semibold">Normal</span> — balanced approach.{' '}
            <span className="text-foreground font-semibold">Passive</span> — builds slowly like a ladder, max exposure ~$450–$500 on a $10k order, best for larger ranges and orders below $10k.
          </p>
        </SectionBlock>

        <SectionBlock title="Reference Price Modes">
          <p className="text-muted-foreground leading-relaxed mb-6">
            There are 5 modes. Understanding the difference is the gap between farming volume and locking in profit.
          </p>
          <div className="space-y-8">
            {refModes.map((mode, i) => (
              <div
                key={i}
                className="bg-card border border-card-border rounded-xl p-6"
                data-testid={`card-refmode-${i}`}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {mode.name}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-2">{mode.desc}</p>
                {mode.images?.map((img, j) => (
                  <SectionImage key={j} src={img} alt={`${mode.name} screenshot ${j + 1}`} />
                ))}
              </div>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title="Stop Loss & Grid Reset Threshold">
          <SectionImage src={stopLossImages[0]} alt="Stop Loss settings" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-semibold">Stop Loss:</span> If set to 10%, once loss exceeds 10% of margin the bot cancels orders and closes exposure. With $25 margin, SL = $2.50. Note: bot exits using maker-based cleanup logic over 1–2 minutes, so realized loss may slightly exceed SL during violent moves.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-semibold">Grid Reset Threshold</span> (grid bots only): If set to 0.5%, bot accepts the loss when price moves 0.5% away from average entry and restarts around current price. Prevents one bad move from hitting full SL immediately.
          </p>
          <SectionImage src={stopLossImages[1]} alt="Grid Reset Threshold" />
        </SectionBlock>

        <SectionBlock title="Beginner-Safe Settings">
          <div className="bg-card border border-card-border rounded-xl p-6" data-testid="card-beginner-settings">
            <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><span className="text-foreground font-medium">10–15x leverage</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><span className="text-foreground font-medium">Grid +1 spread</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><span className="text-foreground font-medium">0.1% grid reset threshold</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><span className="text-foreground font-medium">10% stop loss</span></span>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Run a few $10k orders first to understand behavior.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock title="Starting the Bot & Monitoring">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Click Start Trading. Track everything on the Orders page. Look at the Fill Quantity section — the orange dotted line shows maximum exposure tolerance. The white line shows current exposure.
          </p>
          <SectionImage src={monitorImages[0]} alt="Orders monitoring view" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            For a Grid+ bot, buy price (green dot) is always lower than sell price (red dot). If price moves down after hitting the green dot, the bot will stall.
          </p>
          <SectionImage src={monitorImages[1]} alt="Grid bot order visualization" />
        </SectionBlock>

      </div>
    </div>
  );
}
