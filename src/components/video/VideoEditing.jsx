import  { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  FaPlay,
  FaPause,
  FaStopCircle,
  FaVolumeUp,
  FaExpand,
  FaFilm,
  FaVideo,
  FaCut,
} from "react-icons/fa";
import { HiSparkles, HiFilm } from "react-icons/hi";
import { BiMoviePlay } from "react-icons/bi";
import { RiFilmLine } from "react-icons/ri";
import { BsRecordCircle, BsSkipEnd, BsSkipStart } from "react-icons/bs";
import VideoGrid from "./VideoGrid";
import TimecodeDisplay from "./TimecodeDisplay";

const projects = [
  {
    id: 1,
    title: "Brand Film",
    fps: "24fps",
    duration: "03:45",
    codec: "ProRes 422",
    resolution: "4K",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 2,
    title: "Music Video",
    fps: "30fps",
    duration: "04:20",
    codec: "H.264",
    resolution: "2K",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  },
  {
    id: 3,
    title: "Commercial",
    fps: "60fps",
    duration: "00:30",
    codec: "ProRes 4444",
    resolution: "8K",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  },
  {
    id: 4,
    title: "Documentary",
    fps: "24fps",
    duration: "12:00",
    codec: "DNxHD",
    resolution: "4K",
    video:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
];

const VideoEditorLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const { scrollYProgress } = useScroll();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotateProgress = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  const services = [
    {
      icon: <FaFilm />,
      title: "Color Grading",
      timeline: "█▓▒░░░▒▓█",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <FaCut />,
      title: "VFX & Compositing",
      timeline: "▓█▓░░░▓█▓",
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: <FaVolumeUp />,
      title: "Audio Post",
      timeline: "░▒▓█▓▒░",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <BiMoviePlay />,
      title: "Motion Graphics",
      timeline: "█░█░█░█",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-red-500 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-30%",
        }}
      />

      {/* Loading Sequence */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <div className="relative">
              {/* Film countdown */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="text-9xl font-bold"
              >
                {[3, 2, 1].map((num, i) => (
                  <motion.span
                    key={num}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: i * 1, duration: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {num}
                  </motion.span>
                ))}
              </motion.div>

              {/* Film perforations */}
              <div className="absolute -left-20 -top-20 bottom-0 w-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-4 h-6 bg-white mb-4 rounded-sm"
                  />
                ))}
              </div>
              <div className="absolute -right-20 -top-20 bottom-0 w-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-4 h-6 bg-white mb-4 rounded-sm"
                  />
                ))}
              </div>

              {/* Glitch effect */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.1, repeat: 3, delay: 2.5 }}
                className="absolute inset-0 bg-red-500 mix-blend-screen"
              />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.1, repeat: 3, delay: 2.6 }}
                className="absolute inset-0 bg-cyan-500 mix-blend-screen translate-x-1"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Film grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 mix-blend-overlay z-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-5 animate-pulse" />
      </div>

      {/* Scan lines */}
      {/* <div className="fixed inset-0 pointer-events-none z-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-white opacity-5"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div> */}

      {/* Timeline Bar */}
      <div className="fixed top-16 left-0 right-0 bg-gray-950 border-b border-gray-800 z-40">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BsRecordCircle className="text-red-500 animate-pulse" />
              <span className="text-xs font-mono">REC</span>
            </div>
            <TimecodeDisplay />
          </div>
          <div className="flex items-center gap-2">
            <BsSkipStart className="text-gray-400 hover:text-white cursor-pointer" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-gray-400 hover:text-white"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <BsSkipEnd className="text-gray-400 hover:text-white cursor-pointer" />
            <FaStopCircle className="text-gray-400 hover:text-white cursor-pointer ml-2" />
          </div>
          <div className="flex items-center gap-4">
            <FaVolumeUp className="text-gray-400" />
            <FaExpand className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
        <motion.div
          className="h-1 bg-gradient-to-r from-red-500 to-orange-500"
          style={{ scaleX: scrollYProgress }}
          initial={{ scaleX: 0 }}
        />
      </div>

      {/* Hero Section - Video Preview Window */}
      <section className="relative min-h-screen flex items-center justify-center mt-12">
        {/* Background with perspective */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: scaleProgress, rotateX: rotateProgress }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950" />

          {/* Animated grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        {/* Floating video frames */}
        <motion.div
          className="absolute top-20 left-10"
          animate={{ y: [0, -30, 0], rotateZ: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <div className="w-48 h-32 bg-gradient-to-br from-purple-900 to-pink-900 rounded border-4 border-gray-800 shadow-2xl">
            <div className="p-2 text-xs font-mono text-gray-400">
              CLIP_001.MOV
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10"
          animate={{ y: [0, 30, 0], rotateZ: [2, -2, 2] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <div className="w-48 h-32 bg-gradient-to-br from-cyan-900 to-blue-900 rounded border-4 border-gray-800 shadow-2xl">
            <div className="p-2 text-xs font-mono text-gray-400">
              CLIP_002.MOV
            </div>
          </div>
        </motion.div>

        {/* Main content in preview window style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: isLoading ? 3.5 : 0, duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto px-6"
        >
          <div className="bg-gray-900 bg-opacity-80 backdrop-blur-xl rounded-lg border border-gray-700 shadow-2xl p-8">
            {/* Preview window header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="text-xs font-mono text-gray-500">
                PROGRAM MONITOR
              </span>
            </div>

            <div className="text-center">
              <HiSparkles className="text-5xl text-cyan-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cinematic Post-Production
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Professional video editing, color grading, and VFX that
                transforms raw footage into compelling visual stories
              </p>

              {/* Action buttons styled as transport controls */}
              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-semibold text-lg shadow-lg shadow-red-500/25 flex items-center gap-2"
                >
                  <FaPlay /> Start Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 flex items-center gap-2"
                >
                  <RiFilmLine /> View Reel
                </motion.button>
              </div>
            </div>

            {/* Waveform visualization */}
            <div className="mt-8 pt-4 border-t h-10 border-gray-700">
              <div className="flex items-center justify-center  gap-1">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-cyan-500 to-purple-500 rounded"
                    initial={{ height: 4 }}
                    animate={{ height: Math.random() * 32 + 8 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.02,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section - Timeline Style */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full mb-4">
              <FaVideo className="text-red-500" />
              <span className="text-sm font-mono">EDITING SUITE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Post-Production Pipeline
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative"
              >
                <div className="bg-gray-900 bg-opacity-50 backdrop-blur-xl border border-gray-700 rounded-lg p-6 overflow-hidden">
                  {/* Timeline track header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded bg-gradient-to-r ${service.color} bg-opacity-20`}
                      >
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <span className="text-xs font-mono text-gray-500">
                          TRACK {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    </div>
                  </div>

                  {/* Timeline representation */}
                  <div className="relative h-8 bg-gray-800 rounded overflow-hidden">
                    <motion.div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${service.color}`}
                      initial={{ width: "0%" }}
                      animate={{
                        width: hoveredService === index ? "100%" : "60%",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 flex items-center pt-1 px-2">
                      <span className="font-mono text-xs text-white mix-blend-difference">
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Hover effect - playhead */}
                  {hoveredService === index && (
                    <motion.div
                      className="absolute top-0 bottom-0 w-0.5 bg-white"
                      initial={{ left: "0%" }}
                      animate={{ left: "100%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Clip Browser */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Project Library
                  </span>
                </h2>
                <p className="text-gray-400">
                  Recent exports from our editing bay
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono text-gray-500">
                  SORT BY:
                </span>
                <button className="px-3 py-1 bg-gray-800 rounded text-sm">
                  DATE
                </button>
                <button className="px-3 py-1 bg-gray-800 rounded text-sm">
                  NAME
                </button>
              </div>
            </div>
          </motion.div>

          <VideoGrid projects={projects} />
        </div>
      </section>

      {/* CTA Section - Export Dialog Style */}
      <section className="py-20 px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 bg-opacity-90 backdrop-blur-xl border border-gray-700 rounded-lg shadow-2xl overflow-hidden">
            {/* Dialog header */}
            <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center justify-between">
              <h3 className="font-mono text-sm">EXPORT SETTINGS</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-gray-600 rounded-full" />
                <div className="w-3 h-3 bg-gray-600 rounded-full" />
                <div className="w-3 h-3 bg-gray-600 rounded-full" />
              </div>
            </div>

            <div className="p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Export Your Vision?
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's create something extraordinary together. Professional
                post-production that elevates your content.
              </p>

              {/* Export options */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800 p-4 rounded">
                  <div className="text-2xl font-bold text-cyan-400">4K</div>
                  <div className="text-xs text-gray-400">Resolution</div>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <div className="text-2xl font-bold text-purple-400">
                    60fps
                  </div>
                  <div className="text-xs text-gray-400">Frame Rate</div>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <div className="text-2xl font-bold text-pink-400">ProRes</div>
                  <div className="text-xs text-gray-400">Codec</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-xl shadow-xl shadow-purple-500/25 flex items-center gap-3 mx-auto"
              >
                <BsRecordCircle className="text-2xl" />
                Start Rendering
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-mono text-sm">
            © 2024 CINEMATIC POST-PRODUCTION | TIMELINE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VideoEditorLanding;
