import { motion } from "framer-motion";
import { FaPaintBrush, FaChartLine, FaSmile } from "react-icons/fa";
import { Highlighter } from "../components/Highlighter";
import { CoolMode } from "../components/CoolMode";
// import { IconCloudDemo } from "../components/IconCloud";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold  text-gray-900 mb-4 leading-tight">
            <span className="text-2xl ">About Cinzmedia </span>
            <br /> Your <span className="mr-2"></span>
            <Highlighter
              action="underline"
              color="#e62715"
              strokeWidth={2}
              padding={5}
              loopDelay={2000}
            >
              Creative
              <span className="mr-2"> </span>
            </Highlighter>
            Digital <span className="mr-2"></span>
            <Highlighter
              action="highlight"
              color="#2776f5b9"
              strokeWidth={1.5}
              loopDelay={2000}
            >
              Marketing Agency
            </Highlighter>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering brands with innovative design, impactful storytelling,
            and data-driven marketing strategies since 2019.
          </p>
        </motion.div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 -1">
              Founded in 2009, Cinzmedia is a
              <strong className="mx-1">
                full-service creative and digital marketing agency
              </strong>
              built on one belief – every brand deserves a story worth telling.
              From a small creative studio with big dreams, we’ve grown into a
              trusted partner for startups, SMEs, and global brands.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over 6 years of expertise in
              <strong className="ml-1">website design & development</strong>,
              <strong className="mx-1">branding</strong>, and
              <strong className="mx-1">social media marketing,</strong> we
              combine creative excellence with data-driven strategies to deliver
              results that not only look great but perform exceptionally in the
              digital landscape.
            </p>

            {/* Feature Badges with Icons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <FaPaintBrush className="text-blue-600" />
                <span className="text-blue-600 font-semibold">
                  Creative Excellence
                </span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                <FaChartLine className="text-purple-600" />
                <span className="text-purple-600 font-semibold">
                  Data-Driven Results
                </span>
              </div>
              <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
                <FaSmile className="text-pink-600" />
                <span className="text-pink-600 font-semibold">
                  Client Success
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <CoolMode>
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Work With Us
            </motion.a>
              </CoolMode>
          </motion.div>

          {/* Image/Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             {/* <IconCloudDemo /> */}
            {/* Optional decorative gradient shape */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-100 via-transparent to-purple-100 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
