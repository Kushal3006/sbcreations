import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Link } from './ui/Link';
import { ChevronDown, Sparkles, Heart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  {
    src: '/p1.jpg',
    title: 'Elegant Resin Frames',
    subtitle: 'Preserve your precious memories'
  },
  {
    src: '/p2.jpg',
    title: 'Handcrafted Wall Clocks',
    subtitle: 'Functional art for your home'
  },
  {
    src: '/p3.jpg',
    title: 'Custom Phone Cases',
    subtitle: 'Protect with style'
  },
  {
    src: '/p4.jpg',
    title: 'Personalized Keychains',
    subtitle: 'Carry beauty everywhere'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    collectionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5DC] via-[#F5F5DC]/80 to-[#E6E6D4]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 opacity-30"
        >
          <Sparkles className="w-8 h-8 text-[#8B7355]" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-32 right-16 opacity-40"
        >
          <Heart className="w-6 h-6 text-[#8B7355]" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-32 left-20 opacity-35"
        >
          <Star className="w-7 h-7 text-[#8B7355]" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">Handcrafted with Love</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Beautiful</span>
            <span className="block bg-gradient-to-r from-[#F5F5DC] to-[#E6E6D4] bg-clip-text text-transparent">
              Resin Art
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Creations
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your precious memories into stunning handcrafted resin art pieces. 
            Each creation is unique, just like your special moments.
          </motion.p>

          {/* Current Slide Info */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white mb-2">
              {heroImages[currentSlide].title}
            </h3>
            <p className="text-white/80 text-sm sm:text-base">
              {heroImages[currentSlide].subtitle}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToCollections}
              className="bg-white text-[#8B7355] hover:bg-[#F5F5DC] hover:text-[#6B5B45] px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Explore Collections
            </Button>
            <Link
              href="https://wa.me/919054400512"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B7355] rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-lg font-semibold"
            >
              Custom Orders
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto mb-8"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">1200+</div>
              <div className="text-xs sm:text-sm text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">150+</div>
              <div className="text-xs sm:text-sm text-white/80">International Orders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">5★</div>
              <div className="text-xs sm:text-sm text-white/80">Customer Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToCollections}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#8B7355]/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default Hero;