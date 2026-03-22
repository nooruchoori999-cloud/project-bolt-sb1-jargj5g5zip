import { Search, BookMarked } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const terms = [
  {
    term: 'Margin',
    definition: 'The balance you allocate in your exchange account for the bot to use. It determines how much capital is available to open and manage positions. The total exposure of your position is called Notional. Calculated as: Notional = Margin × (2 × Leverage). Example: $100 margin with 10× leverage = 100 × (2 × 10) = $2000 notional exposure.',
    category: 'Basics',
  },
  {
    term: 'Volume',
    definition: 'The total trading volume the bot aims to execute during a run. It represents how much value (in trades) the bot will process over time.',
    category: 'Trading',
  },
  {
    term: 'Participation Rate',
    definition: 'The rate at which your bot participates in market volume. It controls how aggressively the bot places orders relative to overall market activity, helping balance between faster execution and minimizing market impact.',
    category: 'Trading',
  },
  {
    term: 'Reference Price',
    definition: 'The price the bot uses as a base to place its buy and sell orders. Different modes (mid, grid, blend, signal) use different methods to determine this reference.',
    category: 'Strategy',
  },
  {
    term: 'Directional Bias',
    definition: 'A slight preference in the bot\'s positioning toward buying or selling. Instead of being fully neutral, the bot leans in one direction based on signals or settings.',
    category: 'Strategy',
  },
  {
    term: 'Spread',
    definition: 'The distance between buy and sell orders relative to the reference price. It determines how much profit is targeted per trade and how far orders are placed from the market price.',
    category: 'Basics',
  },
  {
    term: 'Stop Loss (SL)',
    definition: 'A risk control that closes positions when losses reach a defined percentage of margin. Example: 5% SL on $100 margin = bot stops at $5 loss.',
    category: 'Risk',
  },
  {
    term: 'Take Profit (TP)',
    definition: 'A target level where the bot closes positions once a certain profit is reached. It locks in gains based on a predefined percentage or condition.',
    category: 'Risk',
  },
  {
    term: 'Grid Reset',
    definition: "A safety mechanism that activates when price moves too far from the bot's grid levels. It abandons the current grid pricing and switches back to mid-based pricing to reduce exposure and regain control.",
    category: 'Strategy',
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
