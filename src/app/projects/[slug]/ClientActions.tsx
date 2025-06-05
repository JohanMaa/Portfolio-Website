"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import Swal from "sweetalert2";

const handleGithubClick = (githubLink: string) => {
  if (githubLink === "Private") {
    Swal.fire({
      icon: "info",
      title: "Source Code Private",
      html: "Maaf, source code untuk proyek ini bersifat privat.",
      confirmButtonText: "Mengerti",
      confirmButtonColor: "#06B6D4",
      background: "#1F2937",
      color: "#FFFFFF",
      customClass: {
        popup: "rounded-xl shadow-2xl",
        title: "font-bold text-xl",
        confirmButton: "px-6 py-2 text-sm font-semibold rounded-lg",
      },
    });
    return false;
  }
  return true;
};

export default function ClientActions({
  github,
  liveLink,
  isGithubOnly = false,
}: {
  github?: string;
  liveLink?: string;
  isGithubOnly?: boolean;
}) {
  const router = useRouter();

  if (isGithubOnly && github) {
    return (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => !handleGithubClick(github) && e.preventDefault()}
        className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 bg-white/10 border-2 border-white/20 text-cyan-400 rounded-lg font-semibold text-xs xs:text-sm hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        aria-label="Github Repository"
      >
        <Github className="w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5" />
        Github
      </a>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-lg border-2 border-white/20 text-cyan-400 font-semibold text-xs xs:text-sm hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
      aria-label="Back to Portfolio"
    >
      <ArrowLeft className="w-4 xs:w-5 h-4 xs:h-5" />
      <span>Back</span>
    </button>
  );
}