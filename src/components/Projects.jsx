import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "DRSM – Decentralized Learning Platform",
    description: [
      "Developed a blockchain-powered learning platform for secure and authenticated content delivery.",
      "Implemented immutable academic records using decentralized ledger technology.",
      "Integrated decentralized authentication to prevent fraud and unauthorized access.",
      "Utilized smart contracts to enable transparent verification and data integrity."
    ],
    tags: ["MERN Stack", "Web3", "Blockchain", "Smart Contracts"],
    github: "https://github.com/Tusharsingh7705/Decentralized-Learning",
    demo: "https://decentralized-learning-rt11.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AdvocateHub – Client–Lawyer Consultation Platform",
    description: [
      "Designed and developed a secure consultation platform enabling seamless client–lawyer interactions.",
      "Built responsive, production-ready interfaces using React and Tailwind CSS.",
      "Implemented modular frontend architecture to support scalability and maintainability.",
      "Integrated backend workflows for real-time case updates and structured data management."
    ],
    tags: ["React", "Tailwind CSS", "PostgreSQL", "Python"],
    github: "https://github.com/Tusharsingh7705/Legal_website",
    demo: "https://legal-website-jet.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
  }
];



const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          rotateX: 35,
          z: -150,
          y: 60
        },
        {
          opacity: 1,
          rotateX: 0,
          z: 0,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <Section id="projects" className="bg-slate-50 dark:bg-[#0f172a] py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">
            Selected <span className="text-blue-600 italic">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
