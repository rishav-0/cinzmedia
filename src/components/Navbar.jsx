import { useState } from "react";
import { CoolMode } from "./CoolMode";
import GlareHover from "./GlareHover";
import Cinzmedia from "../images/logo/Cinzmedia.gif";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
  ];

  const handleNavClick = (sectionId) => {
    setIsOpen(false); // close mobile menu if open
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="bg-white/90 shadow-md sticky top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <img src={Cinzmedia} className="h-[140px]" alt="Cinzmedia logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">
          {navItems.map((item) => (
            <li key={item.id} onClick={() => handleNavClick(item.id)}>
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
                className="border-0 hover:border bg-none hover:bg-black/10 rounded-full cursor-pointer"
                as="div"
              >
                <span
                  style={{
                    fontWeight: "700",
                    color: "#333",
                    margin: 0,
                  }}
                >
                  {item.label}
                </span>
              </GlareHover>
            </li>
          ))}

          {/* Get in Touch */}
          <li onClick={() => handleNavClick("contact")}>
            <CoolMode>
              <button
                type="button"
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
              </button>
            </CoolMode>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-16 left-0 w-full bg-white/90 px-6 font-medium shadow-lg z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="py-2 cursor-pointer hover:text-blue-500"
          >
            {item.label}
          </li>
        ))}

        <li className="mt-4" onClick={() => handleNavClick("contact")}>
          <CoolMode>
            <button
              type="button"
              className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 ease-in-out hover:scale-105 w-full"
            >
              Get in Touch
            </button>
          </CoolMode>
        </li>
      </ul>
    </nav>
  );
}
