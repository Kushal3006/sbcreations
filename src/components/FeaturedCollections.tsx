import React from 'react';
import { collections } from '../data/collections';
import { ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';

const FeaturedCollections: React.FC = () => {
  return (
    <section id="collections" className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#F8F6F3] to-[#F5F3F0]">
      <div className="container mx-auto">
        {/* Watercolor background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-pink-50/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-pink-100/15 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#8B7355] mb-4 tracking-wide">
            Our Collections
          </h2>
          <p className="text-[#8B7355]/70 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our diverse range of handcrafted resin art categories, each featuring unique pieces
            designed to bring beauty and elegance to your life.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {collections.map((collection) => (
            <Link 
              key={collection.id}
              href={collection.path}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border border-pink-50/50"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B7355]/70 via-[#8B7355]/20 to-transparent rounded-t-2xl"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                <h3 className="text-base sm:text-xl font-serif font-light mb-1 sm:mb-2 tracking-wide">{collection.title}</h3>
                <p className="text-xs sm:text-sm text-white/90 mb-2 sm:mb-4 font-light">{collection.subtitle}</p>
                <div className="flex items-center text-xs sm:text-sm font-light text-white/90 group-hover:text-white transition-colors tracking-wide">
                  <span>Browse Collection</span>
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;