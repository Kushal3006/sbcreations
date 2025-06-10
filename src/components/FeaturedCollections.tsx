import React from 'react';
import { collections } from '../data/collections';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from './ui/Link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedCollections: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="collections" className="relative py-16 sm:py-20 md:py-24 px-4 md:px-8 bg-gradient-to-br from-[#F8F6F3] via-[#F5F3F0] to-[#F2F0ED] overflow-hidden">
      {/* Enhanced watercolor background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large flowing watercolor shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-50/30 via-rose-50/20 to-transparent rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-100/25 via-purple-50/15 to-transparent rounded-full blur-3xl transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-50/20 to-pink-50/20 rounded-full blur-2xl opacity-40"></div>
        
        {/* Floating botanical elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-gradient-to-bl from-pink-100/40 to-transparent rounded-full blur-lg opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle sparkle effects */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#8B7355]/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-300/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Decorative element above title */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#8B7355]/30"></div>
            <Sparkles className="mx-4 w-5 h-5 sm:w-6 sm:h-6 text-[#8B7355]/60" />
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#8B7355]/30"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#8B7355] mb-4 sm:mb-6 tracking-wide leading-tight">
            Our Collections
            <span className="block text-lg sm:text-xl md:text-2xl text-[#A0937D] font-extralight mt-2 tracking-[0.2em]">
              HANDCRAFTED WITH LOVE
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-[#8B7355]/70 font-light leading-relaxed mb-6">
              Explore our diverse range of handcrafted resin art categories, each featuring unique pieces
              designed to bring beauty and elegance to your life.
            </p>
            
            {/* Decorative quote */}
            <div className="relative">
              <div className="absolute -left-4 -top-2 text-4xl text-[#8B7355]/20 font-serif">"</div>
              <p className="text-sm sm:text-base text-[#A0937D] italic font-light">
                Every piece tells a story, every creation captures a moment
              </p>
              <div className="absolute -right-4 -bottom-2 text-4xl text-[#8B7355]/20 font-serif">"</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative z-10"
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link 
                href={collection.path}
                className="block relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/95 backdrop-blur-sm border border-pink-50/50 h-full"
              >
                {/* Image Container with Enhanced Effects */}
                <div className="relative aspect-[4/5] sm:aspect-[4/4] md:aspect-[4/5] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Multi-layered overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/80 via-[#8B7355]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200/50 to-transparent"></div>
                  </div>
                  
                  {/* Enhanced content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-light tracking-wide leading-tight">
                        {collection.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {collection.subtitle}
                      </p>
                      
                      {/* Enhanced CTA */}
                      <div className="flex items-center text-xs sm:text-sm font-light text-white/90 group-hover:text-white transition-all duration-300 pt-2">
                        <span className="tracking-wide">Explore Collection</span>
                        <ChevronRight 
                          size={16} 
                          className="ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Enhanced bottom section */}
                <div className="p-3 sm:p-4 md:p-6 bg-white/95 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-medium text-[#8B7355] tracking-wide group-hover:text-[#7A6449] transition-colors duration-300">
                        {collection.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A0937D] font-light mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        Premium Quality
                      </p>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#8B7355]/10 to-pink-50/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight size={14} className="text-[#8B7355] group-hover:text-[#7A6449] transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-[#8B7355]/60 font-light mb-6">
              Can't find what you're looking for? We create custom pieces tailored to your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.location.hash = '#custom';
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    window.location.hash = '#custom';
                  }
                }}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#8B7355] to-[#A0937D] text-white rounded-full hover:from-[#7A6449] hover:to-[#8B7355] transition-all duration-300 shadow-lg hover:shadow-xl group font-light tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              >
                Request Custom Order
                <Sparkles className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              
              <Link
                href="#about"
                className="inline-flex items-center text-[#8B7355] hover:text-[#7A6449] font-light tracking-wide transition-colors duration-300 group"
              >
                <span className="text-sm sm:text-base">Learn Our Story</span>
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollections;