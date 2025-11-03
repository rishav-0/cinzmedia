import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Share2,
  Rocket,
  Clapperboard,
  Sparkles,
  PenTool,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";



const services = [
  {
    id: "web-dev",
    name: "Web Development",
    description: "High-performing, SEO-ready websites.",
    detail:
      "We architect responsive, SEO-first websites and web apps that convert, using modern stacks and clean UI patterns.",
    icon: Code2,
  },
  {
    id: "social-media",
    name: "Social Media Marketing",
    description: "Build communities that engage.",
    detail:
      "From content calendars to creative assets, we optimize your presence across social platforms for reach and engagement.",
    icon: Share2,
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description: "Performance-driven growth.",
    detail:
      "Data-led campaigns across search, social, and email to maximize ROI while keeping your brand voice consistent.",
    icon: Rocket,
  },
  {
    id: "video-editing",
    name: "Video Editing",
    description: "Story-first motion content.",
    detail:
      "Cinematic edits, reels, and explainers tailored for attention and retention across channels.",
    icon: Clapperboard,
  },
  {
    id: "brand-building",
    name: "Brand Building",
    description: "Position, voice, and presence.",
    detail:
      "We shape bold identities, tone of voice, and experience principles that make your brand memorable.",
    icon: Sparkles,
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    description: "Elegant, purposeful visuals.",
    detail:
      "Marketing visuals, social assets, and UI elements that stay on brand and on trend.",
    icon: PenTool,
  },
];

const projects = [
  {
    id: "p1",
    title: "Evolve Landing Redesign",
    category: "Web",
    summary: "Conversion-focused marketing site for a SaaS startup.",
  },
  {
    id: "p2",
    title: "Social Growth Sprint",
    category: "Marketing",
    summary: "Instagram & TikTok creative system for a lifestyle label.",
  },
  {
    id: "p3",
    title: "Brand System for Nova",
    category: "Branding",
    summary: "Pastel-forward visual identity and motion snippets.",
  },
  {
    id: "p4",
    title: "Product Teaser Video Pack",
    category: "Video",
    summary: "Short-form launch clips and platform-native edits.",
  },
  {
    id: "p5",
    title: "Brand Graphics Suite",
    category: "Graphic",
    summary:
      "Social templates, thumbnails, and marketing visuals crafted for a cohesive brand presence.",
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {

  const  navigate = useNavigate();
  const [activeServiceId, setActiveServiceId] = useState(
    services[0]?.id ?? "web-dev"
  );

  // Metadata moved to index.html for better SEO (static HTML)
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");

  const activeService =
    services.find((s) => s.id === activeServiceId) ?? services[0];

  const filteredProjects = projects.filter((project) => {
    if (activeProjectFilter === "All") return true;
    return project.category === activeProjectFilter;
  });

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-white via-sky-50 to-indigo-50 text-gray-900">
        {/* Hero Section */}
        <motion.section
          id="hero"
          variants={sectionVariant}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 md:pb-20"
        >
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 bg-white/60 border border-white/80 rounded-full px-3 py-1 text-xs text-gray-600 w-max shadow-sm">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-400"
                  aria-hidden
                />
                Cinzmedia • Web • Branding • Campaigns
              </p>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                  Transforming Ideas into Digital Masterpieces
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
                  We craft websites, brands, and campaigns that inspire and
                  perform. Minimal, futuristic and conversion-first digital
                  experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white font-medium px-6 py-3 text-sm shadow-sm hover:bg-indigo-700 transition-colors"
                >
                  Explore My Work
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center gap-2 rounded-full bg-white/60 text-gray-900 font-medium px-6 py-3 text-sm border border-white/80 hover:bg-white transition-colors"
                >
                  Let’s Build Together
                </button>
              </div>
              <div className="flex gap-6 items-center pt-2">
                <div>
                  <p className="text-2xl font-semibold text-gray-900">120+</p>
                  <p className="text-xs text-gray-500">Projects shipped</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-900">5.0</p>
                  <p className="text-xs text-gray-500">Client rating</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-gray-900">8+</p>
                  <p className="text-xs text-gray-500">Years crafting</p>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative bg-white/70 border border-white/80 rounded-3xl p-6 md:p-7 shadow-sm">
                <p className="text-xs font-medium text-gray-500 tracking-wide uppercase mb-4">
                  Capabilities Snapshot
                </p>
                <div className="grid  sm:grid-cols-2 gap-4">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.id}
                        className="flex gap-3 items-start bg-indigo-50/50 rounded-2xl p-3"
                      >
                        <div className="flex items-center justify-center rounded-full bg-white text-indigo-600 min-w-10 min-h-10 shadow-sm">
                          <Icon size="22" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {service.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex items-center gap-3 bg-indigo-600/10 rounded-2xl p-3">
                  <div className="bg-white/90 rounded-full p-2 text-indigo-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Full-service creative studio
                    </p>
                    <p className="text-xs text-gray-600">
                      Strategy, design, build, and launch in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                Selected Projects
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mt-2">
                Crafted to inspire and perform
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-2xl">
                A snapshot of web, campaign, and brand assets that blend utility
                with aesthetics.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Web", "Marketing", "Branding", "Video", "Graphic"].map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveProjectFilter(filter)}
                    className={
                      "px-4 py-1.5 rounded-full text-sm transition border " +
                      (activeProjectFilter === filter
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white/40 text-gray-700 border-white/60 hover:bg-white")
                    }
                  >
                    {filter}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white/80 border border-white/70 rounded-2xl p-5 flex flex-col gap-4 shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <div className="rounded-xl overflow-hidden bg-gray-50">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full capitalize">
                    {project.category} project
                  </span>
                  <span>Premium creative build</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-2">
                  <p>UX Strategy • UI Design • Launch Ready</p>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                What we do
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mt-2">
                Services to elevate your digital presence
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-2xl">
                From pixel-perfect interfaces to growth-ready campaigns, I bring
                clarity and craft to every stage of your brand journey.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              View selected work
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Services grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = service.id === activeServiceId;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={
                      "group flex flex-col items-start gap-3 bg-white/70 border rounded-2xl p-5 text-left transition shadow-sm hover:shadow-md focus:outline-none " +
                      (isActive
                        ? "border-indigo-200 ring-1 ring-indigo-100"
                        : "border-white/80")
                    }
                    aria-pressed={isActive}
                  >
                    <span
                      className={
                        "inline-flex items-center justify-center rounded-full w-10 h-10 transition " +
                        (isActive
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100")
                      }
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 flex items-center gap-2">
                        {service.name}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {service.description}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1 text-xs text-indigo-600 group-hover:gap-2 transition-all">
                      Discover more
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                );
              })}
            </div>
            {/* Details panel */}
            <div className="bg-white/80 border border-white/70 rounded-2xl p-5 md:p-6 flex flex-col gap-4 h-full">
              <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                Service insight
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                {activeService.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {activeService.detail}
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                  SEO-friendly
                </li>
                <li className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                  Responsive
                </li>
                <li className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                  Modern UX
                </li>
              </ul>
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 mt-2"
              >
                See related projects
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          <div className="bg-white/70 border border-white/80 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Ready to make something iconic?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Let’s align your brand, website, and campaigns under one
                aesthetic system.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  navigate("/", { state: { scrollTo: "contact" } })
                }
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white font-medium px-5 py-2.5 text-sm hover:bg-indigo-700 transition"
              >
                Book a slot
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:cinzmedia@outlook.com"
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 font-medium px-5 py-2.5 text-sm border border-gray-200 hover:bg-gray-50 transition"
              >
                Email us
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
