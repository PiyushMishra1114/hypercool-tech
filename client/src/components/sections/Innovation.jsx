import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiTool, FiUsers, FiGlobe } from 'react-icons/fi';

const Innovation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: FiAward,
      title: 'Award-Winning Design',
      description: 'Hundreds of design iterations to perfect the cooling system',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: FiTool,
      title: 'High Repairability',
      description: 'Designed for easy local maintenance and long-term sustainability',
      gradient: 'from-primary-light to-accent-green',
    },
    {
      icon: FiUsers,
      title: 'Built for Real People',
      description: 'Addressing actual cooling needs of Indian households',
      gradient: 'from-accent-green to-accent-orange',
    },
    {
      icon: FiGlobe,
      title: 'Future-Ready',
      description: 'Scalable design ready for solar and off-grid applications',
      gradient: 'from-accent-orange to-primary',
    },
  ];

  return (
    <section id="innovation" className="section-padding relative overflow-hidden bg-dark">
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100%',
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass-effect text-sm text-primary-light mb-4"
          >
            🔬 Innovation Lab
          </motion.span>
          <h2 className="heading-gradient mb-6">Engineering Excellence</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Every HyperCool unit is a result of hundreds of design iterations
          </p>
        </motion.div>

        {/* Main Innovation Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-3xl p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-green/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
              We engineered an <span className="gradient-text">internal water loop</span> that mimics 
              industrial chillers — but scaled it down, simplified it, and made it run on 
              <span className="text-primary-light font-bold"> 12V</span>.
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Low Cost</div>
                <p className="text-gray-400">to manufacture</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Low Energy</div>
                <p className="text-gray-400">to operate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">High Repair</div>
                <p className="text-gray-400">accessibility</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect inline-block px-8 py-4 rounded-2xl">
            <p className="text-2xl font-bold">
              It's not just a cooler. <span className="gradient-text">It's an innovation built for future India.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;
