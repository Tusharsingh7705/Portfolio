import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';
import Section from './Section';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    title: 'Data Structures & Algorithms Mastery',
    description:
      'Solved a wide range of problems covering arrays, strings, recursion, linked lists, stacks, queues, trees, graphs, greedy, and dynamic programming with a strong focus on optimization.',
    complexity: 'Optimized Time & Space',
    platform: 'LeetCode',
    link: 'https://leetcode.com/u/Tushar_Singh77/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    color: 'border-l-yellow-500'
  },
  {
    title: 'Consistency & Problem-Solving Depth',
    description:
      'Maintained consistent problem-solving practice with difficulty tracking, analytics, and performance insights across competitive programming challenges.',
    complexity: 'Performance Analytics',
    platform: 'Codolio',
    link: 'https://codolio.com/profile/Tushar_singh',
    logo: 'https://codolio.com/favicon.ico',
    color: 'border-l-green-500'
  }
];

const ProblemSolving = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <Section
      id="problem-solving"
      className="bg-white dark:bg-[#0b0f1a] py-16 overflow-hidden"
    >
      <div
        ref={sectionRef}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="mb-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-blue-600">
            <FaTerminal size={22} />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            Problem <span className="text-blue-600">Solving</span>
          </h2>

          <p className="mt-3 text-slate-500 dark:text-slate-400 font-mono text-xs">
            {">"} solving_real_world_dsa_problems.ts
          </p>

          <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Demonstrating consistency, depth, and clarity in Data Structures & Algorithms
            through real-world competitive problem solving.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((prob, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border-l-4 ${prob.color} border border-slate-100 dark:border-slate-700 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10`}
            >
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={prob.logo}
                  alt={prob.platform}
                  className="w-7 h-7 object-contain"
                />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {prob.platform}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {prob.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                {prob.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                  {prob.complexity}
                </span>

                <a
                  href={prob.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-tight text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                >
                  View Profile <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProblemSolving;
