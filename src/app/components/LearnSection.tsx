import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, BookOpen, Layers, GitBranch, Sparkles, Zap, Code } from 'lucide-react';

const learningTracks = [
  {
    id: 'distributed-systems',
    title: 'Distributed Systems',
    description: 'From CAP theorem to consensus algorithms. Building fault-tolerant systems.',
    modules: 12,
    difficulty: 'Advanced',
    icon: Layers,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'graph-theory',
    title: 'Graph Theory & Algorithms',
    description: 'Path finding, network flows, and real-world graph applications.',
    modules: 10,
    difficulty: 'Intermediate',
    icon: GitBranch,
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'git-internals',
    title: 'Git Internals & Version Control',
    description: 'Deep dive into Git\'s data structures, rebase internals, and advanced workflows.',
    modules: 8,
    difficulty: 'Intermediate',
    icon: Code,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'developer-experience',
    title: 'Developer Experience Engineering',
    description: 'Building tools, CLIs, and automation that makes developers productive.',
    modules: 9,
    difficulty: 'Intermediate',
    icon: Sparkles,
    color: 'from-pink-500 to-red-500'
  },
  {
    id: 'optimization',
    title: 'Optimization & Performance',
    description: 'Profiling, benchmarking, and systematic approaches to making code faster.',
    modules: 11,
    difficulty: 'Advanced',
    icon: Zap,
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 'system-design',
    title: 'System Design Patterns',
    description: 'Real-world architectural patterns and trade-offs in large-scale systems.',
    modules: 14,
    difficulty: 'Advanced',
    icon: BookOpen,
    color: 'from-green-500 to-cyan-500'
  }
];

export default function LearnSection() {
  return (
    <section id="learn" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learn With Rohit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured public learning tracks with real code and experiments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/curriculum/${track.id}`}>
                  <div className="group h-full bg-white border border-gray-200 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${track.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {track.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {track.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">
                        {track.modules} modules
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        track.difficulty === 'Advanced' 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'bg-cyan-100 text-cyan-700'
                      }`}>
                        {track.difficulty}
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${track.color}`} style={{ width: '0%' }} />
                    </div>

                    <div className="flex items-center text-cyan-600 font-medium group-hover:gap-2 transition-all">
                      Start Learning
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
