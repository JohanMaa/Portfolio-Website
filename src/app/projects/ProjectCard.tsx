"use client";
import { Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description?: string;
  tech?: string[];
  onClick?: () => void; // baru ditambahkan
}

export default function ProjectCard({
  title,
  imageUrl,
  description,
  tech = [],
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-xl transition hover:scale-[1.03] hover:shadow-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20"
    >
      {/* Gambar Project */}
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Konten Card */}
      <div className="p-4 space-y-2 text-white">
        <h3 className="text-lg font-bold">{title}</h3>
        {description && (
          <p className="text-sm text-white/80 line-clamp-3">
            {description}
          </p>
        )}

        {/* Tech Stack Badge */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Icon View */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
          <Eye className="w-5 h-5 text-white/70" />
        </div>
      </div>
    </div>
  );
}
