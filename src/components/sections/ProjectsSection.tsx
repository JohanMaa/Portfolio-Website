"use client";
import { useState } from "react";
import ProjectCard from "@/app/projects/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";

// Tipe data untuk representasi struktur proyek
interface Project {
  title: string;
  imageUrl: string;
  tech: string[];
  description: string;
}

// Komponen utama untuk section Projects
export default function ProjectsSection() {
  // State untuk menyimpan proyek yang sedang dipilih
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Data dummy untuk preview proyek
  const previewProjects: Project[] = [
    {
      title: "AI-Powered Attendance System",
      imageUrl: "/images/project1.jpg",
      tech: ["Next.js", "TensorFlow.js", "Framer Motion"],
      description: "Absensi otomatis dengan pengenalan wajah berbasis AI dan IoT.",
    },
    {
      title: "Cybersecurity Toolkit",
      imageUrl: "/images/project2.jpg",
      tech: ["Linux", "Nmap", "Wireshark"],
      description: "Toolkit untuk penetration testing, network scanning, dan vulnerability assessment.",
    },
    {
      title: "Mobile Water Monitor",
      imageUrl: "/images/project3.jpg",
      tech: ["Flutter", "MQTT", "Firebase"],
      description: "Aplikasi mobile monitoring kualitas air kolam lele secara real-time.",
    },
  ];
  
  return (
    <section
      id="projects"
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

      {/* Grid Project */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {previewProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title={project.title}
              imageUrl={project.imageUrl}
              tech={project.tech}
              description={project.description}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>

      {/* Tombol ke halaman semua proyek */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
        >
          Lihat Semua Proyek
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>

      {/* Modal Detail Project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl max-w-xl w-full p-6 text-left text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tombol Close */}
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gambar */}
              <div className="w-full h-64 bg-cover bg-center rounded-lg mb-4 border border-white/10 shadow-inner"
                style={{ backgroundImage: `url(${selectedProject.imageUrl})` }}
              />

              {/* Judul dan Deskripsi */}
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-white/80 mb-4">{selectedProject.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-medium shadow-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}