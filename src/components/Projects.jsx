import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured !== false
  );

  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Selected Projects
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building solutions for real-world problems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              A selection of machine learning, AI, data science, and
              technology projects developed through practical problem-solving.
            </p>

          </div>

          {/* View all projects */}
          <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            aria-label="View all projects"
          >
            All Projects
            <ArrowRight size={16} />
          </Link>

        </div>


        {/* =====================================================
            PROJECT GRID
        ====================================================== */}
        {featuredProjects.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}

          </div>
        ) : (
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">

            <p className="text-gray-500">
              Projects are currently being updated.
            </p>

          </div>
        )}


        {/* =====================================================
            PROJECT COUNT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-600">
            {projects.length}{" "}
            {projects.length === 1 ? "project" : "projects"} in portfolio
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;