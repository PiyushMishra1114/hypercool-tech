import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much can it cool a room?',
      answer: 'In a 10×12 ft closed room, expect a 5–8°C drop within 60–90 minutes (ambient 30°C → inside 22–25°C). Performance depends on room insulation and ambient conditions.',
      icon: '❄️',
    },
    {
      question: 'Can it run without a compressor?',
      answer: 'Yes — our liquid cooling + airflow technology removes heat efficiently with no refrigerants or compressors. This makes it energy-efficient and eco-friendly.',
      icon: '⚙️',
    },
    {
      question: 'Can I power it with solar?',
      answer: 'Absolutely! One 50W solar panel with a 12V battery will run it easily. It\'s perfect for off-grid setups and sustainable living.',
      icon: '☀️',
    },
    {
      question: 'Is it noisy?',
      answer: 'Under 38 dBA at normal mode — quieter than a table fan and comparable to a quiet conversation. The PWM fans ensure silent operation.',
      icon: '🔇',
    },
    {
      question: 'What\'s the lifespan?',
      answer: 'Designed for 3–5 years of continuous use with minimal maintenance. The system is built with durability and easy repairability in mind.',
      icon: '🛠️',
    },
  ];

  return (
    <section id="faq" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-tech-pattern opacity-20" />
      
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
            ❓ Common Questions
          </motion.span>
          <h2 className="heading-gradient mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about the HyperCool system
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                whileHover={{ scale: 1.01 }}
                className={`w-full glass-effect rounded-2xl p-6 text-left transition-all duration-300 ${
                  openIndex === index ? 'shadow-neon-blue' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{faq.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg md:text-xl font-bold text-white pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {openIndex === index ? (
                          <FiMinus className="w-6 h-6 text-primary-light" />
                        ) : (
                          <FiPlus className="w-6 h-6 text-primary-light" />
                        )}
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-300 mt-4 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect inline-block px-8 py-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Still have questions?</h3>
            <p className="text-gray-300 mb-6">Our team is here to help you</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/919777082740', '_blank')}
                className="btn-primary"
              >
                WhatsApp Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:hypercoolt@gmail.com'}
                className="btn-secondary"
              >
                Email Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
