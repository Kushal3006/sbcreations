import React, { useState, useRef } from 'react';
import { collections } from '../data/collections';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedCollections: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = collections.length;

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.75));
      setCurrentIndex(Math.min(Math.max(index, 0), totalItems - 1));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="collections" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F8F6F3]">
      <div className="container mx-auto">
        {/* Section Header (Kioko style: Title on Left, View All on Right) */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 border-b border-[#8B7355]/15 pb-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#8B7355] font-normal tracking-wide">
            Collections
          </h2>
          <Link
            to="/products"
            className="text-xs sm:text-sm md:text-base font-light text-[#8B7355] hover:text-[#6B5B45] underline underline-offset-4 tracking-wider uppercase transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Horizontal Slider / Grid Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {collections.map((collection) => (
              <motion.div
                key={collection.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex-none w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[24vw] snap-start"
              >
                <Link to={collection.path} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-200 shadow-sm border border-stone-200/60">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Bottom Label (Kioko style: Title with Arrow Right) */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-sm sm:text-base md:text-lg font-serif tracking-wider uppercase font-medium drop-shadow-sm">
                        {collection.title}
                      </span>
                      <ArrowRight
                        size={18}
                        className="transform transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Navigation & Page Counter (Kioko style: < 1/5 >) */}
        <div className="flex items-center justify-center space-x-6 mt-6 text-[#8B7355]">
          <button
            onClick={() => scroll('left')}
            className="p-1.5 rounded-full hover:bg-[#8B7355]/10 transition-colors text-[#8B7355]"
            aria-label="Previous collection slide"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="text-xs sm:text-sm font-medium tracking-widest text-[#8B7355]">
            {currentIndex + 1} / {totalItems}
          </span>

          <button
            onClick={() => scroll('right')}
            className="p-1.5 rounded-full hover:bg-[#8B7355]/10 transition-colors text-[#8B7355]"
            aria-label="Next collection slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;