import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./About";
import Service from "./Service";
import Chooseus from "./Chooseus";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Check for scrollTo in query params
    const searchParams = new URLSearchParams(location.search);
    const scrollToId = searchParams.get("scrollTo");

    if (scrollToId || location.state?.scrollTo) {
      const id = scrollToId || location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // small delay to ensure render
      }
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <LandingPage />
      <About />
      <Service />
      <Chooseus />
      <Projects />
      <Testimonials />
      {/* <BlogSection /> */}
      <ContactSection />
    </div>
  );
}
