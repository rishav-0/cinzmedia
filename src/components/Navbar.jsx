import { useEffect, useRef, useState } from "react";
import { CoolMode } from "./CoolMode";
import GlareHover from "./GlareHover";
import Cinzmedia from "../images/logo/Cinzmedia.gif";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // desktop hover dropdown
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false); // mobile click dropdown
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  // timers to prevent flicker on desktop hover
  const openTimerRef = useRef(null);
  const closeTimerRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
  ];

  // Service links (display names mapped to your slugs; no /services prefix)
  const serviceLinks = [
    { slug: "webdv", label: "Web Development" },
    { slug: "graphic", label: "Graphic Design" },
    { slug: "videoediting", label: "Video Editing" },
    { slug: "brandbuilding", label: "Brand Building" },
    { slug: "socialmediamarketing", label: "Social Media Marketing" },
  ];

  const handleNavClick = (sectionId) => {
    setIsOpen(false); // close mobile menu if open
    setIsServicesOpenMobile(false);
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const handleServiceClick = (slug) => {
    setIsOpen(false);
    setIsServicesOpenMobile(false);
    navigate(`/${slug}`);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) setIsServicesOpenMobile(false);
      return next;
    });
  };

  // Desktop hover handlers with small delays to avoid flicker
  const handleServicesEnter = () => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = setTimeout(() => setIsServicesOpen(true), 70);
  };
  const handleServicesLeave = () => {
    clearTimeout(openTimerRef.current);
    closeTimerRef.current = setTimeout(() => setIsServicesOpen(false), 180);
  };

  // Close mobile menu when tapping/clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleOutside = (e) => {
      // only apply for mobile widths
      if (window.innerWidth >= 768) return;
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
        setIsServicesOpenMobile(false);
      }
    };

    document.addEventListener("pointerdown", handleOutside, true);
    return () =>
      document.removeEventListener("pointerdown", handleOutside, true);
  }, [isOpen]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-white/90 shadow-md sticky top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <img src={Cinzmedia} className="h-[140px]" alt="Cinzmedia logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-2 lg:space-x-8 items-center font-medium">
          {navItems.map((item) =>
            item.id === "services" ? (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                onClick={() => handleNavClick(item.id)}
              >
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

                {/* Desktop dropdown (no hover gap + slight hide delay) */}
                <ul
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white/95 rounded-xl shadow-lg border border-black/5 p-2 w-64 transition-all duration-200 ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  {serviceLinks.map((link) => (
                    <li
                      key={link.slug}
                      className="px-3 py-2 rounded-lg hover:bg-black/10 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(link.slug);
                      }}
                    >
                      {link.label}
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
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
            )
          )}

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

        {/* Mobile Menu Button (hamburger morphs into X) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-16 left-0 w-full bg-white/90 px-6 font-medium shadow-lg z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {navItems.map((item) =>
          item.id === "services" ? (
            <li key={item.id} className="py-2 cursor-pointer">
              <div
                className="flex items-center justify-between hover:text-blue-500"
                onClick={() => setIsServicesOpenMobile((prev) => !prev)}
              >
                <span>{item.label}</span>
                <span
                  className={`transition-transform ${
                    isServicesOpenMobile ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>

              {/* Mobile dropdown (click-to-open) */}
              <ul
                className={`pl-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  isServicesOpenMobile
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {serviceLinks.map((link) => (
                  <li
                    key={link.slug}
                    className="py-2 text-sm hover:text-blue-500"
                    onClick={() => handleServiceClick(link.slug)}
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="py-2 cursor-pointer hover:text-blue-500"
            >
              {item.label}
            </li>
          )
        )}

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
