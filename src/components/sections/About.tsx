/* eslint-disable react/no-unknown-property */
"use client";
import { motion } from "framer-motion";
import { FaDownload, FaCode, FaShieldAlt, FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import { TbBinaryTree } from "react-icons/tb";
import { SparklesCore } from "../ui/sparkles";

export default function About() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setTilt({ x: y * 10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const skills = [
    {
      name: "Web Development",
      icon: FaCode,
      description:
        "Building responsive and performant web applications using React, Next.js, and Tailwind CSS.",
    },
    {
      name: "Mobile Apps",
      icon: FaMobileAlt,
      description:
        "Creating cross-platform mobile applications with React Native and Flutter.",
    },
    {
      name: "Penetration Testing",
      icon: FaShieldAlt,
      description:
        "Performing penetration testing and securing applications against vulnerabilities.",
    },
    {
      name: "Digital Forensic",
      icon: TbBinaryTree,
      description:
        "Analyzing digital evidence to uncover and investigate cyber incidents or criminal activities.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-96 w-[60vw] bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 z-10 relative">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-3">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Bio Card */}
          <motion.div
            className="flex-1 relative p-6 text-white backdrop-blur-md bg-gradient-to-b from-gray-900/80 to-blue-950/90 rounded-2xl shadow-[0_0_30px_#0ff3] border border-blue-400/20 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 15px 40px rgba(0, 255, 255, 0.4)",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-40 animate-pulse"
              style={{ transform: "translateZ(-30px)" }}
            />
            <div className="absolute inset-0 z-0">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                particleDensity={60}
                className="w-full h-full"
              />
            </div>
            <div className="relative z-10 text-center md:text-left space-y-4">
              <motion.h3
                className="text-xl font-bold text-white drop-shadow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Johan Maulana
              </motion.h3>
              <motion.p
                className="text-sm text-blue-200 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Dengan minat kuat dalam cybersecurity, khususnya Red Team dan Digital Forensic, saya juga tertarik pada frontend development. Saya bersemangat mempelajari cara kerja sistem, menemukan celah keamanan, dan membangun antarmuka yang aman dan efisien.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a
                  href="JohanCV.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold shadow-xl hover:scale-105 transition gap-2 relative overflow-hidden"
                >
                  <span className="absolute inset-0 animate-glow bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-transparent blur-md opacity-75" />
                  <FaDownload className="z-10 relative" />
                  <span className="z-10 relative">Download CV</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="relative p-4 text-white backdrop-blur-sm rounded-xl shadow-xl border border-cyan-400/20 bg-gradient-to-br from-blue-900/60 to-purple-800/50 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 255, 255, 0.3)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-50" />
                  <div className="relative z-10 flex flex-col items-center text-center space-y-2">
                    <Icon className="text-3xl text-cyan-300 animate-pulse" />
                    <h4 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-300">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
