import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BrainCircuit,
  Target,
  Workflow,
  Lightbulb,
  Code2,
  Gauge,
  Layers3,
  CheckCircle2,
  Rocket,
  Database,
  ServerCog,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import projects from "../data/projects";
import SEO from "../components/SEO";

/* ============================================================
   REUSABLE SECTION HEADER
============================================================ */

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-bold tracking-[-0.025em] text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   PROJECT DETAILS
============================================================ */

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  /* ============================================================
     PAGE POSITION
  ============================================================ */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [id]);

  /* ============================================================
     PROJECT NOT FOUND
  ============================================================ */

  if (!project) {
    return (
      <>
        <SEO
          title="Project Not Found"
          description="The requested project could not be found in Inda Obanyi's AI and machine learning portfolio."
          path={`/projects/${id || ""}`}
          noIndex
        />

        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
          <div className="max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              404
            </p>

            <h1 className="mt-4 text-4xl font-bold">
              Project not found.
            </h1>

            <p className="mt-4 leading-7 text-gray-500">
              The project you're looking for may have been moved,
              renamed, or removed.
            </p>

            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
            >
              <ArrowLeft size={15} />
              View Projects
            </Link>
          </div>
        </main>
      </>
    );
  }

  /* ============================================================
     DERIVED PROJECT DATA
  ============================================================ */

  const hasDemo =
    project.demo &&
    project.demo !== "#" &&
    !project.demo.includes("YOUR_");

  const currentIndex = projects.findIndex(
    (item) => item.id === project.id
  );

  const nextProject =
    projects.length > 1
      ? projects[(currentIndex + 1) % projects.length]
      : null;

  const technologies = project.technologies || [];
  const highlights = project.highlights || [];
  const approach = project.approach || [];
  const pipeline = project.pipeline || [];
  const lessons = project.lessonsLearned || [];
  const metrics = project.metrics || [];

  const comparedModels =
    project.evaluation?.modelsCompared || [];

  const hasSystemArchitecture =
    technologies.includes("FastAPI") ||
    technologies.includes("SQLite") ||
    technologies.includes("Streamlit");

    /* ============================================================
     SEO DATA
  ============================================================ */

  const seoDescription =
    project.shortDescription ||
    project.description ||
    `${project.title} is an AI and machine learning engineering project by Inda Obanyi.`;

  const seoImage =
    project.image || "/images/portfolio-preview.png";

  const projectUrl =
    `https://indaobanyi.vercel.app/projects/${project.id}`;

  const absoluteProjectImage = seoImage.startsWith("http")
    ? seoImage
    : `https://indaobanyi.vercel.app${
        seoImage.startsWith("/") ? seoImage : `/${seoImage}`
      }`;

  /* ============================================================
     PROJECT STRUCTURED DATA
  ============================================================ */

  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",

    name: project.title,
    description: seoDescription,
    url: projectUrl,
    image: absoluteProjectImage,

    author: {
      "@type": "Person",
      name: "Inda Obanyi",
      url: "https://indaobanyi.vercel.app/",
    },

    creator: {
      "@type": "Person",
      name: "Inda Obanyi",
      url: "https://indaobanyi.vercel.app/",
    },

    ...(project.github && {
      codeRepository: project.github,
    }),

    ...(hasDemo && {
      sameAs: project.demo,
    }),

    keywords: [
      "Artificial Intelligence",
      "Machine Learning",
      "Machine Learning Engineering",
      project.category,
      ...technologies,
    ]
      .filter(Boolean)
      .join(", "),

    programmingLanguage: technologies.filter((technology) =>
      [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "HTML",
        "CSS",
      ].includes(technology)
    ),

    isPartOf: {
      "@type": "WebSite",
      name: "Inda Obanyi Portfolio",
      url: "https://indaobanyi.vercel.app/",
    },
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <>
      <SEO
        title={`${project.title} | AI/ML Project`}
        description={seoDescription}
        path={`/projects/${project.id}`}
        image={seoImage}
        imageAlt={`${project.title} - AI/ML project by Inda Obanyi`}
        type="article"
        structuredData={projectStructuredData}
      />

      <main className="relative min-h-screen overflow-hidden bg-black text-white">

        {/* ========================================================
            BACKGROUND
        ========================================================= */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-40 top-32 h-[450px] w-[450px] rounded-full bg-cyan-400/[0.035] blur-[130px]" />

          <div className="absolute -right-48 top-[38%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.025] blur-[140px]" />
        </div>

        {/* ========================================================
            HERO
        ========================================================= */}

        <section className="relative px-6 pb-16 pt-32 sm:pb-20">
          <div className="mx-auto max-w-7xl">

            {/* Navigation */}

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-cyan-300"
              >
                <ArrowLeft
                  size={15}
                  className="transition-transform group-hover:-translate-x-1"
                />

                All Projects
              </Link>

              <span className="text-xs uppercase tracking-[0.2em] text-gray-700">
                Case Study
              </span>
            </div>

            {/* Hero Content */}

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

              {/* Copy */}

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {project.category && (
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                    {project.category}
                  </p>
                )}

                <h1 className="mt-5 text-5xl font-bold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                  {project.title}
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                  {project.shortDescription ||
                    project.description}
                </p>

                {/* Actions */}

                <div className="mt-9 flex flex-wrap gap-3">
                  {hasDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
                    >
                      Launch Live Demo

                      <ExternalLink
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/25 hover:text-cyan-300"
                    >
                      View Repository

                      <ExternalLink
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>

                {/* Technologies */}

                {technologies.length > 0 && (
                  <div className="mt-9 flex flex-wrap gap-2">
                    {technologies
                      .slice(0, 8)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-gray-400"
                        >
                          {technology}
                        </span>
                      ))}

                    {technologies.length > 8 && (
                      <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-gray-600">
                        +{technologies.length - 8}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Project Image */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="relative"
              >
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[3rem] bg-cyan-400/[0.05] blur-3xl"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-2xl">
                  <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-zinc-950">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <Code2
                          size={48}
                          className="text-gray-700"
                        />
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PROJECT SNAPSHOT
        ========================================================= */}

        <section className="relative border-y border-white/[0.07] bg-white/[0.015] px-6 py-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">
              <Target
                size={18}
                className="text-cyan-400"
              />

              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
                Project Type
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                {project.model?.type ||
                  project.category ||
                  "AI / Software Project"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">
              <BrainCircuit
                size={18}
                className="text-cyan-400"
              />

              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
                Model
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                {project.model?.name ||
                  "Machine Learning"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">
              <Layers3
                size={18}
                className="text-cyan-400"
              />

              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
                Technology
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                {technologies.length}{" "}
                {technologies.length === 1
                  ? "Tool"
                  : "Tools"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">
              <Rocket
                size={18}
                className="text-cyan-400"
              />

              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
                Status
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                {hasDemo
                  ? "Live Application"
                  : "Portfolio Project"}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            MAIN CASE STUDY CONTENT
        ========================================================= */}

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          {/* ======================================================
              01 — OVERVIEW
          ======================================================= */}

          {project.description && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                eyebrow="01 · Overview"
                title="What I built."
              />

              <div className="mt-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10">
                <p className="max-w-5xl text-base leading-8 text-gray-400 sm:text-lg">
                  {project.description}
                </p>
              </div>
            </motion.section>
          )}

          {/* ======================================================
              02 — PROBLEM
          ======================================================= */}

          {project.problem && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="02 · Problem"
                title="The challenge."
                description="The problem that shaped the technical and product decisions behind the project."
              />

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.25fr_0.75fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400">
                  <Target size={27} />
                </div>

                <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
                  <p className="text-base leading-8 text-gray-400 sm:text-lg">
                    {project.problem}
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* ======================================================
              03 — ENGINEERING APPROACH
          ======================================================= */}

          {approach.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="03 · Engineering Approach"
                title="How I approached it."
                description="The major technical steps used to move from the original problem to a working solution."
              />

              <div className="mt-9 grid gap-4 md:grid-cols-2">
                {approach.map((item, index) => (
                  <motion.div
                    key={`${item}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.035,
                    }}
                    className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] text-[10px] font-bold text-cyan-400">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <p className="pt-1 text-sm leading-6 text-gray-400">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ======================================================
              04 — PIPELINE
          ======================================================= */}

          {pipeline.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="04 · Workflow"
                title="End-to-end pipeline."
                description="A high-level view of how the project moves from problem definition through implementation and delivery."
              />

              <div className="mt-9 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  {pipeline.map((step, index) => (
                    <div
                      key={`${step}-${index}`}
                      className="flex items-center gap-2"
                    >
                      <div className="rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-700">
                          Step{" "}
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </p>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                          {step}
                        </p>
                      </div>

                      {index <
                        pipeline.length - 1 && (
                        <ArrowRight
                          size={13}
                          className="text-gray-700"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* ======================================================
              05 — SELECTED MODEL
          ======================================================= */}

          {project.model && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="05 · Machine Learning"
                title="Selected model."
                description="The model currently associated with the final project workflow."
              />

              <div className="mt-9 grid gap-5 lg:grid-cols-3">
                {project.model.name && (
                  <div className="rounded-[1.75rem] border border-cyan-400/15 bg-cyan-400/[0.045] p-7">
                    <BrainCircuit
                      size={24}
                      className="text-cyan-400"
                    />

                    <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gray-600">
                      Model
                    </p>

                    <p className="mt-2 text-xl font-bold text-white">
                      {project.model.name}
                    </p>
                  </div>
                )}

                {project.model.type && (
                  <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7">
                    <Workflow
                      size={24}
                      className="text-cyan-400"
                    />

                    <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gray-600">
                      Task
                    </p>

                    <p className="mt-2 text-xl font-bold text-white">
                      {project.model.type}
                    </p>
                  </div>
                )}

                {project.model.target && (
                  <div className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7">
                    <Target
                      size={24}
                      className="text-cyan-400"
                    />

                    <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gray-600">
                      Target
                    </p>

                    <p className="mt-2 text-xl font-bold text-white">
                      {project.model.target}
                    </p>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* ======================================================
              06 — MODEL COMPARISON
          ======================================================= */}

          {comparedModels.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="06 · Experimentation"
                title="Model comparison."
                description="Multiple classifiers were evaluated rather than assuming the first model was the best solution."
              />

              <div className="mt-9 overflow-hidden rounded-[2rem] border border-white/[0.08]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] border-collapse text-left">
                    <thead className="bg-white/[0.035]">
                      <tr>
                        {[
                          "Model",
                          "Accuracy",
                          "Precision",
                          "Recall",
                          "F1",
                          "ROC-AUC",
                        ].map((heading) => (
                          <th
                            key={heading}
                            className="border-b border-white/[0.08] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {comparedModels.map(
                        (model, index) => {
                          const selected =
                            model.name ===
                            project.model?.name;

                          return (
                            <tr
                              key={`${model.name}-${index}`}
                              className={
                                selected
                                  ? "bg-cyan-400/[0.045]"
                                  : "bg-black/20"
                              }
                            >
                              <td className="border-b border-white/[0.06] px-5 py-4">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`text-sm font-semibold ${
                                      selected
                                        ? "text-cyan-300"
                                        : "text-gray-300"
                                    }`}
                                  >
                                    {model.name}
                                  </span>

                                  {selected && (
                                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-cyan-400">
                                      Selected
                                    </span>
                                  )}
                                </div>
                              </td>

                              <td className="border-b border-white/[0.06] px-5 py-4 text-sm text-gray-500">
                                {model.accuracy ?? "—"}
                              </td>

                              <td className="border-b border-white/[0.06] px-5 py-4 text-sm text-gray-500">
                                {model.precision ?? "—"}
                              </td>

                              <td className="border-b border-white/[0.06] px-5 py-4 text-sm text-gray-500">
                                {model.recall ?? "—"}
                              </td>

                              <td className="border-b border-white/[0.06] px-5 py-4 text-sm text-gray-500">
                                {model.f1Score ??
                                  model.f1 ??
                                  "—"}
                              </td>

                              <td className="border-b border-white/[0.06] px-5 py-4 text-sm text-gray-500">
                                {model.rocAuc ?? "—"}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {project.evaluation?.focus && (
                <div className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-6">
                  <p className="text-sm leading-7 text-gray-400">
                    {project.evaluation.focus}
                  </p>
                </div>
              )}
            </motion.section>
          )}

          {/* ======================================================
              07 — METRICS
          ======================================================= */}

          {metrics.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="07 · Evaluation"
                title="Performance at a glance."
                description="Reported evaluation metrics associated with the selected project model."
              />

              <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={`${metric.label}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5"
                  >
                    <Gauge
                      size={17}
                      className="text-cyan-400"
                    />

                    <p className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {metric.value}
                    </p>

                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-600">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ======================================================
              08 — ENGINEERING HIGHLIGHTS
          ======================================================= */}

          {highlights.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="08 · Engineering"
                title="What the system demonstrates."
              />

              <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map(
                  (highlight, index) => (
                    <div
                      key={`${highlight}-${index}`}
                      className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-cyan-400"
                      />

                      <p className="text-sm leading-6 text-gray-400">
                        {highlight}
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.section>
          )}

          {/* ======================================================
              09 — SYSTEM VIEW
          ======================================================= */}

          {hasSystemArchitecture && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="09 · System"
                title="Beyond model training."
                description="The project connects machine learning with application and software-engineering concerns."
              />

              <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-6">
                  <BrainCircuit
                    className="text-cyan-400"
                    size={21}
                  />

                  <h3 className="mt-5 font-semibold text-white">
                    ML Layer
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Trained model, preprocessing, feature handling,
                    and inference workflow.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-6">
                  <ServerCog
                    className="text-cyan-400"
                    size={21}
                  />

                  <h3 className="mt-5 font-semibold text-white">
                    API Layer
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Backend validation, API security, and model-serving
                    integration.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-6">
                  <Database
                    className="text-cyan-400"
                    size={21}
                  />

                  <h3 className="mt-5 font-semibold text-white">
                    Persistence
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Application data, transactions, users, and
                    operational records.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-6">
                  <ShieldCheck
                    className="text-cyan-400"
                    size={21}
                  />

                  <h3 className="mt-5 font-semibold text-white">
                    Application
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    User access, monitoring, security, analytics,
                    and application workflows.
                  </p>
                </div>

              </div>
            </motion.section>
          )}

          {/* ======================================================
              10 — RESULTS
          ======================================================= */}

          {project.results && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="10 · Outcome"
                title="Project results."
              />

              <div className="relative mt-9 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.055] to-transparent p-8 sm:p-10">
                <BarChart3
                  size={25}
                  className="text-cyan-400"
                />

                <p className="mt-6 max-w-5xl text-base leading-8 text-gray-300 sm:text-lg">
                  {project.results}
                </p>
              </div>
            </motion.section>
          )}

          {/* ======================================================
              11 — LESSONS
          ======================================================= */}

          {lessons.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="11 · Reflection"
                title="What I learned."
                description="Technical and engineering lessons gained while developing the project."
              />

              <div className="mt-9 grid gap-4 md:grid-cols-2">
                {lessons.map((lesson, index) => (
                  <div
                    key={`${lesson}-${index}`}
                    className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                  >
                    <Lightbulb
                      size={17}
                      className="mt-1 shrink-0 text-cyan-400"
                    />

                    <p className="text-sm leading-7 text-gray-400">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ======================================================
              TECHNOLOGY STACK
          ======================================================= */}

          {technologies.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5 }}
              className="mt-24"
            >
              <SectionHeader
                eyebrow="Technology"
                title="Tools behind the project."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-sm text-gray-400 transition hover:border-cyan-400/20 hover:text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* ========================================================
            NEXT PROJECT
        ========================================================= */}

        {nextProject &&
          nextProject.id !== project.id && (
            <section className="relative border-t border-white/[0.07] px-6 py-20">
              <div className="mx-auto max-w-7xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-600">
                  Continue Exploring
                </p>

                <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Next Project
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {nextProject.title}
                    </h2>

                    <p className="mt-3 max-w-2xl leading-7 text-gray-500">
                      {nextProject.shortDescription ||
                        nextProject.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/projects/${nextProject.id}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
                    >
                      Next Case Study

                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>

                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-400 transition hover:border-cyan-400/25 hover:text-cyan-300"
                    >
                      All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
      </main>
    </>
  );
}

export default ProjectDetails;