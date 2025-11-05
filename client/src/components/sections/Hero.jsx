import { motion } from 'framer-motion';
import { FiArrowRight, FiZap, FiCpu } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToExplore = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-tech-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: mousePosition.x / 20,
          y: mousePosition.y / 20,
        }}
        transition={{ type: 'spring', damping: 30 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: -mousePosition.x / 30,
          y: -mousePosition.y / 30,
        }}
        transition={{ type: 'spring', damping: 30 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
            >
              <FiZap className="text-accent-green" />
              <span className="text-sm">Next-Gen Cooling Technology</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Reinventing <br />
              <span className="gradient-text">Cooling</span> for <br />
              Everyone.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Meet the <span className="text-primary-light font-semibold">PG-Liquid Cooled Fan System</span> — a smart, 
              portable, low-power solution that delivers real cooling comfort without compressors or high electricity bills.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToExplore}
                className="btn-primary flex items-center gap-2 justify-center"
              >
                Explore Product
                <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center gap-2 justify-center"
              >
                Buy Now ₹4,499
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-green" />
                <span>Built in India</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Runs on 12V</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-orange" />
                <span>Designed for Every Home</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Product Placeholder with Glow Effect */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent-green/50 rounded-full blur-3xl scale-90" />
                
                {/* Product container */}
                <div className="relative glass-effect rounded-3xl p-8 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent-green/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <FiCpu className="w-32 h-32 mx-auto mb-4 text-primary-light" />
                      <p className="text-xl font-semibold gradient-text">PG-Liquid Cooled</p>
                      <p className="text-gray-400">Fan System v2.1</p>
                    </div>
                  </div>
                </div>

                {/* Floating Info Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -left-4 top-1/4 glass-effect rounded-xl p-4 max-w-[160px]"
                >
                  <p className="text-sm text-gray-400">Power Usage</p>
                  <p className="text-2xl font-bold gradient-text">40-60W</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -right-4 bottom-1/4 glass-effect rounded-xl p-4 max-w-[160px]"
                >
                  <p className="text-sm text-gray-400">Cooling Range</p>
                  <p className="text-2xl font-bold gradient-text">5-8°C</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToExplore}
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
