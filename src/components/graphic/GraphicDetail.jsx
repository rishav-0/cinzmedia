import Head from "next/head";
import { useEffect, useRef, useState, MouseEvent } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";



const services = [
  {
    key: "logo",
    title: "Logo Design",
    description:
      "Custom logo design that’s strategic, versatile, and instantly recognizable.",
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
    bullets: [
      "Business cards, letterheads, and stationery",
      "Pitch decks & presentation templates",
      "Posters, brochures, and event materials",
    ],
  },
  {
    key: "digital",
    title: "Digital Assets",
    description:
      "Pixel-perfect creatives for social, web, and campaigns.",
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
    bullets: [
      "Structural dielines & mockups",
      "Material & finish recommendations",
      "Regulatory & production-ready files",
    ],
  },
];

const testimonials = [
  {
    quote:
      "They transformed our brand from generic to unforgettable. Our new identity elevated every touchpoint.",
    name: "Ava Thompson",
    role: "VP Marketing",
    company: "Northway Labs",
  },
  {
    quote:
      "The logo system is beautifully flexible. We finally have guidelines our whole team can follow.",
    name: "Liam Rodriguez",
    role: "Founder",
    company: "Harvest & Co.",
  },
  {
    quote:
      "From sketches to final assets, the process was smooth and strategic. Results exceeded expectations.",
    name: "Maya Chen",
    role: "Brand Manager",
    company: "Blue Harbor",
  },
];

