import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const timelineEvents = [
  {
    year: '2026',
    title: 'Advanced Systems',
    description: 'Deep diving into distributed systems architecture and graph theory applications.',
    highlights: [
      'Distributed Systems',
      'Graph Theory',
      'Consensus Algorithms'
    ]
  },
  {
    year: '2025',
    title: 'Frontend & Tooling',
    description: 'Mastering modern frontend engineering and building developer tools.',
    highlights: [
      'Frontend Engineering',
      'Git Internals',
      'Developer Experience'
    ]
  },
  {
    year: '2024',
    title: 'Systems Programming',
    description: 'Exploring low-level systems, performance optimization, and API design.',
    highlights: [
      'Performance Optimization',
      'API Design',
      'System Architecture'
    ]
  },
  {
    year: '2023',
    title: 'Foundations',
    description: 'Building strong fundamentals in algorithms, data structures, and web development.',
    highlights: [
      'Algorithms',
      'Data Structures',
      'Full Stack Development'
    ]
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A chronological view of my technical evolution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-2 md:-translate-x-2" />

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-cyan-600" />
                      <span className="text-3xl font-bold text-cyan-600">{event.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
