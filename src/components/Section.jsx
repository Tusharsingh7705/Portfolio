import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id = '', 
  className = '', 
  delay = 0, 
  ...props 
}) => {
  return (
    <motion.section
      id={id}
      // Animation logic: Slide up and fade in when 20% of the section is visible
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Professional "cubic-bezier" ease
      }}
      className={`relative w-full py-20 md:py-32 overflow-hidden ${className}`}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;