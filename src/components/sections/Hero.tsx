"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaArrowDown,
  FaInstagram,
} from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const terminalPrompts = [
  [
    "└──(johan㉿kali)-[~/redteam]",
    "❯ nmap -sC -sV 10.10.11.100",
    "Starting Nmap Scan...",
    "PORT     STATE SERVICE VERSION",
    "22/tcp   open  ssh     OpenSSH 8.2p1",
    "80/tcp   open  http    Apache httpd 2.4.41",
    "Exploit ideas loading..."
  ],
  [
    "└──(johan㉿kali)-[~/pentest]",
    "❯ gobuster dir -u http://target.com -w common.txt",
    "/admin        (Status: 301)",
    "/login        (Status: 200)",
    "Enumeration in progress..."
  ],
  [
    "└──(johan㉿kali)-[~/exploits]",
    "❯ msfconsole",
    "Metasploit Framework Initialized",
    "❯ use exploit/multi/http",
    "[*] Exploit loaded",
    "❯ run",
    "[*] Sending payload..."
  ]
];

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yButtons = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const words = useMemo(
    () => [
      "Penetration Tester",
      "Mobile App Developer",
      "Web Developer",
      "Vulnerability Assessment",
      "Digital Forensics",
    ],
    []
  );

  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 40,
    delaySpeed: 1000,
  });

  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalIndex((prev) => (prev + 1) % terminalPrompts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero section of Johan portfolio"
      ref={ref}
      className="relative h-auto flex items-start justify-start px-6 pt-[calc(7rem+4vh)] pb-4 sm:pb-6 md:pb-8 overflow-hidden"
    >
      <div className="z-10 w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="w-full md:w-1/2 text-left px-2 sm:px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 mb-4 font-mono leading-tight"
            style={{ y: yText }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Johan Maulana
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-medium text-white font-mono"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm <span className="text-blue-400">{text}</span>
            <Cursor cursorStyle="|" />
          </motion.h2>

          <motion.p
            className="text-gray-300 font-mono text-sm sm:text-base max-w-md mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* I'm Johan — a passionate developer and cybersecurity enthusiast. Driven, learning fast, and building real things. */}
          </motion.p>

          <motion.div
            className="mt-3 text-sm md:text-base text-green-400 font-mono animate-typing overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ❯ Currently diving deep into code, exploits, and UI.
          </motion.div>

          <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm font-mono text-purple-300">
            {[
              { label: "#OffensiveSecurity", color: "purple" },
              { label: "#WebDev", color: "green" },
              { label: "#MobileApps", color: "blue" }
            ].map((tag, i) => (
              <span
                key={i}
                className={`bg-${tag.color}-900/40 px-3 py-1 rounded-full border border-${tag.color}-500 hover:scale-105 hover:brightness-125 transition duration-200`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <small className="text-gray-400 italic text-xs mt-3 block">
            React, Flutter, Linux, and a touch of reverse engineering
          </small>

          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-start"
            style={{ y: yButtons }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium shadow-xl hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300 flex items-center gap-2 neon-button"
            >
              <FaArrowRight /> Explore My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-800/20 hover:scale-105 transition-transform duration-300 neon-button"
            >
              Get in Touch
            </a>
          </motion.div>

          <div className="mt-8 flex gap-6">
            {[
              { icon: <FaGithub />, href: "https://github.com/JohanMaa", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/johan-maulana-26b051305/", label: "LinkedIn" },
              { icon: <FaInstagram />, href: "https://instagram.com/jhnmlna._", label: "Instagram" },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit Johan's ${item.label}`} className="text-purple-400 hover:text-white text-3xl transition-transform hover:scale-110 relative group">
                {item.icon}
                <span role="tooltip" aria-hidden="true" className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <motion.div
            className="mt-10 flex flex-col items-start text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm md:text-base font-mono">Scroll to explore</span>
            <FaArrowDown className="text-2xl neon-glow animate-bounce mt-2" />
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-1/2 h-[300px] md:h-[400px] bg-[#0f1117] border border-green-500/40 rounded-lg p-6 font-mono text-green-400 text-sm shadow-neon backdrop-blur overflow-y-auto transition-all duration-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 mb-3">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="w-2 h-2 bg-yellow-500 rounded-full" />
            <span className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <div className="whitespace-pre-wrap text-sm leading-relaxed transition-all duration-700 ease-in-out">
            {terminalPrompts[terminalIndex].map((line, i) => (
              <p key={i} className={i === 1 ? "text-blue-400" : i >= 3 && i <= 5 ? "text-white" : i === 4 ? "text-yellow-400" : "text-green-400"}>
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;