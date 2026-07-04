import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

import imgAgentCards from '@assets/Screenshot_2026-07-04_at_5.46.55_PM_1783197959064.png';
import imgWhitelist from '@assets/Screenshot_2026-07-04_at_5.48.36_PM_1783197959065.png';
import imgNewAgent from '@assets/Screenshot_2026-07-04_at_5.52.58_PM_1783197959065.png';
import imgPrompt from '@assets/Screenshot_2026-07-04_at_5.55.13_PM_1783197959066.png';
import imgProposeStart from '@assets/Screenshot_2026-07-04_at_5.59.15_PM_1783197959066.png';
import imgMemory from '@assets/Screenshot_2026-07-04_at_6.02.21_PM_1783197959067.png';
import imgExp1Research from '@assets/Image_01-07-26_at_7.39_PM_1783197959067.JPG';
import imgExp1Execution from '@assets/Image_01-07-26_at_7.40_PM_1783197959068.JPG';
import imgExp2Lit from '@assets/Image_03-07-26_at_4.39_PM_1783197959068.JPG';
import imgExp3MM from '@assets/Image_23-06-26_at_2.07_PM_1783197959069.JPG';
import imgExp4DN from '@assets/Image_26-06-26_at_5.47_PM_1783197959070.JPG';
import imgExp5Hype from '@assets/Image_28-06-26_at_6.30_PM_1783197959069.JPG';
import imgExp6Sports from '@assets/Image_02-07-26_at_2.29_PM_1783197959068.JPG';

function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-xl border border-border/40 my-6 object-contain mx-auto block"
    />
  );
}

const agents = [
  {
    name: 'Supervisor Agent ⭐',
    desc: 'The most powerful agent on the platform — and still evolving. Think of this as your personal trading desk manager. The Supervisor doesn\'t just execute a single task; it orchestrates every other agent behind the scenes on your behalf. You give it a high-level goal in plain English, and it figures out which specialists to call, in what order, and what to do with their output.',
  },
  {
    name: 'Desk Trader',
    desc: 'Your execution strategist. The go-to for opening and closing positions, running algos, managing basket trades, and handling the full trade lifecycle.',
  },
  {
    name: 'Market Maker',
    desc: 'Runs a market-making bot on your behalf. Designed for providing liquidity and earning spreads without hand-tuning every parameter.',
  },
  {
    name: 'Research Agent',
    desc: 'A dedicated market analyst with access to CoinGecko, Precept, and backtesting tools. Ask about any token, not just what TreadFi trades.',
  },
  {
    name: 'Delta Neutral (DN) Agent',
    desc: 'Built specifically for delta-neutral strategies. It handles the complexity of running simultaneous long and short positions across different venues to collect funding rates while hedging directional risk. You tell it your notional size and venues; it calculates sizing, duration, and execution across both legs automatically.',
  },
  {
    name: 'Sports Consultant',
    desc: 'A data-driven analyst for sports events. Break down any game or match using real statistics and historical data. Currently read-only, but the roadmap includes placing bets on prediction markets like Polymarket and Hyperliquid directly from the agent.',
  },
];

