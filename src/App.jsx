
import './App.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import BlogSection from './pages/BlogSection';
import Chooseus from './pages/Chooseus';
import ContactSection from './pages/ContactSection';
import Footer from './pages/Footer';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import SectionOne from './pages/SectionOne';
import Services from './pages/Service';
import Testimonials from './pages/Testimonials';


function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* <SectionOne /> */}
      <LandingPage />
      <About />
      <Services />
      <Chooseus />
      <Projects />
      <Testimonials />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App
