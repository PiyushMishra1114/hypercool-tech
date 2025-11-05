import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const packages = [
    {
      id: 'standard',
      name: 'Standard Package',
      price: '4,499',
      popular: true,
      features: [
        'PG-Liquid Cooled Fan System',
        '6-month warranty',
        'Basic installation support',
        'User manual & guide',
        'Email support',
      ],
    },
    {
      id: 'solar',
      name: 'Solar Bundle',
      price: '6,999',
      popular: false,
      features: [
        'Everything in Standard',
        '50W Solar panel',
        '12V Battery included',
        'Solar charge controller',
        'Complete off-grid setup',
        'Priority support',
      ],
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '5,499',
      popular: false,
      features: [
        'Everything in Standard',
        'Extra PCM cooling packs',
        'Extended hose kit',
        '12-month warranty',
        'On-site installation',
        'WhatsApp support',
      ],
    },
  ];

  const targetAudiences = [
    { icon: '🏡', title: 'Rural Households', description: 'Affordable cooling solution' },
    { icon: '📚', title: 'Students & Offices', description: 'Power-efficient comfort' },
    { icon: '🔧', title: 'Workshops', description: 'Where AC is impractical' },
    { icon: '☀️', title: 'Solar Homes', description: 'Perfect for off-grid' },
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-gradient-to-b from-dark to-dark-light">
      <div className="absolute inset-0 bg-tech-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
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
            💸 Pricing Plans
          </motion.span>
          <h2 className="heading-gradient mb-6">Choose Your Package</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Affordable cooling for everyone. No hidden costs.
          </p>
        </motion.div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Perfect For</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{audience.icon}</div>
                <h4 className="font-bold mb-2 text-white">{audience.title}</h4>
                <p className="text-sm text-gray-400">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`relative glass-effect rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
                pkg.popular ? 'border-2 border-primary shadow-neon-blue' : ''
              } ${selectedPackage === pkg.id ? 'scale-105 shadow-neon-green' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent-green rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 text-white">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold gradient-text">₹{pkg.price}</span>
                  <span className="text-gray-400 ml-2">/unit</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck className="w-3 h-3 text-accent-green" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-primary to-accent-green text-white shadow-neon-blue'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                <FiArrowRight />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="glass-effect rounded-2xl p-8 text-center"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-2 gradient-text">Warranty</h4>
              <p className="text-gray-400">6 months standard warranty with parts & labor options available</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2 gradient-text">Return Policy</h4>
              <p className="text-gray-400">7-day return for unopened units. Installation support available</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/919777082740', '_blank')}
              className="btn-primary"
            >
              Buy Now on WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Request Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
