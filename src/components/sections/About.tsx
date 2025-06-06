"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function About() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
    // Menangani offset scroll saat navigasi ke section
    const handleHashChange = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection && window.location.hash === "#about") {
        const navbarHeight = 60; // Sesuaikan dengan tinggi navbar Anda
        const offsetTop = aboutSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 sm:px-10 lg:px-20 text-white overflow-hidden"
      data-offset="60" // Menyimpan tinggi navbar untuk referensi JavaScript
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-80 w-[70vw] bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto z-10 relative" style={{ paddingTop: "60px" }}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
        </motion.div>

        {/* Main Grid Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {/* Left - Profile Card */}
          <div className="bg-gradient-to-br from-cyan-700/20 to-purple-800/10 border border-cyan-400/30 rounded-2xl p-4 shadow-lg max-w-sm mx-auto">
            <img
              src="j.jpeg"
              alt="Johan Maulana"
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-white">Johan Maulana</h3>
              <p className="text-sm text-cyan-300">Teknik Komputer – UTDI</p>
              <p className="text-xs text-purple-400 italic">
                “Exploring systems and building secure interfaces.”
              </p>
              <hr className="my-3 border-t border-cyan-400/20" />
              <p className="text-sm text-gray-500">Yogyakarta, Indonesia</p>
            </div>
          </div>

          {/* Right - Bio Text */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-white">
              Hello, I'm Johan Maulana
            </h3>
            <p className="text-base text-gray-300 leading-relaxed">
              Mahasiswa Teknik Komputer di Universitas Teknologi Digital Indonesia (UTDI), dengan minat kuat dalam <strong className="text-cyan-400">cybersecurity</strong> – khususnya <strong className="text-purple-400">Red Team</strong> dan <strong className="text-purple-400">Digital Forensic</strong>. Saya juga memiliki ketertarikan pada <strong className="text-cyan-300">frontend development</strong>. Saya bersemangat mempelajari cara kerja sistem, menemukan celah keamanan, dan membangun antarmuka yang aman dan efisien.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="JohanCV.pdf"
                download
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300 gap-2"
              >
                <FaDownload />
                Download CV
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-cyan-400 text-cyan-300 font-medium hover:bg-cyan-500/10 hover:scale-105 transition-transform duration-300 gap-2"
              >
                <BiCodeAlt />
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}