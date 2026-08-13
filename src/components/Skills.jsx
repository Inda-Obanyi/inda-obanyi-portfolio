import { motion } from "framer-motion";
import {
  BrainCircuit,
  BarChart3,
  Code2,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Classification",
      "Regression",
      "Logistic Regression",
      "K-Nearest Neighbors",
      "Naive Bayes",
      "Decision Trees",
      "Model Evaluation",
    ],
  },

  {
    icon: BarChart3,
    title: "Data Science",
    skills: [
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Data Cleaning",
      "Data Preprocessing",
      "Statistical Analysis",
      "Data Visualization",
      "Class Imbalance",
      "SMOTE",
    ],
  },

  {
    icon: Code2,
    title: "Programming",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Statsmodels",
      "JavaScript",
      "React",
    ],
  },

  {
    icon: Database,
    title: "Data & Development Tools",
    skills: [
      "Jupyter Notebook",
      "Anaconda",
      "Kaggle",
      "Git",
      "GitHub",
      "Dataset Processing",
      "Data Pipelines",
    ],
  },

  {
    icon: Cloud,
    title: "Deployment",
    skills: [
      "Streamlit",
      "Model Deployment",
      "ML Applications",
      "Web Integration",
      "Application Prototyping",
    ],
  },

  {
    icon: Wrench,
    title: "Web Development",
    skills: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "REST API Concepts",
      "Git Version Control",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Skills & Technologies
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools I use to build with data.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A practical collection of machine learning, data science,
            programming, and deployment skills developed through
            hands-on projects and continuous learning.
          </p>

        </div>


        {/* =====================================================
            SKILL GROUPS
        ====================================================== */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 25,
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
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={22} />
                </div>


                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {group.title}
                </h3>


                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* =====================================================
            CURRENT FOCUS
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-14 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 sm:p-10"
        >

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Current Focus
          </p>

          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Becoming a stronger Machine Learning Engineer
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-gray-400">
            I'm continuously improving my skills in machine learning,
            model evaluation, deployment, software development, and
            building reliable AI systems through practical projects.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              Building
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              Learning
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              Deploying
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Skills;