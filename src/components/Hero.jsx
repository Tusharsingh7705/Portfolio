import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import Section from "./Section";
import profileImg from "../assets/profile.png.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const imageRef = useRef(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -20,
      rotateY: 10,
      rotateX: 6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <Section className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa] dark:bg-[#0b0f1a]">
      
      {/* Background blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-600/5 rounded-full blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[0.95]"
            >
              Tushar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Singh
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
            >
              Dynamic Software Developer skilled in <strong>MERN Stack</strong>, <strong>Java</strong>, and
              strong <strong>DSA problem-solving</strong>. Architects scalable, high-performance web
              platforms and  <strong>cloud systems</strong>.
              Delivers enterprise-grade solutions with precision, innovation, and measurable impact.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-6">
              <a
                href="https://github.com/Tusharsingh7705"
                target="_blank"
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600"
              >
                <FaGithub className="text-2xl" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tusharsingh77/"
                target="_blank"
                className="flex items-center gap-2 text-slate-500 hover:text-blue-600"
              >
                <FaLinkedin className="text-2xl" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT PROFILE IMAGE */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[280px] h-[280px] bg-blue-600/30 rounded-full blur-[120px] bottom-[-40px]" />
            
            <motion.div
              ref={imageRef}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 rounded-full p-2 bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl"
              style={{ perspective: 1000 }}
            >
              <img
                src={profileImg}
                alt="Tushar Singh"
                className="w-[320px] h-[320px] object-cover rounded-full bg-slate-900 shadow-xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Hero;
