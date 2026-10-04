import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  BrainCircuit,
  ServerCog,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  /*
   * ============================================================
   * PROJECT SELECTION
   * ============================================================
   */

  const fraudGuard = projects.find(
    (project) => project.id === "fraudguard-ai"
  );

  const otherProjects = projects
    .filter(
      (project) =>
        project.id !== "fraudguard-ai" &&
        project.featured !== false
    )
    .slice(0, 4);

  const fraudGuardHasDemo =
    fraudGuard?.demo &&
    fraudGuard.demo !== "#" &&
    !fraudGuard.demo.includes("YOUR_");

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Building AI systems for
              <span className="block text-gray-500">
                real-world problems.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Selected machine learning and software projects showing
              how I move from problem definition and data exploration
              to models, APIs, applications, and deployment.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Explore All Projects

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* =====================================================
            FLAGSHIP PROJECT — FRAUDGUARD
        ====================================================== */}

        {fraudGuard && (
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6 }}
            className="group relative mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.055] via-white/[0.025] to-transparent"
          >
            {/* Glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[100px]"
            />

            <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">

              {/* ===============================================
                  IMAGE
              ================================================ */}

              <Link
                to={`/projects/${fraudGuard.id}`}
                className="relative block min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[520px]"
              >
                {fraudGuard.image ? (
                  <img
                    src={fraudGuard.image}
                    alt="FraudGuard AI fraud detection platform"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                    <ShieldCheck
                      size={52}
                      className="text-cyan-400/40"
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/35" />

                {/* Featured badge */}

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/70 px-4 py-2 backdrop-blur-xl">
                  <ShieldCheck
                    size={14}
                    className="text-cyan-400"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Flagship Project
                  </span>
                </div>
              </Link>

              {/* ===============================================
                  CONTENT
              ================================================ */}

              <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                  AI · FinTech · Machine Learning
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-[-0.025em] text-white sm:text-4xl">
                  {fraudGuard.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                  {fraudGuard.shortDescription ||
                    fraudGuard.description}
                </p>

                {/* Architecture highlights */}

                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <div className="rounded-xl border border-white/[0.07] bg-black/20 p-3.5">
                    <BrainCircuit
                      size={17}
                      className="text-cyan-400"
                    />

                    <p className="mt-2 text-xs font-semibold text-gray-300">
                      XGBoost
                    </p>

                    <p className="mt-1 text-[10px] text-gray-600">
                      ML inference
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.07] bg-black/20 p-3.5">
                    <ServerCog
                      size={17}
                      className="text-cyan-400"
                    />

                    <p className="mt-2 text-xs font-semibold text-gray-300">
                      FastAPI
                    </p>

                    <p className="mt-1 text-[10px] text-gray-600">
                      Backend API
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.07] bg-black/20 p-3.5">
                    <Database
                      size={17}
                      className="text-cyan-400"
                    />

                    <p className="mt-2 text-xs font-semibold text-gray-300">
                      SQLite
                    </p>

                    <p className="mt-1 text-[10px] text-gray-600">
                      Persistence
                    </p>
                  </div>
                </div>

                {/* Metrics */}

                {fraudGuard.metrics?.length > 0 && (
                  <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">
                    {fraudGuard.metrics
                      .slice(0, 5)
                      .map((metric) => (
                        <div
                          key={metric.label}
                          className="border-l border-cyan-400/20 pl-3"
                        >
                          <p className="text-lg font-bold text-white">
                            {metric.value}
                          </p>

                          <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-gray-600">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                  </div>
                )}

                {/* Technology tags */}

                {fraudGuard.technologies?.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-2">
                    {fraudGuard.technologies
                      .slice(0, 6)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-gray-400"
                        >
                          {technology}
                        </span>
                      ))}
                  </div>
                )}

                {/* Actions */}

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${fraudGuard.id}`}
                    className="group/button inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
                  >
                    View Case Study

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover/button:translate-x-1"
                    />
                  </Link>

                  {fraudGuardHasDemo && (
                    <a
                      href={fraudGuard.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-gray-300 transition hover:border-cyan-400/25 hover:text-cyan-300"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {fraudGuard.github && (
                    <a
                      href={fraudGuard.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-gray-400 transition hover:border-cyan-400/25 hover:text-cyan-300"
                    >
                      GitHub
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* =====================================================
            OTHER PROJECTS
        ====================================================== */}

        {otherProjects.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                More Selected Work
              </p>

              <div className="h-px flex-1 bg-white/[0.07]" />
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* =====================================================
            PORTFOLIO FOOTER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-gray-600">
            {projects.length}{" "}
            {projects.length === 1
              ? "project"
              : "projects"}{" "}
            documented in my portfolio.
          </p>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-cyan-300"
          >
            Browse Complete Portfolio

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;