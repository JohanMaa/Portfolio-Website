"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Project, projects } from "@/data/projects";

// Komponen kartu proyek
const ProjectCard = ({
  title,
  imageUrl,
  description,
  slug,
  liveLink,
}: {
  title: string;
  imageUrl: string;
  description: string;
  slug: string;
  liveLink?: string;
}) => {
  const normalizedImageUrl = imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-xl transition hover:scale-[1.03] hover:shadow-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20">
      {/* Gambar Project */}
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${normalizedImageUrl})` }}
        onError={(e) => {
          console.warn(`Failed to load image: ${normalizedImageUrl}`);
          e.currentTarget.style.backgroundImage = `url(/fallback.png)`;
        }}
      />

      {/* Konten Card */}
      <div className="p-4 space-y-3 text-white">
        <h3 className="text-lg font-bold text-cyan-400">{title}</h3>
        {/* Deskripsi Singkat */}
        <p className="text-sm text-white/80 line-clamp-2">{description}.....</p>
        {/* Tombol */}
        <div className="flex items-center gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-transparent text-cyan-400 rounded-lg font-semibold text-sm hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 ml-auto"
            aria-label="Project Details"
          >
            Detail
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Komponen utama untuk section Projects
export default function ProjectsSection() {
  // State untuk mengatur jumlah proyek yang ditampilkan
  const [showAll, setShowAll] = useState(false);

  // Proyek yang ditampilkan berdasarkan state
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center text-center px-4 pt-0 pb-24 relative"
    >
      {/* Grid Project */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {displayedProjects.map((project, index) => (
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
              description={project.description}
              slug={project.slug}
              liveLink={project.liveLink}
            />
          </motion.div>
        ))}
      </div>

      {/* Tombol See More / See Less */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
        >
          {showAll ? "See Less" : "See More"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}