import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredProducts = [
  {
    id: 1,
    image: '/p1.jpg',
    title: 'Resin Frames',
    price: 'From ₹499'
  },
  {
    id: 2,
    image: '/p2.jpg',
    title: 'Wall Clocks',
    price: 'From ₹2,689'
  },
  {
    id: 3,
    image: '/p4.jpg',
    title: 'Phone Cases',
    price: 'From ₹549'
  }
];

const Hero: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % featuredProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    collectionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F8F6F3] via-[#F5F3F0] to-[#F2F0ED] overflow-hidden">
      {/* Watercolor-inspired background elements matching logo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft pink watercolor blobs like in logo */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-100/40 via-pink-50/30 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-pink-50/30 via-rose-50/20 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-50/25 to-transparent rounded-full blur-2xl opacity-40"></div>
        
        {/* Subtle botanical elements inspired by logo leaves */}
        <div className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-br from-green-50/20 to-transparent rounded-full blur-xl opacity-30"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-to-br from-green-50/15 to-transparent rounded-full blur-lg opacity-25"></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Brand Tag with logo-inspired styling */}
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-pink-100/50 shadow-sm">
              <span className="text-[#8B7355] text-sm font-medium tracking-wide">✨ Handcrafted Art & Craft</span>
            </div>

            {/* Main Heading with logo typography feel */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#8B7355] leading-tight tracking-wide">
                SB CREATION
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-[#A0937D] font-extralight mt-2 tracking-[0.2em]">
                  ART&CRAFT
                </span>
              </h1>
              <p className="text-lg text-[#8B7355]/70 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                Transform your precious moments into stunning handcrafted resin art pieces with botanical elegance.
              </p>
            </div>

            {/* CTA Buttons with logo-inspired colors */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToCollections}
                className="bg-gradient-to-r from-[#8B7355] to-[#A0937D] text-white hover:from-[#7A6449] hover:to-[#8B7355] px-8 py-4 rounded-full font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/20"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button className="flex items-center justify-center px-8 py-4 text-[#8B7355] hover:text-[#7A6449] font-light tracking-wide transition-colors duration-300 group">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mr-3 group-hover:bg-white transition-colors shadow-sm border border-pink-50">
                  <Play className="w-5 h-5 ml-1 text-[#8B7355]" />
                </div>
                Watch Process
              </button>
            </div>

            {/* Quick Stats with refined styling */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-pink-100/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-light text-[#8B7355] tracking-wide">1200+</div>
                <div className="text-sm text-[#8B7355]/60 font-light tracking-wide">Orders Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-light text-[#8B7355] tracking-wide">150+</div>
                <div className="text-sm text-[#8B7355]/60 font-light tracking-wide">International</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-light text-[#8B7355] tracking-wide">5.0★</div>
                <div className="text-sm text-[#8B7355]/60 font-light tracking-wide">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Product Showcase with logo-inspired styling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Product Display with circular frame like logo */}
            <div className="relative">
              <motion.div
                key={currentProduct}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/90 backdrop-blur-sm rounded-full shadow-2xl overflow-hidden border-4 border-white/50 aspect-square"
              >
                <div className="w-full h-full p-8">
                  <img
                    src={featuredProducts[currentProduct].image}
                    alt={featuredProducts[currentProduct].title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-pink-50">
                  <h3 className="text-[#8B7355] text-lg font-light tracking-wide mb-1">
                    {featuredProducts[currentProduct].title}
                  </h3>
                  <p className="text-[#A0937D] text-base font-light">
                    {featuredProducts[currentProduct].price}
                  </p>
                </div>
              </motion.div>

              {/* Floating watercolor elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-pink-50/40 to-transparent rounded-full blur-2xl"></div>
            </div>

            {/* Product Navigation Dots with logo colors */}
            <div className="flex justify-center mt-8 space-x-3">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProduct 
                      ? 'bg-[#8B7355] scale-125 shadow-sm' 
                      : 'bg-pink-100 hover:bg-pink-200'
                  }`}
                />
              ))}
            </div>

            {/* Small Product Grid with circular frames */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {featuredProducts.map((product, index) => (
                <motion.button
                  key={product.id}
                  onClick={() => setCurrentProduct(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-square rounded-full overflow-hidden border-3 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                    index === currentProduct 
                      ? 'border-[#8B7355] shadow-lg' 
                      : 'border-pink-100 hover:border-pink-200'
                  }`}
                >
                  <div className="w-full h-full p-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToCollections}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#8B7355]/50 hover:text-[#8B7355] transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;