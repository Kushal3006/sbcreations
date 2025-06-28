import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const isActiveLink = (path: string) => {
    if (path === '/products') {
      return location.pathname === '/products';
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/products', label: 'All Products' },
    { path: '/products/resin-frames', label: 'Resin Frames' },
    { path: '/products/keychains', label: 'Keychains' },
    { path: '/products/cards', label: 'Cards' },
    { path: '/products/phone-cases', label: 'Phone Cases' },
    { path: '/products/wallClocks', label: 'Wall Clocks' },
  ];

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-pink-50/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo Section with logo styling */}
          <Link 
            to="/" 
            className="flex items-center group relative overflow-hidden"
          >
            <div className="relative">
              <img 
                src="/Logo.png" 
                alt="sbcreations logo" 
                className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <span className="text-lg sm:text-xl md:text-2xl font-serif text-[#8B7355] font-light tracking-[0.1em]">
                SB CREATION
              </span>
              <span className="text-xs sm:text-sm text-[#A0937D] font-serif tracking-[0.2em] font-extralight">
                RESIN ART & CRAFT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm lg:text-base font-light tracking-wide transition-colors duration-200 hover:text-[#7A6449] group ${
                  isActiveLink(link.path) ? 'text-[#7A6449]' : 'text-[#8B7355]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B7355] to-[#A0937D] transform origin-left transition-transform duration-300 ${
                  isActiveLink(link.path) ? 'scale-x-100' : 'scale-x-0'
                } group-hover:scale-x-100`} />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden p-2 text-[#8B7355] rounded-full hover:bg-pink-50/50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={menuRef}
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="pt-4 pb-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 font-light tracking-wide ${
                  isActiveLink(link.path)
                    ? 'bg-pink-50/50 text-[#7A6449] font-normal'
                    : 'text-[#8B7355] hover:bg-pink-50/30'
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