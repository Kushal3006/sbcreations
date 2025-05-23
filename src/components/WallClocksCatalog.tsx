import React, { useMemo, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { products } from '../data/products';

const WallClocksCatalog: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<number | 'all'>('all');
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Get all unique sizes for filter dropdown
  const sizeOptions = useMemo(() => {
    const sizes = products
      .filter(p => p.category === 'wallClocks' && p.sizeInches)
      .map(p => p.sizeInches!);
    return Array.from(new Set(sizes)).sort((a, b) => a - b);
  }, []);

  // Filter products for wall clocks and by selected size
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.category === 'wallClocks' &&
      (selectedSize === 'all' || product.sizeInches === selectedSize)
    );
  }, [selectedSize]);

  return (
    <section id="products" className="py-20 px-4 md:px-8 bg-[#F5F5DC]/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B7355] mb-4">
              Wall Clocks
            </h2>
            <p className="text-[#6B5B45] max-w-2xl mx-auto md:mx-0">
              Explore our collection of handcrafted wall clocks that add elegance to your home decor.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <select
              className="border border-[#8B7355] rounded-md px-2 py-2 text-[#8B7355] focus:outline-none focus:ring-2 focus:ring-[#8B7355]"
              value={selectedSize}
              onChange={e => setSelectedSize(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            >
              <option value="all">All Sizes</option>
              {sizeOptions.map(size => (
                <option key={size} value={size}>{size}"</option>
              ))}
            </select>
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
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center text-[#8B7355] py-12">
            No wall clocks found.
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

export default WallClocksCatalog;
