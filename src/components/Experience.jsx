import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Senior Frontend Developer (Intern)",
    company: "D. Dolphin Pvt. Ltd., Lucknow",
    duration: "June 2025 – Sept 2025",
    type: "Internship",
    points: [
      "Engineered scalable UI components using React.js and modern frontend architecture.",
      "Collaborated with backend and product teams to deliver responsive, high-quality interfaces.",
      "Optimized rendering workflows to improve performance and user experience.",
      "Maintained cross-browser compatibility and enterprise UI standards.",
      "Recognized as Best Frontend Developer Intern for clean code and timely delivery."
    ],
    skills: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "Git"]
  },
  {
    role: "Java Programmer (Virtual Internship)",
    company: "EduSkills",
    duration: "Virtual Internship",
    type: "Virtual Internship",
    points: [
      "Developed object-oriented Java solutions following professional coding standards.",
      "Applied data structures, exception handling, and core Java concepts.",
      "Refactored and optimized code for better maintainability.",
      "Solved industry-aligned programming challenges."
    ],
    skills: ["Java", "OOP", "Data Structures", "Exception Handling"]
  }
];

const ExperienceCard = ({ exp, index, setRef }) => (
  <motion.div
    ref={setRef}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25 }}
    className="relative mb-16 pl-8 md:pl-0"
    style={{ transformStyle: "preserve-3d" }}
  >
    {/* Timeline Dot */}
    <div className="absolute left-[-9px] md:left-1/2 md:-ml-3 top-6 z-20">
      <div className="w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg" />
    </div>

    {/* Card */}
    <div
      className={`md:w-[45%] ${
        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
      }`}
    >
      <div className="p-8 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2 mb-2">
          <FaBriefcase className="text-xs" /> {exp.type}
        </span>

        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          {exp.role}
        </h3>

        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mt-1 mb-4">
          <span>{exp.company}</span>
          <span>•</span>
          <span className="flex items-center gap-1 italic">
            <FaCalendarAlt className="text-xs" /> {exp.duration}
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.skills.map(skill => (
            <span
              key={skill}
              className="px-3 py-1 text-[10px] font-bold uppercase rounded-lg
                         bg-slate-100 dark:bg-slate-700
                         text-slate-600 dark:text-slate-300
                         border border-slate-200/50 dark:border-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          rotateX: 40,
          z: -150,
          x: i % 2 === 0 ? -100 : 100
        },
        {
          opacity: 1,
          rotateX: 0,
          z: 0,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <Section id="experience" className="bg-slate-50 dark:bg-[#0b0f1a] py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Professional <span className="text-blue-600 italic">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Base Line */}
          <div className="absolute left-1/2 w-[2px] h-full bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />

          {/* Animated Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 w-[2px] h-full bg-blue-600 -translate-x-1/2 hidden md:block origin-top"
          />

          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                index={index}
                setRef={el => (cardsRef.current[index] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
