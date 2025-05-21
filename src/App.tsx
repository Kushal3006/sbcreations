import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <div className='mt-5 '>
      <FeaturedCollections />
    </div>
    {/* <AboutSection /> */}
    <Testimonials />
    <InstagramFeed />
    {/* <Newsletter /> */}
  </>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F5DC]/10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductCatalog />} />
            <Route path="/products" element={<ProductCatalog />} />
            <Route path="/products/wallClocks" element={<WallClocksCatalog />} />
            {/* <Route path="/wall" element={<CustomOrderForm />} /> */}
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="919876543210" />
      </div>
    </Router>
  );
};

export default App;