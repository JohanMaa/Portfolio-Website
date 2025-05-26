'use client'; // Menentukan bahwa komponen ini menggunakan fitur client-side rendering

// Import library dan komponen yang dibutuhkan
import { motion } from 'framer-motion'; // Animasi
import Image from 'next/image'; // Untuk optimasi gambar Next.js
import { SparklesCore } from '../ui/sparkles'; // Komponen efek background sparkles
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'; // Ikon dari react-icon
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiReact, SiNodedotjs } from 'react-icons/si'; // Ikon tech stack
import { useTypewriter, Cursor } from 'react-simple-typewriter'; // Efek typewriting
import React from 'react';

// Komponen utama hero 
export default function Hero() {
  // Hook untuk efek typewriter
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer',
      'Mobile App Builder',
      'Penetration Tester',
      'Tech Problem Solver',
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    // SECTION: Hero Utama
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center px-6 pb-20 overflow-hidden"
    >
      {/* Background Sparkles */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={500}
          className="w-full h-full"
        />
      </div>

      { /* Kontainer utema hero */}
      <div className="z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="text-center md:text-left flex-1">
          {/* Nama dengan animasi */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Johan Maulana
          </motion.h1>

          {/* Efek typewritter di hero section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-2xl md:text-4xl font-semibold text-white"
          >
            {text}
            <Cursor cursorStyle="|" />
          </motion.div>

          {/* Deskripsi Singkat */}
          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Saya membangun solusi digital modern berbasis web & mobile dengan keamanan sebagai fondasi utama.
          </motion.p>

          {/* Tombol aksi (Lihat proyek & Hubungi Saya) */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 items-center"
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
              className="px-6 py-3 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-800 transition"
            >
              Hubungi Saya
            </a>
          </motion.div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a href="https://github.com/JohanMaa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/johan-maulana-26b051305/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right: Profile Card */}
        <motion.div
          className="flex-1 relative p-6 rounded-2xl text-white backdrop-blur-md bg-white/5 border border-blue-300 max-w-sm shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut',
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.4 },
          }}
        >

          {/* Konten kartu profile */}
          <div className="relative z-10 text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
              <Image
                src="/team/jm.png"
                alt="Johan"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>

            {/* Nama & Role */}
            <h3 className="text-xl font-bold">Johan Maulana</h3>
            <p className="text-sm text-blue-300">Full Stack Developer</p>
            
            {/* Teknologi yang digunakan */}
            <div className="flex flex-wrap justify-center gap-2 text-sm font-medium mt-3">
              <span className="flex items-center gap-1 px-2 py-1 bg-blue-700/50 rounded hover:scale-105 transition">
                <SiReact className="text-cyan-300" /> React
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-purple-700/50 rounded hover:scale-105 transition">
                <SiNextdotjs className="text-white" /> Next.js
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-cyan-700/50 rounded hover:scale-105 transition">
                <SiTailwindcss className="text-white" /> Tailwind
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 rounded hover:scale-105 transition">
                <SiNodedotjs className="text-green-300" /> Node.js
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-yellow-600/50 rounded hover:scale-105 transition">
                <SiJavascript className="text-white" /> JavaScript
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
