import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaCut,
  FaCopy,
  FaPaste,
  FaUndo,
  FaRedo,
  FaSearch,
  FaCog,
} from "react-icons/fa";
import { RiFilmLine } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function FilmoraInterface() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center mt-12 overflow-hidden">
      {/* Background with perspective */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, rotateX: 5, transformPerspective: 1000 }}
        animate={{ scale: 1, rotateX: 0, transformPerspective: 1000 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
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

      {/* Main content in Filmora-style window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: isLoading ? 1.5 : 0, duration: 1 }}
        className="relative z-10 max-w-4xl w-full mx-auto px-6"
      >
        <div className="relative bg-gray-900 bg-opacity-90 backdrop-blur-xl rounded-lg border border-gray-700 shadow-2xl ">
          {/* Floating image cards */}
          <motion.div
            className="absolute top-5 -left-34 z-20 hidden lg:block"
            animate={{ y: [0, -20, 0], rotateZ: [-1, 1, -1] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-2xl p-2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-24" />
              <div className="text-xs text-gray-400 mt-1 text-center">
                CLIP_001.MOV
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-10 -right-37 z-20 hidden lg:block"
            animate={{ y: [0, -15, 0], rotateZ: [1, -1, 1] }}
            transition={{ duration: 9, repeat: Infinity }}
          >
            <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-2xl p-2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-[200px] h-[100px]" />
              <div className="text-xs text-gray-400 mt-1 text-center">
                CLIP_002.MOV
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-28 -left-22 z-20 hidden lg:block"
            animate={{ y: [0, 15, 0], rotateZ: [1, -1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-2xl p-2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-24" />
              <div className="text-xs text-gray-400 mt-1 text-center">
                CLIP_003.MOV
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 -right-33 z-20 hidden lg:block"
            animate={{ y: [0, 20, 0], rotateZ: [-1, 1, -1] }}
            transition={{ duration: 11, repeat: Infinity }}
          >
            <div className="bg-gray-800 border-2 border-gray-700 rounded-lg shadow-2xl p-2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-24" />
              <div className="text-xs text-gray-400 mt-1 text-center">
                CLIP_004.MOV
              </div>
            </div>
          </motion.div>

          {/* Mac-style window header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="text-sm font-medium text-gray-300">
              Filmora - Untitled Project
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-600 rounded-full" />
              <div className="w-3 h-3 bg-gray-600 rounded-full" />
            </div>
          </div>

          {/* Editing tools toolbar */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <button className="p-1.5 rounded hover:bg-gray-700 text-gray-300">
                <FaCut className="text-sm" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-700 text-gray-300">
                <FaCopy className="text-sm" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-700 text-gray-300">
                <FaPaste className="text-sm" />
              </button>
              <div className="w-px h-4 bg-gray-600 mx-1" />
              <button className="p-1.5 rounded hover:bg-gray-700 text-gray-300">
                <FaUndo className="text-sm" />
              </button>
              <button className="p-1.5 rounded hover:bg-gray-700 text-gray-300">
                <FaRedo className="text-sm" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search effects..."
                  className="bg-gray-700 text-gray-300 text-sm rounded pl-8 pr-3 py-1 w-40 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
                <FaSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
              </div>
              <button className="p-1.5 rounded hover:bg-gray-700 text-gray-300">
                <FaCog className="text-sm" />
              </button>
            </div>
          </div>

          {/* Main content area */}
          <div className="p-8">
            <div className="text-center">
              <HiSparkles className="text-5xl text-cyan-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
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
                  onClick={() =>
                    navigate("/", { state: { scrollTo: 'contact' } })
                  }
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
              <div className="flex items-center justify-center gap-1">
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

          {/* Timeline area */}
          <div className="px-4 py-3 bg-gray-800 border-t border-gray-700 flex items-center">
            <div className="text-xs text-gray-400 mr-4">00:00:00:00</div>
            <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-1/3"></div>
            </div>
            <div className="text-xs text-gray-400 ml-4">00:05:23:18</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
