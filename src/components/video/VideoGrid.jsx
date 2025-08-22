import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import VideoModal from "./VideoModal";

const VideoGrid = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (activeProject) {
      // Pause all grid videos when modal is open
      videoRefs.current.forEach((v) => v && v.pause());
    } else {
      // Resume autoplay on all videos when modal closes
      videoRefs.current.forEach((v) => {
        if (v) v.play().catch(() => {});
      });
    }
  }, [activeProject]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          onClick={() => setActiveProject(project.video)}
          className="cursor-pointer"
        >
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <div className="relative h-48 bg-black">
              <video
                src={project.video}
                muted
                playsInline
                autoPlay
                loop
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                ref={(el) => (videoRefs.current[index] = el)}
              />

              {/* Film strip borders */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-black flex">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 border-x border-gray-700" />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-black flex">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="flex-1 border-x border-gray-700" />
                ))}
              </div>

              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/30 transition">
                <FaPlay className="text-4xl text-white" />
              </div>

              {/* Metadata */}
              <div className="absolute top-6 left-2 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">
                {project.fps}
              </div>
              <div className="absolute top-6 right-2 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded">
                {project.resolution}
              </div>
            </div>

            <div className="p-4 border-t border-gray-700">
              <h3 className="font-bold mb-1">{project.title}</h3>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{project.duration}</span>
                <span>{project.codec}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {activeProject && (
        <VideoModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
};

export default VideoGrid;
