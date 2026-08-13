import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Rocket,
  Code2,
} from "lucide-react";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Building classification and predictive models using practical machine learning techniques and careful model evaluation.",
  },
  {
    icon: Database,
    title: "Data & Analysis",
    description:
      "Working with real-world datasets through data cleaning, exploratory analysis, feature engineering, and preprocessing.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Turning machine learning workflows into usable applications using Python, React, Streamlit, and modern development tools.",
  },
  {
    icon: Rocket,
    title: "Deployment & Applications",
    description:
      "Learning to move beyond experimentation by developing practical, interactive, and deployable machine learning solutions.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building toward machine learning engineering.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm Inda Obanyi, an AI/ML practitioner focused on turning
            data and machine learning techniques into practical solutions
            for real-world problems.
          </p>
        </motion.div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* -----------------------------------------------------
              STORY
          ------------------------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >

            <p className="leading-8 text-gray-400">
              My journey in technology has evolved from a foundation in
              computer science into a growing specialization in artificial
              intelligence and machine learning.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Through hands-on projects, I have worked with datasets,
              developed machine learning models, performed exploratory
              data analysis, engineered features, evaluated models, and
              explored deployment through interactive applications.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              My projects cover different real-world domains, including
              financial fraud detection, recruitment screening, customer
              satisfaction prediction, and technology for social impact.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              I am currently focused on strengthening my machine learning
              engineering skills by improving my understanding of model
              deployment, software development, reliable ML workflows,
              and building systems that can be useful beyond the notebook.
            </p>


            {/* Education / Background */}
            <div className="mt-8 border-t border-white/10 pt-7">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                Background
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                <div>
                  <p className="text-sm text-gray-500">
                    Education
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    HND Computer Science
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Lagos State Polytechnic
                  </p>
                </div>


                <div>
                  <p className="text-sm text-gray-500">
                    Current Focus
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Machine Learning Engineering
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    AI • Data • Deployment
                  </p>
                </div>

              </div>

            </div>

          </motion.div>


          {/* -----------------------------------------------------
              FOCUS AREAS
          ------------------------------------------------------ */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >

                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Icon size={22} />
                    </div>

                    <div>

                      <h3 className="text-lg font-semibold text-white">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-400">
                        {area.description}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            POSITIONING STATEMENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 sm:p-10"
        >

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            What I'm Looking For
          </p>

          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Opportunities to learn, build, and contribute.
          </h3>

          <p className="mt-4 max-w-4xl leading-8 text-gray-400">
            I'm interested in opportunities where I can contribute to
            machine learning and AI projects, work with experienced
            engineers and data professionals, solve meaningful problems,
            and continue developing toward a professional machine
            learning engineering role.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;