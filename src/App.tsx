import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import ProductCatalog from './components/ProductCatalog';
import AboutSection from './components/AboutSection';
import CustomOrderForm from './components/CustomOrderForm';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WallClocksCatalog from './components/WallClocksCatalog';

const HomePage = () => (
  <>
    <Hero />
    <div className='mt-0'>
      <FeaturedCollections />
    </div>
    {/* <AboutSection /> */}
    <InstagramFeed />
    <Testimonials />
    {/* <Newsletter /> */}
  </>
);

const App = () => {
  const [showCustomOrder, setShowCustomOrder] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setShowCustomOrder(window.location.hash === '#custom');
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#F8F6F3] via-[#F5F3F0] to-[#F2F0ED]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductCatalog />} />
            <Route path="/products" element={<ProductCatalog />} />
            <Route path="/products/wallClocks" element={<WallClocksCatalog />} />
            <Route path="/custom-order" element={<CustomOrderForm />} />
          </Routes>
          {showCustomOrder && (
            <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4">
              <div className="relative w-full max-w-3xl mx-auto h-full sm:h-[90vh] md:h-[85vh] lg:h-[85vh] flex">
                <button
                  className="absolute top-2 right-2 sm:-top-2 sm:-right-2 z-10 bg-white/90 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
                  onClick={() => { window.location.hash = ''; }}
                  aria-label="Close custom order form"
                >
                  <span className="text-2xl font-bold text-[#8B7355]">&times;</span>
                </button>
                <div className="w-full h-full overflow-y-auto rounded-2xl bg-white/95 shadow-2xl flex flex-col">
                  <CustomOrderForm />
                </div>
              </div>
            </div>
          )}
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="919876543210" />
      </div>
    </Router>
  );
};

export default App;