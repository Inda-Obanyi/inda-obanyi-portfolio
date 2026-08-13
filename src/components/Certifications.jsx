import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

const certifications = [
  {
    title: "Certified AI/ML",
    issuer: "3MTT",
    year: "2026",
    description:
      "Training and practical development in artificial intelligence, machine learning, data analysis, and applied AI solutions.",
    credential: "",
  },

  {
    title: "HND Computer Science",
    issuer: "Lagos State Polytechnic",
    year: "2019",
    description:
      "Higher National Diploma in Computer Science with a foundation in software development, computing, databases, and information technology.",
    credential: "",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Certifications & Education
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Credentials that support my journey.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            A combination of formal education, professional training,
            and continuous learning that supports my development in
            artificial intelligence and machine learning.
          </p>

        </div>


        {/* Credentials */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {certifications.map((certification, index) => (
            <motion.article
              key={certification.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >

              {/* Icon */}
              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                  <Award size={22} />
                </div>

                <BadgeCheck
                  size={21}
                  className="text-cyan-400/70"
                />

              </div>


              {/* Information */}
              <div className="mt-6">

                <p className="text-sm font-medium text-cyan-400">
                  {certification.year}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {certification.title}
                </h3>

                <p className="mt-1 font-medium text-gray-500">
                  {certification.issuer}
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  {certification.description}
                </p>

              </div>


              {/* Credential */}
              {certification.credential && (
                <a
                  href={certification.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View Credential
                  <ExternalLink size={15} />
                </a>
              )}

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;