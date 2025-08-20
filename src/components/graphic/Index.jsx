"use client";
import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../3dCard";

// Utility animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const subServices = [
  {
    title: "Custom Logo Design That Defines Your Brand",
    text: "A logo is more than just a mark — it’s the face of your brand. We design unique, scalable, and versatile logos that instantly communicate who you are. From concept to final vector files, our designs are crafted to stand the test of time.",
    image: "/images/logo-design-process.jpg", // Replace with real image
  },
  {
    title: "Complete Brand Identity Systems",
    text: "Beyond logos, we create entire identity systems — typography, color palettes, icons, and brand guidelines — to keep your communication consistent across all platforms.",
    image: "/images/brand-guidelines.jpg",
  },
  {
    title: "Brochures, Flyers, Posters, and More",
    text: "Physical and digital marketing materials are still powerful tools. Our team crafts brochures, flyers, social graphics, and presentation decks that combine creativity with clarity to drive results.",
    image: "/images/marketing-materials.jpg",
  },
  {
    title: "Social Media Graphics and Online Assets",
    text: "We design for the digital world — from Instagram posts to YouTube thumbnails to web banners — ensuring your brand looks professional and consistent wherever it appears.",
    image: "/images/social-media-assets.jpg",
  },
  {
    title: "Product Packaging That Pops",
    text: "Great packaging attracts customers before they even experience your product. We design packaging that’s both functional and visually appealing while staying aligned with your brand story.",
    image: "/images/packaging-design.jpg",
  },
];

export default function Index() {
  return (
    <main className="bg-white   ">
      {/* Page Title (H1) */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center flex flex-col items-center lg:h-screen justify-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Professional Graphic Design Services to Build a Strong Brand Identity
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Creative Designs That Communicate, Connect, and Convert
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Your brand deserves visuals that make an impact. We create logos,
          marketing materials, and digital assets that reflect your identity and
          help your business stand out. Whether you're a startup or an
          established enterprise, our design team delivers work that's on-brand,
          consistent, and unforgettable.
        </motion.p>
      </section>

      {/* Scroll Stack for Sub-Services */}

      <section className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-3 gap-8 mb-10 px-6">
        {subServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className=""
          >
            
              <CardContainer className="">
                <CardBody className="bg-white shadow-xl relative rounded-2xl p-6 hover:shadow-2xl w-full h-full">
                  <CardItem
                    translateZ="60"
                    className="mb-4 h-48 overflow-hidden flex items-center justify-center rounded-2xl"
                  >
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={`${service.title} service - professional example`}
                        className=" w-full object-contain rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
                      />
                    ) : (
                      <video
                        src={service.video}
                        width="236"
                        frameborder="0"
                        scrolling="no"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-500"
                      />
                    )}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    as="h3"
                    className="text-xl font-semibold text-gray-900"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <i
                        className={`${service.icon} text-2xl text-blue-600`}
                      ></i>

                      {service.title}
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="40"
                    as="p"
                    className="text-gray-600 mb-4 text-sm leading-relaxed"
                  >
                    {service.description}
                  </CardItem>
                  <CardItem
                    translateZ="30"
                    as="a"
                    href={service.link}
                    className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    Explore →
                  </CardItem>
                </CardBody>
              </CardContainer>
           
          </motion.div>
        ))}
      </section>

      {/* <section>
        {subServices.map((service, index) => (
          <section>
            {subServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                reverse={index % 2 === 1}
              />
            ))}
          </section>
        ))}
      </section> */}

      {/* Call to Action */}
    </main>
  );
}
