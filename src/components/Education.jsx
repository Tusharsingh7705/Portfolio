import React, { useEffect, useRef } from "react";
import { FaGraduationCap, FaSchool, FaAward } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Galgotias University",
    duration: "Sep 2023 – June 2027",
    score: "CGPA: 8.40",
    description:
      "Pursuing a rigorous undergraduate program focused on data structures, algorithms, system design, and modern software engineering practices.",
    icon: <FaGraduationCap />
  },
  {
    title: "Senior Secondary Education (Class XII)",
    institution: "Umanath Singh Higher Secondary School",
    duration: "April 2023",
    score: "78%",
    description:
      "Completed higher secondary education with a solid academic foundation, emphasizing logical reasoning and analytical thinking.",
    icon: <FaSchool />
  },
  {
    title: "Secondary Education (Class X)",
    institution: "Umanath Singh Higher Secondary School",
    duration: "May 2021",
    score: "86%",
    description:
      "Achieved strong academic performance through consistency, discipline, and conceptual clarity across core subjects.",
    icon: <FaSchool />
  }
];

const Education = () => {
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      }
    );

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          rotateX: 45,
          z: -200,
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
            start: "top 85%"
          }
        }
      );
    });
  }, []);

  return (
    <Section id="education" className="bg-white dark:bg-[#0f172a] py-24">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 mb-5">
            <FaGraduationCap size={32} />
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            A structured academic journey highlighting consistency, strong fundamentals,
            and continuous growth in computer science.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full transform -translate-x-1/2 origin-top"
          />

          {/* Cards */}
          <div className="space-y-14">
            {educationData.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Dot */}
                <span className="absolute left-1/2 top-9 w-4 h-4 bg-blue-600 border-4 border-white dark:border-[#0f172a] rounded-full transform -translate-x-1/2 z-10" />

                {/* Card */}
                <div className="w-full md:w-[46%] bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-3xl p-7 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {edu.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-semibold text-slate-400">
                      {edu.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                      <FaAward size={12} /> {edu.score}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Education;
