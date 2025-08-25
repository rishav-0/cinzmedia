import { Route, Routes } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Index from './components/graphic/Index';
import Footer from './pages/Footer';
import Services from './pages/Service';
import ScrollToTop from './utils/ScrollToTop';
import WebDevelopmentServices from './components/webdev/WebDevlopmentServices';
import SocialMediaMarketingPage from './components/socialmedia/SocialMediaMarketingPage';
import VideoEditing from './components/video/VideoEditing';
import Prism from './components/Prism';
import BrandBuildingPage from './components/b/BrandBuildingPage';
import Brand from './components/b/brand';
import MarketingLandingPage from './components/digitalmarketing/MarketingLandingPage';


function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/graphic" element={<Index />} />
        <Route path="/webdev" element={<WebDevelopmentServices />} />
        <Route path="/videoediting" element={<VideoEditing />} />
        <Route path="/brandbuilding" element={<Brand />} />
        <Route
          path="/socialmediamarketing"
          element={<SocialMediaMarketingPage />}
        />
      </Routes>
      <div
        className="bg-white"
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        {/* <Prism
          animationType="hover"
          timeScale={0.5}
          height={3.6}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        /> */}
      </div>
      <BrandBuildingPage />
      <MarketingLandingPage />
      <Footer />
    </>
  );
}

export default App
