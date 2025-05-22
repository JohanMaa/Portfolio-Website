'use client';
import { Code2, Smartphone, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SparklesCore } from '../ui/sparkles';

// Skill cards
const skills = [
  {
    title: "Website Development",
    icon: Code2,
    description: "UI modern dan interaktif dengan React, Next.js, Tailwind CSS, dan Framer Motion.",
    stacks: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mobile App Dev",
    icon: Smartphone,
    description: "Aplikasi Android/iOS dengan Flutter dan Dart yang ringan, responsif, dan elegan.",
    stacks: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Penetration Testing",
    icon: ShieldCheck,
    description: "Melakukan penetration testing pada sistem atau aplikasi.",
    stacks: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark"],
  },
  {
    title: "Vulnerability Assessment",
    icon: ShieldCheck,
    description: "Audit keamanan dan pemindaian kerentanan aplikasi secara menyeluruh.",
    stacks: ["Kali Linux", "Nmap", "Burp Suite", "Wireshark"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 text-white">

      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
        />
      </div>

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-14 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        My Skill Arsenal
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative group bg-[#111827] border border-cyan-400/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-all duration-300 backdrop-blur-md"
          >
            {/* Neon Glow Ring */}
            <div className="absolute -inset-[2px] rounded-2xl blur-sm bg-gradient-to-br from-purple-500 to-cyan-400 opacity-20 group-hover:opacity-30 transition duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <skill.icon className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition duration-300 mb-4" />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{skill.description}</p>

              {/* Stacks */}
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {skill.stacks.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 dark:text-purple-300 hover:bg-cyan-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
