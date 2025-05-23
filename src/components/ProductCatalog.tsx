import React, { useMemo, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { useLocation, Link } from 'react-router-dom';
import { Button } from './ui/Button';

const resinFrameTypes = [
  { key: 'Photo', label: 'Photo Frames' },
  // { key: 'anniversary', label: 'Special Anniversary Frames' },
  { key: 'Mantra', label: 'Mantra Frames' },
  // { key: 'custom-photo', label: 'Custom Photo Frames' },
  // { key: 'company-name', label: 'Company Name Frames' }
];

const ProductCatalog: React.FC = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2]; 

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProducts = useMemo(() => {
    if (!category) return products;
    return products.filter(product => product.category === category);
  }, [category]);

  const categoryTitles: { [key: string]: string } = {
    'resin-frames': 'Resin Frames',
    'keychains': 'Keychains',
    'gift-hampers': 'Gift Hampers',
    'cards': 'Greeting Cards',
    'phone-cases': 'Phone Cases',
    'gift-idea': 'Gift Idea'
  };

  // Custom section rendering for resin-frames
  if (category === 'resin-frames') {
    return (
      <section id="products" className="py-20 px-4 md:px-8 bg-[#F5F5DC]/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B7355] mb-4">
                Resin Frames
              </h2>
              <p className="text-[#6B5B45] max-w-2xl mx-auto md:mx-0">
                Explore our collection of handcrafted resin frames, organized by special occasion and spiritual themes.
              </p>
            </div>
            <Link to="/">
              <Button 
                variant="outline" 
                size="md" 
                className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-all duration-200 shadow-md"
              >
                ← Back to Homepage
              </Button>
            </Link>
          </div>

          {resinFrameTypes.map(section => {
            const sectionProducts = filteredProducts.filter(p => p.resinFrameType === section.key);
            if (sectionProducts.length === 0) return null;
            return (
              <div key={section.key} className="mb-16">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-[#6B5B45] mb-6 border-l-4 border-[#8B7355] pl-4">
                  {section.label}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-8 items-stretch">
                  {sectionProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 px-4 md:px-8 bg-[#F5F5DC]/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B7355] mb-4">
              {category ? categoryTitles[category] : 'All Products'}
            </h2>
            <p className="text-[#6B5B45] max-w-2xl mx-auto md:mx-0">
              {category 
                ? `Explore our collection of handcrafted ${categoryTitles[category].toLowerCase()}` 
                : 'Browse through our complete collection of handcrafted resin art pieces'}
            </p>
          </div>
          <Link to="/">
            <Button 
              variant="outline" 
              size="md" 
              className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white transition-all duration-200 shadow-md"
            >
              ← Back to Homepage
            </Button>
          </Link>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center text-[#8B7355] py-12">
            No products found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-8 items-stretch">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;