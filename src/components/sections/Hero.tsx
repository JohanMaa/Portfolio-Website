"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaRocket } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import React, { useRef } from "react";

const expertise = [
  { name: "Offensife Security", icon: FaCode, color: "bg-red-700/60 hover:bg-red-600/80" },
  { name: "Mobile App Development", icon: FaRocket, color: "bg-green-700/60 hover:bg-green-600/80" },
  { name: "Web Development", icon: FaCode, color: "bg-blue-700/60 hover:bg-blue-600/80" },
];

const ExpertiseBadge = ({ icon: Icon, name, color }: any) => (
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

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const [text] = useTypewriter({
    words: ["Cybersecurity Enthusiast", "Web Developer","Mobile App Developer", "Tech Visionary"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 1200,
  });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pb-20" ref={ref}>
      <div className="z-10 max-w-6xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center px-4 sm:px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4"
            style={{ y: yText }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Build Secure, Fast & Beautiful Web Experiences
          </motion.h1>

          <motion.h2
            className="mt-3 text-xl md:text-3xl font-medium text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I'm Johan, a <span className="text-blue-400">{text}</span>
            <Cursor cursorStyle="|" />
          </motion.h2>

          <motion.p
            className="mt-5 text-base md:text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I blend cutting-edge security practices with elegant design to build impactful digital solutions.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-6 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium shadow-xl hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300 flex items-center gap-2"
            >
              <FaArrowRight /> Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-800/20 hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
            {expertise.map((item) => (
              <ExpertiseBadge key={item.name} {...item} />
            ))}
          </div>

          <div className="mt-8 flex gap-6 justify-center">
            <a
              href="https://github.com/JohanMaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-purple-400 hover:text-white text-2xl transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/johan-maulana-26b051305/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-purple-400 hover:text-white text-2xl transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>

          <motion.div
            className="mt-16 text-white text-2xl animate-bounce"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            viewport={{ once: true }}
          >
            ↓
          </motion.div>
        </div>
      </div>
    </section>
  );
}