import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiWind, FiDroplet, FiThermometer } from 'react-icons/fi';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Smart Airflow',
      description: 'Air enters through a dust filter and evaporative pad, ensuring clean and cool air circulation.',
      icon: FiWind,
      color: 'from-primary to-primary-light',
      details: ['Dust filtration', 'Evaporative cooling', 'Optimized airflow'],
    },
    {
      id: 2,
      title: 'Liquid Cooling',
      description: 'Heat is absorbed by a copper coil and carried by our specialized PG-liquid coolant system.',
      icon: FiDroplet,
      color: 'from-primary-light to-accent-green',
      details: ['Copper coil heat exchanger', 'PG-liquid coolant', 'Efficient heat transfer'],
    },
    {
      id: 3,
      title: 'Heat Rejection',
      description: 'The heated liquid flows to an external mini radiator, where twin fans release the heat outdoors.',
      icon: FiThermometer,
      color: 'from-accent-green to-accent-orange',
      details: ['240mm radiator', 'Twin PWM fans', 'External heat dissipation'],
    },
  ];

  return (
    <section id="product" className="section-padding relative overflow-hidden bg-dark">
      {/* Background */}
      <div className="absolute inset-0 bg-tech-pattern opacity-20" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full glass-effect text-sm text-primary-light mb-4"
          >
            ⚙️ The Technology
          </motion.span>
          <h2 className="heading-gradient mb-6">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A revolutionary 3-step cooling process that delivers superior performance
          </p>
          <div className="glass-effect inline-block px-6 py-3 rounded-full">
            <p className="text-accent-green font-semibold">No compressor. No refrigerant. No waste.</p>
          </div>
        </motion.div>

        {/* Process Visualization */}
        <div className="max-w-6xl mx-auto mb-20">
          {/* Step Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                onHoverStart={() => setActiveStep(index)}
                className="relative"
              >
                <div
                  className={`glass-effect rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? 'scale-105 shadow-neon-blue'
                      : 'hover:scale-105'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-green flex items-center justify-center font-bold text-xl shadow-neon-blue">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-center gradient-text">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={activeStep === index ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                        <span className="text-sm text-gray-400">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Arrow Indicator for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary-light">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow Animation */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-2 bg-gradient-to-r from-primary via-primary-light to-accent-green rounded-full relative overflow-hidden"
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
            />
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Energy Efficient',
              value: '40-60W',
              description: 'Uses less power than a regular fan',
              icon: '⚡',
            },
            {
              title: 'Eco-Friendly',
              value: '0g',
              description: 'No harmful refrigerants or emissions',
              icon: '🌿',
            },
            {
              title: 'Quiet Operation',
              value: '<38dBA',
              description: 'Quieter than a normal conversation',
              icon: '🔇',
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{benefit.value}</div>
              <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
