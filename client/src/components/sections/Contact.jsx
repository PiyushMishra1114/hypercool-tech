import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiInstagram, 
  FiYoutube, 
  FiLinkedin,
  FiSend 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919777082740?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'hypercoolt@gmail.com',
      link: 'mailto:hypercoolt@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91-9777082740',
      link: 'tel:+919777082740',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+91-9777082740',
      link: 'https://wa.me/919777082740',
    },
    {
      icon: FiClock,
      label: 'Business Hours',
      value: 'Mon–Sat | 9 AM – 6 PM',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FiInstagram, label: 'Instagram', link: '#' },
    { icon: FiYoutube, label: 'YouTube', link: '#' },
    { icon: FiLinkedin, label: 'LinkedIn', link: '#' },
    { icon: FaWhatsapp, label: 'WhatsApp', link: 'https://wa.me/919777082740' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-tech-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      
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
            📬 Get in Touch
          </motion.span>
          <h2 className="heading-gradient mb-6">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">HyperCool Tech HQ</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Reach out to us and we'll respond as soon as we can.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 glass-effect rounded-xl p-4 hover:shadow-neon-blue transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent-green flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-semibold hover:text-primary-light transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:shadow-neon-blue transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-primary-light" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-lighter border border-white/10 rounded-lg focus:border-primary outline-none text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-lighter border border-white/10 rounded-lg focus:border-primary outline-none text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-lighter border border-white/10 rounded-lg focus:border-primary outline-none text-white transition-colors"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-lighter border border-white/10 rounded-lg focus:border-primary outline-none text-white transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <FiSend />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-green flex items-center justify-center">
                  <span className="text-xl font-bold">H</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold gradient-text">HyperCool</h3>
                  <p className="text-xs text-gray-400">Technologies</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Affordable smart cooling for everyone. Built in India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-primary-light transition-colors">About Us</a></li>
                <li><a href="#product" className="hover:text-primary-light transition-colors">How It Works</a></li>
                <li><a href="#specs" className="hover:text-primary-light transition-colors">Specifications</a></li>
                <li><a href="#pricing" className="hover:text-primary-light transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#faq" className="hover:text-primary-light transition-colors">FAQ</a></li>
                <li><a href="mailto:hypercoolt@gmail.com" className="hover:text-primary-light transition-colors">Contact Support</a></li>
                <li><a href="https://wa.me/919777082740" className="hover:text-primary-light transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-primary-light transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400">
              © 2025 HyperCool Tech | Built in India | Affordable Smart Cooling
            </p>
            <p className="text-xs text-gray-500 mt-2">
              All rights reserved. Reinventing cooling for everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
