import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/products/resin-frames', label: 'Resin Frames' },
    { path: '/products/keychains', label: 'Keychains' },
    { path: '/products/gift-hampers', label: 'Gift Hampers' },
    { path: '/products/cards', label: 'Cards' },
    { path: '/products/phone-cases', label: 'Phone Cases' },
    { path: '/products/wallClocks', label: 'Wall Clocks' },
  ];

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex flex-col items-center group"
          >
            <img 
              src="/L.png" 
              alt="sbcreations logo" 
              className="h-16 w-auto sm:h-20 transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="text-xs sm:text-sm text-[#8B7355] font-serif tracking-widest mt-1 opacity-90">
              by Saloni Bafna
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 hover:text-[#6B5B45] group ${
                  isActiveLink(link.path) ? 'text-[#6B5B45]' : 'text-[#8B7355]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#8B7355] transform origin-left transition-transform duration-300 ${
                  isActiveLink(link.path) ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`} />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#8B7355] rounded-full hover:bg-[#f5f5dc]/30 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="pt-4 pb-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                  isActiveLink(link.path)
                    ? 'bg-[#f5f5dc]/50 text-[#6B5B45] font-medium'
                    : 'text-[#8B7355] hover:bg-[#f5f5dc]/30'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;