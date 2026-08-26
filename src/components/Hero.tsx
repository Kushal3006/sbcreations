import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerSlides = [
  {
    id: 1,
    image: '/p1.jpg',
    subtitle: 'HANDCRAFTED WITH LOVE',
    title: 'Browse our latest products',
    buttonText: 'Shop all',
    link: '/products'
  },
  {
    id: 2,
    image: '/p2.jpg',
    subtitle: 'PRESERVE YOUR MEMORIES',
    title: 'Elegant Resin Clocks & Frames',
    buttonText: 'Explore Clocks',
    link: '/products/wallClocks'
  },
  {
    id: 3,
    image: '/p4.jpg',
    subtitle: 'PERSONALIZED ART',
    title: 'Custom Phone Cases & Gifts',
    buttonText: 'Custom Order',
    link: '/custom-order'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[80vh] overflow-hidden bg-stone-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={bannerSlides[currentSlide].image}
            alt={bannerSlides[currentSlide].title}
            className="w-full h-full object-cover object-center"
          />

          {/* Dark Overlay for Kioko-style contrast */}
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay (Kioko Style) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <motion.div
          key={`text-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/90 font-medium">
            {bannerSlides[currentSlide].subtitle}
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white font-normal tracking-wide drop-shadow-md leading-tight">
            {bannerSlides[currentSlide].title}
          </h1>

          <div className="pt-4">
            <Link
              to={bannerSlides[currentSlide].link}
              className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-[#8B7355] text-sm tracking-widest uppercase font-light transition-all duration-300 backdrop-blur-xs"
            >
              {bannerSlides[currentSlide].buttonText}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;