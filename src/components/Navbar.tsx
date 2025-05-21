import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 min-h-[56px]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold tracking-wide text-[#8B7355]">
              sbcreations
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/products/resin-frames" 
              className={`nav-link ${isActiveLink('/products/resin-frames') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
            >
              Resin Frames
            </Link>
            <Link 
              to="/products/keychains" 
              className={`nav-link ${isActiveLink('/products/keychains') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
            >
              Keychains
            </Link>
            <Link 
              to="/products/gift-hampers" 
              className={`nav-link ${isActiveLink('/products/gift-hampers') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
            >
              Gift Hampers
            </Link>
            <Link 
              to="/products/cards" 
              className={`nav-link ${isActiveLink('/products/cards') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
            >
              Cards
            </Link>
            <Link 
              to="/products/phone-cases" 
              className={`nav-link ${isActiveLink('/products/phone-cases') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
            >
              Phone Cases
            </Link>
            <Link 
              to="/products/wallClocks" 
              className={`nav-link ${isActiveLink('/products/wallClocks') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
            >
              Wall Clocks
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {/* <button 
              className="p-2 text-[#8B7355] hover:text-[#6B5B45] transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="p-2 text-[#8B7355] hover:text-[#6B5B45] transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-[#8B7355] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#8B7355]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 sm:px-6 animate-fadeIn max-h-[80vh] overflow-y-auto w-full">
          <nav className="flex flex-col space-y-2">
            <Link 
              to="/products/resin-frames" 
              className={`py-2 ${isActiveLink('/products/resin-frames') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resin Frames
            </Link>
            <Link 
              to="/products/keychains" 
              className={`py-2 ${isActiveLink('/products/keychains') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Keychains
            </Link>
            <Link 
              to="/products/gift-hampers" 
              className={`py-2 ${isActiveLink('/products/gift-hampers') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gift Hampers
            </Link>
            <Link 
              to="/products/cards" 
              className={`py-2 ${isActiveLink('/products/cards') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Cards
            </Link>
            <Link 
              to="/products/phone-cases" 
              className={`py-2 ${isActiveLink('/products/phone-cases') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Phone Cases
            </Link>
            <Link 
              to="/products/wallClocks" 
              className={`py-2 ${isActiveLink('/products/wallClocks') ? 'text-[#6B5B45] font-medium' : 'text-[#8B7355]'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Wall Clocks
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;