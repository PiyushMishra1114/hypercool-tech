import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCpu, FiZap, FiThermometer, FiActivity } from 'react-icons/fi';

const Specifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const specs = [
    { parameter: 'Model', value: 'PG-Liquid Cooled Fan System', icon: FiCpu },
    { parameter: 'Cooling Type', value: 'Liquid + Evaporative Hybrid', icon: FiThermometer },
    { parameter: 'Power', value: '12V DC, 5A (40–60W)', icon: FiZap, highlight: true },
    { parameter: 'Suitable Room', value: 'Up to 10 × 12 ft', icon: null },
    { parameter: 'Controller', value: 'ESP32 DEVKITC-32D', icon: FiCpu },
    { parameter: 'Sensors', value: 'DS18B20, DHT22, Flow + Level', icon: FiActivity },
    { parameter: 'Fans', value: '120mm PWM × 2 (ARCTIC P12 MAX)', icon: null },
    { parameter: 'Pump', value: '12V 20W submersible, 2–4 L/min', icon: null },
    { parameter: 'Radiator', value: '240mm copper coil / 6mm pipe', icon: null },
    { parameter: 'PCM Packs', value: '4–6 gel units (optional)', icon: null },
    { parameter: 'Noise Level', value: '< 38 dBA', icon: null },
    { parameter: 'Price (MRP)', value: '₹4,499 / unit', icon: null, highlight: true },
  ];

  const highlights = [
    {
      title: 'Low Power',
      description: 'Consumes only 40-60W, comparable to a laptop charger',
      icon: '⚡',
      color: 'from-primary to-primary-light',
    },
    {
      title: 'Smart Control',
      description: 'ESP32-powered automation with multiple sensors',
      icon: '🤖',
      color: 'from-primary-light to-accent-green',
    },
    {
      title: 'Hybrid Cooling',
      description: 'Combines liquid cooling with evaporative technology',
      icon: '❄️',
      color: 'from-accent-green to-primary',
    },
    {
      title: 'Quiet Operation',
      description: 'Silent PWM fans for peaceful environment',
      icon: '🔇',
      color: 'from-primary to-accent-orange',
    },
  ];

  return (
    <section id="specs" className="section-padding relative overflow-hidden bg-gradient-to-b from-dark-light to-dark">
      {/* Background */}
      <div className="absolute inset-0 bg-tech-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass-effect text-sm text-primary-light mb-4"
          >
            🔬 Technical Details
          </motion.span>
          <h2 className="heading-gradient mb-6">Technical Specifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineered with precision, designed for performance
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass-effect rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specs Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="glass-effect rounded-3xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary to-accent-green p-6">
            <h3 className="text-2xl font-bold text-center">Complete Specifications</h3>
          </div>
          
          <div className="p-8">
            <div className="grid gap-3">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.parameter}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  whileHover={{ x: 5, backgroundColor: 'rgba(0, 102, 255, 0.05)' }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl border border-white/5 transition-all duration-300 ${
                    spec.highlight ? 'bg-primary/10 border-primary/30' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {spec.icon && <spec.icon className="text-primary-light flex-shrink-0" />}
                    <span className="font-semibold text-gray-300">{spec.parameter}</span>
                  </div>
                  <div className={`${spec.highlight ? 'text-primary-light font-bold text-lg' : 'text-white'}`}>
                    {spec.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Performance Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { label: 'Power Efficiency', value: 85, unit: '%', color: 'bg-accent-green' },
            { label: 'Cooling Performance', value: 78, unit: '%', color: 'bg-primary' },
            { label: 'Noise Reduction', value: 92, unit: '%', color: 'bg-accent-orange' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1 + index * 0.1 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-400">{metric.label}</span>
                <span className="text-2xl font-bold gradient-text">{metric.value}{metric.unit}</span>
              </div>
              <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${metric.value}%` } : {}}
                  transition={{ delay: 1.3 + index * 0.1, duration: 1, ease: 'easeOut' }}
                  className={`h-full ${metric.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;
