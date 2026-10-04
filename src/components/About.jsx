import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Code2,
  Rocket,
  GraduationCap,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Designing classification and predictive workflows through feature engineering, model comparison, evaluation, and responsible model selection.",
  },
  {
    icon: Code2,
    title: "AI Engineering",
    description:
      "Moving trained models beyond notebooks by connecting inference, APIs, application interfaces, persistence, and operational workflows.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Transforming raw datasets through cleaning, exploratory analysis, preprocessing, feature engineering, and data-driven investigation.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    description:
      "Building practical AI applications with attention to usability, deployment, security, monitoring, and real-world user needs.",
  },
];

const domains = [
  "FinTech",
  "Recruitment",
  "Customer Analytics",
  "Social Impact",
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-400/[0.035] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              From data to
              <span className="block text-gray-500">
                working systems.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:ml-auto">
            I'm Inda Obanyi, an AI/ML Engineer focused on turning
            machine learning ideas into practical applications that
            address real-world problems.
          </p>
        </motion.div>

        {/* =====================================================
            STORY + PROFILE
        ====================================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Story */}

          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-32 w-32 bg-cyan-400/[0.04] blur-3xl"
            />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-400">
                <Layers3 size={20} />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
                Building beyond the model.
              </h3>

              <div className="mt-6 space-y-5 text-[15px] leading-8 text-gray-400 sm:text-base">
                <p>
                  My journey started with a foundation in computer
                  science and developed into a focus on artificial
                  intelligence, machine learning, and software-driven
                  problem solving.
                </p>

                <p>
                  My work spans the machine learning lifecycle:
                  understanding data, engineering features, training
                  and evaluating models, exposing inference through
                  APIs, and turning those capabilities into usable
                  applications.
                </p>

                <p>
                  I have applied these skills across financial fraud
                  detection, recruitment screening, customer analytics,
                  and technology for social impact. Each project is an
                  opportunity to connect technical decisions with a
                  meaningful user or business problem.
                </p>

                <p className="font-medium text-gray-300">
                  My goal is simple: build intelligent systems that
                  are technically sound, useful to people, and capable
                  of creating measurable real-world value.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Professional snapshot */}

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-7 sm:p-8"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gray-600">
              Professional Snapshot
            </p>

            <div className="mt-7 space-y-7">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/[0.07] text-cyan-400">
                  <GraduationCap size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-600">
                    Education
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    HND Computer Science
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Lagos State Polytechnic
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/[0.07]" />

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-600">
                  Engineering Focus
                </p>

                <p className="mt-2 font-semibold text-white">
                  End-to-End AI/ML Systems
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Machine learning · APIs · applications · deployment
                </p>
              </div>

              <div className="h-px bg-white/[0.07]" />

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-600">
                  Domains Explored
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {domains.map((domain) => (
                    <span
                      key={domain}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.025]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/[0.07] text-cyan-400 transition group-hover:bg-cyan-400/[0.12]">
                  <Icon size={19} />
                </div>

                <h3 className="mt-5 font-semibold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {area.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            OPPORTUNITY CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.06] via-cyan-400/[0.025] to-transparent p-7 sm:p-9"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Open To Opportunities
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Building useful technology with ambitious teams.
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                I'm interested in AI/ML engineering roles,
                collaborations, research-driven projects, and
                opportunities to build practical intelligent systems
                with real-world impact.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
            >
              Start a Conversation

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;