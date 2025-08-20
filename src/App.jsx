import { Route, Routes } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Index from './components/graphic/Index';
import Footer from './pages/Footer';
import Services from './pages/Service';
import ScrollToTop from './utils/ScrollToTop';

function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/graphic" element={<Index />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
