function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            TOP SECTION
        ====================================================== */}

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white transition hover:text-cyan-400"
            >
              Inda{" "}
              <span className="text-cyan-400">
                Obanyi
              </span>
            </a>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Inda Obanyi{" "}
              <span className="text-cyan-400">|</span>{" "}
              AI/ML Practitioner &amp; Aspiring Machine Learning Engineer
            </p>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-600">
              Building practical solutions with data, machine learning,
              and intelligent systems.
            </p>
          </div>


          {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <div className="flex items-center gap-3">

            {/* =================================================
                GITHUB
            ================================================== */}

            <a
              href="https://github.com/Inda-Obanyi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Inda Obanyi's GitHub profile"
              title="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <span className="text-xs font-bold text-white">
                GH
              </span>
            </a>


            {/* =================================================
                LINKEDIN
            ================================================== */}

            <a
              href="https://www.linkedin.com/in/inda-obanyi-8886553a6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Inda Obanyi's LinkedIn profile"
              title="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <span className="text-sm font-bold text-white">
                in
              </span>
            </a>


            {/* =================================================
                EMAIL
            ================================================== */}

            <a
              href="mailto:indaobanyi007@gmail.com"
              aria-label="Email Inda Obanyi"
              title="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <span className="text-sm font-bold text-white">
                @
              </span>
            </a>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-8 h-px bg-white/10" />


        {/* =====================================================
            BOTTOM SECTION
        ====================================================== */}

        <div className="flex flex-col gap-5 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">

          {/* =================================================
              COPYRIGHT
          ================================================== */}

          <div>
            <p>
              © {currentYear} Inda Obanyi. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-gray-700">
              AI/ML Practitioner &amp; Aspiring Machine Learning Engineer
            </p>
          </div>


          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div className="flex flex-wrap items-center gap-6">

            <a
              href="#home"
              className="transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#projects"
              className="transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Contact
            </a>


            {/* =================================================
                BACK TO TOP
            ================================================== */}

            <a
              href="#home"
              aria-label="Back to top"
              title="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              ↑
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;