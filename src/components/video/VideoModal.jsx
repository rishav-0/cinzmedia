import { useState, useRef } from "react";
import { RiPlayFill, RiPauseFill, RiCloseFill } from "react-icons/ri";

export default function VideoModal({ project, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Decorative floating cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-12 w-32 h-20 bg-white/10 rounded-lg shadow-lg animate-pulse backdrop-blur-sm" />
        <div className="absolute bottom-16 right-20 w-40 h-24 bg-white/10 rounded-lg shadow-lg animate-pulse delay-150 backdrop-blur-sm" />
        <div className="absolute top-1/3 right-1/4 w-28 h-16 bg-white/10 rounded-lg shadow-lg animate-pulse delay-300 backdrop-blur-sm" />
      </div>

      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          src={project}
          className="w-full max-h-[80vh] object-contain bg-black"
          autoPlay
          loop
          muted={false}
        />

        {/* Controls overlay */}
        <div
          className={`absolute bottom-6 left-0 w-full flex justify-center transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={togglePlay}
            className="bg-black/60 text-white p-4 rounded-full hover:bg-black/80 transition"
          >
            {isPlaying ? <RiPauseFill size={28} /> : <RiPlayFill size={28} />}
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full p-2 hover:bg-black/80 transition"
        >
          <RiCloseFill />
        </button>
      </div>
    </div>
  );
}
