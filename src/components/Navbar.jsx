import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Skills",
      href: "/#skills",
    },
    {
      label: "Projects",
      href: "/#projects",
    },
    {
      label: "Experience",
      href: "/#experience",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ];

  /*
   * ============================================================
   * CLOSE MOBILE MENU
   * ============================================================
   */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  /*
   * ============================================================
   * SCROLL TO SECTION
   * ============================================================
   */

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const navbarHeight = 90;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  /*
   * ============================================================
   * HANDLE NAVIGATION
   * ============================================================
   */

  const handleNavigation = (href) => {
    closeMobileMenu();

    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        navigate("/");
      }

      return;
    }

    const hashIndex = href.indexOf("#");

    if (hashIndex === -1) {
      navigate(href);
      return;
    }

    const sectionId = href.substring(hashIndex + 1);

    /*
     * If already on the homepage,
     * scroll directly to the section.
     */
    if (location.pathname === "/") {
      window.history.pushState(
        null,
        "",
        `/#${sectionId}`
      );

      scrollToSection(sectionId);

      return;
    }

    /*
     * If on another page, first navigate home.
     * The useEffect below will handle the hash.
     */
    navigate(`/#${sectionId}`);
  };

  /*
   * ============================================================
   * HANDLE HASH AFTER ROUTE CHANGE
   * ============================================================
   */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.substring(1);

    /*
     * Small delay allows React to finish rendering
     * the homepage before we search for the section.
     */
    const timer = setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  /*
   * ============================================================
   * ACTIVE NAVIGATION
   * ============================================================
   */

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/" && !location.hash;
    }

    const hashIndex = href.indexOf("#");

    if (hashIndex === -1) {
      return location.pathname === href;
    }

    const sectionId = href.substring(hashIndex + 1);

    return (
      location.pathname === "/" &&
      location.hash === `#${sectionId}`
    );
  };

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* ====================================================
            LOGO
        ===================================================== */}

        <button
          type="button"
          onClick={() => handleNavigation("/")}
          className="group text-left"
          aria-label="Go to homepage"
        >
          <p className="text-lg font-bold tracking-tight text-white transition group-hover:text-cyan-400">
            Inda Obanyi
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            AI/ML Practitioner
          </p>
        </button>

        {/* ====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavigation(item.href)}
              className={`text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ====================================================
            DESKTOP CTA
        ===================================================== */}

        <button
          type="button"
          onClick={() => handleNavigation("/#contact")}
          className="hidden rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black md:inline-flex"
        >
          Let's Connect
        </button>

        {/* ====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen((previous) => !previous)
          }
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400 md:hidden"
        >
          {mobileOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </nav>

      {/* ======================================================
          MOBILE NAVIGATION
      ======================================================= */}

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavigation("/#contact")}
              className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Let's Connect
            </button>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
