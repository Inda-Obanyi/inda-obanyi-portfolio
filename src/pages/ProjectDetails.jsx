import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  /* =====================================================
     PROJECT NOT FOUND
  ====================================================== */

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Project Not Found
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            We couldn't find this project.
          </h1>

          <p className="mt-4 text-gray-400">
            The project you're looking for doesn't exist or may have
            been moved.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>

        </div>
      </main>
    );
  }


  /* =====================================================
     DYNAMIC SECTION NUMBERING
  ====================================================== */

  let sectionNumber = 0;

  const getSectionNumber = () => {
    sectionNumber += 1;
    return String(sectionNumber).padStart(2, "0");
  };


  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="px-6 pb-20 pt-32">

        <div className="mx-auto max-w-6xl">

          {/* Back to Portfolio */}

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>


          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">

            {/* =================================================
                PROJECT INFORMATION
            ================================================== */}

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                {project.category}
              </p>


              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>


              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                {project.description}
              </p>


              {/* =================================================
                  PROJECT LINKS
              ================================================== */}

              <div className="mt-8 flex flex-wrap gap-4">

                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}

              </div>

            </div>


            {/* =================================================
                PROJECT IMAGE
            ================================================== */}

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full min-h-[240px] w-full object-cover sm:min-h-[300px]"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      <section className="border-y border-white/10 px-6 py-12">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-600">
            Technologies
          </p>


          <div className="mt-5 flex flex-wrap gap-3">

            {project.technologies?.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">

            {/* =================================================
                MAIN COLUMN
            ================================================== */}

            <div className="space-y-16">

              {/* =================================================
                  PROBLEM
              ================================================== */}

              {project.problem && (
                <section>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    {getSectionNumber()} — Problem
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    The Challenge
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-gray-400">
                    {project.problem}
                  </p>

                </section>
              )}


              {/* =================================================
                  APPROACH
              ================================================== */}

              {project.approach?.length > 0 && (
                <section>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    {getSectionNumber()} — Approach
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    How I approached the problem
                  </h2>

                  <div className="mt-7 space-y-4">

                    {project.approach.map((step, index) => (
                      <div
                        key={step}
                        className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5"
                      >

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-semibold text-cyan-400">
                          {index + 1}
                        </span>

                        <p className="leading-7 text-gray-400">
                          {step}
                        </p>

                      </div>
                    ))}

                  </div>

                </section>
              )}


              {/* =================================================
                  MODEL
              ================================================== */}

              {project.model && (
                <section>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    {getSectionNumber()} — Model
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Machine Learning Model
                  </h2>

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">

                    {/* Model */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                      <p className="text-xs uppercase tracking-wider text-gray-600">
                        Model
                      </p>

                      <p className="mt-2 font-semibold text-white">
                        {project.model.name}
                      </p>

                    </div>


                    {/* Type */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                      <p className="text-xs uppercase tracking-wider text-gray-600">
                        Type
                      </p>

                      <p className="mt-2 font-semibold text-white">
                        {project.model.type}
                      </p>

                    </div>


                    {/* Target */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                      <p className="text-xs uppercase tracking-wider text-gray-600">
                        Target
                      </p>

                      <p className="mt-2 font-semibold text-white">
                        {project.model.target}
                      </p>

                    </div>

                  </div>

                </section>
              )}


              {/* =================================================
                  EVALUATION
              ================================================== */}

              {(
                project.metrics?.length > 0 ||
                project.evaluation?.metrics?.length > 0 ||
                project.evaluation?.focus
              ) && (
                <section>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    {getSectionNumber()} — Evaluation
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Model Evaluation
                  </h2>


                  {/* =================================================
                      ACTUAL PERFORMANCE METRICS
                  ================================================== */}

                  {project.metrics?.length > 0 && (
                    <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">

                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
                        >

                          <p className="text-2xl font-bold text-cyan-400">
                            {metric.value}
                          </p>

                          <p className="mt-2 text-sm text-gray-500">
                            {metric.label}
                          </p>

                        </div>
                      ))}

                    </div>
                  )}


                  {/* =================================================
                      EVALUATION METRICS / CRITERIA
                  ================================================== */}

                  {project.evaluation?.metrics?.length > 0 && (
                    <div className="mt-7">

                      <p className="text-sm text-gray-500">
                        Evaluation metrics considered
                      </p>

                      <div className="mt-4 flex flex-wrap gap-3">

                        {project.evaluation.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
                          >
                            {metric}
                          </span>
                        ))}

                      </div>

                    </div>
                  )}


                  {/* =================================================
                      EVALUATION EXPLANATION
                  ================================================== */}

                  {project.evaluation?.focus && (
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                      {project.evaluation.focus}
                    </p>
                  )}

                </section>
              )}


              {/* =================================================
                  RESULTS
              ================================================== */}

              {project.results && (
                <section>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    {getSectionNumber()} — Results
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Outcome
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-gray-400">
                    {project.results}
                  </p>

                </section>
              )}


              {/* =================================================
                  LESSONS LEARNED
              ================================================== */}

              {project.lessonsLearned?.length > 0 && (
                <section>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    {getSectionNumber()} — Lessons Learned
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    What I learned
                  </h2>

                  <div className="mt-7 space-y-4">

                    {project.lessonsLearned.map((lesson) => (
                      <div
                        key={lesson}
                        className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-5"
                      >

                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0 text-cyan-400"
                        />

                        <p className="leading-7 text-gray-400">
                          {lesson}
                        </p>

                      </div>
                    ))}

                  </div>

                </section>
              )}

            </div>


            {/* =================================================
                SIDEBAR
            ================================================== */}

            <aside className="lg:sticky lg:top-24 lg:self-start">

              {/* =================================================
                  ML PIPELINE
              ================================================== */}

              {project.pipeline?.length > 0 && (
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    ML Pipeline
                  </p>

                  <div className="mt-6 space-y-3">

                    {project.pipeline.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-start gap-3"
                      >

                        <span className="pt-0.5 text-xs text-gray-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm leading-6 text-gray-400">
                          {step}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>
              )}


              {/* =================================================
                  HIGHLIGHTS
              ================================================== */}

              {project.highlights?.length > 0 && (
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Highlights
                  </p>

                  <ul className="mt-6 space-y-3">

                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >

                        <span className="text-cyan-400">
                          ✓
                        </span>

                        <span>
                          {highlight}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div>
              )}

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM NAVIGATION
      ====================================================== */}

      <section className="border-t border-white/10 px-6 py-12">

        <div className="mx-auto flex max-w-6xl items-center justify-between">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>

        </div>

      </section>

    </main>
  );
}

export default ProjectDetails;