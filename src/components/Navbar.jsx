import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >

        {/* =================================================
            BRAND
        ================================================== */}

        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Inda Obanyi - Home"
          title="Inda Obanyi | AI/ML Practitioner & Aspiring Machine Learning Engineer"
          className="whitespace-nowrap text-xl font-bold tracking-tight text-white transition hover:text-cyan-400"
        >
          Inda <span className="text-cyan-400">Obanyi</span>
        </a>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden items-center gap-6 lg:flex xl:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>


        {/* =================================================
            DESKTOP RESUME
        ================================================== */}

        <a
          href="/resume/Inda-Obanyi-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-cyan-400/30 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-black lg:inline-flex"
        >
          Resume
        </a>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400 lg:hidden"
        >
          {menuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

      </nav>


      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-5 lg:hidden">

          {/* Mobile Identity */}

          <div className="mb-4 border-b border-white/10 pb-4">
            <p className="text-lg font-bold text-white">
              Inda <span className="text-cyan-400">Obanyi</span>
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              AI/ML Practitioner & Aspiring Machine Learning Engineer
            </p>
          </div>


          {/* Mobile Navigation Links */}

          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
          </div>


          {/* Mobile Resume */}

          <a
            href="/resume/Inda-Obanyi-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            View Resume
          </a>

        </div>
      )}
    </header>
  );
}

export default Navbar;