import React, { useEffect, useRef } from "react";

import {
  motion,
  animate,
  useMotionValue,
  useInView,
} from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// New: card fade-in on scroll (with subtle blur lift)
const fadeInOnScroll = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Counter component (animated numbers)
function Counter({
  to,
  from = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const mv = useMotionValue(from);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to, duration]);

  useEffect(() => {
    const unsub = mv.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(
          v
        ).toLocaleString()}${suffix}`;
      }
    });
    return () => unsub();
  }, [mv, prefix, suffix]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${to}${suffix}`}
    />
  );
}

// Simple inline SVG icons (accessible)
const IconSEO = ({ className = "", label = "SEO Optimization icon" }) => (
  <svg
    role="img"
    aria-label={label}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <circle cx="11" cy="11" r="6" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

const IconSocial = ({
  className = "",
  label = "Social Media Marketing icon",
}) => (
  <svg
    role="img"
    aria-label={label}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M8 10h6a4 4 0 1 0-8 0v5l-2 2v-7a6 6 0 0 1 12 0" />
    <path d="M16 14h2a3 3 0 1 1 0 6h-5l-3 3v-5" />
  </svg>
);

const IconPPC = ({ className = "", label = "Paid Ads (PPC) icon" }) => (
  <svg
    role="img"
    aria-label={label}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M4 4h16v12H4z" />
    <path d="M8 20h8M12 16v4" />
    <path d="M10 9 8 7m6 2 2-2" />
    <path d="M9 11h6" />
  </svg>
);

const IconContent = ({ className = "", label = "Content Marketing icon" }) => (
  <svg
    role="img"
    aria-label={label}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M6 3h12v18H6z" />
    <path d="M9 7h6M9 11h6M9 15h4" />
  </svg>
);

const IconEmail = ({ className = "", label = "Email Automation icon" }) => (
  <svg
    role="img"
    aria-label={label}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M3 5h18v14H3z" />
    <path d="m3 7 9 6 9-6" />
    <path d="M16 20a3 3 0 1 0 0-6" />
  </svg>
);

const IconAI = ({ className = "", label = "AI Analytics & Insights icon" }) => (
  <svg
    role="img"
    aria-label={label}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M9 9a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0z" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);

export default function Digitalmarketing() {
  const siteTitle =
    "AI-Powered Digital Marketing Services | Business Growth Strategies";
  const siteDescription =
    "AI marketing for startups, SMBs, and enterprises. We deliver data-driven digital marketing services: SEO optimization, PPC, social media, content, email automation, and AI analytics to drive real business growth.";
  const keywords =
    "digital marketing services, AI marketing, SEO optimization, business growth strategies, data-driven marketing, PPC, social media, content marketing, email automation, analytics";

  const services = [
    {
      title: "SEO Optimization",
      desc: "Technical fixes, content design, and AI-assisted keyword research to accelerate rankings and organic traffic.",
      Icon: IconSEO,
      iconLabel: "SEO Optimization icon",
    },
    {
      title: "Social Media Marketing",
      desc: "Strategic content + community growth that turns followers into customers across major platforms.",
      Icon: IconSocial,
      iconLabel: "Social Media Marketing icon",
    },
    {
      title: "Paid Ads (PPC/Google Ads)",
      desc: "High-intent campaigns with AI bidding insights to reduce CAC and scale qualified leads.",
      Icon: IconPPC,
      iconLabel: "Paid Ads PPC icon",
    },
    {
      title: "Content Marketing",
      desc: "Research-backed storytelling and AI copy assist for blogs, landing pages, and video scripts.",
      Icon: IconContent,
      iconLabel: "Content Marketing icon",
    },
    {
      title: "Email Automation",
      desc: "Lifecycle flows, segmentation, and personalization to lift retention and LTV automatically.",
      Icon: IconEmail,
      iconLabel: "Email Automation icon",
    },
    {
      title: "AI Analytics & Insights",
      desc: "Unified dashboards, predictive models, and attribution mapping to guide data-driven decisions.",
      Icon: IconAI,
      iconLabel: "AI Analytics & Insights icon",
    },
  ];

  const processSteps = [
    {
      step: "Market Research & Competitor Analysis",
      detail: "Deep research to uncover demand, gaps, and opportunities.",
    },
    {
      step: "Strategy & Positioning with AI Insights",
      detail: "AI-assisted positioning, messaging, and channel focus.",
    },
    {
      step: "Creative Campaign Design",
      detail: "Premium creative tailored to your audience and brand.",
    },
    {
      step: "Launch & Real-Time Optimization",
      detail: "Test quickly, iterate fast, maximize efficiency.",
    },
    {
      step: "Performance Reporting & Growth Scaling",
      detail: "Clarity on what works; scale with confidence.",
    },
  ];

  return (
    <>
      

      <main className="min-h-screen bg-[#0a0f2d] text-white overflow-hidden">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-title"
          className="relative isolate min-h-[85vh] flex items-center"
        >
          {/* Gradient base */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-[#1a1650] to-[#0a0f2d]"
            aria-hidden="true"
          />

          {/* Animated abstract shapes */}
          <motion.div
            aria-hidden="true"
            className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/40 to-indigo-400/30 blur-3xl"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, 10, -15, 0],
              rotate: [0, 10, -8, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-40 right-[-60px] h-96 w-96 rounded-full bg-gradient-to-tr from-purple-600/40 to-blue-500/30 blur-3xl"
            animate={{
              x: [0, -25, 10, 0],
              y: [0, -15, 15, 0],
              rotate: [0, -6, 8, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-sky-400/20 blur-3xl"
            animate={{ x: [0, 12, -18, 0], y: [0, 18, -10, 0] }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />

          <div className="relative z-10 w-full">
            <div className="mx-auto max-w-6xl px-6 md:px-10">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="max-w-3xl"
              >
                <motion.h1
                  id="hero-title"
                  variants={fadeUp}
                  className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
                >
                  AI-Powered Digital Marketing That Drives Real Business Growth
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 text-base sm:text-lg text-indigo-100/90"
                >
                  We help startups, SMBs, and enterprises dominate online with
                  smart research, creative strategy, and AI-backed execution.
                  Our digital marketing services blend data-driven marketing
                  with bold creative to deliver measurable results.
                </motion.p>

                <motion.div variants={scaleIn} className="mt-8">
                  <motion.a
                    href="#book-call"
                    role="button"
                    aria-label="Get Your Free Marketing Audit"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-indigo-900/40 hover:from-violet-500 hover:to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 12,
                      delay: 0.2,
                    }}
                    data-cta="primary-hero"
                  >
                    Get Your Free Marketing Audit
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <motion.section
          aria-labelledby="services-title"
          className="relative py-20 md:py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1440] to-transparent opacity-80 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <motion.h2
              id="services-title"
              className="text-2xl md:text-4xl font-extrabold tracking-tight"
              variants={fadeUp}
            >
              Digital Marketing Services That Scale Results
            </motion.h2>
            <motion.p
              className="mt-3 max-w-3xl text-indigo-100/80"
              variants={fadeUp}
            >
              From SEO optimization and PPC to content, social, and email
              automation — we combine AI marketing and human creativity to build
              efficient business growth strategies.
            </motion.p>

            {/* Stagger the grid, and each card fades in on scroll */}
            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {services.map(({ title, desc, Icon, iconLabel }) => (
                <motion.article
                  key={title}
                  variants={fadeInOnScroll}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.995 }}
                  className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/10 hover:from-violet-600/40 hover:to-indigo-600/40 transition-all duration-300"
                >
                  <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 md:p-7 backdrop-blur-sm transition-shadow duration-300 shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_20px_45px_-12px_rgba(80,56,237,0.45)]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 text-indigo-200 ring-1 ring-white/10">
                        <Icon className="h-6 w-6" label={iconLabel} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {title}
                        </h3>
                        <p className="mt-1 text-sm text-indigo-100/80">
                          {desc}
                        </p>
                      </div>
                    </div>

                    {/* Subtle sheen on hover */}
                    <motion.span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "radial-gradient(1200px 400px at 20% -20%, rgba(255,255,255,0.08), transparent 40%)",
                      }}
                    />
                  </div>
                  <span className="sr-only">{iconLabel}</span>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          aria-labelledby="process-title"
          className="relative py-20 md:py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <motion.h2
              id="process-title"
              className="text-2xl md:text-4xl font-extrabold tracking-tight"
              variants={fadeUp}
            >
              Our Proven Process to Grow Your Brand
            </motion.h2>
            <motion.p
              className="mt-3 max-w-3xl text-indigo-100/80"
              variants={fadeUp}
            >
              A clear framework powered by AI insights and rigorous testing —
              from market research to growth scaling.
            </motion.p>

            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-6"
            >
              {processSteps.map((s, idx) => (
                <motion.li
                  key={s.step}
                  variants={fadeInOnScroll}
                  whileHover={{ y: -6 }}
                  className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/10 hover:from-violet-600/40 hover:to-indigo-600/40 transition-all duration-300"
                >
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20 text-indigo-200 ring-1 ring-white/10 font-bold">
                        <span aria-label={`Step ${idx + 1}`}>{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold">
                          {s.step}
                        </h3>
                        <p className="mt-1 text-sm text-indigo-100/80">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </motion.section>

        {/* Case Studies / Best Work */}
        <motion.section
          aria-labelledby="results-title"
          className="relative py-20 md:py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101646] to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <motion.h2
              id="results-title"
              className="text-2xl md:text-4xl font-extrabold tracking-tight"
              variants={fadeUp}
            >
              See How We Deliver Measurable Results
            </motion.h2>
            <motion.p className="mt-3 text-indigo-100/80" variants={fadeUp}>
              Trusted by 100+ businesses worldwide for revenue-focused,
              data-driven marketing.
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Card 1 */}
              <motion.article
                variants={fadeInOnScroll}
                whileHover={{ y: -10, scale: 1.01 }}
                className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm transition-shadow duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_22px_48px_-12px_rgba(80,56,237,0.45)]"
              >
                <div className="aspect-[16/10] bg-gradient-to-tr from-indigo-700/40 to-purple-600/30 flex items-center justify-center">
                  <svg
                    role="img"
                    aria-label="Case study thumbnail: SaaS PPC campaign growth illustration"
                    viewBox="0 0 200 120"
                    className="h-full w-full text-white/30"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="200"
                      height="120"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      d="M10 100 L60 80 L100 85 L140 40 L190 30"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="190" cy="30" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">
                    B2B SaaS — Paid Ads Scale
                  </h3>
                  <p className="mt-1 text-sm text-indigo-100/80">
                    Scaled Google Ads with AI bidding insights + creative
                    testing to cut acquisition costs.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={210} prefix="+" suffix="%" />
                      </div>
                      <p className="text-xs text-indigo-100/80">ROI</p>
                    </div>
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={320} prefix="+" />
                      </div>
                      <p className="text-xs text-indigo-100/80">SQLs</p>
                    </div>
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={38} prefix="-" suffix="%" />
                      </div>
                      <p className="text-xs text-indigo-100/80">CPL</p>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Card 2 */}
              <motion.article
                variants={fadeInOnScroll}
                whileHover={{ y: -10, scale: 1.01 }}
                className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm transition-shadow duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_22px_48px_-12px_rgba(80,56,237,0.45)]"
              >
                <div className="aspect-[16/10] bg-gradient-to-tr from-fuchsia-600/40 to-indigo-600/30 flex items-center justify-center">
                  <svg
                    role="img"
                    aria-label="Case study thumbnail: E-commerce SEO growth visualization"
                    viewBox="0 0 200 120"
                    className="h-full w-full text-white/30"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="200"
                      height="120"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      d="M10 95 L40 90 L70 85 L100 70 L130 50 L160 35 L190 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="190" cy="25" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">
                    E‑commerce — SEO Optimization
                  </h3>
                  <p className="mt-1 text-sm text-indigo-100/80">
                    Technical SEO and AI-driven content clusters increased
                    rankings for revenue pages.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={180} prefix="+" suffix="%" />
                      </div>
                      <p className="text-xs text-indigo-100/80">Organic Rev</p>
                    </div>
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={92} prefix="+" suffix="%" />
                      </div>
                      <p className="text-xs text-indigo-100/80">
                        Top‑3 Keywords
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={65} prefix="-" suffix="%" />
                      </div>
                      <p className="text-xs text-indigo-100/80">
                        Time to Publish
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Card 3 */}
              <motion.article
                variants={fadeInOnScroll}
                whileHover={{ y: -10, scale: 1.01 }}
                className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm transition-shadow duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_22px_48px_-12px_rgba(80,56,237,0.45)]"
              >
                <div className="aspect-[16/10] bg-gradient-to-tr from-sky-600/40 to-violet-600/30 flex items-center justify-center">
                  <svg
                    role="img"
                    aria-label="Case study thumbnail: Lifecycle email automation impact"
                    viewBox="0 0 200 120"
                    className="h-full w-full text-white/30"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="200"
                      height="120"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      d="M10 90 Q50 60, 90 80 T170 45"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="170" cy="45" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">DTC — Email Automation</h3>
                  <p className="mt-1 text-sm text-indigo-100/80">
                    Segmented flows and AI personalization increased repeat
                    purchase rate and LTV.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={34} prefix="+" suffix="%" />
                      </div>
                      <p className="text-xs text-indigo-100/80">
                        Repeat Orders
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={26} prefix="+" suffix="%" />
                      </div>
                      <p className="text-xs text-indigo-100/80">AOV</p>
                    </div>
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                      <div className="text-xl font-extrabold">
                        <Counter to={48} prefix="+" suffix="%" />
                      </div>
                      <p className="text-xs text-indigo-100/80">
                        Email Revenue
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </motion.div>

            <motion.div className="mt-8" variants={fadeUp}>
              <p className="text-sm text-indigo-200/80">
                Trusted by 100+ Businesses Worldwide
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          id="book-call"
          aria-labelledby="cta-title"
          className="relative py-16 md:py-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
              <div
                className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700"
                aria-hidden="true"
              />
              <div className="relative p-8 md:p-12">
                <motion.h2
                  id="cta-title"
                  variants={fadeUp}
                  className="text-2xl md:text-4xl font-extrabold"
                >
                  Ready to Take Your Marketing to the Next Level?
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-3 text-indigo-100/90">
                  Let our experts and AI solutions guide your growth journey.
                  Book a free, no‑pressure strategy call.
                </motion.p>
                <motion.div variants={scaleIn} className="mt-8">
                  <motion.a
                    href="https://calendly.com/"
                    target="_blank"
                    rel="noopener"
                    role="button"
                    aria-label="Book Your Free Strategy Call"
                    className="w-full inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base sm:text-lg font-semibold text-indigo-800 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-cta="final-cta"
                  >
                    Book Your Free Strategy Call
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
