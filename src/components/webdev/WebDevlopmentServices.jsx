import { useEffect, useMemo, useRef, useState } from "react";
import gpt from '../../images/icon/gpt.png'
import perlexity from '../../images/icon/perplexity.png'
import figma from '../../images/icon/figma.png'
import react from "../../images/icon/react.png";
import deepseek from "../../images/icon/deepseek.png";
import copilot from "../../images/icon/copilot.png";
import { motion } from "framer-motion";

// Interactive holographic showcase (custom, not from any UI library)
function HoloShowcase({ className = "" }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState(
    "rotateX(0deg) rotateY(0deg) scale(1)"
  );
  const [shadow, setShadow] = useState("0px 12px 24px rgba(0,0,0,0.35)");

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rotateMax = 10;
    const rotateY = (px - 0.5) * (rotateMax * 2);
    const rotateX = (0.5 - py) * (rotateMax * 2);

    const shadowX = (px - 0.5) * 16;
    const shadowY = (py - 0.5) * 16;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
    setShadow(`${-shadowX}px ${-shadowY}px 36px rgba(0,0,0,0.35)`);
  };

  const handleLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale(1)");
    setShadow("0px 12px 24px rgba(0,0,0,0.35)");
  };

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl"
        style={{
          transform,
          transition: "transform 150ms ease",
          boxShadow: shadow,
          transformStyle: "preserve-3d",
        }}
        aria-label="Interactive web development hologram"
      >
        {/* Animated scanning line */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
          animate={{ y: [0, 160, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ mixBlendMode: "screen" }}
        />

        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            borderRadius: "1rem",
          }}
        />

        {/* Floating glows */}
        <motion.div
          className="pointer-events-none absolute -top-8 -left-8 h-24 w-24 rounded-full bg-indigo-500/30 blur-2xl"
          animate={{ x: [0, 8, -6, 0], y: [0, -6, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(20px)" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan-400/30 blur-2xl"
          animate={{ x: [0, -10, 6, 0], y: [0, 8, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(10px)" }}
        />

        {/* Content layers */}
        <div className="relative z-10 grid gap-4">
          <div
            className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4"
            style={{ transform: "translateZ(36px)" }}
          >
            <p className="text-xs uppercase tracking-wide text-indigo-300">
              Hologram Preview
            </p>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <div className="h-16 rounded-lg bg-gradient-to-b flex justify-around items-center px-4 from-slate-800 to-slate-900 ring-1 ring-white/5">
                <img src={gpt} className="opacity-45 invert" alt="chat gpt" />
                <img
                  src={perlexity}
                  className="opacity-45 invert"
                  alt="perplexity"
                />
              </div>
              <div className="h-16 rounded-lg bg-gradient-to-b flex justify-around items-center px-4 from-slate-800 to-slate-900 ring-1 ring-white/5">
                <img src={figma} className="opacity-45 invert" alt="figma" />
                <img src={react} className="opacity-45 invert" alt="react" />
              </div>
              <div className="h-16 rounded-lg bg-gradient-to-b flex justify-around items-center px-4 from-slate-800 to-slate-900 ring-1 ring-white/5">
                <img src={copilot} className="opacity-45 invert" alt="copilot" />
                <img
                  src={deepseek}
                  className="opacity-45 invert"
                  alt="deepseek"
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-3"
            style={{ transform: "translateZ(28px)" }}
          >
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
              Next.js
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
              Core Web Vitals
            </span>
            <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
              SEO
            </span>
          </div>

          <div
            className="rounded-xl bg-slate-900/70 p-4 ring-1 ring-white/5"
            style={{ transform: "translateZ(20px)" }}
          >
            <pre className="overflow-hidden text-ellipsis whitespace-pre-wrap text-xs leading-relaxed text-slate-300">{`// Optimized, SEO-first builds\nexport async function ship() {\n  return optimize({ images: true, scripts: true, cache: true });\n} // 95+ CWV`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative rounded-2xl border border-slate-700/40 bg-slate-900/50 p-6 shadow-sm ring-1 ring-white/5 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />
      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-indigo-500/10 blur-xl transition group-hover:bg-indigo-400/10" />
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl ring-1 ring-white/10">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-slate-300">{desc}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-slate-300 ring-1 ring-white/10">
          A11y
        </span>
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-slate-300 ring-1 ring-white/10">
          Security
        </span>
        <span className="rounded-full bg-white/5 px-2.5 py-1 text-slate-300 ring-1 ring-white/10">
          Analytics
        </span>
      </div>
    </motion.article>
  );
}

function WorkCard({ client, summary, metrics, tags, year }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      layout
      className="rounded-2xl border border-slate-700/40 bg-slate-900/50 p-6 ring-1 ring-white/5 transition hover:ring-indigo-500/30"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="md:pt-1">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-white">{client}</h3>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
              {year}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-300">{summary}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {metrics.map((m) => (
              <span
                key={m}
                className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20"
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-500/30 transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {open ? "Hide details" : "View case study"}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Get similar results
            </a>
          </div>
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 grid gap-3 rounded-xl border border-slate-700/40 bg-slate-950/50 p-4">
              <p className="text-sm text-slate-300">
                Delivered a blazing-fast, SEO-optimized experience with
                accessible UI and a scalable content model. Implemented edge
                caching, image optimization, and clean schema markup.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-300">
                <li>Architecture: Next.js, ISR, CDN cache</li>
                <li>Performance: 95+ Core Web Vitals, 1.9s LCP</li>
                <li>SEO: JSON-LD, sitemaps, semantic routing</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export default function WebDevelopmentServices() {
  const services = useMemo(
    () => [
      {
        icon: "🧩",
        title: "Custom Websites",
        desc: "Conversion-focused React/Next.js builds with clean IA and brand-first UX.",
      },
      {
        icon: "⚡",
        title: "Performance First",
        desc: "Core Web Vitals optimization for speed, stability, and accessibility.",
      },
      {
        icon: "🔍",
        title: "Technical SEO",
        desc: "Schema, sitemaps, clean URLs, and scalable content architecture.",
      },
      {
        icon: "🛍️",
        title: "CMS & Commerce",
        desc: "Headless CMS and modern storefronts that are easy to manage.",
      },
    ],
    []
  );

  const works = useMemo(
    () => [
      {
        client: "Aurora Health",
        summary:
          "Replatformed to Next.js and headless CMS; integrated performance budgets and analytics-powered UX decisions.",
        metrics: ["+168% organic", "1.9s LCP", "98 Accessibility"],
        tags: ["Next.js", "Headless CMS", "ISR"],
        year: "2024",
      },
      {
        client: "Nimbus SaaS",
        summary:
          "Marketing site and docs overhaul with technical SEO, schema markup, and scalable content modeling.",
        metrics: ["+122% sign-ups", "98 Lighthouse", "<100ms TTI island"],
        tags: ["Edge", "Analytics", "Schema"],
        year: "2023",
      },
      {
        client: "Evergreen Commerce",
        summary:
          "Headless storefront with lightning-fast product pages and improved crawl efficiency.",
        metrics: ["+64% revenue", "<1s TTFB", "+37% CR"],
        tags: ["Commerce", "CDN", "Image Opt"],
        year: "2024",
      },
    ],
    []
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "Your Digital Marketing Agency",
      url: "https://example.com/web-development",
    },
    areaServed: "Global",
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    description:
      "SEO-friendly, high-performance web development services for growth-focused brands. We build Next.js websites optimized for conversions and Core Web Vitals.",
  };

  // Hero fade-up animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.08 * i, ease: "easeOut" },
    }),
  };

  return (
    <>
      <div className="">
        <title>
          Web Development Services | Conversion-Focused, SEO-Friendly Websites
        </title>
        <meta
          name="description"
          content="We build lightning-fast, SEO-friendly websites that convert. Next.js, React, headless CMS, Core Web Vitals optimization, and technical SEO for digital growth."
        />
        <link rel="canonical" href="https://example.com/web-development" />
        <meta
          property="og:title"
          content="Web Development Services | Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="High-performance, SEO-first web development with Next.js, Core Web Vitals, and technical SEO. Built to convert."
        />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>

      <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        {/* Background animated orbs */}
        <div className="pointer-events-none relative">
          <motion.div
            className="absolute left-0 top-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl"
            animate={{ x: [0, 16, -8, 0], y: [0, -12, 6, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute right-0 top-20 h-48 w-48 rounded-full bg-cyan-500/20 blur-2xl"
            animate={{ x: [0, -12, 10, 0], y: [0, 8, -10, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </div>

        {/* Hero Section */}
        <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          {/* Subtle radial glow behind hero */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
                Digital Marketing Agency — Web Development
              </span>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
                className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
              >
                <span className="bg-gradient-to-r from-indigo-300 via-cyan-200 to-white bg-clip-text text-transparent">
                  SEO‑friendly Web Development
                </span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
                className="mt-3 max-w-2xl text-base text-slate-300 md:text-lg"
              >
                We design and develop high-performance websites with Next.js and
                React—optimized for Core Web Vitals, technical SEO, and
                measurable conversions. From strategy and UX to build and
                launch, we craft sites that rank, load fast, and scale.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
                className="mt-6 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-500/30 transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  View Best Work
                </a>
                <button
                  className="inline-flex items-center justify-center rounded-lg bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  onClick={() => {
                    const el = document.getElementById("services");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Services
                </button>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
                className="mt-6 flex items-center gap-4 text-sm text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span>95+ Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  <span>SEO-first Architecture</span>
                </div>
              </motion.div>
            </div>

            <HoloShowcase className="order-first lg:order-none" />
          </div>
        </section>

        {/* Services with redesigned card style and scroll reveal */}
        <section
          id="services"
          className="mx-auto max-w-7xl px-6 pb-16 md:pb-24"
        >
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Web Development Services
          </h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            End-to-end web development engineered for organic growth,
            performance, and ROI.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                desc={s.desc}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* Minimal but larger Best Work Section with more detail */}
        <section id="work" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Our Best Work
              </h2>
              <p className="mt-2 text-slate-300">
                A quick look at recent results we shipped.
              </p>
            </div>
            <a
              href="#services"
              className="hidden rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 sm:inline-flex"
            >
              Back to Services
            </a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {works.map((w) => (
              <WorkCard
                key={w.client}
                client={w.client}
                summary={w.summary}
                metrics={w.metrics}
                tags={w.tags}
                year={w.year}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
