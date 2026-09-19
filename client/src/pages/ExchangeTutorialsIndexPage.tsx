import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'wouter';

const tutorials = [
  {
    path: '/exchange-tutorials/arcus-treadfi-robinhood',
    title: "My Thesis on Arcus × TreadFi × Robinhood: No Token, 25M Users, and a Window That's Open Right Now",
    excerpt:
      'A detailed look at Arcus, its Robinhood connection, the perps and stock-token opportunity, and why the current early-user window is worth studying.',
    readTime: '14 min read',
  },
];

export default function ExchangeTutorialsIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <BookOpen size={14} />
            Exchange Tutorials
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Exchange Tutorials
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Research, walkthroughs, and practical breakdowns of exchanges, trading venues, and new market opportunities.
          </p>
        </div>

        <div className="space-y-6">
          {tutorials.map((tutorial) => (
            <Link key={tutorial.path} to={tutorial.path} data-testid="link-exchange-tutorial-article-0">
              <div className="bg-card border border-card-border rounded-xl p-6 hover:border-primary/40 transition-colors cursor-pointer group">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
                    Exchange Research
                  </span>
                  <span className="text-xs text-muted-foreground">{tutorial.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {tutorial.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {tutorial.excerpt}
                </p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  Read Tutorial
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}