import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-cyan-400"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>


        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            All Projects
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A collection of practical machine learning, artificial
            intelligence, data science, and technology projects I've
            developed to solve real-world problems.
          </p>
        </motion.div>


        {/* Project Count */}
        <div className="mt-8">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
            {projects.length} Projects
          </span>
        </div>


        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>

    </main>
  );
}

export default ProjectsPage;