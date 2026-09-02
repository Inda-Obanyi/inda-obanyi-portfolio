import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        {/* ====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400"
          >
            AI/ML Practitioner · Machine Learning Engineer
          </motion.p>

          {/* Main Heading */}
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

          {/* Description */}
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
              href="/resume/Inda-Obanyi-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              Download CV
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

        {/* ====================================================
            PROFESSIONAL PHOTO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="relative">

            {/* Outer Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-cyan-400/10 blur-3xl"
            />

            {/* Outer Decorative Circle */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full border border-cyan-400/10 sm:-inset-6"
            />

            {/* Inner Decorative Circle */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full border border-white/10 sm:-inset-3"
            />

            {/* Photo Frame */}
            <div className="relative h-[300px] w-[250px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl backdrop-blur-sm sm:h-[360px] sm:w-[300px] lg:h-[420px] lg:w-[350px]">
              <img
                src="/images/profile.jpg"
                alt="Inda Obanyi - AI/ML Engineer"
                className="h-full w-full rounded-[1.35rem] object-cover"
              />

              {/* Bottom Gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-x-2 bottom-2 h-28 rounded-b-[1.35rem] bg-gradient-to-t from-black/70 to-transparent"
              />
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-8 sm:translate-x-0 sm:px-5">
              <p className="text-[9px] uppercase tracking-[0.25em] text-gray-500">
                Building
              </p>

              <p className="mt-1 whitespace-nowrap text-xs font-semibold text-cyan-400 sm:text-sm">
                Intelligent Solutions
              </p>
            </div>

            {/* Floating Status */}
            <div className="absolute -right-3 top-5 rounded-full border border-cyan-400/20 bg-black/80 px-3 py-2 shadow-xl backdrop-blur-xl sm:-right-6 sm:top-8 sm:px-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />

                <span className="text-[10px] font-medium text-gray-300 sm:text-xs">
                  AI/ML Engineer
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
