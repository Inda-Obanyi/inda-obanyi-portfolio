import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >

          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects I've built.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              A selection of machine learning and AI projects where I
              apply data, algorithms, and software engineering to solve
              practical problems.
            </p>

          </div>


          <div className="max-w-sm">

            <p className="text-sm leading-7 text-gray-500">
              From financial fraud detection and intelligent recruitment
              to customer analytics and social-impact technology, these
              projects reflect my journey toward building practical
              machine learning systems.
            </p>

          </div>

        </motion.div>


        {/* =====================================================
            PROJECT GRID
        ====================================================== */}
        {featuredProjects.length > 0 ? (

          <div className="grid gap-8 md:grid-cols-2">

            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}

          </div>

        ) : (

          /* ===================================================
             EMPTY STATE
          ==================================================== */
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">

            <p className="text-gray-400">
              Projects will appear here soon.
            </p>

          </div>

        )}


        {/* =====================================================
            PROJECT COUNT / CTA
        ====================================================== */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row"
          >

            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-gray-300">
                {featuredProjects.length}
              </span>{" "}
              featured{" "}
              {featuredProjects.length === 1
                ? "project"
                : "projects"}
            </p>


            <a
              href="https://github.com/Inda-Obanyi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Explore more on GitHub
              <ArrowRight size={16} />
            </a>

          </motion.div>
        )}

      </div>
    </section>
  );
}

export default Projects;