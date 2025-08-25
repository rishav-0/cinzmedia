import React from "react";
import { Helmet } from "react-helmet";
import { motion, useReducedMotion } from "framer-motion";

export default function BrandBuildingPage() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 14,
      filter: prefersReducedMotion ? "none" : "blur(6px)",
    },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  const popIn = (delay = 0.2) => ({
    initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.4, ease: "easeOut", delay },
  });

  const steps = [
    {
      id: 1,
      title: "Research & Audit",
      copy: "We analyze your market, competitors, and audience to define opportunities.",
      icon: (
        <IconSearch ariaLabel="Research and audit icon for brand building services" />
      ),
    },
    {
      id: 2,
      title: "Strategy & Positioning",
      copy: "We identify your unique value and craft a clear brand direction.",
      icon: (
        <IconCompass ariaLabel="Business branding strategy and positioning icon" />
      ),
    },
    {
      id: 3,
      title: "Identity Design",
      copy: "From logo to colors to messaging, we design a brand that communicates clearly.",
      icon: (
        <IconPalette ariaLabel="Identity design palette icon for startup branding" />
      ),
    },
    {
      id: 4,
      title: "Implementation",
      copy: "We create guidelines and assets to roll out your brand consistently.",
      icon: (
        <IconToolkit ariaLabel="Implementation toolkit icon for enterprise brand solutions" />
      ),
    },
    {
      id: 5,
      title: "Monitoring & Optimization",
      copy: "We measure performance and keep your brand evolving.",
      icon: (
        <IconChart ariaLabel="Monitoring and optimization analytics icon" />
      ),
    },
  ];

  return (
    <>
      {/* SEO Core */}
      <Helmet>
        <title>
          End-to-End Brand Building Services for Businesses of Every Size
        </title>
        <meta
          name="description"
          content="We help startups, SMBs, and enterprises build powerful brands with strategic research, creative design, and consistent execution."
        />
        <link
          rel="canonical"
          href="https://www.example.com/brand-building-services"
        />
        <meta
          property="og:title"
          content="End-to-End Brand Building Services for Businesses of Every Size"
        />
        <meta
          property="og:description"
          content="We help startups, SMBs, and enterprises build powerful brands with strategic research, creative design, and consistent execution."
        />
      </Helmet>

      <main>
        {/* Visible only to assistive tech to meet 'one H1 only' SEO + accessibility */}
        <h1 className="srOnly">
          End-to-End Brand Building Services for Businesses of Every Size
        </h1>

        {/* Hero */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="heroBackground" aria-hidden="true">
            {!prefersReducedMotion && (
              <>
                <motion.div
                  className="blob blobA"
                  aria-hidden="true"
                  initial={{ x: -60, y: -30, opacity: 0.35 }}
                  animate={{ x: 40, y: 20, opacity: 0.5 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="blob blobB"
                  aria-hidden="true"
                  initial={{ x: 60, y: 10, opacity: 0.25 }}
                  animate={{ x: -30, y: -10, opacity: 0.4 }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="lineFlow"
                  aria-hidden="true"
                  initial={{ backgroundPositionX: "0%" }}
                  animate={{ backgroundPositionX: "100%" }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </>
            )}
          </div>

          <div className="container heroGrid">
            <motion.h2 id="hero-heading" {...fadeUp(0)}>
              We Build Brands That Win Trust and Drive Growth
            </motion.h2>
            <motion.p className="heroSub" {...fadeUp(0.1)}>
              From strategy to execution, we create brands for startups, SMBs,
              and enterprises — tailored to scale.
            </motion.p>
            <motion.div className="heroCtas" {...popIn(0.2)}>
              <a
                className="btnPrimary"
                href="/contact?topic=free-brand-strategy-call"
                aria-label="Get Your Free Brand Strategy Call"
              >
                Get Your Free Brand Strategy Call
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Brand Building Matters */}
        <section className="section" aria-labelledby="why-brand">
          <div className="container">
            <h2 id="why-brand">
              A Strong Brand is More Than a Logo — It’s Your Business Advantage
            </h2>
            <div className="grid2">
              <div>
                <p>
                  Your brand is the perception, trust, and experience people
                  have with your business. With thoughtful{" "}
                  <strong>brand building services</strong> and a clear{" "}
                  <strong>business branding strategy</strong>, every touchpoint
                  communicates who you are and why you matter.
                </p>
                <p>
                  Strong brands attract customers, talent, and investors. They
                  make it easier to explain <em>how to build a brand</em> that’s
                  credible, consistent, and memorable — and to scale that
                  reputation over time.
                </p>
                <p>
                  Without a strategic brand, marketing costs go up and growth
                  stalls. We help you invest once, build right, and create
                  momentum that compounds.
                </p>
                <p className="inlineLinks">
                  Explore more:{" "}
                  <a href="/services/branding" title="Branding Services">
                    Branding Services
                  </a>{" "}
                  ·{" "}
                  <a href="/process" title="Our Branding Process">
                    Our Process
                  </a>{" "}
                  ·{" "}
                  <a href="/work" title="Branding Case Studies">
                    Case Studies
                  </a>
                </p>
              </div>
              <div className="illustrationWrap">
                <BrandSystemIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach for Every Business Size */}
        <section className="section alt" aria-labelledby="approach">
          <div className="container">
            <h2 id="approach">
              A Tailored Branding Strategy for Every Stage of Business
            </h2>

            <div className="cards3">
              <motion.article className="card" {...fadeUp(0)}>
                <div className="cardIcon">
                  <IconSeed ariaLabel="Icon representing startup branding clarity and positioning" />
                </div>
                <h3>Startups & Small Businesses</h3>
                <p>
                  We help you stand out early, define your voice, and create
                  cost‑effective <strong>startup branding</strong> that grows
                  with you.
                </p>
              </motion.article>

              <motion.article className="card" {...fadeUp(0.05)}>
                <div className="cardIcon">
                  <IconLayers ariaLabel="Icon representing scaling and consistency for mid-sized companies" />
                </div>
                <h3>Mid-Sized Companies</h3>
                <p>
                  We refine your existing identity, align teams, and implement
                  brand systems to support expansion with consistency.
                </p>
              </motion.article>

              <motion.article className="card" {...fadeUp(0.1)}>
                <div className="cardIcon">
                  <IconGlobal ariaLabel="Icon representing enterprise brand solutions and global presence" />
                </div>
                <h3>Enterprises & Corporates</h3>
                <p>
                  We deliver <strong>enterprise brand solutions</strong> so your
                  brand stays consistent across regions, product lines, and
                  thousands of touchpoints.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="section" aria-labelledby="process">
          <div className="container">
            <h2 id="process">Our Proven 5-Step Brand Building Process</h2>

            <div className="stepsWrap">
              <div className="stepsScroll" role="list">
                {steps.map((step, idx) => (
                  <motion.article
                    key={step.id}
                    role="listitem"
                    className="stepCard"
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : 16,
                      filter: prefersReducedMotion ? "none" : "blur(6px)",
                    }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: idx * 0.07,
                    }}
                  >
                    <div className="stepHeader">
                      <div className="stepBadge" aria-hidden="true">
                        {step.id}
                      </div>
                      <div className="stepIcon">{step.icon}</div>
                    </div>
                    <h3 className="stepTitle">{step.title}</h3>
                    <p className="stepCopy">{step.copy}</p>
                  </motion.article>
                ))}
              </div>
            </div>

            <p className="footNote">
              Prefer a deep dive? See{" "}
              <a href="/process" title="Learn how we build brands">
                how we build a brand end‑to‑end
              </a>
              .
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="section alt" aria-labelledby="why-us">
          <div className="container">
            <h2 id="why-us">Why Businesses Choose Us to Build Their Brand</h2>

            <div className="cards4">
              <motion.div className="valueCard" {...fadeUp(0)}>
                <CheckIcon />
                <p>Data‑driven research, not guesswork</p>
              </motion.div>
              <motion.div className="valueCard" {...fadeUp(0.05)}>
                <CheckIcon />
                <p>Tailored solutions for every size business</p>
              </motion.div>
              <motion.div className="valueCard" {...fadeUp(0.1)}>
                <CheckIcon />
                <p>
                  End‑to‑end execution — from strategy to design to delivery
                </p>
              </motion.div>
              <motion.div className="valueCard" {...fadeUp(0.15)}>
                <CheckIcon />
                <p>Consistent brand systems that scale</p>
              </motion.div>
            </div>

            <div className="teamVisual">
              <TeamSilhouette ariaLabel="Abstract illustration representing a professional branding team" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta" aria-labelledby="final-cta">
          <div className="container ctaWrap">
            <div>
              <h2 id="final-cta">
                Ready to Build a Brand That Customers Trust?
              </h2>
              <p>
                Whether you’re a startup or a global enterprise, our branding
                experts are ready to help you grow with a clear strategy and
                consistent execution.
              </p>
            </div>
            <div className="ctaActions">
              <a
                className="btnPrimary btnBlockOnMobile"
                href="/contact?topic=free-brand-strategy-call"
              >
                Book Your Free Strategy Call
              </a>
              <a className="btnGhost" href="/work">
                View Case Studies
              </a>
            </div>

            <div className="trustRow" aria-label="Trust markers">
              <span className="trustNote">
                Trusted by teams across SaaS, eCommerce, Healthcare, and B2B.
              </span>
              {/* Optionally add testimonial or logos here */}
            </div>
          </div>
        </section>
      </main>

      {/* Styles */}
      <style>{`
        :root {
          --navy: #0b1f3b;
          --gray-900: #0f172a;
          --gray-800: #1f2937;
          --gray-700: #334155;
          --gray-600: #475569;
          --gray-300: #cbd5e1;
          --gray-200: #e2e8f0;
          --white: #ffffff;
          --accent: #3b82f6; /* royal blue */
          --gold: #d4a017;
          --shadow-1: 0 8px 24px rgba(11, 31, 59, 0.25);
          --radius: 14px;
        }
        * { box-sizing: border-box; }
        body { margin: 0; color: var(--gray-900); font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }
        a { color: var(--accent); text-decoration: none; }
        a:hover { text-decoration: underline; }

        .srOnly {
          position: absolute !important;
          height: 1px; width: 1px;
          overflow: hidden; clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap; border: 0; padding: 0; margin: -1px;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .section { padding: 80px 0; background: var(--white); }
        .section.alt { background: #f8fafc; }
        .section h2 { font-size: 34px; line-height: 1.2; margin: 0 0 16px; color: var(--gray-900); letter-spacing: -0.01em; }
        .section p { color: var(--gray-700); font-size: 18px; line-height: 1.7; margin: 12px 0; }
        .inlineLinks { font-size: 16px; margin-top: 20px; color: var(--gray-600); }

        .grid2 { display: grid; grid-template-columns: 1.25fr 1fr; gap: 40px; align-items: center; }
        @media (max-width: 900px) {
          .grid2 { grid-template-columns: 1fr; }
        }

        /* Hero */
        .hero {
          position: relative;
          overflow: hidden;
          color: var(--white);
          background: linear-gradient(140deg, var(--navy) 0%, #334155 100%);
          padding: 120px 0 96px;
        }
        .heroGrid { position: relative; z-index: 1; max-width: 960px; }
        .hero h2 { font-size: 42px; line-height: 1.15; margin: 0 0 14px; letter-spacing: -0.02em; }
        .heroSub { font-size: 20px; line-height: 1.7; color: #e2e8f0; margin-bottom: 28px; }
        .heroCtas { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }

        .heroBackground { position: absolute; inset: 0; }
        .blob {
          position: absolute; width: 420px; height: 420px; filter: blur(60px); opacity: 0.4; border-radius: 50%;
          background: radial-gradient(closest-side, rgba(59,130,246,0.6), rgba(59,130,246,0) 70%);
        }
        .blobA { top: -80px; left: -120px; }
        .blobB { bottom: -120px; right: -100px; background: radial-gradient(closest-side, rgba(212,160,23,0.5), rgba(212,160,23,0) 70%); }
        .lineFlow {
          position: absolute; inset: 0;
          background-image: linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.0) 50%, rgba(255,255,255,0.06) 100%);
          background-size: 200% 100%;
          mix-blend-mode: overlay;
        }

        /* Buttons */
        .btnPrimary {
          display: inline-flex; align-items: center; justify-content: center;
          background: linear-gradient(180deg, var(--accent), #1d4ed8);
          color: white; border: none; border-radius: 12px;
          padding: 14px 20px; font-weight: 600; font-size: 16px; box-shadow: var(--shadow-1);
          transform: translateZ(0);
        }
        .btnPrimary:hover { filter: brightness(1.05); text-decoration: none; }
        .btnGhost {
          display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.35); color: #e2e8f0; padding: 12px 18px; border-radius: 10px;
          backdrop-filter: blur(4px);
        }
        .section .btnGhost { color: var(--gray-800); border-color: var(--gray-300); }
        .btnGhost:hover { background: rgba(255,255,255,0.08); text-decoration: none; }
        .btnBlockOnMobile { width: auto; }
        @media (max-width: 640px) {
          .btnBlockOnMobile { width: 100%; }
        }

        /* Cards for Approach */
        .cards3 {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 24px;
        }
        @media (max-width: 900px) {
          .cards3 { grid-template-columns: 1fr; }
        }
        .card {
          background: white; border: 1px solid var(--gray-200); border-radius: var(--radius);
          padding: 22px; box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .card h3 { font-size: 20px; margin: 8px 0 6px; color: var(--gray-900); }
        .cardIcon { width: 44px; height: 44px; border-radius: 10px; display: grid; place-items: center; background: #eef2ff; color: #1d4ed8; }

        /* Steps - horizontal scroll on mobile */
        .stepsWrap { margin-top: 18px; }
        .stepsScroll {
          display: grid; gap: 16px; grid-auto-flow: column; grid-auto-columns: minmax(260px, 1fr);
          overflow-x: auto; padding-bottom: 12px; scroll-snap-type: x mandatory;
        }
        .stepsScroll::-webkit-scrollbar { height: 8px; }
        .stepsScroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 999px; }
        @media (min-width: 900px) {
          .stepsScroll { grid-auto-flow: row; grid-template-columns: repeat(5, 1fr); overflow: visible; }
        }
        .stepCard {
          background: white; border: 1px solid var(--gray-200); border-radius: var(--radius);
          padding: 18px; scroll-snap-align: start; min-height: 200px; box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .stepHeader { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .stepBadge { width: 32px; height: 32px; border-radius: 8px; background: #eff6ff; color: #1d4ed8; display: grid; place-items: center; font-weight: 700; }
        .stepIcon svg { width: 26px; height: 26px; color: var(--accent); }
        .stepTitle { font-size: 18px; margin: 6px 0; color: var(--gray-900); }
        .stepCopy { font-size: 16px; color: var(--gray-700); line-height: 1.6; }

        /* Why Us values */
        .cards4 {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 16px;
        }
        @media (max-width: 900px) { .cards4 { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 560px) { .cards4 { grid-template-columns: 1fr; } }
        .valueCard {
          background: white; border: 1px solid var(--gray-200); border-radius: 12px; padding: 16px; display: flex; gap: 12px; align-items: flex-start;
        }
        .valueCard p { margin: 0; font-size: 16px; color: var(--gray-800); }

        .teamVisual { margin-top: 24px; display: grid; place-items: center; }
        .teamVisual svg { max-width: 680px; width: 100%; height: auto; }

        /* CTA */
        .cta { background: linear-gradient(180deg, #f8fafc, #eef2f7); }
        .ctaWrap { display: grid; grid-template-columns: 1.4fr 1fr; gap: 20px; align-items: center; }
        .ctaActions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: flex-end; }
        @media (max-width: 900px) {
          .ctaWrap { grid-template-columns: 1fr; }
          .ctaActions { justify-content: flex-start; }
        }
        .trustRow { margin-top: 18px; color: var(--gray-600); font-size: 14px; display: flex; align-items: center; gap: 12px; }
        .trustNote { padding-left: 8px; border-left: 3px solid var(--accent); }

        /* Illustration wrap */
        .illustrationWrap {
          border: 1px dashed var(--gray-300); border-radius: var(--radius); padding: 18px; background: white;
        }

        /* Reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .blob, .lineFlow { display: none !important; }
        }
      `}</style>
    </>
  );
}

