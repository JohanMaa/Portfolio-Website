"use client";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

// Data proyek termasuk role
const projectDetails = [
  {
    title: "Project 1",
    imageUrl: "/images/project1.jpg",
    description:
      "Deskripsi lengkap dari Project 1 yang menjelaskan fitur, teknologi yang digunakan, dan peran saya dalam project ini.",
    tech: ["React", "Tailwind CSS", "Next.js"],
    role: "Website Development",
  },
  {
    title: "Project 2",
    imageUrl: "/images/project2.jpg",
    description:
      "Platform web yang saya bangun dengan fokus pada performa dan UI/UX yang optimal.",
    tech: ["Vue", "Firebase", "Vite"],
    role: "Website Development",
  },
  {
    title: "Project 3",
    imageUrl: "/images/project3.jpg",
    description:
      "Sistem manajemen internal organisasi yang dibangun dengan pendekatan modular.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    role: "Cybersecurity",
  },
  {
    title: "Project 4",
    imageUrl: "/images/project4.jpg",
    description:
      "Aplikasi mobile untuk monitoring suhu dan kelembaban menggunakan IoT dan Flutter.",
    tech: ["Flutter", "MQTT", "Node.js"],
    role: "Mobile App Development",
  },
];

// Semua role unik dari data
const roles = ["All", ...new Set(projectDetails.map((p) => p.role))];

export default function ProjectsPage() {
  const [selectedRole, setSelectedRole] = useState("All"); // State untuk menyimpan role yang dipilih

  // Filter berdasarkan role
  const filteredProjects =
    selectedRole === "All"
      ? projectDetails
      : projectDetails.filter((p) => p.role === selectedRole);

  return (
    <main className="min-h-screen px-6 py-20 text-white">
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

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Semua Proyek
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Jelajahi proyek dari berbagai bidang — frontend, backend, mobile apps, hingga keamanan siber.
          </p>
        </motion.div>

        {/* Filter Role */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)} // Set role yang dipilih
              className={`px-4 py-2 rounded-full border ${
                selectedRole === role
                  ? "bg-purple-500 text-white border-purple-500 shadow-lg"
                  : "bg-transparent text-gray-300 border-gray-600 hover:border-purple-500 hover:text-purple-400"
              } transition-all duration-300`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Grid Projects */}
        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                }}
              >
                <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:shadow-purple-500/20 transition-all duration-300">
                  <ProjectCard
                    title={project.title}
                    imageUrl={project.imageUrl}
                    description={project.description}
                    tech={project.tech}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Tampilkan pesan jika tidak ada proyek yang cocok dengan filter
          <p className="text-center text-gray-400 mt-20">
            Tidak ada proyek untuk kategori ini.
          </p>
        )}
      </div>
    </main>
  );
}