export default function AgentsGettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <Link to="/agents" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10" data-testid="link-back-to-agents">
          <ArrowLeft size={15} />
          Back to Agents
        </Link>

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Tag size={14} />
            Agents
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight">
            What Hedge Fund Desks Have Had for Years, You Now Have in a Chat Window: TreadFi Agents Explained
          </h1>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock size={13} />
              <span>15 min read</span>
            </div>
            <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
              Agents
            </Badge>
          </div>
        </div>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-muted-foreground leading-relaxed mb-4">
            The trading desk that used to cost <span className="text-foreground font-semibold">$500,000 a year</span> in headcount is now available to anyone with an internet connection.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TreadFi Agents have been live for around two weeks. I've been working closely with the team during that time — extensively testing every feature across real market conditions, from delta-neutral execution to fully automated market making loops. I've seen what these agents can actually do, not just what they're supposed to do.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Further down this article, I'll show you exactly how to use them in your trading workflow — with real examples from my own runs. Whether you're a beginner trying to understand what's possible, or a serious trader looking for a genuine execution edge, this is for you.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There is a moment in every technology cycle when a capability that was locked behind institutional walls suddenly becomes available to ordinary people. The spreadsheet did it for financial modeling. Roboadvisors did it for portfolio management. Now, TreadFi agents are doing it for active trading execution — giving individual traders access to the kind of coordinated, data-driven, round-the-clock market participation that was previously the exclusive domain of hedge funds and prop desks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            But let's be precise about what these agents actually are — and what they are not. They are not a fortune teller. They do not predict the future. They cannot guarantee a profitable trade. What they do is gather data based on your idea, help you pressure-test that idea against real market signals, and then execute and monitor the trade with a precision and consistency that humans simply cannot maintain on their own.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 italic text-foreground/80 font-medium">
            The power of these agents is not in replacing your judgment — it is in amplifying it.
          </p>
        </section>

        {/* What Are Agents */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Are TreadFi Agents?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TreadFi agents are a <span className="text-foreground font-semibold">chat-driven workspace</span> where you hire an AI specialist to plan and run trades for you. Instead of manually filling in order forms, clicking through interfaces, and watching charts for hours, you describe what you want in plain English — and the agent translates that into action.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The simplest mental model: imagine hiring a senior trader who works 24/7, never gets tired, never misses a signal, and executes your instructions with machine precision. You bring the idea. The agent brings the execution.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-8">
            <p className="text-foreground font-semibold mb-2">From the official docs</p>
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "You describe what you want in plain English — 'work 500k of SOL on Binance over the next 2 hours, stay passive' — and the agent translates that into an order with the desired parameters."
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">Each agent is a different specialist with its own personality and toolset. As of now, the roster includes:</p>

          <div className="space-y-4 mb-8">
            {agents.map((agent, i) => (
              <div key={i} className="bg-card border border-card-border rounded-xl p-5">
                <p className="text-foreground font-semibold mb-1">{agent.name}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{agent.desc}</p>
              </div>
            ))}
          </div>

          <ArticleImage src={imgAgentCards} alt="TreadFi Agents dashboard showing all available agent cards" />

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-primary text-xs font-semibold mb-3">What agents CAN do</p>
              <ul className="space-y-2">
                {[
                  'Read market data',
                  'Place and manage orders on whitelisted accounts',
                  'Monitor positions',
                  'Respond to follow-up instructions in chat',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-destructive text-xs font-semibold mb-3">What agents CANNOT do</p>
              <ul className="space-y-2">
                {[
                  'Touch accounts you haven\'t whitelisted',
                  'Move funds off the platform',
                  'Override your existing risk limits',
                  'Run forever silently',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-destructive/70 rounded-full" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            The guardrails are real. This is a tool that executes within boundaries you define — not an autonomous system that takes the wheel entirely.
          </p>
        </section>

        {/* Step 1 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 1: Create a TreadFi Account</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Before anything else, you need a TreadFi account. Head to{' '}
            <a href="https://app.tread.fi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.tread.fi</a>{' '}
            and sign up.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">You can use my referral link:</p>
          <a
            href="https://app.tread.fi/referral/59S1TB1X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm font-medium"
            data-testid="link-agents-treadfi-referral"
          >
            https://app.tread.fi/referral/59S1TB1X
          </a>
          <p className="text-muted-foreground text-sm mt-3">
            No discount or special deal on your end — it just gives me a small share from the referral program, which helps fund the time I put into writing and researching these articles.
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 2: Getting Connected — Whitelisting Your Account</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Before an agent can do anything, it needs permission to act. This is by design.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Go to the <span className="text-foreground font-semibold">Settings</span> view on TreadFi and move at least one account into the <span className="text-foreground font-semibold">Whitelisted</span> column. This is the only account the agent can touch. Any account you haven't whitelisted is completely invisible to the agent — it cannot read it, it cannot trade on it, it cannot do anything with it.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-6">
            <p className="text-foreground font-semibold mb-1">The fundamental safety architecture</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You define the perimeter. The agent operates within it. Once an account is whitelisted and the settings are saved, you are ready to start.
            </p>
          </div>
          <ArticleImage src={imgWhitelist} alt="TreadFi Settings view showing Account Whitelist with available and whitelisted accounts" />
        </section>

        {/* Step 3 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Step 3: Choosing and Starting an Agent</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Navigate to the Agents workspace and select an agent by clicking its card. Then send your first prompt.
          </p>
          <ArticleImage src={imgNewAgent} alt="TreadFi New Agent screen showing all available agent cards to hire" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            The quality of your prompt directly determines the quality of the agent's execution. The docs give clear guidance:{' '}
            <span className="text-foreground font-medium italic">"Agents work best when you give them the same details you'd give a human trader."</span>
          </p>

          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">A good first prompt includes:</p>
            <ul className="space-y-3">
              {[
                { label: 'Ticker and side', example: '"buy SOL", "sell BTC perp"' },
                { label: 'Size', example: 'notional ($100,000 worth of ETH) or token count (1 BTC)' },
                { label: 'Account', example: 'which whitelisted account to use' },
                { label: 'Time horizon', example: '"over the next 2 hours", "by end of day"' },
                { label: 'Constraints', example: '"passive only", "don\'t cross 1% price impact", "stop if price moves through $X"' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">
                    <span className="text-foreground font-medium">{item.label}</span> — {item.example}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              Even if your prompt is incomplete, the agent will ask clarifying questions before taking any action. It will not guess on your behalf when real money is involved.
            </p>
          </div>

          <ArticleImage src={imgPrompt} alt="Desk Trader agent asking clarifying questions about ticker, side, and constraints" />

          <h3 className="text-lg font-semibold text-foreground mb-3 mt-8">The Propose Start Card</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For anything that touches your capital, the agent does not just execute immediately. It builds a <span className="text-foreground font-semibold">Propose Start card</span> — a summary of the proposed order parameters — and waits for your Start click. You can edit, reject, or accept.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is the human-in-the-loop moment. Every major action is gated by your confirmation. The agent proposes; you decide.
          </p>
          <ArticleImage src={imgProposeStart} alt="Desk Trader Propose Start card showing full order parameters before launch" />

          <h3 className="text-lg font-semibold text-foreground mb-3 mt-8">Managing a Live Task</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">At any point during a running task, you can:</p>
          <ul className="space-y-2 mb-4">
            {[
              { label: 'Pause / Resume', desc: 'stops new actions without cancelling what\'s already in flight' },
              { label: 'Cancel', desc: 'ends the task cleanly if there are no open positions' },
              { label: 'Cancel with positions', desc: 'if there\'s open exposure, you choose whether to flatten or leave positions for manual management' },
              { label: 'Edit mid-run', desc: 'just message the agent. "Tighten the spread to 5bps" or "stop after the next fill" — it will acknowledge and act, or come back with a new Propose Start if the change is material' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">{item.label}</span> — {item.desc}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-foreground mb-3 mt-8">Agent Memory</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Your agents no longer start cold every conversation. Tell one <span className="text-foreground font-medium">"when I say BTC I mean perps"</span> or correct a bad fill once — it sticks. Preferences and corrections persist across every chat, and you can view and edit what your agents remember.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is a small detail that makes a significant practical difference for anyone who trades with a consistent methodology.
          </p>
          <ArticleImage src={imgMemory} alt="TreadFi Agent Memory panel showing persistent preferences and trading context" />
        </section>

        {/* Cursor Parallel */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Cursor Codex Parallel: Why This Feels Familiar</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you've used Cursor, the AI-powered code editor, you already understand the paradigm TreadFi agents are working in — even if the domain is completely different.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In software development, Cursor didn't eliminate the need for engineers. What it did was remove the distance between an idea and its implementation. A developer describes what they want in natural language, the AI translates it into code, and the developer reviews, adjusts, and ships.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            TreadFi agents are doing the same thing for trading. Previously, the distance between a trading idea and its execution was enormous:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Identify the setup in the data',
              'Manually scan charts, order books, and CVD across multiple platforms',
              'Open the positions on one or more exchanges',
              'Monitor and adjust in real time',
              'Close at the right moment',
              'Do it all again when the next opportunity appeared',
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{pt}</span>
              </li>
            ))}
          </ul>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-1">The shift</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              TreadFi agents collapse that distance. You bring the idea; the agent handles the implementation. Your role shifts from execution to oversight — which is exactly where human judgment is most valuable.
            </p>
          </div>
        </section>

        {/* Experiments */}
        <section className="mb-6 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-2">My Real Experiments: Use Cases From the Field</h2>
          <p className="text-muted-foreground leading-relaxed">
            Everything in this section is something I've personally tested on TreadFi. These are not theoretical walkthroughs — they are documented runs shared publicly on X. Don't read too much into the position sizes. I was here for the ideas.
          </p>
        </section>

        {/* Experiment 1 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Experiment 1: The Full Research-to-Execution Loop</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I ran a complete research → execution → monitoring workflow in a single session, and it's probably the best summary of what these agents make possible.
          </p>

          <ol className="space-y-3 mb-8">
            {[
              'Opened the Market Researcher agent and gave it my own parameters — order flow divergence and positioning signals. It scanned every Hyperliquid pair, pulled live data via Kiyotaka, and returned 3 clean setups to focus on.',
              'Took one of those setups and used the Desk Trader agent to open a $LIT short at $1.88, with a stop loss at $2.06.',
              'Left the Researcher agent running in parallel to monitor positioning and order flow in real time — flagging whether the thesis still held as the trade evolved.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-xs mt-0.5">{i + 1}</span>
                <span className="text-muted-foreground leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <ArticleImage src={imgExp1Research} alt="Market Researcher agent output showing ZEC, LIT, and SOL order flow divergence analysis" />
          <ArticleImage src={imgExp1Execution} alt="Desk Trader active task showing LIT short execution with live order details" />

          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-1">The result</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Research, execution, and live oversight all running in one coordinated flow. Before this, each of those steps lived in a different tool, a different tab, and required constant manual attention to stitch together. Now it's one conversation.
            </p>
          </div>
        </section>

        {/* Experiment 2 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Experiment 2: The $LIT Short — Using Agents to Pressure-Test a Thesis</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My X timeline was bullish on $LIT because of a Robinhood announcement, with price trending up into it. But what I was seeing in the data told a different story. I brought the tension to the Supervisor agent with this prompt:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-5 mb-6">
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "What do you think about shorting $LITUSD? My X timeline is bullish due to the Robinhood announcement, with price trending up into it. But spot CVD is trending down, perp CVD trending up, OI increasing, and funding is neutral for now. What do you think about positioning — is a short viable?"
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">The agent didn't give me a prediction. It gave me analysis:</p>
          <ul className="space-y-2 mb-6">
            {[
              'Confirmed the divergence I spotted: spot CVD down while perp CVD climbs + OI up + neutral funding is a classic sign of speculative positioning, not organic demand',
              'Pulled a research specialist in the background to dig into live order flow, price action, and book depth for LITUSD',
              'Came back with a concrete setup: entry zone $2.10–$2.14 on any rollover, invalidation above $2.20',
              'Explained the reasoning at every step — buy liquidations exhausted, volume collapsing post-announcement, OI spiked +15.5% into the rally',
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{pt}</span>
              </li>
            ))}
          </ul>
          <ArticleImage src={imgExp2Lit} alt="Supervisor agent analyzing $LITUSD short viability with CVD and OI data" />
          <p className="text-muted-foreground text-sm mt-2">
            This is what an institutional research desk does before putting on a trade. The difference is I had it in a chat window in minutes.
          </p>
        </section>

        {/* Experiment 3 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Experiment 3: The Market Making Automation Loop</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Market making is profitable in calm, ranging markets and painful in volatile ones. The core problem I've always had: manually checking ADX values and Bollinger Band tightness across dozens of pairs all day is tedious and time-consuming.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">Here's the workflow I set up with the Supervisor agent:</p>

          <ol className="space-y-3 mb-6">
            {[
              'Told it which exchange and pairs I wanted to market make on',
              'It monitored each chart and scored every pair out of 100 based on ADX, Bollinger Band tightness, and additional parameters I specified',
              'When a pair scored above 90, it launched my MM bot with my grid settings',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-xs mt-0.5">{i + 1}</span>
                <span className="text-muted-foreground leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <ArticleImage src={imgExp3MM} alt="Supervisor agent scanning Ondo pairs and scoring MM suitability with ADX and Bollinger Band analysis" />

          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-1">The result</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The entire monitoring and execution loop ran without me touching anything. I always knew what to look for — the conditions, the parameters, the logic. What I never had was the time and resources to continuously scan every chart and act the instant conditions changed. The agent closes that gap completely.
            </p>
          </div>
        </section>

        {/* Experiment 4 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Experiment 4: Delta-Neutral Trading Across Two Venues</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Delta-neutral trading — simultaneously long and short the same asset on different venues to collect the funding rate spread while staying hedged — has always required real infrastructure to execute cleanly. But here's what most people miss: <span className="text-foreground font-semibold">DN trading isn't won on the entry. It's won on execution — especially the unwind.</span>
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-2">Opening the trade</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Silver had positive funding on Hyperliquid. The strategy: short Silver on Hyperliquid, long Silver on Ondo Perps, and collect the funding spread. I used the DN agent via the Supervisor to open $40k notional — $20k per venue. The agent calculated sizing, duration, and execution across both legs. I didn't touch anything. The executed spread came in at +0.064 (9.8 bps).
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-2">Where most DN traders silently lose money</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The opening spread is not the full picture. When you close, if Hyperliquid is still the leading venue, you buy back your short higher and sell your long lower — you give back the spread on exit. The rule: your unwind loss must not exceed your opening gain. Opened at +0.064? Your unwind shouldn't cost more than -0.064. Get this right and net execution cost approaches zero. You keep the funding, minus fees. That's the entire game.
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-2">Why the unwind is impossible to do manually — and how the agent solves it</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The best time to unwind is when both venues converge in price. But you cannot watch two order books 24/7. I instructed the Supervisor agent to monitor the spread between both venues continuously and only fire the unwind when it crosses my threshold — better than -0.008. It watches, waits, and executes only when the conditions are right. Around the clock. And I unwind in smaller chunks — the agent re-checks the spread before each one.
              </p>
            </div>
          </div>

          <ArticleImage src={imgExp4DN} alt="Supervisor agent managing delta-neutral Silver/Ondo spread unwind with live spread monitoring" />

          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-1">The result</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A manual strategy that required constant attention becomes fully set-and-forget, with better net P&L because the execution is tighter than anything I could do by hand.
            </p>
          </div>
        </section>

        {/* Experiment 5 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Experiment 5: Closing a Data Gap — Native HL Spot CVD</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you trade $HYPE using order flow, you know the problem: tools like Kiyotaka give you CVD from Bybit, OKX, and Coinbase — but not from Hyperliquid native spot. And since HL native spot drives the most volume, you were never getting the full picture.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I asked the Research agent to pull native HL spot CVD for $HYPE over two weeks. It delivered the data and the charts. Simple request, but genuinely useful. This is what I mean when I say these agents close data gaps that previously required either expensive proprietary tools or building your own pipeline.
          </p>
          <ArticleImage src={imgExp5Hype} alt="Research agent pulling native Hyperliquid spot CVD data for HYPE with chart output" />
        </section>

        {/* Experiment 6 */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Experiment 6: Sports Agents — A Glimpse of What's Coming</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I spent some time with the newly launched Sports Consultant agent, which lets you break down any sports event with real statistics and historical data. Right now it's read-only — you can research and analyze, but not yet act.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            What's coming is the interesting part: placing bets on Polymarket and Hyperliquid based on those stats, directly from the agent. The same research-then-execute workflow I use for crypto trades, applied to sports prediction markets. The infrastructure is already there. The surface area is just expanding.
          </p>
          <ArticleImage src={imgExp6Sports} alt="Sports Consultant agent analyzing World Cup match predictions with data-driven breakdowns" />
        </section>

        {/* Institutional Edge */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why This Is Game-Changing: The Institutional Edge, Democratized</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The capabilities described above are not new. Hedge funds, prop trading firms, and institutional desks have been running versions of these workflows for years. The difference is cost and access.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">To replicate the research-to-execution-to-monitoring loop at a professional level, you would previously need:</p>
          <ul className="space-y-2 mb-6">
            {[
              'A quantitative analyst to build the data pipeline',
              'A risk management system to set position limits',
              'A team of traders to monitor and execute across venues',
              'Infrastructure to run 24/7',
              'Hundreds of thousands of dollars in annual cost',
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{pt}</span>
              </li>
            ))}
          </ul>
          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-foreground font-semibold mb-1">TreadFi agents compress all of that into a chat interface.</p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-2">
              This doesn't mean every individual trader will suddenly outperform institutions. Institutions still have advantages in capital, proprietary data, and years of refined strategy. But the execution gap — the friction between idea and action — is closing rapidly.
            </p>
          </div>
        </section>

        {/* What Agents Are Not */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">What TreadFi Agents Are Not</h2>
          <div className="space-y-4">
            {[
              {
                label: 'Not predictive',
                desc: 'They do not forecast price movements. They do not tell you that $LIT is going to fall. What they do is help you gather data to evaluate your own thesis — and then execute that thesis with precision if you decide to act.',
              },
              {
                label: 'Not set-and-forget',
                desc: 'The best use of these agents involves an active trader who brings informed ideas and uses the agent to implement and monitor them. The agent amplifies your judgment; it doesn\'t replace it.',
              },
              {
                label: 'Not infallible',
                desc: 'The platform is in beta. There will be rough edges. The docs say it plainly: expect occasional issues, and send feedback when you find them.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-card-border rounded-xl p-5">
                <p className="text-foreground font-semibold mb-1">{item.label}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-4">
            <p className="text-foreground font-semibold mb-1">The alpha comes from your idea.</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              "Don't read into the size — these are experimental runs. I'm here for the ideas and to see what's actually possible with these agents." The agent executes brilliantly, but the signal — the insight that a trade is worth taking — still has to come from you.
            </p>
          </div>
        </section>

        {/* Getting Started First Prompt */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Getting Started: Your First Prompt</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">If you've read this far and want to try it, here is a practical starting point:</p>

          <ol className="space-y-4">
            {[
              'Whitelist an account in Settings with a size you\'re comfortable experimenting with.',
              'Open the Research agent and ask it a question about a market you already have a view on. Don\'t ask it what to trade — ask it to gather data on a specific setup you\'re already thinking about. Example: "Pull CVD, OI, and funding data for $HYPE on Hyperliquid over the last 48 hours. I\'m thinking about a long position — does the data support it?"',
              'Review the output. Does it confirm your thesis? Complicate it? Change it?',
              'If you want to act, open the Desk Trader agent and describe the trade: ticker, side, size, account, time horizon, constraints.',
              'Review the Propose Start card. Edit if needed. Click Start.',
              'Watch the mission log. Ask follow-up questions as the trade evolves.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-md gradient-bg-cyan-emerald flex items-center justify-center text-white font-bold text-xs mt-0.5">{i + 1}</span>
                <span className="text-muted-foreground leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <div className="bg-card border border-card-border rounded-xl p-5 mt-6">
            <p className="text-foreground font-semibold mb-1">Start small.</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The value of these agents is not in the size of the first trade — it's in learning how to work with them. Every trader who shared results publicly started with experimental sizing. The learning phase is part of the value.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            TreadFi agents represent something genuinely new in trading infrastructure. Not because the underlying strategies are new — CVD analysis, delta-neutral trading, and market making have existed for years. What's new is the <span className="text-foreground font-semibold">compression of distance between idea and execution</span>, and the accessibility of coordinated, multi-agent market participation to traders who are not backed by institutional infrastructure.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The analogy to Cursor in software development is apt: just as AI coding assistants didn't make engineers obsolete but made skilled engineers dramatically more productive, TreadFi agents won't replace traders with good judgment — they will make traders with good judgment dramatically more capable.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The edge has always come from the quality of the idea. What's changing is how much of the implementation — the data gathering, the execution, the monitoring, the iteration — can now be handled by an agent working on your behalf.
          </p>
          <div className="p-6 bg-card border border-card-border rounded-xl">
            <p className="text-foreground font-semibold text-lg">
              The institutional wall is coming down. The question is what you're going to build on the other side of it.
            </p>
          </div>
          <p className="text-muted-foreground text-xs mt-6">
            Sources: TreadFi official documentation (docs.tread.fi), real trader experiments documented by @sportytechworld and @tread_fi on X, July 2026.
          </p>
        </section>

      </div>
    </div>
  );
}
