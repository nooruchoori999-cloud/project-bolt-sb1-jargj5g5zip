import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');

  const terms = [
    {
      term: 'Bid-Ask Spread',
      definition: 'The difference between the highest price a buyer is willing to pay (bid) and the lowest price a seller is willing to accept (ask). Market makers profit from this spread.',
      category: 'Basics',
    },
    {
      term: 'Market Depth',
      definition: "A measure of the market's ability to sustain large orders without significantly impacting the price. Deeper markets have more liquidity at various price levels.",
      category: 'Basics',
    },
    {
      term: 'Liquidity Provider',
      definition: 'An entity or individual that adds liquidity to a market by placing both buy and sell orders, making it easier for other traders to execute trades.',
      category: 'Trading',
    },
    {
      term: 'Slippage',
      definition: 'The difference between the expected price of a trade and the actual price at which it executes, often occurring in volatile or low-liquidity markets.',
      category: 'Risk',
    },
    {
      term: 'Grid Trading',
      definition: 'A strategy that places multiple buy and sell orders at predetermined price intervals, creating a grid of orders to profit from market volatility.',
      category: 'Strategy',
    },
    {
      term: 'Inventory Risk',
      definition: 'The risk that a market maker faces from holding positions that may decrease in value. Proper inventory management is crucial for successful market making.',
      category: 'Risk',
    },
  ];

  const filteredTerms = terms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Basics':
        return 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20';
      case 'Trading':
        return 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20';
      case 'Risk':
        return 'bg-orange-400/10 text-orange-400 border-orange-400/20';
      case 'Strategy':
        return 'bg-purple-400/10 text-purple-400 border-purple-400/20';
      default:
        return 'bg-gray-400/10 text-gray-400 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trading Glossary
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Essential terms and definitions for understanding market making and algorithmic trading.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredTerms.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-white">{item.term}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">{item.definition}</p>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No terms found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
