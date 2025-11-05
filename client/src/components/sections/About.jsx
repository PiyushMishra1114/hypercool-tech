import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiTrendingUp, FiHeart, FiShield } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '40-60W', label: 'Power Consumption', icon: FiTrendingUp },
    { value: '5-8°C', label: 'Temperature Drop', icon: FiAward },
    { value: '₹4,499', label: 'Affordable Price', icon: FiHeart },
    { value: '3-5 Yrs', label: 'Product Lifespan', icon: FiShield },
  ];

  const values = [
    {
      title: 'Affordable Innovation',
      description: 'Bringing cutting-edge cooling technology at a price everyone can afford.',
      gradient: 'from-primary to-primary-light',
    },
    {
      title: 'Energy Efficient',
      description: 'Low-power design that runs on 12V DC, perfect for solar and off-grid setups.',
      gradient: 'from-accent-green to-primary',
    },
    {
      title: 'Built to Last',
      description: 'Designed for 3-5 years of continuous use with minimal maintenance required.',
      gradient: 'from-accent-orange to-accent-green',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-dark to-dark-light">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-pattern opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
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
            💡 Our Story
          </motion.span>
          <h2 className="heading-gradient mb-6">About HyperCool Tech</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe cooling should be affordable, efficient, and built to last.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-light" />
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Bridging the Gap Between <span className="gradient-text">Cost and Comfort</span>
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Traditional air conditioners are costly and power-hungry — fans are cheap but hardly cool the room. 
                <span className="text-white font-semibold"> We bridge that gap.</span>
              </p>
              <p>
                Our flagship product, the <span className="text-primary-light font-semibold">PG-Liquid Cooled Fan System</span>, 
                blends liquid cooling, evaporative design, and smart automation into one compact unit. 
                It runs on <span className="text-accent-green font-semibold">12V DC</span>, making it perfect for both urban homes 
                and rural areas where energy and cost matter most.
              </p>
              <p>
                We design with purpose — <span className="text-white font-semibold">low power, high impact, 
                repairable locally, and built for real people.</span>
              </p>
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-effect rounded-xl p-6 border-l-4 border-transparent hover:border-primary transition-all duration-300"
              >
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${value.gradient} mb-3`}>
                  <span className="text-xs font-semibold">Core Value</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative"
        >
          <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-green/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Our Mission</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
                To build cooling technology that anyone can afford, anywhere. 
                To empower local manufacturing and promote sustainability through design simplicity.
              </p>
              <p className="text-lg text-primary-light font-semibold italic">
                We don't just sell devices — we enable comfort without compromise.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
