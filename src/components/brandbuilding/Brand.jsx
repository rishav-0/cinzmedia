import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Rocket,
  Globe,
  Search,
  Compass,
  Palette,
  BarChart2,
  Users,
  Shield,
  TrendingUp,
  Target,
  Layers,
} from "lucide-react";
import { useNavigate } from "react-router";
import Button from "../button";
import { scrollToSection } from "../../utils/scrollToSection";

const Brand = () => {
  useEffect(() => {
    document.title = "Brand Building Services | Cinzmedia";
  }, []);

  const navigate = useNavigate();
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta would go in the head - using React Helmet or Next.js Head */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
  {/* Background Decorative Elements */}
  <div className="pointer-events-none absolute inset-0">
    {/* SVG Dots Pattern */}
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dots-pattern"
          x="0"
          y="0"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.6" cy="1.6" r="1.6" fill="rgb(15 23 42 / 0.10)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots-pattern)" />
    </svg>

    {/* Animated Blur Orbs */}
    <motion.div
      aria-hidden="true"
      animate={{
        x: [0, 28, 0],
        y: [0, -24, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className="absolute -left-56 -top-56 h-[520px] w-[520px] rounded-full bg-[#2675f4]/10 blur-3xl"
    />

    <motion.div
      aria-hidden="true"
      animate={{
        x: [0, -26, 0],
        y: [0, 22, 0],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute -bottom-56 -right-56 h-[560px] w-[560px] rounded-full bg-indigo-600/10 blur-3xl"
    />

    {/* Concentric Circles */}
    <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full border border-slate-200/70" />
    <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full border border-slate-200/40" />
  </div>

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
    <div className="grid items-center gap-12 lg:grid-cols-12">
      
      {/* LEFT COLUMN: Copy & CTAs */}
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-[#2675f4]" />
          Digital systems built for dominance
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.06 }}
          className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
        >
          We build brands that <span className="relative whitespace-nowrap">
            <span className="relative z-10 text-[#2675f4]">win trust</span>
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute inset-x-0 bottom-1 -z-0 h-3 origin-left rounded-full bg-[#2675f4]/15"
            />
          </span>
          , sharpen positioning, and drive growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14 }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          From strategy to execution, we help startups and enterprises launch a 
          cohesive digital ecosystem—web, app, and brand—designed to convert attention into revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button 
             onClick={() => scrollToSection("contact")}
             className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold bg-[#e7a800] text-slate-950 hover:brightness-95 transition shadow-sm"
          >
            Get free strategy plan
          </button>
          <button 
             onClick={() => scrollToSection("services")}
             className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition"
          >
            Explore services
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="mt-10"
        >
          <div className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Specializing in
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Web Dev', 'App Dev', 'Branding', 'Video Editing', 'Marketing'].map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: The Visual Dashboard */}
      <div className="lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative"
        >
          {/* Floating Feature Chip 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-3 top-8 hidden rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-lg ring-1 ring-slate-200 sm:block z-20"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Impact: +250% Sales Growth
            </div>
          </motion.div>

          {/* Floating Feature Chip 2 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-10 hidden rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-lg ring-1 ring-slate-200 sm:block z-20"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2675f4]" />
              Conversion lift: +28%
            </div>
          </motion.div>

          {/* Main Visual Card */}
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase">Strategy Engine</div>
                <div className="mt-1 text-lg font-bold text-slate-950">Project Readiness</div>
              </div>
              <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Live</div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { l: 'Trust Score', v: '98/100' },
                { l: 'Clarity', v: 'High' },
                { l: 'Consistency', v: '99%' },
                { l: 'Performance', v: 'Top 1%' }
              ].map((s) => (
                <div key={s.l} className="flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3 ring-1 ring-slate-100">
                   <span className="text-[10px] font-bold text-slate-500 uppercase">{s.l}</span>
                   <span className="text-sm font-bold text-slate-950">{s.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-slate-600 uppercase">Brand Momentum</div>
                <div className="text-xs font-semibold text-emerald-600">Scaling</div>
              </div>

              {/* Bar Chart Visual */}
              <div className="flex items-end gap-1 h-20">
                {[40, 55, 45, 70, 62, 78, 66, 84, 76, 88, 82, 96].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                    className={`flex-1 rounded-t-sm ${i > 8 ? 'bg-[#2675f4]' : 'bg-slate-300'}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="text-[10px] text-slate-500 font-medium">Deliverables: Web, App, Brand Identity</div>
              <button className="text-xs font-bold text-[#2675f4] hover:underline">View Roadmap</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* Why Brand Building Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Strong Brand is More Than a Logo — It's Your Business
                Advantage
              </h2>

              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Your brand is the sum of every perception, trust signal, and
                  experience your customers have with your business. It's what
                  makes people choose you over competitors, even when prices are
                  similar.
                </p>
                <p>
                  Strong brands don't just attract customers — they attract top
                  talent, secure better partnerships, and command investor
                  confidence. They create emotional connections that turn buyers
                  into advocates.
                </p>
                <p>
                  Without a strategic brand foundation, businesses struggle with
                  inconsistent messaging, higher marketing costs, and slower
                  growth. Every touchpoint becomes a missed opportunity to build
                  trust and recognition.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <Shield className="w-10 h-10 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900">
                      Trust Builder
                    </h4>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <TrendingUp className="w-10 h-10 text-indigo-600 mb-3" />
                    <h4 className="font-semibold text-gray-900">
                      Growth Driver
                    </h4>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <Users className="w-10 h-10 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-gray-900">
                      Talent Magnet
                    </h4>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <Target className="w-10 h-10 text-pink-600 mb-3" />
                    <h4 className="font-semibold text-gray-900">
                      Market Leader
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tailored Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Tailored Branding Strategy for Every Stage of Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're launching your first product or managing a global
              portfolio, we adapt our approach to your specific needs and goals.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Startups */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Startups & Small Businesses
              </h3>
              <p className="text-gray-700 mb-6">
                We help you stand out early, define your voice, and create
                cost-effective branding that grows with you.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>Clear market positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>Memorable visual identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span>Agile brand foundation</span>
                </li>
              </ul>
            </motion.div>

            {/* Mid-sized */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
            >
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mid-Sized Companies
              </h3>
              <p className="text-gray-700 mb-6">
                We refine your identity, align teams, and implement brand
                systems that support measurable growth.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                  <span>Brand system optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                  <span>Cross-team alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                  <span>Scalable guidelines</span>
                </li>
              </ul>
            </motion.div>

            {/* Agencies & Partners (replaces Enterprise) */}
            <motion.div
              variants={fadeInUp}
              className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-cyan-100"
            >
              <div className="bg-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Agencies & Partners
              </h3>
              <p className="text-gray-700 mb-6">
                We collaborate with agencies and product teams — white-label
                support, creative partnerships, and overflow capacity.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <span>White-label design & production</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <span>Dedicated partner workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <span>Flexible resourcing for peaks</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven 5-Step Brand Building Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building brands that deliver measurable
              business results.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Search,
                number: "01",
                title: "Research & Audit",
                description:
                  "We analyze your market, competitors, and audience to define opportunities.",
                color: "blue",
              },
              {
                icon: Compass,
                number: "02",
                title: "Strategy & Positioning",
                description:
                  "We identify your unique value and craft a clear brand direction.",
                color: "indigo",
              },
              {
                icon: Palette,
                number: "03",
                title: "Identity Design",
                description:
                  "From logo to colors to messaging, we design a brand that communicates clearly.",
                color: "purple",
              },
              {
                icon: Rocket,
                number: "04",
                title: "Implementation",
                description:
                  "We create guidelines and assets to roll out your brand consistently.",
                color: "pink",
              },
              {
                icon: BarChart2,
                number: "05",
                title: "Monitoring & Optimization",
                description:
                  "We measure performance and keep your brand evolving.",
                color: "gray",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8 flex items-center gap-8">
                  <div
                    className={`bg-${step.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center shrink-0`}
                  >
                    <step.icon className={`w-10 h-10 text-${step.color}-600`} />
                  </div>
                  <div className="grow">
                    <div className="flex items-baseline gap-4 mb-2">
                      <span
                        className={`text-${step.color}-600 font-bold text-sm`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Us to Build Their Brand
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              "Data-driven research, not guesswork",
              "Tailored solutions for every size business",
              "End-to-end execution — from strategy to design to delivery",
              "Consistent brand systems that scale",
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-800 font-medium">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-indigo-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Build a Brand That Customers Trust?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Whether you're a startup or a global enterprise, our branding
            experts are ready to help you grow.
          </motion.p>
          <Button
            text={"Get free strategy plan"}
            onClick={() => scrollToSection("contact")}
            className={"bg-[#e7a800]  text-lg"}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-gray-400"
          >
            Trusted by industry leaders across technology, healthcare, finance,
            and retail sectors
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Brand;
