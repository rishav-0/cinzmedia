import { useState } from "react";
import { CoolMode } from "./CoolMode";
import GlareHover from "./GlareHover";
import logo from '../images/logo/logo.png'
import giflogo from '../images/logo/giflogo.gif'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white/90 shadow-md fixed top-0 left-0 w-full z-50">
      <div className=" mx-auto max-w-7xl px-6 flex justify-between items-center h-16 relative">
        {/* Logo Placeholder */}
        {/* <div className="text-2xl font-bold">LOGO</div> */}
        <img src={giflogo} className="h-[140px]" alt="" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          <li>
            <GlareHover
              glareColor="#ed3ba8"
              glareOpacity={0.7}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              height="40px"
              background="white"
              width="100px"
              borderRadius="full"
              className="border-0 hover:border bg-none hover:bg-black/10 rounded-full"
            >
              <a
                href="#home"
                style={{
                  fontWeight: "700",
                  color: "#333",
                  margin: 0,
                }}
              >
                Home
              </a>
            </GlareHover>
          </li>
          <li>
            <GlareHover
              glareColor="#ed3ba8"
              glareOpacity={0.7}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              height="40px"
              background="white"
              width="100px"
              borderRadius="full"
              className="border-0 hover:border bg-none hover:bg-black/10 rounded-full"
            >
              <a
                href="#services"
                style={{
                  fontWeight: "700",
                  color: "#333",
                  margin: 0,
                }}
              >
                Services
              </a>
            </GlareHover>
          </li>
          <li>
            <GlareHover
              glareColor="#ed3ba8"
              glareOpacity={0.7}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              height="40px"
              background="white"
              width="100px"
              borderRadius="full"
              className="border-0 hover:border bg-none hover:bg-black/10 rounded-full"
            >
              <a
                href="#portfolio"
                style={{
                  fontWeight: "700",
                  color: "#333",
                  margin: 0,
                }}
              >
                Portfolio
              </a>
            </GlareHover>
          </li>

          <li>
            <GlareHover
              glareColor="#ed3ba8"
              glareOpacity={0.7}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              height="40px"
              background="white"
              width="100px"
              borderRadius="full"
              className="border-0 hover:border bg-none hover:bg-black/10 rounded-full"
            >
              <a
                href="#blog"
                style={{
                  fontWeight: "700",
                  color: "#333",
                  margin: 0,
                }}
              >
                Blog
              </a>
            </GlareHover>
          </li>

          {/* Get in Touch */}
          <li>
            <CoolMode>
              <a
                href="#contact"
                className="relative inline-block px-5 py-2 rounded-full text-white font-semibold overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <span
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-particle"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </span>
              </a>
            </CoolMode>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu with smooth transition */}
      <ul
        className={`md:hidden absolute top-16 left-0 w-full bg-white/90 px-6 py-0 font-medium shadow-lg z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <li>
          <a href="#home" className="block py-2 hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="block py-2 hover:text-blue-500">
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className="block py-2 hover:text-blue-500">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#blog" className="block py-2 hover:text-blue-500">
            Blog
          </a>
        </li>
        <li className="mt-4">
          <CoolMode>
            <a
              href="#contact"
              className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              Get in Touch
            </a>
          </CoolMode>
        </li>
      </ul>

      {/* Animations */}
      <style jsx>{`
        @keyframes particle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-20px) scale(0.5);
            opacity: 0;
          }
        }
        .animate-particle {
          animation-name: particle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </nav>
  );
}
