import { motion } from "framer-motion";
import {
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  ServerCog,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Developing and evaluating predictive models for real-world classification and regression problems.",
    skills: [
      "Supervised Learning",
      "Classification",
      "Regression",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "Decision Trees",
      "Model Evaluation",
    ],
  },

  {
    icon: ChartNoAxesCombined,
    title: "Data Science",
    description:
      "Turning raw datasets into useful information and model-ready features.",
    skills: [
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Data Cleaning",
      "Preprocessing",
      "Statistical Analysis",
      "Data Visualization",
      "Class Imbalance",
      "SMOTE",
    ],
  },

  {
    icon: ServerCog,
    title: "AI Engineering",
    description:
      "Connecting trained models to APIs and interactive applications for practical use.",
    skills: [
      "FastAPI",
      "Model Inference",
      "Model Persistence",
      "REST APIs",
      "Streamlit",
      "Authentication",
      "RBAC",
      "Audit Logging",
    ],
  },

  {
    icon: Code2,
    title: "Programming & Frontend",
    description:
      "Building application logic and responsive interfaces around intelligent systems.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Git",
      "GitHub",
    ],
  },

  {
    icon: Database,
    title: "Data & Persistence",
    description:
      "Working with data processing tools and application persistence across ML workflows.",
    skills: [
      "Pandas",
      "NumPy",
      "SQLite",
      "Jupyter Notebook",
      "Dataset Processing",
      "Data Pipelines",
      "CSV",
      "Kaggle",
    ],
  },

  {
    icon: Workflow,
    title: "Delivery & Deployment",
    description:
      "Taking projects from experimentation toward usable and maintainable applications.",
    skills: [
      "Application Deployment",
      "API Integration",
      "Vercel",
      "Render",
      "Git Workflows",
      "Environment Variables",
      "Testing",
      "Production Builds",
    ],
  },
];

const engineeringFlow = [
  "Understand",
  "Analyze",
  "Engineer",
  "Model",
  "Evaluate",
  "Integrate",
  "Deploy",
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[120px]" />
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
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Skills & Capabilities
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
              Technology is the tool.
              <span className="block text-gray-500">
                Solving problems is the goal.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:ml-auto">
            My toolkit spans the machine learning lifecycle — from
            understanding data and developing models to API integration,
            application engineering, persistence, and deployment.
          </p>
        </motion.div>

        {/* =====================================================
            ENGINEERING FLOW
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-5 sm:px-7"
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
            How I Build
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {engineeringFlow.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-2"
              >
                <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-xs font-medium text-cyan-300">
                  {step}
                </span>

                {index < engineeringFlow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-xs text-gray-700"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            SKILL GROUPS
        ====================================================== */}

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.035]"
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.08]"
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-400">
                      <Icon size={20} />
                    </div>

                    <span className="text-[10px] font-medium text-gray-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[11px] font-medium text-gray-400 transition duration-300 group-hover:border-white/[0.12]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            ENGINEERING POSITIONING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.055] to-transparent p-7 sm:p-9"
        >
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Engineering Mindset
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Beyond the notebook.
              </h3>
            </div>

            <p className="leading-7 text-gray-400">
              I approach machine learning as part of a larger software
              system. That means thinking not only about model
              performance, but also data quality, APIs, user experience,
              persistence, security, deployment, monitoring, and how the
              final application creates value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;