import React from "react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import Section from "./Section";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <Section id="about" className="relative overflow-hidden bg-white dark:bg-[#0f172a]">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
              About Me
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
              Dynamic Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Developer & Problem Solver
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                Dynamic Software Developer skilled in <span className="font-semibold text-slate-900 dark:text-white">MERN Stack</span>, 
                <span className="font-semibold text-slate-900 dark:text-white"> Java</span>, and strong 
                <span className="font-semibold text-slate-900 dark:text-white"> DSA problem-solving</span>.
                Experienced in building scalable, maintainable, and high-performance web applications.
              </p>

              <p>
                Specializes in architecting modern web platforms with seamless integration of 
                <span className="font-semibold text-slate-900 dark:text-white"> cloud services</span> and                  
                 Focused on clean architecture, performance optimization, and real-world impact.
              </p>

              <p>
                Delivers <span className="font-semibold text-slate-900 dark:text-white">enterprise-grade solutions </span> 
                 with precision, innovation, and measurable outcomes—driven by continuous learning and 
                a strong engineering mindset.
              </p>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {[
              { label: "Experience", value: "1+ Yr", color: "text-blue-600" },
              { label: "Projects", value: "12+", color: "text-indigo-600" },
              { label: "Technologies", value: "15+", color: "text-purple-600" },
              { label: "Problems Solved", value: "600+", color: "text-blue-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-3xl text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className={`text-3xl font-black ${item.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                  {item.label}
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              variants={cardVariants}
              className="col-span-2 p-6 bg-slate-900 dark:bg-white rounded-3xl flex items-center justify-between group cursor-pointer"
            >
              <span className="text-white dark:text-slate-900 font-bold">
                Download Resume
              </span>
              <div className="w-10 h-10 bg-white/10 dark:bg-slate-100 rounded-full flex items-center justify-center text-white dark:text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FaRocket />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default About;
