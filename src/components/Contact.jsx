import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  MessageCircle,
  Download,
  BriefcaseBusiness,
  Code2,
  Users,
} from "lucide-react";

const contactReasons = [
  {
    icon: BriefcaseBusiness,
    title: "AI/ML Opportunities",
    description:
      "Machine learning, AI engineering, data science, and software opportunities.",
  },
  {
    icon: Code2,
    title: "Project Collaboration",
    description:
      "Practical AI products, ML applications, APIs, data systems, and technical projects.",
  },
  {
    icon: Users,
    title: "Partnerships",
    description:
      "Technology collaborations, research ideas, product development, and meaningful initiatives.",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    label: "View repositories",
    href: "https://github.com/Inda-Obanyi",
  },
  {
    name: "LinkedIn",
    label: "Professional profile",
    href: "https://www.linkedin.com/in/inda-obanyi-8886553a6",
  },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "indaobanyi007@gmail.com";

  const whatsappLink =
    "https://wa.me/2348053694199?text=Hello%20Inda%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20AI%2FML%20opportunity%20with%20you.";

  const emailLink =
    "mailto:indaobanyi007@gmail.com?subject=AI%2FML%20Opportunity%20-%20Portfolio%20Enquiry&body=Hello%20Inda%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss...";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.07] px-6 py-24 sm:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Availability */}

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs font-medium text-cyan-300">
              Open to opportunities & collaborations
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Let's Connect
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Have a problem worth
            <span className="block text-cyan-400">
              solving with technology?
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm open to AI and machine learning opportunities,
            technical collaborations, innovative projects, and
            conversations with people building useful technology.
            If my work aligns with what you're building, I'd be
            glad to hear from you.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT REASONS
        ====================================================== */}

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contactReasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-400">
                  <Icon size={18} />
                </div>

                <h3 className="mt-4 font-semibold text-white">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            MAIN CONTACT PANEL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025]"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* =================================================
                PRIMARY CTA
            ================================================== */}

            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.045] blur-[90px]"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-400">
                  <Mail size={21} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Start a conversation
                </p>

                <h3 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Let's discuss what you're building.
                </h3>

                <p className="mt-4 max-w-xl leading-8 text-gray-400">
                  Tell me about the opportunity, problem, project, or
                  idea. Email is the best option for detailed
                  conversations, while WhatsApp works well for a quick
                  introduction.
                </p>

                {/* =============================================
                    PRIMARY ACTIONS
                ============================================== */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={emailLink}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-cyan-300"
                  >
                    Email Me

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/25 hover:text-cyan-300"
                  >
                    <MessageCircle size={16} />

                    WhatsApp

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="/resume/Inda-Obanyi-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-400 transition hover:border-cyan-400/25 hover:text-cyan-300"
                  >
                    <Download size={15} />

                    View CV
                  </a>
                </div>

                {/* =============================================
                    EMAIL
                ============================================== */}

                <div className="mt-9 border-t border-white/[0.07] pt-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Direct email
                  </p>

                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={`mailto:${email}`}
                      className="break-all text-base font-semibold text-white transition hover:text-cyan-400 sm:text-lg"
                    >
                      {email}
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-xs font-medium text-gray-500 transition hover:border-cyan-400/20 hover:text-cyan-300"
                    >
                      {copied ? (
                        <>
                          <Check
                            size={14}
                            className="text-cyan-400"
                          />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                PROFESSIONAL LINKS
            ================================================== */}

            <div className="border-t border-white/[0.07] bg-black/20 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Find me online
              </p>

              <div className="mt-7">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-white/[0.07] py-5 first:pt-0"
                  >
                    <div>
                      <p className="font-semibold text-gray-200 transition group-hover:text-cyan-400">
                        {link.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-600">
                        {link.label}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-gray-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                    />
                  </a>
                ))}

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-white/[0.07] py-5"
                >
                  <div>
                    <p className="font-semibold text-gray-200 transition group-hover:text-cyan-400">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Quick conversation
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                  />
                </a>
              </div>

              {/* ===============================================
                  LOCATION
              ================================================ */}

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
                  Based in
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-cyan-400">
                    <MapPin size={16} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-300">
                      Nigeria
                    </p>

                    <p className="mt-0.5 text-xs text-gray-600">
                      Open to remote opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* ===============================================
                  RESPONSE NOTE
              ================================================ */}

              <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                  <p className="text-xs leading-6 text-gray-500">
                    For professional opportunities, include a short
                    description of the role, project, or collaboration
                    when reaching out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL MESSAGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-gray-600">
            Good technology starts with a meaningful problem.
            I'm interested in helping turn those problems into
            practical solutions.
          </p>

          <a
            href={emailLink}
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Start a conversation

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;