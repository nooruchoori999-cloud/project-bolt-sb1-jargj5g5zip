import { Link } from 'wouter';
import { Bot, ArrowRight } from 'lucide-react';

const agentArticles = [
  {
    path: '/agents/arcus-market-making-agent',
    title: 'How to let an AI agent run your market making on Arcus — full @tread_fi setup',
    excerpt: 'A complete Arcus walkthrough: connect your account to TreadFi, whitelist trading access, hire a market-making agent, choose your margin and strategy, and compare configurations by CPM.',
    readTime: '6 min read',
    tag: 'Arcus Setup',
  },
  {
    path: '/agents/market-making-custom-agent',
    title: 'How to Run a Market Making Bot on Any Exchange with a Tread Custom Agent',
    excerpt: 'Connect an exchange, whitelist trading access, hire Nooru’s Market Maker Bot, and configure its strategy. Includes margin sizing, regime checks, CPM comparisons, and the supervisor-agent alternative.',
    readTime: '9 min read',
    tag: 'Market Making',
  },
  {
    path: '/agents/build-your-first-custom-agent',
    title: 'How to Build Your First Treadfi Custom Agent: Describe a Strategy in Plain English and Let It Trade',
    excerpt: 'A complete walkthrough for turning a plain-English trading strategy into a live TreadFi custom agent, listing it publicly, managing hires, and building usage before builder fee sharing launches.',
    readTime: '18 min read',
    tag: 'Custom Agents',
  },
  {
    path: '/agents/getting-started',
    title: 'What Hedge Fund Desks Have Had for Years, You Now Have in a Chat Window: TreadFi Agents Explained',
    excerpt: 'A deep-dive into TreadFi Agents — what they are, how to set them up, and real experiments covering research-to-execution loops, delta-neutral automation, market making, and sports analytics.',
    readTime: '15 min read',
    tag: 'Getting Started',
  },
];

export default function AgentsIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Bot size={14} />
            Agents
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            TreadFi Agents
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            In-depth guides and real-world experiments with TreadFi's AI trading agents — from first setup to advanced multi-agent workflows.
          </p>
        </div>

        <div className="space-y-6">
          {agentArticles.map((article, i) => (
            <Link key={i} to={article.path} data-testid={`link-agent-article-${i}`}>
              <div className="bg-card border border-card-border rounded-xl p-6 hover:border-primary/40 transition-colors cursor-pointer group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
                    {article.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  Read Article
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