/* --------- Icons & Illustrations (Accessible) --------- */

function IconSearch({ ariaLabel = "Search icon" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-3.2-3.2" />
    </svg>
  );
}

function IconCompass({ ariaLabel = "Compass icon" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2.5 6.5-6.5 2.5 2.5-6.5 6.5-2.5z" />
    </svg>
  );
}

function IconPalette({ ariaLabel = "Palette icon" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 3a9 9 0 1 0 0 18c2 0 3-1 3-2.5S13.5 16 13.5 15 15 13 16.5 13 19 11.5 19 10 17 3 12 3z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="9.5" cy="14.5" r="1" />
      <circle cx="12.5" cy="9.5" r="1" />
    </svg>
  );
}

function IconToolkit({ ariaLabel = "Toolkit icon" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M7 7V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2" />
    </svg>
  );
}

function IconChart({ ariaLabel = "Analytics chart icon" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M3 3v18h18" />
      <path d="M7 15l3-3 3 2 4-5" />
      <circle cx="7" cy="15" r="1" />
      <circle cx="10" cy="12" r="1" />
      <circle cx="13" cy="14" r="1" />
      <circle cx="17" cy="9" r="1" />
    </svg>
  );
}

function IconSeed({ ariaLabel = "Seedling icon" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 21v-8" />
      <path d="M7 11c0-3 2.5-5 5-5h1c0 2.8-2.2 5-5 5z" />
      <path d="M17 13c0-3-2.5-5-5-5h-1c0 2.8 2.2 5 5 5z" />
    </svg>
  );
}

