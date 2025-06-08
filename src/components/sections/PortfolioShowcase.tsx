"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Code, BadgeCheck, Atom } from "lucide-react"; // Ikon untuk tab
import ProjectsSection from "./ProjectsSection";
import Certificate from "./Certificate";
import TechStack from "./TechStack";

const tabs = [
  { name: "Projects", icon: <Code className="w-4 h-4 mr-2" /> },
  { name: "Certificates", icon: <BadgeCheck className="w-4 h-4 mr-2" /> },
  { name: "Tech Stack", icon: <Atom className="w-4 h-4 mr-2" /> },
];

export default function PortfolioShowcase() {
  const [activeSection, setActiveSection] = useState("Projects");

  useEffect(() => {
    // Menangani offset scroll saat navigasi ke section
    const handleHashChange = () => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection && window.location.hash === "#portfolio") {
        const navbarHeight = 60; // Sesuaikan dengan tinggi navbar Anda
        const offsetTop = portfolioSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section
      id="portfolio"
      className="relative py-20 px-4 md:px-10 lg:px-20 text-white overflow-hidden"
      data-offset="60" // Menyimpan tinggi navbar untuk referensi JavaScript
    >
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-small-white/[0.05] z-0 pointer-events-none" />

      <div className="relative z-10" style={{ paddingTop: "60px" }}>
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent text-center bg-clip-text mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-base md:text-lg text-white/80">
          Explore my journey through projects, certifications, and technical expertise.
          Each section represents a milestone in my continuous learning path.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveSection(tab.name)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center
                ${
                  activeSection === tab.name
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-transparent text-white/80 hover:bg-white/10"
                }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="mt-8 max-w-6xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeSection === "Projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <ProjectsSection />
              </motion.div>
            )}

            {activeSection === "Certificates" && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <Certificate />
              </motion.div>
            )}

            {activeSection === "Tech Stack" && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <TechStack />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}