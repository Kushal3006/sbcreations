import React from 'react';
import { collections } from '../data/collections';
import { ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';

const FeaturedCollections: React.FC = () => {
  return (
    <section id="collections" className="py-20 px-4 md:px-8 bg-[#F5F5DC]/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B7355] mb-4">
            Our Collections
          </h2>
          <p className="text-[#6B5B45] max-w-2xl mx-auto">
            Explore our diverse range of handcrafted resin art categories, each featuring unique pieces
            designed to bring beauty and elegance to your life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link 
              key={collection.id}
              href={collection.path}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2">{collection.title}</h3>
                <p className="text-sm text-white/90 mb-4">{collection.subtitle}</p>
                <div className="flex items-center text-sm font-medium text-white/90 group-hover:text-white transition-colors">
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