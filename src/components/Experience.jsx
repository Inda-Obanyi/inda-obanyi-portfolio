import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  BrainCircuit,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    icon: BrainCircuit,
    period: "2026 — Present",
    title: "Machine Learning & AI Engineering",
    organization: "Independent Development & Applied Projects",
    description:
      "Designing and building practical AI and machine learning systems that move beyond experimentation into usable applications, APIs, dashboards, data workflows, and deployed products.",
    highlights: [
      "Built end-to-end machine learning applications",
      "Integrated trained models with application interfaces",
      "Developed API-backed AI workflows",
      "Worked across ML, data, backend, and deployment layers",
    ],
    skills: [
      "Machine Learning",
      "AI Engineering",
      "Python",
      "FastAPI",
      "Streamlit",
      "Model Deployment",
    ],
    featured: true,
  },

  {
    icon: Code2,
    period: "2026",
    title: "Machine Learning Project Developer",
    organization: "Independent Portfolio Projects",
    description:
      "Developed machine learning projects across financial technology, recruitment, customer analytics, and social-impact domains, with emphasis on solving clearly defined real-world problems.",
    highlights: [
      "Developed FraudGuard AI for mobile money fraud detection",
      "Built an NLP-based resume screening classifier",
      "Created customer satisfaction prediction workflows",
      "Explored AI applications for social-impact challenges",
    ],
    skills: [
      "Scikit-learn",
      "XGBoost",
      "Feature Engineering",
      "Classification",
      "Data Analysis",
      "Model Evaluation",
    ],
  },

  {
    icon: GraduationCap,
    period: "2026",
    title: "AI/ML Fellow",
    organization: "3MTT — AI & Machine Learning",
    description:
      "Developed practical foundations in artificial intelligence, machine learning, data analysis, model development, evaluation, and applied problem-solving through structured learning and hands-on projects.",
    highlights: [
      "Applied supervised machine learning techniques",
      "Worked with real-world datasets",
      "Practiced feature engineering and preprocessing",
      "Evaluated and compared machine learning models",
    ],
    skills: [
      "Machine Learning",
      "Python",
      "Data Analysis",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },

  {
    icon: BriefcaseBusiness,
    period: "Ongoing",
    title: "Professional Engineering Development",
    organization: "Continuous Learning & Product Building",
    description:
      "Expanding my capabilities across the broader AI engineering lifecycle, with increasing focus on software architecture, backend development, deployment, security, reliability, and production-oriented machine learning systems.",
    highlights: [
      "Strengthening full-stack software engineering skills",
      "Building more production-oriented AI applications",
      "Improving deployment and system architecture knowledge",
      "Developing stronger engineering and product thinking",
    ],
    skills: [
      "Software Engineering",
      "System Design",
      "Deployment",
      "APIs",
      "Git & GitHub",
      "AI Systems",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

        <div className="absolute -left-40 bottom-10 h-[350px] w-[350px] rounded-full bg-blue-500/[0.02] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[0.75fr_0.25fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Experience & Growth
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Learning by building.
              <span className="block text-gray-500">
                Growing through execution.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              My experience is centered on applied machine learning,
              AI engineering, software development, and continuously
              turning technical knowledge into working systems.
            </p>
          </div>

          {/* Status */}

          <div className="lg:flex lg:justify-end">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs font-medium text-gray-300">
                Building & learning
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative mt-16 sm:mt-20">
          {/* Desktop timeline line */}

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent sm:block"
          />

          <div className="space-y-7">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={`${experience.title}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative sm:pl-20"
                >
                  {/* ==========================================
                      TIMELINE MARKER
                  =========================================== */}

                  <div className="absolute left-0 top-7 hidden sm:block">
                    <div
                      className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border ${
                        experience.featured
                          ? "border-cyan-400/30 bg-cyan-400/[0.08]"
                          : "border-white/10 bg-black"
                      } text-cyan-400 shadow-xl`}
                    >
                      {experience.featured && (
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-lg"
                        />
                      )}

                      <Icon
                        size={19}
                        className="relative"
                      />
                    </div>
                  </div>

                  {/* ==========================================
                      EXPERIENCE CARD
                  =========================================== */}

                  <div
                    className={`group relative overflow-hidden rounded-[2rem] border p-6 transition duration-300 sm:p-8 ${
                      experience.featured
                        ? "border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.045] via-white/[0.025] to-transparent"
                        : "border-white/[0.08] bg-white/[0.02]"
                    } hover:-translate-y-1 hover:border-cyan-400/20`}
                  >
                    {/* Subtle card glow */}

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/[0.025] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.05]"
                    />

                    <div className="relative">
                      {/* Mobile icon + period */}

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-400 sm:hidden">
                            <Icon size={17} />
                          </div>

                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                            {experience.period}
                          </p>
                        </div>

                        {experience.featured && (
                          <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                            Current Focus
                          </span>
                        )}
                      </div>

                      {/* Title */}

                      <div className="mt-5">
                        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {experience.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-gray-500">
                          {experience.organization}
                        </p>
                      </div>

                      {/* Main Content */}

                      <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                        {/* Description */}

                        <div>
                          <p className="leading-8 text-gray-400">
                            {experience.description}
                          </p>
                        </div>

                        {/* Highlights */}

                        <div className="grid gap-3 sm:grid-cols-2">
                          {experience.highlights.map(
                            (highlight) => (
                              <div
                                key={highlight}
                                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-3.5"
                              >
                                <CheckCircle2
                                  size={15}
                                  className="mt-0.5 shrink-0 text-cyan-400"
                                />

                                <p className="text-xs leading-5 text-gray-500">
                                  {highlight}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* ======================================
                          SKILLS
                      ======================================= */}

                      <div className="mt-7 border-t border-white/[0.07] pt-6">
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-gray-500 transition hover:border-cyan-400/20 hover:text-cyan-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CAREER DIRECTION
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.035] p-7 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <BriefcaseBusiness
                  size={20}
                  className="text-cyan-400"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Career Direction
                </p>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Building toward production-ready AI engineering.
              </h3>

              <p className="mt-4 max-w-3xl leading-8 text-gray-400">
                I'm interested in opportunities where I can contribute
                to meaningful AI and machine learning products, work
                alongside strong engineering teams, and continue
                developing practical expertise across the complete
                machine learning lifecycle.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                const contact =
                  document.getElementById("contact");

                if (contact) {
                  const navbarHeight = 90;

                  const position =
                    contact.getBoundingClientRect().top +
                    window.scrollY;

                  window.scrollTo({
                    top: position - navbarHeight,
                    behavior: "smooth",
                  });
                }
              }}
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
            >
              Let's Connect

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;