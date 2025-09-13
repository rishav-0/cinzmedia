import React, { useEffect, useRef } from "react";
import { motion, animate, useMotionValue, useInView } from "framer-motion";
import { useNavigate } from "react-router";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeInOnScroll = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Counter component
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

// Growth Chart Component
const GrowthChart = ({ data, color, delay = 0 }) => {
  const chartRef = useRef(null);
  const inView = useInView(chartRef, { once: true });

  return (
    <div ref={chartRef} className="relative h-32 sm:h-40 w-full mt-4">
      <svg
        className="w-full h-full"
        viewBox="0 0 300 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id={`gradient-${color}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" className={`${color}-stop-1`} stopOpacity="0.3" />
            <stop offset="100%" className={`${color}-stop-2`} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line
            key={y}
            x1="0"
            y1={120 - y * 1.2}
            x2="300"
            y2={120 - y * 1.2}
            stroke="currentColor"
            strokeOpacity="0.1"
            className="text-slate-400"
          />
        ))}

        {/* Area under curve */}
        <motion.path
          d={`M0,120 ${data
            .map(
              (point, i) =>
                `L${i * (300 / (data.length - 1))},${120 - point * 1.2}`
            )
            .join(" ")} L300,120 Z`}
          fill={`url(#gradient-${color})`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        />

        {/* Main line */}
        <motion.path
          d={`M0,${120 - data[0] * 1.2} ${data
            .slice(1)
            .map(
              (point, i) =>
                `L${(i + 1) * (300 / (data.length - 1))},${120 - point * 1.2}`
            )
            .join(" ")}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={color}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />

        {/* Data points */}
        {data.map((point, i) => (
          <motion.circle
            key={i}
            cx={i * (300 / (data.length - 1))}
            cy={120 - point * 1.2}
            r="3"
            fill="currentColor"
            className={color}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: delay + i * 0.1 }}
          />
        ))}
      </svg>

      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-400 -ml-8 sm:-ml-10">
        <span>100%</span>
        <span>50%</span>
        <span>0%</span>
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-slate-400 mt-2">
        <span className="translate-y-4">Jan</span>
        <span className="translate-y-4">Mar</span>
        <span className="translate-y-4">Jun</span>
      </div>
    </div>
  );
};

// Animated Hero Graphic Component - Mobile Optimized
const HeroGraphic = () => (
  <motion.div
    className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Network of connected nodes */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Animated connections */}
      <motion.path
        d="M100 100 L200 150 L300 100"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.path
        d="M100 200 L200 150 L300 200"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          delay: 0.5,
        }}
      />
      <motion.path
        d="M100 300 L200 250 L300 300"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
          delay: 1,
        }}
      />

      {/* Animated nodes */}
      {[
        { x: 100, y: 100, delay: 0 },
        { x: 200, y: 150, delay: 0.2 },
        { x: 300, y: 100, delay: 0.4 },
        { x: 100, y: 200, delay: 0.6 },
        { x: 300, y: 200, delay: 0.8 },
        { x: 100, y: 300, delay: 1 },
        { x: 200, y: 250, delay: 1.2 },
        { x: 300, y: 300, delay: 1.4 },
      ].map((node, idx) => (
        <motion.g key={idx}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill="#3B82F6"
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: node.delay,
            }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="20"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            opacity="0.3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.3, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: node.delay,
            }}
          />
        </motion.g>
      ))}

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={`particle-${i}`}
          r="2"
          fill="#06B6D4"
          initial={{ x: 50 + i * 70, y: 350 }}
          animate={{
            x: 50 + i * 70 + Math.random() * 30 - 15,
            y: [350, 50, 350],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </svg>

    {/* Central metrics display */}
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-slate-700/50">
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-[10px] sm:text-xs text-slate-400">
            Live Analytics
          </span>
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <motion.div
            className="flex justify-between items-center gap-4 sm:gap-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-[10px] sm:text-xs text-slate-400">
              Conversion
            </span>
            <span className="text-xs sm:text-sm font-bold text-cyan-400">
              +47%
            </span>
          </motion.div>
          <motion.div
            className="flex justify-between items-center gap-4 sm:gap-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-[10px] sm:text-xs text-slate-400">
              Traffic
            </span>
            <span className="text-xs sm:text-sm font-bold text-blue-400">
              +124%
            </span>
          </motion.div>
          <motion.div
            className="flex justify-between items-center gap-4 sm:gap-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-[10px] sm:text-xs text-slate-400">
              Revenue
            </span>
            <span className="text-xs sm:text-sm font-bold text-green-400">
              +89%
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Improved Icons with better sizing
const IconSEO = ({ className = "w-5 h-5 sm:w-6 sm:h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    <path
      d="m20 20-3.5-3.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconSocial = ({ className = "w-5 h-5 sm:w-6 sm:h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPPC = ({ className = "w-5 h-5 sm:w-6 sm:h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect
      x="3"
      y="3"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 9h18M7 21v-4M17 21v-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 9v8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconContent = ({ className = "w-5 h-5 sm:w-6 sm:h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconEmail = ({ className = "w-5 h-5 sm:w-6 sm:h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="m22 7-10 5L2 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconAI = ({ className = "w-5 h-5 sm:w-6 sm:h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Add CSS classes for gradient stops
const gradientStyles = `
  <style>
    .text-blue-500-stop-1 { stop-color: #3B82F6; }
    .text-blue-500-stop-2 { stop-color: #3B82F6; }
    .text-purple-500-stop-1 { stop-color: #A855F7; }
    .text-purple-500-stop-2 { stop-color: #A855F7; }
    .text-green-500-stop-1 { stop-color: #10B981; }
    .text-green-500-stop-2 { stop-color: #10B981; }
  </style>
`;

export default function Digitalmarketing() {

  const navigate = useNavigate();

  const services = [
    {
      title: "SEO Optimization",
      desc: "Advanced technical SEO, content strategy, and AI-powered keyword research to boost organic rankings.",
      Icon: IconSEO,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media Marketing",
      desc: "Strategic content creation and community management that converts followers into loyal customers.",
      Icon: IconSocial,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "PPC Campaigns",
      desc: "Data-driven Google & Meta Ads with AI optimization to maximize ROI and reduce acquisition costs.",
      Icon: IconPPC,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Content Marketing",
      desc: "Compelling storytelling and SEO-optimized content that drives engagement and conversions.",
      Icon: IconContent,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Email Automation",
      desc: "Personalized email campaigns and automated workflows that nurture leads and boost retention.",
      Icon: IconEmail,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "AI Analytics",
      desc: "Real-time insights and predictive analytics to make data-driven marketing decisions.",
      Icon: IconAI,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const processSteps = [
    { step: "Research", detail: "Market analysis and competitor insights" },
    { step: "Strategy", detail: "Data-driven planning and positioning" },
    { step: "Create", detail: "Premium content and campaign design" },
    { step: "Launch", detail: "Execute and optimize in real-time" },
    { step: "Scale", detail: "Measure results and expand success" },
  ];

  return (
    <div className="bg-gradient-to-b min-h-screen from-slate-950 via-slate-900 to-slate-950">
      <div dangerouslySetInnerHTML={{ __html: gradientStyles }} />
      <main className=" mx-auto max-w-7xl  overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center py-12 sm:py-16 lg:py-0">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />
            <motion.div
              className="absolute top-1/4 -left-12 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-12 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 25, repeat: Infinity }}
            />
          </div>

          <div className="relative z-10 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left content */}
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="order-2 lg:order-1"
                >
                  <motion.div
                    variants={fadeUp}
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6"
                  >
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm text-blue-400">
                      AI-Powered Marketing
                    </span>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                  >
                    Digital Marketing That{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Drives Growth
                    </span>
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 leading-relaxed"
                  >
                    Transform your online presence with data-driven strategies
                    and AI-powered insights. We help businesses scale with
                    proven digital marketing solutions.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                  >
                    <motion.button
                      onClick={() =>
                        navigate("/", { state: { scrollTo: "contact" } })
                      }
                      className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm sm:text-base hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-blue-500/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Free Marketing Audit
                    </motion.button>
                    <motion.a
                      href="#services"
                      className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-slate-800 text-white font-semibold text-sm sm:text-base hover:bg-slate-700 transition-all duration-200 border border-slate-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Services
                    </motion.a>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6"
                  >
                    {[
                      { label: "Clients", value: "500+" },
                      { label: "ROI Average", value: "312%" },
                      { label: "Team Experts", value: "50+" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-lg sm:text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right animated graphic */}
                <motion.div
                  className="order-1 lg:order-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <HeroGraphic />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-10 sm:mb-16"
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
              >
                Our Digital Marketing Services
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4"
              >
                Comprehensive solutions powered by AI and data analytics to
                accelerate your business growth
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInOnScroll}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all duration-300" />

                    <div className="relative z-10">
                      <div
                        className={`inline-flex p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} bg-opacity-10 mb-3 sm:mb-4`}
                      >
                        <service.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                        {service.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-10 sm:mb-16"
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
              >
                Our Proven Process
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4"
              >
                A systematic approach to deliver consistent results
              </motion.p>
            </motion.div>

            <motion.div
              className="relative"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Connection line - hidden on mobile */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    variants={fadeInOnScroll}
                    className="relative"
                  >
                    <div className="bg-slate-800/50 backdrop-blur-sm h-full border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs sm:text-sm">
                          {idx + 1}
                        </span>
                        <h3 className="font-semibold text-white text-sm sm:text-base">
                          {step.step}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section with Charts */}
        <section className="py-16 sm:py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-10 sm:mb-16"
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
              >
                Proven Results & Case Studies
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4"
              >
                Real success stories from businesses we've helped grow
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Case Study Cards with Charts */}
              {[
                {
                  title: "E-commerce SEO Success",
                  desc: "Increased organic traffic by 312% in 6 months through technical optimization and content strategy",
                  stats: [
                    { label: "Traffic", value: 312, suffix: "%" },
                    { label: "Revenue", value: 218, suffix: "%" },
                    { label: "Keywords", value: 1240, suffix: "+" },
                  ],
                  color: "from-blue-600 to-cyan-600",
                  chartColor: "text-blue-500",
                  chartData: [20, 25, 35, 45, 60, 75, 85, 95, 100],
                },
                {
                  title: "SaaS PPC Campaign",
                  desc: "Reduced cost per acquisition by 65% while scaling conversions through AI-powered bidding",
                  stats: [
                    { label: "CPA", value: -65, suffix: "%" },
                    { label: "Conversions", value: 420, suffix: "%" },
                    { label: "ROAS", value: 4.8, suffix: "x" },
                  ],
                  color: "from-purple-600 to-pink-600",
                  chartColor: "text-purple-500",
                  chartData: [15, 30, 45, 55, 70, 80, 90, 95, 100],
                },
                {
                  title: "Social Media Growth",
                  desc: "Built engaged community of 50K+ followers with 8.2% engagement rate",
                  stats: [
                    { label: "Followers", value: 50, suffix: "K+" },
                    { label: "Engagement", value: 8.2, suffix: "%" },
                    { label: "Leads", value: 350, suffix: "/mo" },
                  ],
                  color: "from-orange-600 to-red-600",
                  chartColor: "text-green-500",
                  chartData: [10, 20, 30, 50, 65, 75, 85, 92, 100],
                },
              ].map((study, index) => (
                <motion.div
                  key={study.title}
                  variants={fadeInOnScroll}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  {/* Gradient header */}
                  <div
                    className={`h-1.5 sm:h-2 bg-gradient-to-r ${study.color}`}
                  />

                  <div className="p-5 sm:p-6 lg:p-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mb-4 sm:mb-6 leading-relaxed">
                      {study.desc}
                    </p>

                    {/* Growth Chart */}
                    <div className="mb-4 sm:mb-6">
                      <GrowthChart
                        data={study.chartData}
                        color={study.chartColor}
                        delay={index * 0.2}
                      />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {study.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                            <Counter
                              to={Math.abs(stat.value)}
                              prefix={stat.value < 0 ? "-" : "+"}
                              suffix={stat.suffix}
                            />
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust badges */}
            {/* <motion.div
              className="mt-8 sm:mt-12 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-xs sm:text-sm text-slate-400 mb-4">
                Trusted by Leading Brands
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-50">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-20 sm:w-24 h-8 sm:h-10 bg-slate-700/30 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </motion.div> */}
          </div>
        </section>

        {/* CTA Section */}
        <section id="book-call" className="py-16 sm:py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-6 sm:p-8 lg:p-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
              <div className="absolute -top-24 -right-24 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Ready to Scale Your Business?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 px-4">
                  Get a free marketing audit and discover untapped growth
                  opportunities
                </p>
                <motion.button
                  onClick={() =>
                    navigate("/", { state: { scrollTo: "contact" } })
                  }
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-blue-600 font-semibold text-sm sm:text-base lg:text-lg hover:bg-slate-100 transition-all duration-200 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Free Strategy Call
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
