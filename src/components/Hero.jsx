import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Main Content */}
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400"
          >
            AI/ML Practitioner · Machine Learning Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            I build
            <span className="block text-cyan-400">
              intelligent systems.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
          >
            I'm Inda Obanyi, an AI/ML practitioner building practical
            machine learning solutions that solve real-world problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              View My Projects
              <ArrowRight size={17} />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
              <Download size={17} />
            </a>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 flex flex-wrap gap-3"
          >
            {[
              "Python",
              "Machine Learning",
              "Scikit-learn",
              "Pandas",
              "Streamlit",
              "FastAPI",
              "AI/ML",
              "Git & GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative mx-auto max-w-md">
            {/* Decorative Circle */}
            <div className="absolute -inset-6 rounded-full border border-cyan-400/10" />

            <div className="absolute -inset-12 rounded-full border border-white/5" />

            {/* Main Card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                Focus
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                AI that solves
                <span className="block text-cyan-400">
                  real problems.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                Building practical machine learning applications across
                fintech, recruitment, customer analytics, and social
                impact.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Fraud Detection",
                  "Resume Screening",
                  "Customer Analytics",
                  "Flood Risk",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-gray-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
