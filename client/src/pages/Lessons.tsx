import { BookOpen, Clock, BarChart2, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

const lessons = [
  {
    id: 1,
    number: 'Lesson 1',
    title: 'How to Select Ranges & Configure MM Bot Settings',
    description:
      'Most people lose money with market-making bots not because the bot doesn\'t work, but because they run it at the wrong time, in the wrong market conditions, and with mismatched settings.',
    duration: '15 min read',
    level: 'Intermediate',
    path: '/lessons/1',
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
