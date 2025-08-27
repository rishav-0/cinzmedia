"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaFacebookSquare,
  FaLinkedin,
  FaPinterestP,
  FaSnapchatGhost,
} from "react-icons/fa";
import { RiPerplexityLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiAdobephotoshop, SiCanva } from "react-icons/si";
import TextType from "../components/TextType";
import AnimatedContent from "../components/AnimatedContent";
import { CoolMode } from "../components/CoolMode";
import gpt from '../images/icon/gpt.png'
import gemini from '../images/icon/gemini.png'
import { scrollToSection } from "../utils/scrollToSection";
const words = ["Clicks & Conversions", "Followers", "Views", "Leads", "Sales"];


export default function LandingPage() {
  const [index, setIndex] = useState(0);

  // Word change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 animate-gradient"></div>

      {/* Floating Icons */}
      <SocialIcon
        Icon={FaInstagram}
        top="20%"
        left="10%"
        delay={0}
        size="200px"
      />
      <SocialIcon Icon={FaYoutube} top="30%" right="15%" delay={2} />
      <SocialIcon Icon={FaFacebookSquare} top="60%" left="20%" delay={4} />
      <SocialIcon Icon={FaSquareXTwitter} bottom="25%" right="20%" delay={6} />
      <SocialIcon Icon={SiCanva} bottom="10%" left="40%" delay={8} />
      <SocialIcon Icon={FaGoogle} bottom="5%" right="10%" delay={10} />
      <SocialIcon Icon={FaLinkedin} top="15%" left="30%" delay={12} />
      <SocialIcon Icon={FaPinterestP} top="50%" right="10%" delay={3} />
      <SocialIcon Icon={FaSnapchatGhost} bottom="20%" left="10%" delay={9} />
      <SocialIcon Icon={SiAdobephotoshop} top="15%" right="30%" delay={7} />
      <SocialIcon Icon={RiPerplexityLine} top="18%" right="10%" delay={7} />
      <SocialIcon img={gpt} bottom="15%" right="35%" delay={11} />
      <SocialIcon img={gemini} top="35%" left="20%" delay={11} />

      {/* Content */}
      <AnimatedContent>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            We Build Brands That Get{" "}
            {/* <span className="text-yellow-300">{words[index]}</span> */}
            <TextType
              className="text-yellow-300"
              typingSpeed="80"
              deletingSpeed="80"
              textColors="text-yellow-300"
              as="span"
              text={words}
            />
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            From Instagram growth to YouTube strategies and stunning graphic
            design — we create digital campaigns that stop the scroll and turn
            views into customers.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <CoolMode>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Get Your Free Strategy Plan
              </button>
            </CoolMode>
            <CoolMode>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors"
              >
                See Our Creative Work
              </button>
            </CoolMode>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
}

function SocialIcon({ Icon, top, bottom, left, right, delay, img }) {
  return (
    <motion.div
      className="absolute text-white/20 text-5xl md:text-7xl lg:text-8xl"
      style={{ top, bottom, left, right }}
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {
        img ? (
          <img src={img} alt="icon" className="w-14 h-14 opacity-10 md:w-20 md:h-20" />
        ) : (
          <Icon />
        ) 
      }
      
    </motion.div>
  );
}
