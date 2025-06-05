/* eslint-disable react/no-unknown-property */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiReact, SiNodedotjs } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import React, { useState } from "react";

interface TechStackItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface ProfileProps {
  imageSrc: string;
  name: string;
  role: string;
  techStack: TechStackItem[];
}

const profile: ProfileProps = {
  imageSrc: "/team/jm1.png",
  name: "Johan Maulana",
  role: "FrontEnd Developer",
  techStack: [
    { name: "React", icon: SiReact, color: "bg-blue-700/60 hover:bg-blue-600/80" },
    { name: "Next.js", icon: SiNextdotjs, color: "bg-purple-700/60 hover:bg-purple-600/80" },
    { name: "Tailwind", icon: SiTailwindcss, color: "bg-cyan-700/60 hover:bg-cyan-600/80" },
    { name: "Node.js", icon: SiNodedotjs, color: "bg-slate-700/60 hover:bg-slate-600/80" },
    { name: "JavaScript", icon: SiJavascript, color: "bg-yellow-600/60 hover:bg-yellow-500/80" },
  ],
};

export default function Hero() {
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

  const [text] = useTypewriter({
    words: [
      "FrontEnd Developer",
      "Mobile App Builder",
      "Penetration Tester",
      "Digital Forensic",
      "Tech Enthusiast",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-6 pb-20 overflow-hidden"
    >
      <div className="z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            className="text-5xl md:text5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-3"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Johan Maulana
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-2xl md:text-4xl font-semibold text-white"
          >
            {text}
            <Cursor cursorStyle="|" />
          </motion.div>
          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I develop secure-by-default web and mobile solutions, blending modern technology with strong security principles.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4 items-center justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2"
            >
              <FaArrowRight /> Lihat Proyek
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-800/30 transition"
            >
              Hubungi Saya
            </a>
          </motion.div>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/JohanMaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/johan-maulana-26b051305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right: Profile Card with Removed Name */}
        <motion.div
          className="flex-1 relative p-6 text-white max-w-sm mx-auto rounded-3xl shadow-2xl border border-cyan-400/20 overflow-hidden"
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.07,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
            transition: { duration: 0.4 },
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: 1100,
            transformStyle: "preserve-3d",
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 pointer-events-none" />
          <div className="absolute inset-0 z-0">
            {/* <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={100}
              className="w-full h-full"
            /> */}
          </div>

          {/* Profile Card Content */}
          <div className="relative z-20 text-center space-y-5">
            <motion.div
              className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
              initial={{ scale: 0.85, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Image
                src={profile.imageSrc}
                alt={profile.name}
                width={112}
                height={112}
                className="object-cover rounded-full"
                priority
              />
            </motion.div>

            {/* Name Removed */}
            <p className="text-cyan-400 font-medium tracking-wide">{profile.role}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-4 mt-3">
              {profile.techStack.map(({ name, icon: Icon, color }) => (
                <motion.div
                  key={name}
                  className={`w-12 h-12 rounded-full flex items-center justify-center cursor-default shadow-lg transition-transform hover:scale-110 ${color} text-white`}
                  title={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + Math.random() * 0.3 }}
                >
                  <Icon className="text-xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}