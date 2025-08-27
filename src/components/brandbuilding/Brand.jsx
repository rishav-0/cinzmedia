
import { motion } from "framer-motion";
import {
  FaChevronRight,
  FaRocket,
  FaGlobe,
  FaSearch,
  FaCompass,
  FaPalette,
  FaChartBar,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaBullseye,
  FaLayerGroup,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const Brand = () => {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-slate-800 to-gray-700 text-white">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-indigo-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.h1
            {...fadeInUp}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
          >
            We Build Brands That Win Trust and Drive Growth
          </motion.h1>

          <motion.p
            {...fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl"
          >
            From strategy to execution, we create brands for startups, SMBs, and
            enterprises — tailored to scale.
          </motion.p>

          <motion.button
            {...scaleIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center gap-2"
          >
            Get Your Free Brand Strategy Call
            <FaChevronRight className="w-5 h-5" />
          </motion.button>
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
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <FaShieldAlt className="w-10 h-10 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900">
                      Trust Builder
                    </h4>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <FaChartLine className="w-10 h-10 text-indigo-600 mb-3" />
                    <h4 className="font-semibold text-gray-900">
                      Growth Driver
                    </h4>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <FaUsers className="w-10 h-10 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-gray-900">
                      Talent Magnet
                    </h4>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <FaBullseye className="w-10 h-10 text-pink-600 mb-3" />
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
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FaRocket className="w-6 h-6 text-white" />
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
                  <FaChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Clear market positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Memorable visual identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Agile brand foundation</span>
                </li>
              </ul>
            </motion.div>

            {/* Mid-sized */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100"
            >
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FaLayerGroup className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mid-Sized Companies
              </h3>
              <p className="text-gray-700 mb-6">
                We refine your existing identity, align teams, and implement
                brand systems to support expansion.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Brand system optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Cross-team alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Scalable guidelines</span>
                </li>
              </ul>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-8 border border-gray-200"
            >
              <div className="bg-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <FaGlobe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Enterprises & Corporates
              </h3>
              <p className="text-gray-700 mb-6">
                We ensure your brand stays consistent across regions, product
                lines, and thousands of touchpoints.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <FaChevronRight className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span>Global brand governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaChevronRight className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span>Multi-market adaptation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaChevronRight className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span>Enterprise-wide adoption</span>
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
                icon: FaSearch,
                number: "01",
                title: "Research & Audit",
                description:
                  "We analyze your market, competitors, and audience to define opportunities.",
                color: "blue",
              },
              {
                icon: FaCompass,
                number: "02",
                title: "Strategy & Positioning",
                description:
                  "We identify your unique value and craft a clear brand direction.",
                color: "indigo",
              },
              {
                icon: FaPalette,
                number: "03",
                title: "Identity Design",
                description:
                  "From logo to colors to messaging, we design a brand that communicates clearly.",
                color: "purple",
              },
              {
                icon: FaRocket,
                number: "04",
                title: "Implementation",
                description:
                  "We create guidelines and assets to roll out your brand consistently.",
                color: "pink",
              },
              {
                icon: FaChartBar,
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
                    className={`bg-${step.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className={`w-10 h-10 text-${step.color}-600`} />
                  </div>
                  <div className="flex-grow">
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
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
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
      <section className="py-20 bg-gradient-to-br from-navy-900 to-slate-800 text-white">
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

          <motion.button
            onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            Book Your Free Strategy Call
            <FaChevronRight className="w-5 h-5" />
          </motion.button>

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
