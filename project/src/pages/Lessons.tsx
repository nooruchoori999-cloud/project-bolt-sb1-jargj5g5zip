import { BookOpen, Clock, BarChart } from 'lucide-react';

export default function Lessons() {
  const lessons = [
    {
      title: 'Introduction to Market Making',
      description: 'Learn the fundamentals of market making, including spread management, liquidity provision, and basic concepts.',
      duration: '15 min',
      level: 'Beginner',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Understanding Order Books',
      description: 'Deep dive into order book dynamics, bid-ask spreads, and how to interpret market depth effectively.',
      duration: '20 min',
      level: 'Beginner',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Risk Management Essentials',
      description: 'Master position sizing, stop-loss strategies, and portfolio risk controls for sustainable trading.',
      duration: '25 min',
      level: 'Intermediate',
      color: 'from-cyan-500 to-emerald-500',
    },
    {
      title: 'Advanced Pricing Strategies',
      description: 'Explore sophisticated pricing models, volatility-based spreads, and dynamic market making techniques.',
      duration: '30 min',
      level: 'Advanced',
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Bot Configuration & Setup',
      description: 'Step-by-step guide to configuring your MM bot, selecting optimal parameters, and initial deployment.',
      duration: '20 min',
      level: 'Intermediate',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Performance Monitoring',
      description: 'Learn how to track key metrics, analyze bot performance, and optimize your strategies over time.',
      duration: '18 min',
      level: 'Intermediate',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'Intermediate':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Advanced':
        return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Learning Path
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master market making through our comprehensive lesson series. Start from the basics and progress to advanced strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden cursor-pointer"
            >
              <div className={`h-2 bg-gradient-to-r ${lesson.color}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-cyan-400" size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(lesson.level)}`}>
                    {lesson.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {lesson.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {lesson.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{lesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart size={16} />
                    <span>Interactive</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
