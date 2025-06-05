import { Metadata, ResolvingMetadata } from "next";
import { ArrowLeft, ExternalLink, Github, Code2, Star, ChevronRight, Layers } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ClientActions from "./ClientActions";
import ProjectImage from "./ProjectImage";

// Komponen badge teknologi
const TechBadge = ({ tech }: { tech: string }) => {
  return (
    <div className="px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 bg-white/10 rounded-lg border border-white/20 hover:bg-cyan-600/20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 cursor-default flex items-center gap-1 xs:gap-1.5">
      <Code2 className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-cyan-400" />
      <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-white">{tech}</span>
    </div>
  );
};

// Komponen item fitur
const FeatureItem = ({ feature }: { feature: string }) => (
  <li className="flex items-start space-x-1.5 xs:space-x-2 p-1.5 xs:p-2 rounded-md hover:bg-white/5 transition-all duration-300">
    <Star className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-cyan-400 mt-0.5 xs:mt-1" />
    <p className="text-xs xs:text-sm sm:text-base text-white/80">{feature}</p>
  </li>
);

// Komponen statistik proyek
const ProjectStats = ({ project }: { project: Project }) => {
  const techStackCount = project?.tech?.length || 0;
  const featuresCount = project?.features?.length || 0;

  return (
    <div className="flex gap-4 xs:gap-6 p-3 xs:p-4 bg-white/10 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[240px] xs:max-w-xs mx-auto sm:mx-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10">
      <div className="flex flex-col items-center">
        <Code2 className="text-cyan-400 w-5 xs:w-6 h-5 xs:h-6 mb-1" />
        <span className="font-semibold text-white text-base xs:text-lg">{techStackCount}</span>
        <span className="text-[10px] xs:text-xs text-cyan-400">Tech</span>
      </div>
      <div className="flex flex-col items-center">
        <Layers className="text-cyan-400 w-5 xs:w-6 h-5 xs:h-6 mb-1" />
        <span className="font-semibold text-white text-base xs:text-lg">{featuresCount}</span>
        <span className="text-[10px] xs:text-xs text-cyan-400">Features</span>
      </div>
    </div>
  );
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) || null;

  if (!project) {
    return {
      title: "Project Not Found | Your Portfolio",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Your Portfolio`,
    description: project.description,
    openGraph: {
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) || null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center space-y-4 animate-pulse">
          <div className="w-12 h-12 mx-auto border-4 border-cyan-300 border-t-cyan-500 rounded-full animate-spin" />
          <h2 className="text-base xs:text-lg font-semibold text-cyan-400">Project not found</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="px-2 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-8 xs:py-10 sm:py-12 overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto rounded-2xl p-4 xs:p-6 sm:p-8 md:p-10 animate-slide-in-up">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 xs:mb-8 sm:mb-10 gap-4 sm:gap-0">
          <ClientActions github={project.github} liveLink={project.liveLink} />
          <div className="text-xs xs:text-sm text-cyan-400 flex items-center gap-1 sm:gap-1.5 truncate max-w-[160px] xs:max-w-[180px] sm:max-w-[240px]">
            <span>Projects</span>
            <ChevronRight className="w-3 xs:w-4 h-3 xs:h-4" />
            <span className="font-semibold truncate">{project.title}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12">
          {/* Left Content */}
          <div className="flex flex-col gap-4 xs:gap-6 sm:gap-8">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm xs:text-base sm:text-lg text-white/80 leading-relaxed">
              {project.description}
            </p>

            <ProjectStats project={project} />

            <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-xs xs:text-sm hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <ClientActions github={project.github} isGithubOnly />
              )}
            </div>

            <div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-cyan-400 mt-6 xs:mt-8 mb-3 xs:mb-4 flex items-center gap-1.5 xs:gap-2">
                <Code2 className="w-5 xs:w-6 h-5 xs:h-6" />
                Technologies Used
              </h3>
              {project.tech.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3">
                  {project.tech.map((tech, i) => (
                    <TechBadge key={i} tech={tech} />
                  ))}
                </div>
              ) : (
                <p className="text-white/50 italic text-xs xs:text-sm">No technologies added.</p>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6 xs:gap-8 sm:gap-10">
            <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg group">
              <ProjectImage src={project.imageUrl} alt={project.title} />
              <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-600/20 transition-all duration-500 pointer-events-none" />
            </div>

            <div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 xs:mb-4 flex items-center gap-1.5 xs:gap-2">
                <Star className="w-5 xs:w-6 h-5 xs:h-6" />
                Key Features
              </h3>
              {project.features && project.features.length > 0 ? (
                <ul className="space-y-2 xs:space-y-3">
                  {project.features.map((feature, i) => (
                    <FeatureItem key={i} feature={feature} />
                  ))}
                </ul>
              ) : (
                <p className="text-white/50 italic text-xs xs:text-sm">No features added.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}