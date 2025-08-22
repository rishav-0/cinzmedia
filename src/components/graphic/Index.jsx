"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../3dCard";
import Ballpit from "../Ballpit";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subServices = [
  {
    title: "Custom Logo Design That Defines Your Brand",
    text: "A logo is more than just a mark — it’s the face of your brand. We design unique, scalable, and versatile logos that instantly communicate who you are.",
    image: "/images/logo-design-process.jpg",
    link: "#",
  },
  {
    title: "Complete Brand Identity Systems",
    text: "We create typography, color palettes, icons, and brand guidelines to keep your communication consistent.",
    image: "/images/brand-guidelines.jpg",
    link: "#",
  },
  {
    title: "Brochures, Flyers, Posters, and More",
    text: "Our team crafts brochures, flyers, and decks that combine creativity with clarity to drive results.",
    image: "/images/marketing-materials.jpg",
    link: "#",
  },
  {
    title: "Social Media Graphics and Online Assets",
    text: "We ensure your brand looks professional and consistent across Instagram, YouTube, and more.",
    image: "/images/social-media-assets.jpg",
    link: "#",
  },
  {
    title: "Product Packaging That Pops",
    text: "We design functional, visually appealing packaging aligned with your brand story.",
    image: "/images/packaging-design.jpg",
    link: "#",
  },
];

export default function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // run once on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
        {/* Background */}
        {!isMobile ? ( // Ballpit only on desktop
          <div id="bubble" className="absolute inset-0 z-0">
            <Ballpit
              count={40}
              gravity={0.01}
              friction={0.9975}
              wallBounce={0.95}
              maxSize={.70}
              followCursor={true}
              colors={["#3B82F6", "#60A5FA", "#9333EA", "#C084FC"]}
            />
          </div>
        ) : (
          <>
            <motion.div
              className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{ x: [0, 120, 0], y: [0, -60, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.div
              className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
              animate={{ x: [0, -120, 0], y: [0, 60, 0] }}
              transition={{ repeat: Infinity, duration: 7 }}
            />
          </>
        )}

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Professional Graphic Design Services
            </span>
            <br />
            to Build a{" "}
            <span className="text-blue-700">Strong Brand Identity</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            Creative Designs That{" "}
            <span className="text-purple-600">Communicate</span>,{" "}
            <span className="text-blue-600">Connect</span>, and{" "}
            <span className="text-purple-600">Convert</span>
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-600 mb-10"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            Your brand deserves visuals that leave a lasting impression. Our
            team crafts logos, marketing materials, and digital assets that are
            bold, consistent, and unmistakably yours — whether you’re a startup
            or an enterprise ready to scale.
          </motion.p>

          <motion.a
            href="#services"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.45 }}
          >
            Explore Our Services ↓
          </motion.a>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section
        id="services"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8 px-6 py-20"
      >
        {subServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <CardContainer>
              <CardBody className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl w-full h-full">
                <CardItem
                  translateZ="60"
                  className="mb-4 h-48 overflow-hidden flex items-center justify-center rounded-2xl"
                >
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full object-contain rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
                    />
                  )}
                </CardItem>
                <CardItem
                  translateZ="50"
                  as="h3"
                  className="text-xl font-semibold text-gray-900 mb-2"
                >
                  {service.title}
                </CardItem>
                <CardItem
                  translateZ="40"
                  as="p"
                  className="text-gray-600 mb-4 text-sm leading-relaxed"
                >
                  {service.text}
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
