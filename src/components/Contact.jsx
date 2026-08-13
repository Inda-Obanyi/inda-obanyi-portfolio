import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Copy,
  Check,
  MapPin,
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "indaobanyi007@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build something meaningful.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm open to opportunities, collaborations, internships,
            machine learning projects, and conversations around AI,
            data, and technology.
          </p>

        </div>


        {/* =====================================================
            CONTACT CARD
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04]"
        >

          <div className="grid lg:grid-cols-[1fr_0.8fr]">

            {/* -------------------------------------------------
                LEFT SIDE
            -------------------------------------------------- */}
            <div className="p-8 sm:p-10">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Mail size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Have an opportunity?
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-gray-400">
                Whether you're looking for a machine learning
                developer, an AI/ML fellow, a collaborator, or someone
                interested in solving a data-driven problem, I'd be
                happy to connect.
              </p>


              {/* Email */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">

                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-cyan-400"
                >
                  {email}
                  <ArrowRight size={17} />
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  {copied ? (
                    <>
                      <Check size={15} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      Copy Email
                    </>
                  )}
                </button>

              </div>

            </div>


            {/* -------------------------------------------------
                RIGHT SIDE
            -------------------------------------------------- */}
            <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
                Connect with me
              </p>


              {/* GitHub */}
              <a
                href="https://github.com/Inda-Obanyi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-between border-b border-white/10 pb-4 text-gray-300 transition hover:text-cyan-400"
              >
                <span className="font-medium">
                  GitHub
                </span>

                <span className="text-sm text-gray-600">
                  github.com/Inda-Obanyi ↗
                </span>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/inda-obanyi-8886553a6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between border-b border-white/10 pb-4 text-gray-300 transition hover:text-cyan-400"
              >
                <span className="font-medium">
                  LinkedIn
                </span>

                <span className="text-sm text-gray-600">
                  LinkedIn Profile ↗
                </span>
              </a>


              {/* Location */}
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">

                <MapPin
                  size={17}
                  className="text-cyan-400"
                />

                <span>
                  Nigeria
                </span>

              </div>

            </div>

          </div>

        </motion.div>


        {/* =====================================================
            RECRUITER CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="mt-8 text-center"
        >

          <p className="text-sm text-gray-600">
            Interested in my work?
          </p>

          <a
            href="mailto:indaobanyi007@gmail.com?subject=Machine%20Learning%20Opportunity"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Start a conversation
            <ArrowRight size={16} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;