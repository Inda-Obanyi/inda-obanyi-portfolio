import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Code2 } from "lucide-react";

const experiences = [
  {
    icon: GraduationCap,
    period: "2026",
    title: "AI/ML Fellow",
    organization: "3MTT / AI & Machine Learning Program",
    description:
      "Developing practical skills in machine learning, data analysis, model development, evaluation, and deployment through hands-on projects and collaborative learning.",
    skills: [
      "Machine Learning",
      "Python",
      "Data Analysis",
      "Model Evaluation",
      "AI Solutions",
    ],
  },

  {
    icon: Code2,
    period: "2026",
    title: "Machine Learning Project Developer",
    organization: "Independent Projects",
    description:
      "Building practical machine learning applications focused on real-world problems including mobile money fraud detection, recruitment screening, customer analytics, and social-impact technology.",
    skills: [
      "Scikit-learn",
      "Feature Engineering",
      "Classification",
      "Streamlit",
      "Data Analysis",
    ],
  },

  {
    icon: BriefcaseBusiness,
    period: "2026 — Present",
    title: "Aspiring Machine Learning Engineer",
    organization: "Professional Development",
    description:
      "Expanding from model development into the broader machine learning engineering lifecycle, with a focus on building reliable, deployable, and useful ML systems.",
    skills: [
      "ML Engineering",
      "Model Deployment",
      "Software Development",
      "Problem Solving",
      "AI Systems",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My journey so far.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            A progression from learning the foundations of AI and machine
            learning to building practical systems and developing toward
            machine learning engineering.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative mt-16">

          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 sm:block" />

          <div className="space-y-10">

            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative sm:pl-16"
                >

                  {/* Timeline icon */}
                  <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-black text-cyan-400 sm:flex">
                    <Icon size={18} />
                  </div>


                  {/* Card */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-cyan-400/30">

                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">

                      <div>

                        <p className="text-sm font-medium text-cyan-400">
                          {experience.period}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-gray-500">
                          {experience.organization}
                        </p>

                      </div>

                    </div>


                    <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                      {experience.description}
                    </p>


                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-2">

                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400"
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

        </div>

      </div>
    </section>
  );
}

export default Experience;