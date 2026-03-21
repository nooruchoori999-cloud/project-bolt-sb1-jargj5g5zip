import { ArrowRight, TrendingUp, Zap, Lock, AlertCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const sections = [
    {
      title: 'What the TreadFi MM Bot Does',
      icon: <TrendingUp className="text-cyan-400" size={28} />,
      intro: 'The TreadFi MM bot executes market making strategies based on your settings.',
      items: [
        'Places buy and sell orders according to your defined parameters',
        'Earns from spreads between orders',
        'Manages inventory to control exposure',
        'Helps you clearly define and limit risk',
      ],
      highlight: 'It doesn\'t predict the market — it follows your strategy.',
      clarification: 'Performance depends entirely on your setup and market conditions.',
    },
    {
      title: 'This Isn\'t a Vault — It\'s a Tool',
      icon: <Lock className="text-emerald-400" size={28} />,
      intro: 'Most DeFi products ask you to deposit funds and trust a strategy. TreadFi is different.',
      items: [
        'You control your capital',
        'You define your risk',
        'You customize how the bot behaves',
      ],
      comparison: true,
    },
    {
      title: 'Where the Real Profit Comes From',
      icon: <Zap className="text-cyan-400" size={28} />,
      intro: 'Market making is not just about trading PnL. Most perpetual DEXs reward liquidity providers through:',
      items: [
        'Points programs',
        'Fee rebates',
        'Trading incentives',
      ],
      highlight: 'Your true PnL = Trading PnL + Incentives Value',
      example: 'Early market makers earned significant value from incentive programs, even when their trading PnL was flat or slightly negative.',
    },
    {
      title: 'Important Reality',
      icon: <AlertCircle className="text-orange-400" size={28} />,
      intro: 'This is not guaranteed income.',
      items: [
        'Incentives are speculative',
        'Token values can change',
        'Market conditions can move against you',
      ],
      highlight: 'You are betting on your strategy and the growth of the DEX.',
    },
    {
      title: 'Why This Model Exists',
      icon: <Lightbulb className="text-cyan-400" size={28} />,
      items: [
        'DEXs need liquidity to grow',
        'Market makers provide that liquidity',
        'Incentives attract participation',
      ],
      highlight: 'DEX wins → better liquidity. You win → rewards, rebates, and opportunity',
    },
    {
      title: 'What TreadFi Does',
      icon: <Zap className="text-emerald-400" size={28} />,
      intro: 'TreadFi does not create these incentives. It helps you capture them efficiently.',
      items: [
        'Automates market making',
        'Manages inventory and exposure',
        'Keeps you active in the market',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="pt-20 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Market Making
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                Made for Everyone
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Run your own market making strategy on perp DEXs — not by depositing into a vault, but by running your own customizable system.
            </p>

            <Link
              to="/lessons"
              className="group inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-cyan-500/20 items-center gap-2"
            >
              Start Learning
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </section>

        {sections.map((section, idx) => (
          <section key={idx} className="py-16 border-t border-gray-800/50">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{section.title}</h2>
              </div>

              {section.intro && (
                <p className="text-gray-300 mb-6 leading-relaxed">{section.intro}</p>
              )}

              {section.comparison ? (
                <div className="space-y-4 mb-6">
                  <div className="pl-4 border-l-2 border-gray-700 py-2">
                    <p className="text-gray-300"><span className="text-gray-400 font-semibold">Vault</span> → Give us your money, we handle it</p>
                  </div>
                  <div className="pl-4 border-l-2 border-cyan-500/50 py-2">
                    <p className="text-cyan-300"><span className="text-cyan-400 font-semibold">TreadFi</span> → Here's a tool. You run it your way</p>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3 mb-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-cyan-400"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.highlight && (
                <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg mb-6">
                  <p className="text-cyan-300 font-medium italic">{section.highlight}</p>
                </div>
              )}

              {section.clarification && (
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 mb-6">
                  <p className="text-gray-400">{section.clarification}</p>
                </div>
              )}

              {section.example && (
                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <p className="text-gray-400 text-sm"><span className="text-gray-300 font-semibold">Example:</span> {section.example}</p>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className="py-16 border-t border-gray-800/50">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Vision</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Market making has always been dominated by institutions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              TreadFi changes that.
            </p>
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
              <p className="text-emerald-300 font-medium italic">A world where retail doesn't just trade — but powers the market itself.</p>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-800/50">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Final Note</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              TreadFi is not a profit machine.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              It is a tool — just like a trading terminal.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-400"></span>
                <span className="text-gray-300">No guaranteed profits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-400"></span>
                <span className="text-gray-300">No risk removal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-400"></span>
                <span className="text-gray-300">No automated success</span>
              </li>
            </ul>
            <div className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg">
              <p className="text-gray-300 font-medium italic">What you earn depends on how you use it.</p>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-800/50 text-center pb-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Start Learning Market Making</h2>
          <p className="text-gray-400 mb-8 text-lg">Simple concepts. Real strategies. No fluff.</p>
          <Link
            to="/lessons"
            className="group inline-flex px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-cyan-500/20 items-center gap-2"
          >
            Begin
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}
