import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Home() {
  const words = ['Frontend Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];
  
  return (
    <PageWrapper>
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Helmet>
        <title>Aiman's Portfolio - AI powered -Full Stack Developer</title>
        <meta name="description" content="Welcome to Aiman's Portfolio - AI powered -Full Stack Developer passionate about building clean, performant, and accessible user interfaces." />
      </Helmet>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="gradient-text">Aiman Mushtaq</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-16 sm:h-20 flex items-center justify-center"
        >
          <div className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + i * 2,
                  duration: 0.5,
                }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting beautiful, responsive, and performant web experiences with modern frontend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto"
            >
              View My Work
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary w-full sm:w-auto"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-gray-400 dark:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </div>
    </PageWrapper>
  );
}
    
   
   
   
      
      