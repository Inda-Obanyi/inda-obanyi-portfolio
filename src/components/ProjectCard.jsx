import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
    >
      {/* =====================================================
          PROJECT IMAGE
      ====================================================== */}
      <Link to={`/projects/${project.id}`}>
        <div className="relative aspect-video overflow-hidden bg-white/5">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-600">
              No image available
            </div>
          )}

          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-black/70 px-3 py-1.5 text-xs font-medium text-cyan-400 backdrop-blur">
              Featured Project
            </div>
          )}
        </div>
      </Link>

      {/* =====================================================
          PROJECT CONTENT
      ====================================================== */}
      <div className="p-6 sm:p-7">

        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-400">
          {project.shortDescription || project.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================== */}
        {project.technologies?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {technology}
              </span>
            ))}
          </div>
        )}

        {/* =================================================
            ACTIONS
        ================================================== */}
        <div className="mt-7 flex flex-wrap items-center gap-3">

          {/* View Project */}
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            View Project
            <ArrowRight size={16} />
          </Link>

          {/* GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <span className="font-bold">GH</span>
              GitHub
            </a>
          )}

          {/* Live Demo */}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;