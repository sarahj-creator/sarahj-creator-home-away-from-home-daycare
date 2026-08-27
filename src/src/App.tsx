import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileCTABar from '@/components/MobileCTABar';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import OurDay from '@/pages/OurDay';
import GalleryPage from '@/pages/GalleryPage';
import Team from '@/pages/Team';
import Enquire from '@/pages/Enquire';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-day" element={<OurDay />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/enquire" element={<Enquire />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileCTABar />
      </div>
    </BrowserRouter>
  );
}

export default App;
