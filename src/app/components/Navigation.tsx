import { Link, useLocation } from 'react-router';
import { Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-gray-900 font-semibold">Learn With Rohit</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('learn')}
              className="text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Learn
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('timeline')}
              className="text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Timeline
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-cyan-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
