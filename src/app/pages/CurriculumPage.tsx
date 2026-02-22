import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Github, BookOpen, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';

const curriculumData: Record<string, any> = {
  'distributed-systems': {
    title: 'Distributed Systems',
    description: 'From CAP theorem to consensus algorithms. Building fault-tolerant systems.',
    difficulty: 'Advanced',
    modules: [
      {
        id: 1,
        title: 'Introduction to Distributed Systems',
        duration: '45 min',
        completed: true
      },
      {
        id: 2,
        title: 'CAP Theorem Deep Dive',
        duration: '60 min',
        completed: true
      },
      {
        id: 3,
        title: 'Consistency Models',
        duration: '50 min',
        completed: false
      },
      {
        id: 4,
        title: 'Consensus Algorithms',
        duration: '75 min',
        completed: false
      },
      {
        id: 5,
        title: 'Raft Consensus Protocol',
        duration: '90 min',
        completed: false
      },
      {
        id: 6,
        title: 'Distributed Transactions',
        duration: '70 min',
        completed: false
      }
    ],
    activeModule: {
      title: 'CAP Theorem Deep Dive',
      overview: 'Understanding the fundamental trade-offs in distributed systems: Consistency, Availability, and Partition Tolerance.',
      whyItMatters: 'Every distributed system must make design decisions based on CAP theorem. Understanding these trade-offs is crucial for building scalable, reliable systems.',
      content: `
        The CAP theorem states that a distributed system can only guarantee two out of three properties:
        
        1. **Consistency**: Every read receives the most recent write
        2. **Availability**: Every request receives a response (without guarantee of latest data)
        3. **Partition Tolerance**: System continues to operate despite network partitions
        
        ## Real-World Trade-offs
        
        - **CP Systems** (Consistency + Partition Tolerance): MongoDB, HBase, Redis
        - **AP Systems** (Availability + Partition Tolerance): Cassandra, DynamoDB, CouchDB
        - **CA Systems** (Consistency + Availability): Traditional RDBMS (no partition tolerance)
        
        ## Implementation Considerations
        
        When designing a distributed system, you must choose based on your use case:
        
        - Financial systems typically choose CP (consistency is critical)
        - Social media feeds often choose AP (availability matters more)
        - Single datacenter systems can be CA (assuming no network partitions)
      `,
      diagram: 'CAP Theorem Triangle',
      githubRepo: 'https://github.com/rohit/cap-theorem-examples',
      references: [
        'CAP Theorem: Brewer\'s Conjecture (2000)',
        'Consistency Tradeoffs in Modern Distributed Database System Design',
        'Dynamo: Amazon\'s Highly Available Key-value Store'
      ]
    }
  }
};

export default function CurriculumPage() {
  const { trackId } = useParams();
  const curriculum = curriculumData[trackId || 'distributed-systems'];
  const [activeModuleId, setActiveModuleId] = useState(2);

  if (!curriculum) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curriculum Not Found</h2>
          <Link to="/" className="text-cyan-600 hover:text-cyan-700">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {curriculum.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {curriculum.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                  {curriculum.difficulty}
                </span>
                <span className="text-gray-600">
                  {curriculum.modules.length} modules
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar - Module List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                Course Modules
              </h2>

              <div className="space-y-2">
                {curriculum.modules.map((module: any) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModuleId(module.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeModuleId === module.id
                        ? 'bg-cyan-50 border-2 border-cyan-500'
                        : 'bg-gray-50 border-2 border-transparent hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {module.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium mb-1 ${
                          activeModuleId === module.id ? 'text-cyan-600' : 'text-gray-900'
                        }`}>
                          {module.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {module.duration}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Module Title */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {curriculum.activeModule.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {curriculum.activeModule.overview}
              </p>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-cyan-700 mb-3">
                Why It Matters in Industry
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {curriculum.activeModule.whyItMatters}
              </p>
            </div>

            {/* Diagram Placeholder */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Conceptual Diagram
              </h3>
              <div className="bg-gray-50 border border-gray-300 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600">{curriculum.activeModule.diagram}</p>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Detailed Explanation
              </h3>
              <div className="prose prose-slate max-w-none">
                <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">
                  {curriculum.activeModule.content}
                </div>
              </div>
            </div>

            {/* GitHub Repo */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Code & Experiments
              </h3>
              <a
                href={curriculum.activeModule.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            {/* References */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                References & Further Reading
              </h3>
              <ul className="space-y-3">
                {curriculum.activeModule.references.map((ref: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{ref}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
