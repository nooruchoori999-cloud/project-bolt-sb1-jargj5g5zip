import { Search, BookMarked } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

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
  {
    term: 'Perpetual DEX',
    definition: 'A decentralized exchange that offers perpetual futures contracts — derivatives with no expiry date. TreadFi primarily targets liquidity provision on these platforms.',
    category: 'DeFi',
  },
  {
    term: 'Adverse Selection',
    definition: 'The risk of being picked off by better-informed traders. When a market maker places an order, they risk trading against someone with superior market information.',
    category: 'Risk',
  },
  {
    term: 'Fee Rebates',
    definition: 'Incentives paid by exchanges to market makers for providing liquidity. These rebates can significantly improve overall profitability beyond just the bid-ask spread.',
    category: 'DeFi',
  },
  {
    term: 'Position Sizing',
    definition: 'The process of determining how much capital to allocate to a given trade or market. Proper position sizing limits downside exposure while maximizing opportunity.',
    category: 'Strategy',
  },
  {
    term: 'Market Impact',
    definition: 'The effect a trade has on the price of an asset. Larger orders cause greater market impact, especially in low-liquidity environments.',
    category: 'Trading',
  },
  {
    term: 'PnL (Profit & Loss)',
    definition: 'The realized and unrealized gains or losses of a trading strategy. For market makers, total PnL includes trading PnL plus any incentives or rebates received.',
    category: 'Basics',
  },
];

const categoryConfig: Record<string, { className: string }> = {
  Basics: { className: 'text-primary border-primary/30 bg-primary/5' },
  Trading: { className: 'text-secondary border-secondary/30 bg-secondary/5' },
  Risk: { className: 'text-chart-4 border-chart-4/30 bg-chart-4/5' },
  Strategy: { className: 'text-chart-3 border-chart-3/30 bg-chart-3/5' },
  DeFi: { className: 'text-chart-5 border-chart-5/30 bg-chart-5/5' },
};

const allCategories = ['All', ...Array.from(new Set(terms.map((t) => t.category)))];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTerms = terms.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookMarked className="text-primary" size={28} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Trading Glossary
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Essential terms and definitions for understanding market making and algorithmic trading.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              type="text"
              placeholder="Search terms or definitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="input-search-glossary"
              className="pl-10 bg-card border-card-border focus:border-primary/50"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allCategories.map((cat) => {
            const isActive = cat === activeCategory;
            const cfg = cat !== 'All' ? categoryConfig[cat] : null;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`button-category-${cat.toLowerCase()}`}
                className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? cat === 'All'
                      ? 'gradient-bg-cyan-emerald text-white border-transparent shadow-sm shadow-primary/20'
                      : `${cfg?.className} border-opacity-60`
                    : 'text-muted-foreground border-border/50 hover:text-foreground hover:border-border bg-card'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          {filteredTerms.map((item, index) => {
            const cfg = categoryConfig[item.category] || { className: 'text-muted-foreground border-border/50 bg-muted/30' };
            return (
              <div
                key={index}
                data-testid={`card-term-${index}`}
                className="bg-card rounded-xl border border-card-border hover:border-primary/30 transition-all duration-200 p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-foreground">{item.term}</h3>
                  <Badge
                    variant="outline"
                    className={`text-xs font-medium flex-shrink-0 ${cfg.className}`}
                    data-testid={`badge-category-${index}`}
                  >
                    {item.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.definition}</p>
              </div>
            );
          })}

          {filteredTerms.length === 0 && (
            <div className="text-center py-16 bg-card border border-card-border rounded-xl">
              <Search className="mx-auto mb-3 text-muted-foreground" size={32} />
              <p className="text-foreground font-medium">No terms found</p>
              <p className="text-muted-foreground text-sm mt-1">Try a different search or category filter.</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Showing {filteredTerms.length} of {terms.length} terms
        </div>
      </div>
    </div>
  );
}
