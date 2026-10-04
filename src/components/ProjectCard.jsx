import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ project, index = 0 }) {
  if (!project) {
    return null;
  }

  const hasDemo =
    project.demo &&
    project.demo !== "#" &&
    !project.demo.includes("YOUR_");

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.035]"
    >
      {/* =====================================================
          PROJECT IMAGE
      ====================================================== */}

      <Link
        to={`/projects/${project.id}`}
        className="block overflow-hidden"
        aria-label={`View ${project.title} case study`}
      >
        <div className="relative aspect-video overflow-hidden bg-zinc-950">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Code2
                size={32}
                className="text-gray-700"
              />
            </div>
          )}

          {/* Image overlays */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

          <div className="pointer-events-none absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/[0.025]" />

          {/* Project number */}

          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] font-medium text-gray-300 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Demo status */}

          {hasDemo && (
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/70 px-3 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-300">
                Live
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {project.category && (
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
            {project.category}
          </p>
        )}

        <Link to={`/projects/${project.id}`}>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white transition group-hover:text-cyan-300">
            {project.title}
          </h3>
        </Link>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-500">
          {project.shortDescription || project.description}
        </p>

        {/* Technologies */}

        {project.technologies?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, 5)
              .map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[11px] font-medium text-gray-400"
                >
                  {technology}
                </span>
              ))}

            {project.technologies.length > 5 && (
              <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-gray-600">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        )}

        {/* Actions */}

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-white/[0.07] pt-6">
          <Link
            to={`/projects/${project.id}`}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan-300"
          >
            Case Study

            <ArrowRight
              size={15}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-cyan-300"
            >
              GitHub
              <ExternalLink size={12} />
            </a>
          )}

          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-cyan-300"
            >
              Live Demo
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;