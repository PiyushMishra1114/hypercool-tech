import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiLinkedin, FiMail, FiUser } from 'react-icons/fi';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const team = [
    {
      name: 'Abhisek Behera',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation in affordable cooling technology',
      gradient: 'from-primary to-primary-light',
    },
    {
      name: 'Anil Kumar Rout',
      role: 'CTO (Product Innovation)',
      description: 'Engineering genius behind the liquid cooling system design',
      gradient: 'from-primary-light to-accent-green',
    },
    {
      name: 'Abinash Kumar Behera',
      role: 'Lead Designer',
      description: 'Creative mind crafting user-centric product experiences',
      gradient: 'from-accent-green to-accent-orange',
    },
    {
      name: 'Satyajit Pathi',
      role: 'Marketing Specialist & Documentarian',
      description: 'Strategic storyteller bringing HyperCool to the world',
      gradient: 'from-accent-orange to-primary',
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-dark-light to-dark">
      <div className="absolute inset-0 bg-tech-pattern opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
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
            👩‍💼 Our Team
          </motion.span>
          <h2 className="heading-gradient mb-6">Meet the HyperCool Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative minds powering the next-gen cooling revolution
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden card-hover group"
            >
              {/* Profile Image Placeholder */}
              <div className={`h-64 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <FiUser className="w-24 h-24 text-white/80 relative z-10" />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent flex items-end justify-center pb-6 gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center"
                  >
                    <FiLinkedin className="w-5 h-5 text-primary-light" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center"
                  >
                    <FiMail className="w-5 h-5 text-primary-light" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-primary-light font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-400">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect inline-block px-8 py-6 rounded-2xl max-w-3xl">
            <p className="text-xl text-gray-300 leading-relaxed">
              Together, we're building more than just cooling systems — we're creating 
              <span className="gradient-text font-bold"> accessible comfort </span>
              for every Indian household.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
