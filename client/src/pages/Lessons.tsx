import { BookOpen, Clock, BarChart2, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const lessons = [
  {
    id: 1,
    title: 'Introduction to Market Making',
    description: 'Learn the fundamentals of market making, including spread management, liquidity provision, and basic concepts.',
    duration: '15 min',
    level: 'Beginner',
    accentFrom: 'from-primary',
    accentTo: 'to-chart-5',
    locked: false,
  },
  {
    id: 2,
    title: 'Understanding Order Books',
    description: 'Deep dive into order book dynamics, bid-ask spreads, and how to interpret market depth effectively.',
    duration: '20 min',
    level: 'Beginner',
    accentFrom: 'from-secondary',
    accentTo: 'to-primary',
    locked: false,
  },
  {
    id: 3,
    title: 'Risk Management Essentials',
    description: 'Master position sizing, stop-loss strategies, and portfolio risk controls for sustainable trading.',
    duration: '25 min',
    level: 'Intermediate',
    accentFrom: 'from-primary',
    accentTo: 'to-secondary',
    locked: false,
  },
  {
    id: 4,
    title: 'Advanced Pricing Strategies',
    description: 'Explore sophisticated pricing models, volatility-based spreads, and dynamic market making techniques.',
    duration: '30 min',
    level: 'Advanced',
    accentFrom: 'from-chart-5',
    accentTo: 'to-chart-3',
    locked: true,
  },
  {
    id: 5,
    title: 'Bot Configuration & Setup',
    description: 'Step-by-step guide to configuring your MM bot, selecting optimal parameters, and initial deployment.',
    duration: '20 min',
    level: 'Intermediate',
    accentFrom: 'from-primary',
    accentTo: 'to-secondary',
    locked: true,
  },
  {
    id: 6,
    title: 'Performance Monitoring',
    description: 'Learn how to track key metrics, analyze bot performance, and optimize your strategies over time.',
    duration: '18 min',
    level: 'Intermediate',
    accentFrom: 'from-secondary',
    accentTo: 'to-chart-5',
    locked: true,
  },
];

const levelConfig: Record<string, { variant: 'default' | 'secondary' | 'outline'; className: string }> = {
  Beginner: {
    variant: 'outline',
    className: 'text-secondary border-secondary/30 bg-secondary/5',
  },
  Intermediate: {
    variant: 'outline',
    className: 'text-primary border-primary/30 bg-primary/5',
  },
  Advanced: {
    variant: 'outline',
    className: 'text-chart-3 border-chart-3/30 bg-chart-3/5',
  },
};

export default function Lessons() {
  const completedCount = 0;
  const totalCount = lessons.length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Learning Path
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master market making through our comprehensive lesson series. Start from the basics and progress to advanced strategies.
          </p>

          <div className="mt-8 max-w-sm mx-auto">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-foreground font-medium">{completedCount}/{totalCount} complete</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full gradient-bg-cyan-emerald rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {lessons.map((lesson) => {
            const lvl = levelConfig[lesson.level] || levelConfig.Beginner;
            return (
              <div
                key={lesson.id}
                data-testid={`card-lesson-${lesson.id}`}
                className={`group bg-card rounded-xl border border-card-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 overflow-hidden ${lesson.locked ? 'opacity-70' : 'cursor-pointer'}`}
              >
                <div className={`h-1 bg-gradient-to-r ${lesson.accentFrom} ${lesson.accentTo}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-5 gap-3">
                    <div className="w-11 h-11 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      {lesson.locked ? (
                        <Lock className="text-muted-foreground" size={20} />
                      ) : (
                        <BookOpen className="text-primary" size={20} />
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      <Badge
                        variant="outline"
                        className={`text-xs font-medium ${lvl.className}`}
                        data-testid={`badge-level-${lesson.id}`}
                      >
                        {lesson.level}
                      </Badge>
                      {lesson.locked && (
                        <Badge variant="outline" className="text-xs text-muted-foreground border-border/50">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mb-1.5">
                    <span className="text-xs font-medium text-muted-foreground">Lesson {lesson.id}</span>
                  </div>

                  <h3 className={`text-lg font-bold text-foreground mb-3 leading-snug transition-colors ${!lesson.locked ? 'group-hover:text-primary' : ''}`}>
                    {lesson.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {lesson.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/30 pt-4">
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} />
                      <span>{lesson.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BarChart2 size={13} />
                      <span>Interactive</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 p-8 bg-card border border-card-border rounded-xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">More Lessons Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're building out the full curriculum. Start with the available lessons and check back regularly for new content.
          </p>
        </div>
      </div>
    </div>
  );
}
