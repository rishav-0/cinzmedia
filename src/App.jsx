import { Route, Routes } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Services from './pages/Service';
import ScrollToTop from './utils/ScrollToTop';
import WebDevelopmentServices from './components/webdev/WebDevlopmentServices';
import SocialMediaMarketingPage from './components/socialmedia/SocialMediaMarketingPage';
import VideoEditing from './components/video/VideoEditing';
import Digitalmarketing from './components/digitalmarketing/Digitalmarketing';
import Brand from './components/brandbuilding/Brand';
import GraphicDetail from './components/graphic/GraphicDetail';

function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/graphic" element={<GraphicDetail />} />
        <Route path="/webdev" element={<WebDevelopmentServices />} />
        <Route path="/videoediting" element={<VideoEditing/>} />
        <Route path="/digitalmarketing" element={<Digitalmarketing/>} />
        <Route path="/brandbuilding" element={<Brand/>} />
        <Route
          path="/socialmediamarketing"
          element={<SocialMediaMarketingPage />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App
