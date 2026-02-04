import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, 
  SiPostgresql, SiTailwindcss, SiPython, SiCplusplus, 
  SiGit, SiGithub, SiMysql, SiHtml5, SiCss3 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillData = [
  { name: 'Java', icon: <FaJava />, color: '#f89820' },
  { name: 'Python', icon: <SiPython />, color: '#3776ab' },
  { name: 'MERN Stack', icon: <SiReact />, color: '#61dafb' },
  { name: 'DSA', icon: <SiJavascript />, color: '#f7df1e' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572b6' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06b6d4' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
  { name: 'Git', icon: <SiGit />, color: '#f05032' },
];

const SkillCard = ({ skill }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      y: gsap.utils.random(-30, 30),
      x: gsap.utils.random(-20, 20),
      rotation: gsap.utils.random(-6, 6),
      duration: gsap.utils.random(3, 6),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() =>
        gsap.to(cardRef.current, { scale: 1.25, duration: 0.3 })
      }
      onMouseLeave={() =>
        gsap.to(cardRef.current, { scale: 1, duration: 0.3 })
      }
      className="relative group p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl 
                 border border-white/10 cursor-pointer transition-all"
      style={{
        boxShadow: `0 0 30px ${skill.color}55`,
      }}
    >
      {/* Icon */}
      <div
        className="text-5xl mb-3"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </div>

      {/* Name */}
      <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-white">
        {skill.name}
      </span>

      {/* Glow Aura */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
        style={{ backgroundColor: skill.color }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center 
                        bg-[#020617] text-white overflow-hidden" style={{scrollMarginTop: '100px'}}>

      {/* Ambient Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[160px] top-1/4 left-1/3" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[160px] bottom-1/4 right-1/3" />

      <div className="relative z-10 text-center px-6">
        <h2 className="text-6xl font-black mb-16 tracking-tight">
          TECH <span className="text-blue-500">STACK</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {skillData.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
