import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Target,
  Rocket,
  Lightbulb,
  Search,
  Star,
  TrendingUp,
  User,
  Heart,
  ThumbsUp,
  Gift,
} from "lucide-react";
import facebook from "../../images/float/facebook.png";
import instagram from "../../images/float/instagram.png";
import pinterest from "../../images/float/pinterest.png";
import telegram from "../../images/float/telegram.png";
import tiktok from "../../images/float/tiktok.png";
import whatsapp from "../../images/float/whatsapp.png";
import x from "../../images/float/x.png";
import youtube from "../../images/float/youtube.png";
import shorts from "../../images/float/shorts.png";
import reddit from "../../images/float/reddit.png";
import linkedin from "../../images/float/linkedin.png";
import { useNavigate } from "react-router";
import { scrollToSection } from "../../utils/scrollToSection";
import Button from "../button";

const SocialMediaMarketingPage = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const services = [
    {
      icon: <Smartphone className="h-10 w-10 text-pink-500" />,
      title: "Content Creation",
      description:
        "Viral-worthy posts that stop the scroll and start conversations",
      stats: "2M+ views generated",
    },
    {
      icon: <Target className="h-10 w-10 text-pink-500" />,
      title: "Strategic Planning",
      description:
        "Data-driven strategies that turn followers into loyal customers",
      stats: "300% engagement boost",
    },
    {
      icon: <Rocket className="h-10 w-10 text-pink-500" />,
      title: "Growth Hacking",
      description: "Proven tactics to explode your follower count organically",
      stats: "50K+ followers gained",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-pink-500" />,
      title: "Trend Analysis",
      description: "Stay ahead of viral trends before they become mainstream",
      stats: "95% trend accuracy",
    },
  ];

  const workStyle = [
    {
      step: "01",
      title: "Deep Dive Discovery",
      description:
        "We analyze your brand, audience, and competitors to find your unique viral angle",
      emoji: <Search className="h-6 w-6 text-pink-500" />,
    },
    {
      step: "02",
      title: "Content Magic",
      description:
        "Our creative team crafts scroll-stopping content that resonates with your audience",
      emoji: <Star className="h-6 w-6 text-pink-500" />,
    },
    {
      step: "03",
      title: "Strategic Launch",
      description:
        "We time your posts perfectly and use proven hashtag strategies for maximum reach",
      emoji: <Target className="h-6 w-6 text-pink-500" />,
    },
    {
      step: "04",
      title: "Viral Optimization",
      description:
        "Real-time monitoring and optimization to push your content into viral territory",
      emoji: <TrendingUp className="h-6 w-6 text-pink-500" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahstyle",
      content:
        "Went from 2K to 100K followers in 3 months! My posts are now getting 50K+ likes regularly",
      avatar: <User className="h-10 w-10 text-purple-600" />,
      reaction: <ThumbsUp className="inline-block h-4 w-4 ml-1 text-red-500" />,
    },
    {
      name: "Mike Rodriguez",
      handle: "@mikesfitness",
      content:
        "My fitness content went viral 5 times last month. Revenue increased by 400%!",
      avatar: <User className="h-10 w-10 text-purple-600" />,
      reaction: (
        <ThumbsUp className="inline-block h-4 w-4 ml-1 text-emerald-500" />
      ),
    },
    {
      name: "Luna Bakery",
      handle: "@lunabakes",
      content:
        "Our baking videos hit 2M views! Now we have a waitlist for our classes",
      avatar: <User className="h-10 w-10 text-purple-600" />,
      reaction: <Star className="inline-block h-4 w-4 ml-1 text-yellow-500" />,
    },
  ];

  const floatingIcons = [
    "❤️",
    "😍",
    "✨",
    "🔥",
    "👍",
    "🌟",
    "🎉",
    "😂",
    "💜",
    "❤️",
  ];

  const images = [
    facebook,
    instagram,
    pinterest,
    telegram,
    tiktok,
    whatsapp,
    x,
    youtube,
    shorts,
    reddit,
    linkedin,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section with Enhanced Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 opacity-20"></div>

          {/* Animated gradient blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-30 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400 to-pink-500 rounded-full opacity-25 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-20 blur-2xl"
          />

          {/* Geometric shapes */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-32 h-32 border-4 border-pink-300 opacity-30 transform rotate-45"
          />

          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-32 left-20 w-24 h-24 border-4 border-purple-300 opacity-25 rounded-full"
          />

          {/* Floating particles/icons */}
          {floatingIcons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{
                x: Math.random() * windowDimensions.width,
                y: Math.random() * windowDimensions.height,
                opacity: 0,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
              className="absolute pointer-events-none"
              style={{
                left: `${10 + ((index * 8) % 80)}%`,
                top: `${15 + ((index * 12) % 70)}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
          {/* Floating images */}
          {images.map((src, index) => {
            const randomX = Math.random() * windowDimensions.width;
            const randomY = Math.random() * windowDimensions.height;
            const randomDuration = 10 + Math.random() * 5; // Adjust speed
            const randomDelay = Math.random() * 5;
            const randomSize = 40 + Math.random() * 60; // Image size between 40px and 100px
            const randomOpacity = 0.4 + Math.random() * 0.8; // Opacity between 0.4 and 1

            return (
              <motion.img
                key={index}
                src={src}
                initial={{
                  x: randomX,
                  y: randomY,
                  opacity: 0,
                }}
                animate={{
                  x: [randomX, Math.random() * windowDimensions.width, randomX],
                  y: [
                    randomY,
                    Math.random() * windowDimensions.height,
                    randomY,
                  ],
                  opacity: [0, randomOpacity, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "easeInOut",
                }}
                className="absolute pointer-events-none"
                style={{
                  width: `${randomSize}px`,
                  height: `${randomSize}px`,
                }}
              />
            );
          })}

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-[#e6a800]">
              Go Viral.
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl">
                Get Famous.
              </span>
            </motion.h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transform your social media presence with strategies that create
              viral moments, build massive followings, and turn likes into
              revenue{" "}
              <Rocket className="inline-block h-5 w-5 ml-1 text-pink-500" />
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              text="Get in touch"
              onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
              className="bg-[#e72615]"
            />
            <Button
              onClick={() => scrollToSection("testimonials")}
              text="See our success stories"
              className="bg-[#2675f4]"
            />
          </motion.div>

          {/* CountUp component */}
          {/*
                Simple CountUp implementation using React hooks.
                For more advanced features, consider using 'react-countup' package.
                */}
          {(() => {
            const stats = [
              {
                value: 500_000_000,
                display: "500M+",
                label: "Views Generated",
                color: "text-purple-600",
                duration: 2,
              },
              {
                value: 10_000,
                display: "10K+",
                label: "Viral Posts",
                color: "text-pink-600",
                duration: 2,
              },
              {
                value: 2_000_000,
                display: "2M+",
                label: "Followers Gained",
                color: "text-indigo-600",
                duration: 2,
              },
              {
                value: 98,
                display: "98%",
                label: "Success Rate",
                color: "text-purple-600",
                duration: 2,
                isPercent: true,
              },
            ];

            // CountUp component
            function CountUp({ end, duration = 2, isPercent, display }) {
              const [count, setCount] = React.useState(0);

              useEffect(() => {
                let start = 0;
                let raf;
                const startTime = performance.now();

                function animate(now) {
                  const elapsed = (now - startTime) / 1000;
                  const progress = Math.min(elapsed / duration, 1);
                  const value = Math.floor(progress * (end - start) + start);
                  setCount(value);
                  if (progress < 1) {
                    raf = requestAnimationFrame(animate);
                  } else {
                    setCount(end);
                  }
                }
                raf = requestAnimationFrame(animate);
                return () => cancelAnimationFrame(raf);
              }, [end, duration]);

              // If display is provided, show it after animation
              if (display && count === end) return display;
              if (isPercent) return `${count}%`;
              if (end >= 1_000_000 && count === end) return display;
              if (end >= 1_000_000) return `${Math.floor(count / 1_000_000)}M+`;
              if (end >= 1_000 && count === end) return display;
              if (end >= 1_000) return `${Math.floor(count / 1_000)}K+`;
              return count;
            }

            return (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <mdiv
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.5, ease: "linear" },
                    }}
                    className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30"
                  >
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      <CountUp
                        end={stat.value}
                        duration={stat.duration}
                        isPercent={stat.isPercent}
                        display={stat.display}
                      />
                    </div>
                    <div className="text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </mdiv>
                ))}
              </motion.div>
            );
          })()}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Services That Make You{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Unforgettable
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just post content – we create viral moments that turn
              your brand into the next big thing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  hoveredCard === index ? "ring-2 ring-purple-400" : ""
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full inline-block">
                  {service.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Work Style Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How We Make You{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Go Viral
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process has helped thousands of creators and
              brands achieve viral success. Your breakthrough moment is just one
              campaign away!{" "}
              <Star className="inline-block h-5 w-5 ml-1 text-pink-500" />
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {workStyle.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mr-2">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Success Awaits!
                  <Gift className="inline-block h-6 w-6 ml-2 text-rose-500" />
                </h3>
                <p className="text-gray-600 mb-6">
                  Join the ranks of creators who've transformed their passion
                  into profit. Your viral moment starts here!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <span className="text-green-800 font-semibold">
                    Average follower growth
                  </span>
                  <span className="text-green-600 font-bold text-xl">
                    +2,847%
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <span className="text-blue-800 font-semibold">
                    Engagement rate increase
                  </span>
                  <span className="text-blue-600 font-bold text-xl">+456%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <span className="text-purple-800 font-semibold">
                    Revenue boost
                  </span>
                  <span className="text-purple-600 font-bold text-xl">
                    +892%
                  </span>
                </div>
              </div>
            </motion.div>

            <Button
              onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
              text="Let's Connect"
              className="text-black bg-[#e6a800]"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SocialMediaMarketingPage;
