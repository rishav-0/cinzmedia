import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      icon: "📱",
      title: "Content Creation",
      description:
        "Viral-worthy posts that stop the scroll and start conversations",
      stats: "2M+ views generated",
    },
    {
      icon: "🎯",
      title: "Strategic Planning",
      description:
        "Data-driven strategies that turn followers into loyal customers",
      stats: "300% engagement boost",
    },
    {
      icon: "🚀",
      title: "Growth Hacking",
      description: "Proven tactics to explode your follower count organically",
      stats: "50K+ followers gained",
    },
    {
      icon: "💡",
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
      emoji: "🔍",
    },
    {
      step: "02",
      title: "Content Magic",
      description:
        "Our creative team crafts scroll-stopping content that resonates with your audience",
      emoji: "✨",
    },
    {
      step: "03",
      title: "Strategic Launch",
      description:
        "We time your posts perfectly and use proven hashtag strategies for maximum reach",
      emoji: "🎯",
    },
    {
      step: "04",
      title: "Viral Optimization",
      description:
        "Real-time monitoring and optimization to push your content into viral territory",
      emoji: "📈",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahstyle",
      content:
        "Went from 2K to 100K followers in 3 months! My posts are now getting 50K+ likes regularly 🔥",
      avatar: "👩‍💼",
    },
    {
      name: "Mike Rodriguez",
      handle: "@mikesfitness",
      content:
        "My fitness content went viral 5 times last month. Revenue increased by 400%! 💪",
      avatar: "👨",
    },
    {
      name: "Luna Bakery",
      handle: "@lunabakes",
      content:
        "Our baking videos hit 2M views! Now we have a waitlist for our classes 🧁",
      avatar: "👩‍🍳",
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
  ]

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
              className="absolute text-4xl pointer-events-none"
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
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Go Viral.
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl">
                Get Famous.
              </span>
            </motion.h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transform your social media presence with strategies that create
              viral moments, build massive followings, and turn likes into
              revenue 🚀
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform transition-all duration-300 relative overflow-hidden"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Start Going Viral 🔥</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("testimonials")}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(147, 51, 234, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              See Our Success Stories
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                value: "500M+",
                label: "Views Generated",
                color: "text-purple-600",
              },
              { value: "10K+", label: "Viral Posts", color: "text-pink-600" },
              {
                value: "2M+",
                label: "Followers Gained",
                color: "text-indigo-600",
              },
              { value: "98%", label: "Success Rate", color: "text-purple-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5, ease: "linear" }, // almost instant
                }}
                className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30"
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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
              campaign away! ✨
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
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mr-2">
                        {step.title}
                      </h3>
                      <span className="text-2xl">{step.emoji}</span>
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
                  Your Success Awaits! 🎉
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

              <button
                onClick={() =>
                  navigate("/", { state: { scrollTo: "contact" } })
                }
                className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Let's Get Viral!
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto" id="testimonials">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Success Stories That Inspire
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                🔥
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real creators, real results. See how we've helped brands explode
              their social presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{testi.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testi.name}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {testi.handle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">"{testi.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SocialMediaMarketingPage;
