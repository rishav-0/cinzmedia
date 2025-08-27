import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";


const services = [
  {
    key: "logo",
    title: "Logo Design",
    description:
      "Custom logo design that's strategic, versatile, and instantly recognizable.",
    icon: "🎨",
    colors: ["#3B82F6", "#1E40AF", "#60A5FA"],
    bullets: [
      "Discovery & brand strategy workshop",
      "Sketch exploration and concept refinement",
      "Final master logo + responsive variants + monochrome set",
    ],
  },
  {
    key: "identity",
    title: "Brand Identity",
    description:
      "Cohesive visual identity systems that build strong brand recall.",
    icon: "🎭",
    colors: ["#EF4444", "#DC2626", "#F87171"],
    bullets: [
      "Typography pairing & color palette",
      "Iconography & graphic language",
      "Brand guidelines for consistency",
    ],
  },
  {
    key: "collateral",
    title: "Brand Collateral",
    description:
      "Beautiful, on-brand assets for print and digital touchpoints.",
    icon: "📄",
    colors: ["#10B981", "#059669", "#34D399"],
    bullets: [
      "Business cards, letterheads, and stationery",
      "Pitch decks & presentation templates",
      "Posters, brochures, and event materials",
    ],
  },
  {
    key: "digital",
    title: "Digital Assets",
    description: "Pixel-perfect creatives for social, web, and campaigns.",
    icon: "💻",
    colors: ["#8B5CF6", "#7C3AED", "#A78BFA"],
    bullets: [
      "Social media kits & ad creatives",
      "Website hero graphics & illustrations",
      "Email templates & banners",
    ],
  },
  {
    key: "packaging",
    title: "Packaging Design",
    description:
      "Premium packaging that stands out on the shelf and on screen.",
    icon: "📦",
    colors: ["#F59E0B", "#D97706", "#FCD34D"],
    bullets: [
      "Structural dielines & mockups",
      "Material & finish recommendations",
      "Regulatory & production-ready files",
    ],
  },
  {
    key: "illustration",
    title: "Custom Illustrations",
    description:
      "Hand-crafted illustrations that bring your brand story to life.",
    icon: "✏️",
    colors: ["#EC4899", "#DB2777", "#F472B6"],
    bullets: [
      "Character design & mascot creation",
      "Editorial & marketing illustrations",
      "Icon sets & infographic elements",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Strategic Design Approach",
    description:
      "Every design decision is backed by research and brand strategy to ensure maximum impact.",
    icon: "🎯",
  },
  {
    title: "Fast Turnaround Time",
    description:
      "Get your designs delivered quickly without compromising on quality or creativity.",
    icon: "⚡",
  },
  {
    title: "Unlimited Revisions",
    description:
      "We work with you until you're 100% satisfied with the final design outcome.",
    icon: "🔄",
  },
  {
    title: "Industry Expertise",
    description:
      "Years of experience across various industries and design disciplines.",
    icon: "🏆",
  },
];

const colorPalettes = [
  {
    name: "Ocean Breeze",
    colors: ["#0EA5E9", "#0284C7", "#0369A1", "#075985"],
  },
  { name: "Sunset Glow", colors: ["#F97316", "#EA580C", "#DC2626", "#B91C1C"] },
  { name: "Forest Deep", colors: ["#059669", "#047857", "#065F46", "#064E3B"] },
  {
    name: "Royal Purple",
    colors: ["#8B5CF6", "#7C3AED", "#6D28D9", "#5B21B6"],
  },
  { name: "Golden Hour", colors: ["#F59E0B", "#D97706", "#B45309", "#92400E"] },
  { name: "Rose Garden", colors: ["#EC4899", "#DB2777", "#BE185D", "#9D174D"] },
];

export default function GraphicDetail() {
  const [openModal, setOpenModal] = useState(false);
  const [openService, setOpenService] = useState(null);

  // Smooth hero parallax
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Smooth mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 30 });
  const sy = useSpring(my, { stiffness: 200, damping: 30 });
  const smallX = useTransform(sx, [-1, 1], [-12, 12]);
  const smallY = useTransform(sy, [-1, 1], [-12, 12]);
  const medX = useTransform(sx, [-1, 1], [-20, 20]);
  const medY = useTransform(sy, [-1, 1], [-20, 20]);
  const bigX = useTransform(sx, [-1, 1], [-30, 30]);
  const bigY = useTransform(sy, [-1, 1], [-30, 30]);

  const onMouseMoveHero = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = (e.clientX - cx) / (rect.width / 2);
    const ny = (e.clientY - cy) / (rect.height / 2);
    mx.set(Math.max(-1, Math.min(1, nx * 0.5)));
    my.set(Math.max(-1, Math.min(1, ny * 0.5)));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <>
      
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased overflow-x-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Floating shapes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-20 ${
                i % 4 === 0
                  ? "bg-blue-500"
                  : i % 4 === 1
                  ? "bg-purple-500"
                  : i % 4 === 2
                  ? "bg-pink-500"
                  : "bg-orange-500"
              }`}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Gradient orbs */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-pink-400 to-orange-600 opacity-10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.1, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* HERO SECTION */}
        <header ref={heroRef} className="relative overflow-hidden">
          <div
            className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32"
            onMouseMove={onMouseMoveHero}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Professional Graphic Design Services to Build a Strong Brand
                  Identity.
                </motion.h1>
                <motion.h2
                  className="mt-6 text-lg sm:text-xl text-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Creative visuals that communicate, connect, and convert — we
                  design brands that people remember.
                </motion.h2>
                <motion.div
                  className="mt-8 flex flex-wrap items-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <button
                    onClick={() => setOpenModal(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-50"
                    aria-label="Get a Free Design Consultation"
                  >
                    Get a Free Design Consultation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M13.5 4.5a.75.75 0 0 0 0 1.5h5.69l-7.72 7.72a.75.75 0 1 0 1.06 1.06l7.72-7.72v5.69a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75h-9z" />
                    </svg>
                  </button>
                  <a
                    href="#services"
                    className="inline-flex items-center rounded-full px-5 py-3 font-semibold text-gray-900 ring-1 ring-gray-300 transition hover:bg-gray-100"
                  >
                    View Services
                  </a>
                </motion.div>
              </div>

              {/* Animated collage with parallax */}
              <div className="relative h-96">
                {/* Guideline board */}
                <motion.div
                  className="absolute right-0 top-6 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100"
                  style={{ x: bigX, y: bigY }}
                >
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 rounded bg-gray-200" />
                    <div className="flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      <span className="h-2 w-2 rounded-full bg-gray-200" />
                      <span className="h-2 w-2 rounded-full bg-gray-200" />
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">
                        Logo Grid
                      </div>
                      <div
                        role="img"
                        aria-label="custom logo design mockup"
                        title="custom logo design mockup"
                        className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl w-16 h-16 mt-2"
                      />
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">
                        Palette
                      </div>
                      <div className="mt-2 flex gap-2">
                        <span className="h-6 w-6 rounded bg-blue-600" />
                        <span className="h-6 w-6 rounded bg-gray-900" />
                        <span className="h-6 w-6 rounded bg-gray-200" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">
                        Typography
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="h-2 w-20 rounded bg-gray-200" />
                        <div className="h-2 w-16 rounded bg-gray-200" />
                        <div className="h-2 w-14 rounded bg-gray-200" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">
                        Icon Set
                      </div>
                      <div
                        role="img"
                        aria-label="branding guideline layout"
                        title="branding guideline layout"
                        className="bg-gradient-to-tr from-blue-400 to-blue-600 rounded-xl w-16 h-16 mt-2"
                      />
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">
                        Lockups
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="h-3 w-24 rounded bg-gray-200" />
                        <div className="h-3 w-16 rounded bg-gray-200" />
                        <div className="h-3 w-20 rounded bg-gray-200" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">
                        Applications
                      </div>
                      <div
                        role="img"
                        aria-label="brand application mockup"
                        title="brand application mockup"
                        className="bg-gradient-to-tr from-blue-400 to-blue-600 rounded-xl w-16 h-16 mt-2"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Floating sketch card */}
                <motion.div
                  className="absolute -left-2 bottom-10 w-56 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-100 rotate-3"
                  style={{ x: medX, y: medY }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-14 rounded bg-gray-200" />
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      role="img"
                      aria-label="logo sketch concept"
                      title="logo sketch concept"
                      className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl w-16 h-16 border-2 border-dashed"
                    />
                    <div className="space-y-2">
                      <div className="h-2 w-24 rounded bg-gray-200" />
                      <div className="h-2 w-20 rounded bg-gray-200" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating packaging mock */}
                <motion.div
                  className="absolute right-12 bottom-0 w-48 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-100 -rotate-3"
                  style={{ x: smallX, y: smallY }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="h-2 w-16 rounded bg-gray-200" />
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      role="img"
                      aria-label="premium packaging mockup"
                      title="premium packaging mockup"
                      className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl w-16 h-16 border-2 border-dashed"
                    />
                    <div className="space-y-2">
                      <div className="h-2 w-20 rounded bg-gray-200" />
                      <div className="h-2 w-16 rounded bg-gray-200" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll cue */}
            <div className="mt-16 flex justify-center">
              <a
                href="#services"
                className="group inline-flex flex-col items-center text-gray-600"
              >
                <span className="text-sm">Scroll to explore</span>
                <motion.span
                  className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-300 group-hover:bg-gray-100"
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 16a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L12 13.59l4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5A1 1 0 0 1 12 16z" />
                  </svg>
                </motion.span>
              </a>
            </div>
          </div>
        </header>

        {/* SERVICES SECTION */}
        <section id="services" className="relative py-24 md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-6 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-10 blur-2xl" />
            <div className="absolute right-8 bottom-10 h-48 w-48 rounded-full bg-gradient-to-tr from-gray-900 to-blue-600 opacity-5 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <header className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Services
              </p>
              <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Design capabilities for every brand touchpoint
              </h3>
              <p className="mt-3 text-gray-700 max-w-3xl">
                From foundational logos and identity systems to
                conversion-focused campaign assets, we deliver design that feels
                crafted and consistent.
              </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc, i) => (
                <motion.article
                  key={svc.key}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  custom={i}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      {svc.icon}
                    </span>
                    <h4 className="text-xl font-semibold tracking-tight text-gray-900">
                      {svc.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-gray-700">{svc.description}</p>

                  {/* Process: Sketch -> Digital -> Final */}
                  <div className="mt-5">
                    <div className="text-sm font-medium text-gray-900">
                      Process
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div
                          role="img"
                          aria-label="logo sketch step"
                          title="logo sketch step"
                          className="mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl w-16 h-16 border-2 border-dashed"
                        />
                        <div className="mt-2 text-xs text-gray-600">Sketch</div>
                      </div>
                      <div className="text-center">
                        <div
                          role="img"
                          aria-label="digital design step"
                          title="digital design step"
                          className="mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl w-16 h-16 border-2 border-dashed"
                        />
                        <div className="mt-2 text-xs text-gray-600">
                          Digital
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          role="img"
                          aria-label="final design presentation"
                          title="final design presentation"
                          className="mx-auto bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl w-16 h-16 border-2 border-dashed"
                        />
                        <div className="mt-2 text-xs text-gray-600">Final</div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div className="mt-5">
                    <button
                      onClick={() =>
                        setOpenService((s) => (s === svc.key ? null : svc.key))
                      }
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white rounded"
                      aria-expanded={openService === svc.key}
                      aria-controls={`svc-${svc.key}`}
                    >
                      {openService === svc.key
                        ? "Hide details"
                        : "View details"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M12 15a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L12 12.59l4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5A1 1 0 0 1 12 15z" />
                      </svg>
                    </button>
                    {openService === svc.key && (
                      <ul
                        id={`svc-${svc.key}`}
                        className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700"
                      >
                        {svc.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Color palette artistic vibe */}
                  <div
                    className="mt-6 flex gap-2"
                    aria-label={`${svc.title} color palette`}
                  >
                    {svc.colors.map((color) => (
                      <span
                        key={color}
                        className="block rounded-full w-6 h-6"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Decorative brush/shape */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 opacity-10 blur-2xl"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION (replaces testimonials) */}
        <section className="relative py-24 md:py-28 bg-white">
          <div className="relative max-w-7xl mx-auto px-6">
            <header className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Why Choose Us
              </p>
              <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Expert Design Services You Can Trust
              </h3>
              <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
                We combine creativity, strategy, and experience to deliver
                designs that elevate your brand and drive results.
              </p>
            </header>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map(({ title, description, icon }) => (
                <article
                  key={title}
                  className="flex flex-col items-center text-center"
                >
                  <span className="text-4xl mb-4" aria-hidden="true">
                    {icon}
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {title}
                  </h4>
                  <p className="mt-2 text-gray-700 max-w-xs">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / CTA SECTION with color palettes */}
        <section className="relative overflow-hidden bg-gray-900 py-24 md:py-28 text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-600 to-gray-800 opacity-25 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Ready to Transform Your Brand’s Look?
                </h3>
                <p className="mt-4 text-gray-300">
                  Let’s craft a visual identity that earns trust and drives
                  results.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Let’s Start Designing"
                  >
                    Let’s Start Designing
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M13.5 4.5a.75.75 0 0 0 0 1.5h5.69l-7.72 7.72a.75.75 0 1 0 1.06 1.06l7.72-7.72v5.69a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75h-9z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Color palettes display */}
              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                  Color Palettes
                </p>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {colorPalettes.map(({ name, colors }) => (
                    <div key={name} className="space-y-2">
                      <div className="flex gap-1">
                        {colors.map((color) => (
                          <span
                            key={color}
                            className="block rounded w-6 h-6"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-blue-300">{name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
