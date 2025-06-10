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
    }, 4000);
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
        <div className="absolute top-20 right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-br from-pink-100/40 via-pink-50/30 to-transparent rounded-full blur-2xl sm:blur-3xl opacity-60"></div>
        <div className="absolute bottom-32 left-8 sm:left-16 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tr from-pink-50/30 via-rose-50/20 to-transparent rounded-full blur-2xl sm:blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-pink-50/25 to-transparent rounded-full blur-xl sm:blur-2xl opacity-40"></div>
        
        {/* Subtle botanical elements inspired by logo leaves */}
        <div className="absolute top-40 left-10 sm:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-gradient-to-br from-green-50/20 to-transparent rounded-full blur-lg sm:blur-xl opacity-30"></div>
        <div className="absolute bottom-40 right-16 sm:right-32 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-gradient-to-br from-green-50/15 to-transparent rounded-full blur-md sm:blur-lg opacity-25"></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center relative z-10">
        <div className="w-full">
          
          {/* Mobile-First Layout */}
          <div className="text-center space-y-6 sm:space-y-8">
            
            {/* Brand Tag with logo-inspired styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/70 backdrop-blur-sm rounded-full border border-pink-100/50 shadow-sm"
            >
              <span className="text-[#8B7355] text-xs sm:text-sm font-medium tracking-wide">✨ Handcrafted Art & Craft</span>
            </motion.div>

            {/* Main Heading with logo typography feel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#8B7355] leading-tight tracking-wide">
                SB CREATION
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#A0937D] font-extralight mt-1 sm:mt-2 tracking-[0.15em] sm:tracking-[0.2em]">
                  by Saloni Bafna
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-[#8B7355]/70 max-w-md sm:max-w-lg mx-auto font-light leading-relaxed px-4">
                Transform your precious moments into stunning handcrafted resin art pieces
              </p>
            </motion.div>

            {/* Mobile-Optimized Product Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto"
            >
              {/* Main Product Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-pink-50/50 overflow-hidden">
                <div className="aspect-square p-4 sm:p-6">
                  <motion.img
                    key={currentProduct}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={featuredProducts[currentProduct].image}
                    alt={featuredProducts[currentProduct].title}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
                
                {/* Product Info - Mobile Optimized */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <motion.div
                    key={`info-${currentProduct}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <h3 className="text-[#8B7355] text-base sm:text-lg font-medium tracking-wide mb-1">
                      {featuredProducts[currentProduct].title}
                    </h3>
                    <p className="text-[#A0937D] text-sm sm:text-base font-light">
                      {featuredProducts[currentProduct].price}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Floating decorative elements - smaller on mobile */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-pink-100/40 to-transparent rounded-full blur-sm sm:blur-md"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-tr from-pink-50/50 to-transparent rounded-full blur-md sm:blur-lg"></div>
            </motion.div>

            {/* Product Navigation Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center space-x-2 sm:space-x-3"
            >
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentProduct 
                      ? 'bg-[#8B7355] scale-125 shadow-sm' 
                      : 'bg-pink-100 hover:bg-pink-200'
                  }`}
                />
              ))}
            </motion.div>

            {/* CTA Buttons - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <Button
                onClick={scrollToCollections}
                className="w-full sm:w-auto bg-gradient-to-r from-[#8B7355] to-[#A0937D] text-white hover:from-[#7A6449] hover:to-[#8B7355] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/20"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button className="flex items-center justify-center text-[#8B7355] hover:text-[#7A6449] font-light tracking-wide transition-colors duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 rounded-full flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-white transition-colors shadow-sm border border-pink-50">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 text-[#8B7355]" />
                </div>
                <span className="text-sm sm:text-base">Watch Process</span>
              </button>
            </motion.div>

            {/* Quick Stats - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-pink-100/50 max-w-sm sm:max-w-md mx-auto"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-light text-[#8B7355] tracking-wide">1200+</div>
                <div className="text-xs sm:text-sm text-[#8B7355]/60 font-light tracking-wide">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-light text-[#8B7355] tracking-wide">150+</div>
                <div className="text-xs sm:text-sm text-[#8B7355]/60 font-light tracking-wide">International</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-light text-[#8B7355] tracking-wide">5.0★</div>
                <div className="text-xs sm:text-sm text-[#8B7355]/60 font-light tracking-wide">Rating</div>
              </div>
            </motion.div>

            {/* Small Product Grid - Hidden on mobile, shown on larger screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="hidden md:flex justify-center gap-3 lg:gap-4 mt-8"
            >
              {featuredProducts.map((product, index) => (
                <motion.button
                  key={product.id}
                  onClick={() => setCurrentProduct(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                    index === currentProduct 
                      ? 'border-[#8B7355] shadow-lg' 
                      : 'border-pink-100 hover:border-pink-200'
                  }`}
                >
                  <div className="w-full h-full p-1">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToCollections}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#8B7355]/50 hover:text-[#8B7355] transition-colors duration-300"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;