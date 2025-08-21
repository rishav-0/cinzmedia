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