export default function GraphicDetail() {
  // Modal state for consultation CTA
  const [openModal, setOpenModal] = useState(false);
  // Testimonial carousel
  const [tIndex, setTIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  // Hero parallax & mouse micro-parallax
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, 64]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const smallX = useTransform(sx, [-1, 1], [-8, 8]);
  const smallY = useTransform(sy, [-1, 1], [-8, 8]);
  const medX = useTransform(sx, [-1, 1], [-16, 16]);
  const medY = useTransform(sy, [-1, 1], [-16, 16]);
  const bigX = useTransform(sx, [-1, 1], [-24, 24]);
  const bigY = useTransform(sy, [-1, 1], [-24, 24]);

  const onMouseMoveHero = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = (e.clientX - cx) / (rect.width / 2);
    const ny = (e.clientY - cy) / (rect.height / 2);
    mx.set(Math.max(-1, Math.min(1, nx)));
    my.set(Math.max(-1, Math.min(1, ny)));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)", scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { delay: 0.05 * i, duration: 0.5, ease: "easeOut" },
    }),
  } 

  const [openService, setOpenService] = useState(null);

  return (
    <>
      <Head>
        <title>Professional Graphic Design Services | Premium Brand Identity</title>
        <meta
          name="description"
          content="Professional Graphic Design Services to Build a Strong Brand Identity. We create logos, brand identities, collateral, digital assets, and packaging that connect and convert."
        />
      </Head>
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {/* HERO */}
        <section ref={heroRef} className="relative overflow-hidden">
          {/* Background artistic gradients */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-30 blur-3xl"
            style={{ y: heroParallaxY }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 opacity-20 blur-3xl"
            style={{ y: heroParallaxY }}
          />
          <div
            className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32"
            onMouseMove={onMouseMoveHero}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Professional Graphic Design Services to Build a Strong Brand Identity.
                </h1>
                <h2 className="mt-6 text-lg sm:text-xl text-gray-700">
                  Creative visuals that communicate, connect, and convert — we design brands that people remember.
                </h2>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-50"
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
                </div>
              </div>

              {/* Animated collage */}
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
                      <div className="text-xs font-medium text-gray-600">Logo Grid</div>
                      <div
                        role="img"
                        aria-label="custom logo design mockup"
                        title="custom logo design mockup"
                        className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mt-2"
                      />
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">Palette</div>
                      <div className="mt-2 flex gap-2">
                        <span className="h-6 w-6 rounded bg-blue-600" />
                        <span className="h-6 w-6 rounded bg-gray-900" />
                        <span className="h-6 w-6 rounded bg-gray-200" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">Typography</div>
                      <div className="mt-2 space-y-1">
                        <div className="h-2 w-20 rounded bg-gray-200" />
                        <div className="h-2 w-16 rounded bg-gray-200" />
                        <div className="h-2 w-14 rounded bg-gray-200" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">Icon Set</div>
                      <div
                        role="img"
                        aria-label="branding guideline layout"
                        title="branding guideline layout"
                        className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mt-2"
                      />
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">Lockups</div>
                      <div className="mt-2 space-y-2">
                        <div className="h-3 w-24 rounded bg-gray-200" />
                        <div className="h-3 w-16 rounded bg-gray-200" />
                        <div className="h-3 w-20 rounded bg-gray-200" />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="text-xs font-medium text-gray-600">Applications</div>
                      <div
                        role="img"
                        aria-label="brand application mockup"
                        title="brand application mockup"
                        className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mt-2"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Floating sketch card */}
                <motion.div
                  className="absolute -left-2 bottom-10 w-56 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-100 rotate-3"
                  style={{ x: medX, y: medY }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
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
                      className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
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
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-2 w-16 rounded bg-gray-200" />
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      role="img"
                      aria-label="premium packaging mockup"
                      title="premium packaging mockup"
                      className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
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
              <a href="#services" className="group inline-flex flex-col items-center text-gray-600">
                <span className="text-sm">Scroll to explore</span>
                <motion.span
                  className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-300 group-hover:bg-gray-100"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 16a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L12 13.59l4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5A1 1 0 0 1 12 16z" />
                  </svg>
                </motion.span>
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="relative py-24 md:py-28">
          {/* Subtle background art */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-6 top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-10 blur-2xl" />
            <div className="absolute right-8 bottom-10 h-48 w-48 rounded-full bg-gradient-to-tr from-gray-900 to-blue-600 opacity-5 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <header className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Services</p>
              <h3 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Design capabilities for every brand touchpoint
              </h3>
              <p className="mt-3 text-gray-700 max-w-3xl">
                From foundational logos and identity systems to conversion-focused campaign assets, we deliver design that feels crafted and consistent.
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
                  <div className="flex items-start justify-between">
                    <h4 className="text-xl font-semibold tracking-tight text-gray-900">{svc.title}</h4>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Premium</span>
                  </div>
                  <p className="mt-2 text-gray-700">{svc.description}</p>

                  {/* Process: Sketch -> Digital -> Final */}
                  <div className="mt-5">
                    <div className="text-sm font-medium text-gray-900">Process</div>
                    <div className="mt-3 grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div
                          role="img"
                          aria-label="logo sketch step"
                          title="logo sketch step"
                          className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
                        />
                        <div className="mt-2 text-xs text-gray-600">Sketch</div>
                      </div>
                      <div className="text-center">
                        <div
                          role="img"
                          aria-label="digital design step"
                          title="digital design step"
                          className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
                        />
                        <div className="mt-2 text-xs text-gray-600">Digital</div>
                      </div>
                      <div className="text-center">
                        <div
                          role="img"
                          aria-label="final design presentation"
                          title="final design presentation"
                          className="mx-auto bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
                        />
                        <div className="mt-2 text-xs text-gray-600">Final</div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div className="mt-5">
                    <button
                      onClick={() => setOpenService((s) => (s === svc.key ? null : svc.key))}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white rounded"
                      aria-expanded={openService === svc.key}
                      aria-controls={`svc-${svc.key}`}
                    >
                      {openService === svc.key ? "Hide details" : "View details"}
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
                      <ul id={`svc-${svc.key}`} className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                        {svc.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Decorative brush/shape */}
                  <div aria-hidden="true" className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 opacity-10 blur-2xl" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST & TESTIMONIALS */}
        <section className="relative py-24 md:py-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 mx-auto h-24 w-11/12 rounded-full bg-gradient-to-r from-blue-600 to-gray-900 opacity-5 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Client logos */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Trusted by teams</p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">Brands that trust our design</h3>
                <p className="mt-3 text-gray-700">We partner with ambitious startups and established organizations to bring their brands to life.</p>
                <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="flex h-20 items-center justify-center rounded-xl bg-white ring-1 ring-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <div
                        role="img"
                        aria-label={"client logo placeholder " + (idx + 1)}
                        title={"client logo placeholder " + (idx + 1)}
                        className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Awards badges */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-700">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 ring-1 ring-gray-200">
                    <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.39 4.84 5.34.78-3.86 3.76.91 5.32L12 14.77 6.22 16.7l.91-5.32L3.27 7.62l5.34-.78L12 2z"/></svg>
                    AIGA Award 2024
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 ring-1 ring-gray-200">
                    <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.39 4.84 5.34.78-3.86 3.76.91 5.32L12 14.77 6.22 16.7l.91-5.32L3.27 7.62l5.34-.78L12 2z"/></svg>
                    Behance Featured
                  </span>
                </div>
              </div>

              {/* Testimonials carousel */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Testimonials</p>
                <div className="mt-4 min-h-[8rem]">
                  {testimonials.map((t, i) => (
                    <motion.blockquote
                      key={t.name}
                      className="text-lg text-gray-900"
                      initial={{ opacity: 0, y: 10, position: "absolute" }}
                      animate={i === tIndex ? { opacity: 1, y: 0, position: "relative" } : { opacity: 0, y: -10, position: "absolute" }}
                      transition={{ duration: 0.4 }}
                    >
                      “{t.quote}”
                      <footer className="mt-4 text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">{t.name}</span> — {t.role}, {t.company}
                      </footer>
                    </motion.blockquote>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setTIndex(i)}
                        aria-label={`Show testimonial ${i + 1}`}
                        className={`h-2 w-6 rounded-full ${i === tIndex ? "bg-blue-600" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                      className="rounded-full ring-1 ring-gray-300 px-3 py-1 text-sm font-semibold hover:bg-gray-100"
                      aria-label="Previous testimonial"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setTIndex((i) => (i + 1) % testimonials.length)}
                      className="rounded-full ring-1 ring-gray-300 px-3 py-1 text-sm font-semibold hover:bg-gray-100"
                      aria-label="Next testimonial"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gray-900 py-24 md:py-28 text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 opacity-20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-600 to-gray-800 opacity-25 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready to Transform Your Brand’s Look?</h3>
                <p className="mt-4 text-gray-300">Let’s craft a visual identity that earns trust and drives results.</p>
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

              {/* Trust badges / mini grid again for reinforcement */}
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">Proven results</p>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-white">250+</div>
                    <div className="mt-1 text-xs text-gray-300">Brands launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-white">98%</div>
                    <div className="mt-1 text-xs text-gray-300">Client satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-white">20+</div>
                    <div className="mt-1 text-xs text-gray-300">Industry awards</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex h-16 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                      <div
                        role="img"
                        aria-label={"award or partner badge " + (i + 1)}
                        title={"award or partner badge " + (i + 1)}
                        className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">Your Design Studio</span>
              <span>— Crafted identities since 2014</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#services" className="hover:text-gray-900">Services</a>
              <button onClick={() => setOpenModal(true)} className="hover:text-gray-900">Contact</button>
            </div>
          </div>
        </footer>

        {/* CONSULTATION MODAL */}
        {openModal && (
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-gray-900/60" onClick={() => setOpenModal(false)} />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Free Design Consultation</h4>
                  <p className="mt-1 text-sm text-gray-600">Tell us about your brand and goals. We’ll follow up within 1 business day.</p>
                </div>
                <button
                  onClick={() => setOpenModal(false)}
                  aria-label="Close modal"
                  className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M6.225 4.811L4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811z"/></svg>
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpenModal(false);
                  alert("Thank you! We'll be in touch shortly.");
                }}
                className="mt-6 space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input id="email" type="email" name="email" required className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700">Project details</label>
                  <textarea id="details" name="details" rows={4} className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600 px-3 py-2" placeholder="Tell us about your brand, goals, and timeline" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">We respect your inbox. No spam — ever.</p>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-white font-semibold shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                    Send Request
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M13.5 4.5a.75.75 0 0 0 0 1.5h5.69l-7.72 7.72a.75.75 0 1 0 1.06 1.06l7.72-7.72v5.69a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75h-9z"/></svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}
