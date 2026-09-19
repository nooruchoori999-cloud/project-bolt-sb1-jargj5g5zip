import { BookOpen, Clock, BarChart2, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

const lessons = [
  {
    id: 1,
    number: 'Lesson 1',
    title: 'How to Start Your First Bot with Tread',
    description:
      'Create your account, connect a trading venue, choose your first market, and configure the core settings you need to run a TreadFi market-making bot.',
    duration: '12 min read',
    level: 'Beginner',
    path: '/get-started',
  },
  {
    id: 2,
    number: 'Lesson 2',
    title: 'Grid Bot',
    description:
      'Learn how Grid Bot places orders across a range, where it performs best, how grid resets work, and how to manage the risks of changing market conditions.',
    duration: '15 min read',
    level: 'Intermediate',
    path: '/modes/grid',
  },
  {
    id: 3,
    number: 'Lesson 3',
    title: 'Mid Bots',
    description:
      'Understand how Mid Bot uses a mid-price reference, how it behaves after the first fill, and when directional bias makes it useful.',
    duration: '12 min read',
    level: 'Intermediate',
    path: '/modes/mid',
  },
  {
    id: 4,
    number: 'Lesson 4',
    title: 'RGRID',
    description:
      'Learn how RGRID adapts grid placement around a reference price and how to use it for markets that need more responsive range management.',
    duration: '14 min read',
    level: 'Advanced',
    path: '/modes/rgrid',
  },
  {
    id: 5,
    number: 'Lesson 5',
    title: 'Signal Mode (RSI)',
    description:
      'Use RSI-based signals to identify pullbacks and controlled entries instead of running a market-making bot blindly in every condition.',
    duration: '12 min read',
    level: 'Intermediate',
    path: '/modes/rsi',
  },
  {
    id: 6,
    number: 'Lesson 6',
    title: 'Blend',
    description:
      'Combine multiple signals and reference approaches into one market-making workflow designed for changing market conditions.',
    duration: '12 min read',
    level: 'Advanced',
    path: '/modes/blend',
  },
  {
    id: 7,
    number: 'Lesson 7',
    title: 'TreadFi × Polymarket Integration',
    description:
      'Learn how TreadFi connects to prediction markets and how its execution tools can be used for Polymarket positions and liquidity strategies.',
    duration: '10 min read',
    level: 'Advanced',
    path: '/modes/polymarket',
  },
  {
    id: 8,
    number: 'Lesson 8',
    title: 'How to Run a DN Bot on Tread + The Strategies That Actually Work',
    description:
      'Build delta-neutral positions across venues, reduce directional exposure, and understand the execution and funding-rate considerations behind DN strategies.',
    duration: '15 min read',
    level: 'Advanced',
    path: '/modes/dn-bot',
  },
  {
    id: 9,
    number: 'Lesson 9',
    title: 'What Hedge Fund Desks Have Had for Years, You Now Have in a Chat Window: TreadFi Agents Explained',
    description:
      'Learn what TreadFi Agents are, how to set them up, and how research, execution, market making, delta-neutral automation, and monitoring fit together.',
    duration: '15 min read',
    level: 'Advanced',
    path: '/agents/getting-started',
  },
  {
    id: 10,
    number: 'Lesson 10',
    title: 'How to Build Your First Treadfi Custom Agent: Describe a Strategy in Plain English and Let It Trade',
    description:
      'Turn a plain-English trading strategy into a custom agent, publish it to the marketplace, manage hires, and build a usage record.',
    duration: '18 min read',
    level: 'Advanced',
    path: '/agents/build-your-first-custom-agent',
  },
  {
    id: 11,
    number: 'Lesson 11',
    title: 'Is Treadfi Really Doing What Institutional Market Makers Do?',
    description:
      'Understand how TreadFi market making works, why the activity is legitimate, and how it compares with the execution workflows used by institutional market makers.',
    duration: '8 min read',
    level: 'Intermediate',
    path: '/blog/1',
  },
  {
    id: 12,
    number: 'Lesson 12',
    title: 'How to Select Ranges & Configure MM Bot Settings',
    description:
      'Learn how to choose the right range, read market conditions, and configure market-making settings that match the pair and strategy you are running.',
    duration: '15 min read',
    level: 'Intermediate',
    path: '/lessons/1',
  },
  {
    id: 13,
    number: 'Lesson 13',
    title: 'How to Find High-Probability TreadFi MM BOT Setups Using This ML Tool',
    description:
      'Use machine learning trained on real trading data to validate a setup and estimate its probability of profit before risking capital.',
    duration: '8 min read',
    level: 'Intermediate',
    path: '/lessons/2',
  },
];

export default function Lessons() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <BookOpen size={14} />
            Lessons
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Learn Market Making
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Simple concepts. Real strategies. No fluff.
          </p>
        </div>

        <div className="space-y-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-card border border-card-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-6"
              data-testid={`card-lesson-${lesson.id}`}
            >
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-3">
                  <BookOpen size={12} />
                  {lesson.number}
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2 leading-snug">
                  {lesson.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {lesson.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart2 size={12} />
                    <span>{lesson.level}</span>
                  </div>
                  <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
                    {lesson.level}
                  </Badge>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to={lesson.path}
                  data-testid={`link-read-lesson-${lesson.id}`}
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
