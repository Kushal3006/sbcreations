import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-[#ece7e1] shadow-sm py-2 sm:py-3 min-h-[48px] transition-all duration-300">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-lg xs:text-xl sm:text-2xl font-serif font-bold tracking-wide text-[#8B7355] px-1 py-1 rounded hover:bg-[#f5f5dc] transition-colors duration-200">
            sbcreations
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3 xs:space-x-4 sm:space-x-6 lg:space-x-8">
          <Link to="/products/resin-frames" className={`nav-link px-2 py-1 rounded transition-colors duration-200 ${isActiveLink('/products/resin-frames') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`}>Resin Frames</Link>
          <Link to="/products/keychains" className={`nav-link px-2 py-1 rounded transition-colors duration-200 ${isActiveLink('/products/keychains') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`}>Keychains</Link>
          <Link to="/products/gift-hampers" className={`nav-link px-2 py-1 rounded transition-colors duration-200 ${isActiveLink('/products/gift-hampers') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`}>Gift Hampers</Link>
          <Link to="/products/cards" className={`nav-link px-2 py-1 rounded transition-colors duration-200 ${isActiveLink('/products/cards') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`}>Cards</Link>
          <Link to="/products/phone-cases" className={`nav-link px-2 py-1 rounded transition-colors duration-200 ${isActiveLink('/products/phone-cases') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`}>Phone Cases</Link>
          <Link to="/products/wallClocks" className={`nav-link px-2 py-1 rounded transition-colors duration-200 ${isActiveLink('/products/wallClocks') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`}>Wall Clocks</Link>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#8B7355] rounded hover:bg-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#8B7355] transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[100%] bg-white/95 backdrop-blur border-b border-[#ece7e1] shadow-lg py-4 px-2 xs:px-3 sm:px-4 animate-fadeIn max-h-[80vh] overflow-y-auto w-full transition-all duration-300">
          <nav className="flex flex-col space-y-2">
            <Link to="/products/resin-frames" className={`py-2 px-2 rounded text-base transition-colors duration-200 ${isActiveLink('/products/resin-frames') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`} onClick={() => setIsMenuOpen(false)}>Resin Frames</Link>
            <Link to="/products/keychains" className={`py-2 px-2 rounded text-base transition-colors duration-200 ${isActiveLink('/products/keychains') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`} onClick={() => setIsMenuOpen(false)}>Keychains</Link>
            <Link to="/products/gift-hampers" className={`py-2 px-2 rounded text-base transition-colors duration-200 ${isActiveLink('/products/gift-hampers') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`} onClick={() => setIsMenuOpen(false)}>Gift Hampers</Link>
            <Link to="/products/cards" className={`py-2 px-2 rounded text-base transition-colors duration-200 ${isActiveLink('/products/cards') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`} onClick={() => setIsMenuOpen(false)}>Cards</Link>
            <Link to="/products/phone-cases" className={`py-2 px-2 rounded text-base transition-colors duration-200 ${isActiveLink('/products/phone-cases') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`} onClick={() => setIsMenuOpen(false)}>Phone Cases</Link>
            <Link to="/products/wallClocks" className={`py-2 px-2 rounded text-base transition-colors duration-200 ${isActiveLink('/products/wallClocks') ? 'bg-[#f5f5dc] text-[#6B5B45] font-semibold' : 'text-[#8B7355] hover:bg-[#f5f5dc]'}`} onClick={() => setIsMenuOpen(false)}>Wall Clocks</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;