import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" />

      </div>


      <div className="relative mx-auto w-full max-w-6xl">

        <div className="max-w-4xl">

          {/* =================================================
              PROFESSIONAL STATUS
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-400"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            Open to Machine Learning Opportunities
          </motion.div>


          {/* =================================================
              MAIN HEADING
          ================================================== */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building intelligent

            <span className="block text-cyan-400">
              solutions with data.
            </span>
          </motion.h1>


          {/* =================================================
              INTRODUCTION
          ================================================== */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl"
          >
            I'm{" "}
            <span className="font-semibold text-white">
              Inda Obanyi
            </span>
            , an AI/ML practitioner and aspiring Machine Learning
            Engineer focused on building practical machine learning
            systems that solve real-world problems.
          </motion.p>


          {/* =================================================
              PROFESSIONAL IDENTITY
          ================================================== */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-sm font-medium text-gray-500"
          >
            Inda Obanyi{" "}
            <span className="text-cyan-400">|</span>{" "}
            AI/ML Practitioner &amp; Aspiring Machine Learning Engineer
          </motion.p>


          {/* =================================================
              TECHNICAL FOCUS
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {[
              "Machine Learning",
              "Python",
              "Data Analysis",
              "Feature Engineering",
              "Model Evaluation",
              "Model Deployment",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                {item}
              </span>
            ))}
          </motion.div>


          {/* =================================================
              CALL TO ACTION
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >

            {/* Projects */}

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Explore My Projects
              <ArrowRight size={17} />
            </a>


            {/* Resume */}

            <a
              href="/resume/Inda-Obanyi-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
            >
              <Download size={17} />
              View Resume
            </a>

          </motion.div>


          {/* =================================================
              SOCIAL LINKS
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-6"
          >

            {/* GitHub */}

            <a
              href="https://github.com/Inda-Obanyi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Inda Obanyi's GitHub profile"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-cyan-400"
            >
              <span className="font-bold text-white">
                GH
              </span>

              GitHub
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/inda-obanyi-8886553a6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Inda Obanyi's LinkedIn profile"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-cyan-400"
            >
              <span className="font-bold text-white">
                in
              </span>

              LinkedIn
            </a>

          </motion.div>

        </div>


        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition hover:text-cyan-400 sm:flex"
        >

          <span className="text-xs uppercase tracking-[0.25em]">
            Scroll
          </span>

          <ArrowDown
            size={16}
            className="animate-bounce"
          />

        </motion.a>

      </div>
    </section>
  );
}

export default Hero;