function IconLayers({ ariaLabel = "Layered rectangles icon" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  );
}

function IconGlobal({ ariaLabel = "Globe icon" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18-3-3-3-15 0-18z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16a34a"
      strokeWidth="2"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function BrandSystemIllustration() {
  return (
    <svg
      role="img"
      aria-label="Abstract illustration representing a cohesive brand system across touchpoints"
      viewBox="0 0 640 360"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="1" stopColor="#0b1f3b" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="640" height="360" fill="#f8fafc" />
      <rect
        x="40"
        y="40"
        width="560"
        height="280"
        rx="14"
        fill="white"
        stroke="#e2e8f0"
      />
      <rect
        x="60"
        y="70"
        width="160"
        height="60"
        rx="10"
        fill="url(#g1)"
        stroke="#cbd5e1"
      />
      <rect
        x="240"
        y="70"
        width="160"
        height="60"
        rx="10"
        fill="url(#g1)"
        stroke="#cbd5e1"
      />
      <rect
        x="420"
        y="70"
        width="160"
        height="60"
        rx="10"
        fill="url(#g1)"
        stroke="#cbd5e1"
      />
      <rect
        x="60"
        y="150"
        width="520"
        height="40"
        rx="8"
        fill="#eef2ff"
        stroke="#cbd5e1"
      />
      <rect
        x="60"
        y="200"
        width="160"
        height="90"
        rx="10"
        fill="#fff7ed"
        stroke="#fcd34d"
      />
      <rect
        x="240"
        y="200"
        width="160"
        height="90"
        rx="10"
        fill="#eff6ff"
        stroke="#93c5fd"
      />
      <rect
        x="420"
        y="200"
        width="160"
        height="90"
        rx="10"
        fill="#ecfeff"
        stroke="#a5f3fc"
      />
      <circle cx="140" cy="245" r="14" fill="#f59e0b" />
      <circle cx="320" cy="245" r="14" fill="#3b82f6" />
      <circle cx="500" cy="245" r="14" fill="#06b6d4" />
    </svg>
  );
}

function TeamSilhouette({ ariaLabel = "Abstract team silhouettes" }) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 680 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="teamG" x1="0" x2="1">
          <stop offset="0" stopColor="#3b82f6" stopOpacity="0.25" />
          <stop offset="1" stopColor="#0b1f3b" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="680" height="180" rx="16" fill="url(#teamG)" />
      <g fill="#ffffff" opacity="0.9">
        <circle cx="120" cy="80" r="24" />
        <rect x="95" y="110" width="50" height="40" rx="10" />
        <circle cx="220" cy="75" r="26" />
        <rect x="192" y="110" width="56" height="40" rx="10" />
        <circle cx="320" cy="85" r="28" />
        <rect x="290" y="118" width="60" height="42" rx="10" />
        <circle cx="420" cy="78" r="25" />
        <rect x="395" y="110" width="50" height="40" rx="10" />
        <circle cx="520" cy="82" r="27" />
        <rect x="494" y="116" width="54" height="42" rx="10" />
      </g>
    </svg>
  );
}
