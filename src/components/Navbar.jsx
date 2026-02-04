import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Hire Me", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for the Name/Logo
  const nameLetterVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05 + 0.5, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-700/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600 origin-left"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Enhanced Logo Section */}
          <Link to="/" className="group flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
            >
              T
            </motion.div>
            <div className="flex overflow-hidden">
              {"Tushar Singh".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={nameLetterVariant}
                  initial="initial"
                  animate="animate"
                  className={`text-xl font-extrabold tracking-tight ${
                    char === " " ? "mr-2" : ""
                  } text-slate-900 dark:text-white`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                whileHover={link.name === 'Hire Me' ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 text-sm font-semibold transition-all ${
                  link.name === 'Hire Me' 
                    ? 'ml-4 text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_4px_15px_rgba(59,130,246,0.4)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.6)]' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Pill background for standard links */}
                {hoveredLink === link.name && link.name !== 'Hire Me' && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 focus:outline-none z-50"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 9 : 0 }}
                className="w-full h-0.5 bg-current rounded-full origin-center"
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1, x: isMenuOpen ? 20 : 0 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -9 : 0 }}
                className="w-full h-0.5 bg-current rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="fixed inset-0 w-full h-screen bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                href={link.href}
                className={`text-4xl font-bold ${
                  link.name === 'Hire Me' 
                  ? 'text-blue-600' 
                  : 'text-slate-800 dark:text-white'
                } hover:tracking-widest transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;