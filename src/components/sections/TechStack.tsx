"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "../ui/sparkles";
import Image from "next/image";

// Data tech stack dengan path SVG lokal
const techStacks = [
  // Development Tools
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css3.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
  { name: "ReactJS", icon: "/icons/react.png" },
  { name: "Next JS", icon: "/icons/nextjs.svg" },
  { name: "Firebase", icon: "/icons/firebase.png" },
  { name: "Vercel", icon: "/icons/vercel.svg" },
  // Penetration Testing Tools
  { name: "Wazuh", icon: "/icons/wazuh.jpg" },
  { name: "Nessus", icon: "/icons/nessus.png" },
  { name: "Arachni", icon: "/icons/arachni.jpg" },
  { name: "Metasploit", icon: "/icons/metasploit.png" },
  { name: "Nmap", icon: "/icons/nmap.png" },
  { name: "Burp Suite", icon: "/icons/burpsuite.svg" },
  { name: "Hydra", icon: "/icons/hydra.svg" },
  { name: "Airgeddon", icon: "/icons/airgeddon.png" },
  { name: "SQLmap", icon: "/icons/Sqlmap.png" },
  { name: "Kali Linux", icon: "/icons/kalilinux.png" },
  { name: "BlackArch", icon: "/icons/blackarch.png" },
  { name: "Parrot OS", icon: "/icons/Parrot.png" },
  { name: "Wireshark", icon: "/icons/Wireshark.png" },
  // Digital Forensics Tools
  { name: "Autopsy", icon: "/icons/autopsy.svg" },
  { name: "FTK Imager", icon: "/icons/ftkimager.png" },
  { name: "DMDE", icon: "/icons/dmde.png" },
  { name: "Maltego", icon: "/icons/Maltego.svg" },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="w-full flex flex-col items-center text-center px-4 pt-0 pb-24 relative"
    >
      {/* Holographic Particle Background */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={200}
          className="w-full h-full"
        />
      </div>  */}

      {/* Grid Tech Stack */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {techStacks.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              type: "spring",
              stiffness: 100,
            }}
            className="relative bg-[#13132e] hover:bg-[#1e1e3a] border border-white/5 rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-300 group"
          >
            {/* Neon Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
            <Image
              src={tech.icon}
              alt={tech.name}
              width={50}
              height={50}
              className="mb-3 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}