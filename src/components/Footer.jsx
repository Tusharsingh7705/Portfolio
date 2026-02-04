import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative w-full bg-[#0a0f1a] text-white pt-16 pb-10 overflow-hidden"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-[10%] w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 left-[10%] w-[420px] h-[420px] bg-purple-600/10 rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">impactful products</span>?
          </h2>
         <motion.a
  href="mailto:tusharsingh7705@gmail.com"
  whileHover={{ scale: 1.05, x: 4 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors shadow-md shadow-blue-600/20 ml-3"
>

            <FaEnvelope />
            Start a Conversation
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-14">
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                TS
              </div>
              <span className="text-xl font-bold tracking-tight uppercase">
                Tushar Singh
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Software Engineer and DSA enthusiast focused on building scalable, high-performance
web applications with clean architecture, strong algorithmic fundamentals,
and user-centric design.

            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Contact
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Greater Noida, Uttar Pradesh
            </p>
            <a
              href="mailto:tusharsingh7705@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
            >
              tusharsingh7705@gmail.com
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Socials
            </h3>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, url: 'https://github.com/Tusharsingh7705' },
                { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tusharsingh77/' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: '#2563eb' }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-gray-400 hover:text-white transition-all border border-white/5"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
  variants={itemVariants}
  className="border-t border-white/5 mt-14 pt-6 flex items-center justify-between"
>
  {/* Left spacer (keeps copyright truly centered) */}
  <div className="w-24 hidden md:block" />

  {/* Center copyright */}
  <p className="text-gray-500 text-xs text-center flex-1">
    © {currentYear} Tushar Singh. Built with React & Tailwind CSS.
  </p>

  {/* Right: Back to Top */}
  <button
    onClick={scrollToTop}
    className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
  >
    Back to Top
    <div className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 group-hover:border-blue-500 group-hover:bg-blue-600 transition-all">
      <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
    </div>
  </button>
</motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;
