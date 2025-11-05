import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import HowItWorks from './components/sections/HowItWorks';
import Specifications from './components/sections/Specifications';
import Innovation from './components/sections/Innovation';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
          >
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent-green flex items-center justify-center"
              >
                <span className="text-3xl font-bold">H</span>
              </motion.div>
              <motion.h1
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-2xl font-bold gradient-text"
              >
                HyperCool Technologies
              </motion.h1>
              <p className="text-gray-400 mt-2">Loading innovation...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <div className="relative">
          <Navigation />
          <main>
            <Hero />
            <About />
            <HowItWorks />
            <Specifications />
            <Innovation />
            <Pricing />
            <FAQ />
            <Team />
            <Contact />
          </main>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent-green flex items-center justify-center shadow-neon-blue z-40 hover:shadow-neon-green transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </>
  );
}

export default App;
