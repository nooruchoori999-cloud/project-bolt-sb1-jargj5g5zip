import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

const posts = [
  {
    id: 1,
    category: 'Market Making',
    title: 'Is Treadfi Really Doing What Institutional Market Makers Do?',
    excerpt:
      'Every time a new market making tool emerges in the crypto space, the same question follows: is this wash trading? This article breaks down exactly what treadfi does, why it\'s legitimate, and why the volume it generates is not only real, but essential for healthy markets.',
    duration: '8 min read',
    path: '/blog/1',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <BookOpen size={14} />
            Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Articles & Insights
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Deep dives into market making, strategy, and the evolving world of decentralized trading.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-card border border-card-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-6"
              data-testid={`card-blog-${post.id}`}
            >
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-3">
                  <Tag size={12} />
                  {post.category}
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{post.duration}</span>
                  </div>
                  <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to={post.path}
                  data-testid={`link-read-blog-${post.id}`}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 gradient-bg-cyan-emerald text-white rounded-md text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
                >
                  Read More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
