"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaRocket,
  FaArrowDown,
} from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import React, { useRef, useMemo } from "react";

interface ExpertiseProps {
  icon: React.ElementType;
  name: string;
  color: string;
}

const expertise: ExpertiseProps[] = [
  {
    name: "Mobile App Development",
    icon: FaCode,
    color: "bg-red-700/60 hover:bg-red-600/80",
  },
  {
    name: "Offensive Security",
    icon: FaRocket,
    color: "bg-green-700/60 hover:bg-green-600/80",
  },
  {
    name: "Web Development",
    icon: FaCode,
    color: "bg-blue-700/60 hover:bg-blue-600/80",
  },
];

const ExpertiseBadge: React.FC<ExpertiseProps> = ({ icon: Icon, name, color }) => (
  <motion.span
    className={`flex items-center gap-2 text-sm text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 ${color}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Icon className="text-lg" />
    {name}
  </motion.span>
);

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yButtons = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const words = useMemo(
    () => [
      "Cybersecurity Enthusiast",
      "Web Developer",
      "Mobile App Developer",
      "Tech Visionary",
    ],
    []
  );

  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 1200,
  });

  return (
    <section
      id="hero"
      aria-label="Hero section of Johan portfolio"
      className="relative min-h-screen flex items-center justify-center px-6 pb-20 overflow-hidden animate-background"
      ref={ref}
    >
      {/* Animated background layer */}
      <div className="absolute inset-0 z-0" />

      <div className="z-10 max-w-6xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center px-4 sm:px-8">
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4 font-mono"
            style={{ y: yText }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            aria-label="Code. Hack. Build. Johan Portfolio"
            viewport={{ once: true }}
          >
            <span className="text-blue-400">Code</span>.
            <span className="text-green-400">Hack</span>.
            <span className="text-purple-400">Build</span>.
          </motion.h1>

          {/* Typewriter */}
          <motion.h2
            className="mt-4 text-xl md:text-3xl font-medium text-white font-mono"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm Johan, a <span className="text-blue-400">{text}</span>
            <Cursor cursorStyle="|" />
          </motion.h2>

          {/* Terminal-style line */}
          <motion.div
            className="mt-2 text-sm md:text-base text-green-400 font-mono"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ❯ ./build --secure --offensive
          </motion.div>

          {/* Deskripsi */}
          <motion.p
            className="mt-5 text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Empowering the future with{" "}
            <span className="text-purple-400 font-semibold">offensive security</span>, modern web,{" "}
            <span className="text-blue-400 font-semibold">and mobile app development</span>.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            className="mt-10 flex flex-wrap gap-6 justify-center"
            style={{ y: yButtons }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium shadow-xl hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300 flex items-center gap-2"
              aria-label="Explore Johan's projects"
            >
              <FaArrowRight /> Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-800/20 hover:scale-105 transition-transform duration-300"
              aria-label="Contact Johan"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Badge skill */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {expertise.map((item) => (
              <ExpertiseBadge key={item.name} {...item} />
            ))}
          </motion.div>

          {/* Social media */}
          <div className="mt-8 flex gap-6 justify-center">
            <a
              href="https://github.com/JohanMaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Johan's GitHub profile"
              className="text-purple-400 hover:text-white text-2xl transition-transform hover:scale-110 relative group"
            >
              <FaGithub />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/johan-maulana-26b051305/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Johan's LinkedIn profile"
              className="text-purple-400 hover:text-white text-2xl transition-transform hover:scale-110 relative group"
            >
              <FaLinkedin />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 text-purple-400 text-2xl neon-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaArrowDown className="animate-bounce" aria-label="Scroll down to explore more" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
