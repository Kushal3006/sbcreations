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
    <section className="relative min-h-screen bg-gradient-to-br from-[#F5F5DC] to-[#E8E8D8] overflow-hidden">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Brand Tag */}
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#8B7355]/20">
              <span className="text-[#8B7355] text-sm font-medium">✨ Handcrafted Resin Art</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#8B7355] leading-tight">
                Create Beautiful
                <span className="block text-[#6B5B45]">Memories</span>
              </h1>
              <p className="text-lg text-[#6B5B45]/80 max-w-lg mx-auto lg:mx-0">
                Transform your precious moments into stunning handcrafted resin art pieces.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToCollections}
                className="bg-[#8B7355] text-white hover:bg-[#6B5B45] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button className="flex items-center justify-center px-8 py-4 text-[#8B7355] hover:text-[#6B5B45] font-semibold transition-colors duration-300 group">
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mr-3 group-hover:bg-white transition-colors">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                Watch Process
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#8B7355]/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#8B7355]">1200+</div>
                <div className="text-sm text-[#6B5B45]/70">Orders Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#8B7355]">150+</div>
                <div className="text-sm text-[#6B5B45]/70">International</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-[#8B7355]">5.0★</div>
                <div className="text-sm text-[#6B5B45]/70">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Product Display */}
            <div className="relative">
              <motion.div
                key={currentProduct}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="aspect-square">
                  <img
                    src={featuredProducts[currentProduct].image}
                    alt={featuredProducts[currentProduct].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {featuredProducts[currentProduct].title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {featuredProducts[currentProduct].price}
                  </p>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B7355]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
            </div>

            {/* Product Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProduct 
                      ? 'bg-[#8B7355] scale-125' 
                      : 'bg-[#8B7355]/30 hover:bg-[#8B7355]/50'
                  }`}
                />
              ))}
            </div>

            {/* Small Product Grid */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {featuredProducts.map((product, index) => (
                <motion.button
                  key={product.id}
                  onClick={() => setCurrentProduct(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    index === currentProduct 
                      ? 'border-[#8B7355] shadow-lg' 
                      : 'border-transparent hover:border-[#8B7355]/50'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#8B7355]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#8B7355]/10 rounded-full blur-2xl"></div>
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
          className="text-[#8B7355]/60 hover:text-[#8B7355] transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;