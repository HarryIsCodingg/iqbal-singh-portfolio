import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  title: string;
  technologies: string;
  year: string;
  description: string;
  highlights: string[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-blue-300 mb-3">
          {project.technologies}
        </p>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-2">
          {project.highlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx} className="text-xs text-gray-400 flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span className="flex-1">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
