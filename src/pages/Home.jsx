import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <Hero />
        <section
          id="home"
          className="flex min-h-screen items-center justify-center px-6 pt-24"
        >
          <div className="mx-auto max-w-5xl text-center">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              AI/ML Fellow · Machine Learning Engineer
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl">
              I build
              <span className="block text-cyan-400">
                intelligent systems.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              I'm Inda Obanyi, an AI/ML practitioner building practical
              machine learning solutions that solve real-world problems.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Let's Connect
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {[
                "Python",
                "Machine Learning",
                "Scikit-learn",
                "Pandas",
                "Streamlit",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </section>

       {/* About */}
<About />

{/* Skills */}
<Skills />

{/* Projects */}
<Projects />

{/* Experience */}
<Experience />

{/* Certifications */}
<Certifications />

{/* Contact */}
<Contact />

      </main>
        <Footer />
    </>
  );
};

export default Home;