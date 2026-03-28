import { BookOpen, Clock, BarChart2, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function Lesson2Page() {
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
            Lesson 2
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How to Find High-Probability TreadFi MM BOT Setups Using This ML Tool
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            If you're using TreadFi and guessing your bot settings, you're already behind. There's a new tool that uses machine learning trained on real trading data to validate your setup before you risk capital.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock size={13} />
              <span>8 min read</span>
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

        {/* Section: What this tool actually does */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What This Tool Actually Does</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This isn't just another calculator. The{' '}
            <a href="https://treadtools.vercel.app/win-rate" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              TreadTools Win-Rate Predictor
            </a>{' '}
            uses machine learning trained on 90 days of real user bot trading data to figure out what settings actually worked, which configs were profitable, and what patterns repeat.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">It analyzes:</p>
            <ul className="space-y-2.5">
              {[
                'What settings actually worked',
                'Which configs were profitable',
                'What patterns repeat across 90 days of real trading data',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section: Real-time market validation */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Real-Time Market Validation</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The tool doesn't stop at historical data. Once it finds a "good" setup from past data, it cross-checks it against current market conditions so you're not just trading based on the past — you're trading with context.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-4">It validates the setup by checking:</p>
            <ul className="space-y-2.5">
              {[
                'The last 90 minutes of price action (1-minute candles)',
                'Current market conditions',
                'Whether the historical setup still makes sense right now',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section: Test your own setup */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Test Your Own Setup</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You can input your exact configuration and get a probability-based outcome before ever risking capital.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">Input fields:</p>
            <ul className="space-y-2.5 mb-0">
              {[
                'Exchange',
                'Pair',
                'Mode',
                'Spread',
                'Leverage',
                'Duration',
                'Bias',
                'SL / TP',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="https://i.postimg.cc/rKbL892P/Screenshot-2026-03-28-at-12-20-27-PM.png"
            alt="TreadTools win-rate predictor input form"
            className="w-full rounded-xl mb-6"
          />

          <p className="text-muted-foreground leading-relaxed mb-4">
            Click "Predict Outcome" and it will tell you:
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <ul className="space-y-2.5">
              {[
                'Probability of hitting TP (profit)',
                'Probability of hitting SL (loss)',
                '% probability of ending in profit',
                '% probability of ending in loss',
                'Strategy ranking vs other winning configurations',
                'A tier rating (S → D)',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="https://i.postimg.cc/fJFhwvQ6/Screenshot-2026-03-28-at-12-32-32-PM.png"
            alt="TreadTools win-rate predictor outcome results"
            className="w-full rounded-xl"
          />
        </section>

        {/* Section: Understanding the Tier System */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Understanding the Tier System</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Every predicted setup is assigned a tier rating from S to D based on its probability of success. Stick to S and A tier configs if you want better odds of staying green.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">S Tier</p>
              <p className="text-muted-foreground text-sm">Highest probability setups — best edge available based on historical data and current conditions.</p>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">A Tier</p>
              <p className="text-muted-foreground text-sm">Strong setups with a good chance of profit. Worth running when S tier isn't available.</p>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">B / C Tier</p>
              <p className="text-muted-foreground text-sm">Average setups. Not ideal — only run if you have a strong reason to.</p>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">D Tier</p>
              <p className="text-muted-foreground text-sm">Weak setups. Avoid these configurations entirely.</p>
            </div>
          </div>
        </section>

        {/* Section: Find the Best Config */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Let the Tool Find the Best Config for You</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Don't want to guess anything? Just select your exchange and pair, then click "Find Best Config." The tool does all the work for you.
          </p>

          <img
            src="https://i.postimg.cc/N5VwgxvZ/Screenshot-2026-03-28-at-12-34-36-PM.png"
            alt="TreadTools Find Best Config button"
            className="w-full rounded-xl mb-6"
          />

          <div className="bg-card border border-card-border rounded-xl p-6 mb-6">
            <p className="text-foreground font-semibold mb-4">It will return:</p>
            <ul className="space-y-2.5">
              {[
                'The top-performing setup',
                'Its tier rating',
                'The exact settings that historically performed best',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                  <span className="text-muted-foreground text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              All based on 90 days of trading data combined with current 90-minute market conditions.
            </p>
          </div>

          <img
            src="https://i.postimg.cc/SJ5pyGp0/Screenshot-2026-03-28-at-12-36-20-PM.png"
            alt="TreadTools best config results"
            className="w-full rounded-xl mb-4"
          />

          <div className="bg-card border border-card-border rounded-xl p-5">
            <p className="text-muted-foreground text-sm">
              If grid reset (for Grid bots) or TP reset (for RGrid) isn't available in these configs, just stick with the default settings for those.
            </p>
          </div>
        </section>

        {/* Section: Important disclaimer */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Important: This Is NOT a Guarantee</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This tool gives probabilities, not certainties. Markets change. But from real-world testing, it's been surprisingly reliable — especially when sticking to S and A tier setups.
          </p>
          <div className="bg-card border border-card-border rounded-xl p-6">
            <p className="text-muted-foreground text-sm">
              Use it as a validation layer — not as a guaranteed signal. Always apply your own judgment about market conditions before deploying a bot.
            </p>
          </div>
        </section>

        {/* Section: Why this matters */}
        <section className="mb-12 border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why This Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most people lose on TreadFi because they over-randomize settings, don't understand market conditions, and run bots blindly. This tool solves all three.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">Without the tool</p>
              <ul className="space-y-2">
                {['Guessing settings', 'No context on market conditions', 'Running bots blindly'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-5">
              <p className="text-foreground font-semibold mb-3">With the tool</p>
              <ul className="space-y-2">
                {['Data-backed setup validation', 'Real-time market context', 'Clear probability of profit or loss'].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                    <span className="text-muted-foreground text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="border-t border-border/30 pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Final Thoughts</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you're serious about using TreadFi profitably:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Stop guessing',
              'Start validating',
              'Use data',
              'Use probability',
              'Use tools like this',
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full flex-shrink-0 gradient-bg-cyan-emerald" />
                <span className="text-muted-foreground">{pt}</span>
              </li>
            ))}
          </ul>
          <div className="p-6 bg-card border border-card-border rounded-xl text-center">
            <p className="text-foreground font-semibold">
              In this game, edge is everything. Use the{' '}
              <a href="https://treadtools.vercel.app/win-rate" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                TreadTools Win-Rate Predictor
              </a>{' '}
              to find yours.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
