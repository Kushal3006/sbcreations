import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, ArrowRight, MessageSquare, ChevronDown, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Close drawer/search on route change
  useEffect(() => {
    setIsDrawerOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer or search is open
  useEffect(() => {
    if (isDrawerOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isDrawerOpen, isSearchOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { label: 'HOME', path: '/', hasArrow: false },
    { label: 'ALL PRODUCTS', path: '/products', hasArrow: false },
    { label: 'RESIN FRAMES', path: '/products/resin-frames', hasArrow: true },
    { label: 'KEYCHAINS', path: '/products/keychains', hasArrow: true },
    { label: 'CARDS & HAMPERS', path: '/products/cards', hasArrow: true },
    { label: 'PHONE CASES', path: '/products/phone-cases', hasArrow: true },
    { label: 'WALL CLOCKS', path: '/products/wallClocks', hasArrow: true },
    { label: 'CUSTOM ORDER', path: '/custom-order', hasArrow: false },
    { label: 'CONTACT', path: '/contact', hasArrow: false },
  ];

  const getProductImage = (product: any) => {
    if (product.image) return product.image;
    if (product.media && product.media.length > 0 && product.media[0].src) {
      return product.media[0].src;
    }
    return '/Logo.png';
  };

  const searchResults = searchQuery.trim()
    ? products.filter((p) => {
        const q = searchQuery.toLowerCase().trim();
        const productName = p.name ? p.name.toLowerCase() : '';
        const productCategory = p.category ? p.category.toLowerCase() : '';
        const productTags = p.tags ? p.tags.map((t) => t.toLowerCase()) : [];

        return (
          productName.includes(q) ||
          productCategory.includes(q) ||
          productTags.some((t) => t.includes(q))
        );
      })
    : [];

  return (
    <>
      {/* Main Header (Kioko Style: Hamburger Left | Centered Logo | Search & Cart Right) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Hamburger Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-1.5 text-stone-700 hover:text-[#8B7355] transition-colors"
              aria-label="Open menu drawer"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Center: Brand Logo */}
          <Link to="/" className="flex items-center space-x-2 text-center group">
            <img src="/Logo.png" alt="SB CREATION" className="h-10 sm:h-12 w-auto object-contain" />
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-xl font-serif text-[#8B7355] tracking-widest font-medium leading-none">
                SB CREATION
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#A0937D] font-serif tracking-[0.2em] uppercase mt-0.5">
                RESIN ART & CRAFT
              </span>
            </div>
          </Link>

          {/* Right: Search & Shopping Bag Icons */}
          <div className="flex items-center space-x-3 text-stone-700">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 hover:text-[#8B7355] transition-colors"
              aria-label="Search products"
            >
              <Search size={20} />
            </button>
            <Link
              to="/products"
              className="p-1.5 hover:text-[#8B7355] transition-colors relative"
              aria-label="View products catalog"
            >
              <ShoppingBag size={20} />
            </Link>
          </div>
        </div>

        {/* Sub Ticker Announcement Marquee Bar (Kioko Style) */}
        <div className="bg-[#8B7355] text-white py-2 overflow-hidden relative border-t border-b border-[#7A6449]">
          <div className="flex space-x-8 whitespace-nowrap animate-marquee text-xs font-light tracking-widest uppercase">
            <div className="flex space-x-8 items-center shrink-0">
              <span>♥ NEW ARRIVALS JUST DROPPED</span>
              <span>♥ RESTOCKED FAVORITES</span>
              <span>♥ HANDCRAFTED WITH LOVE</span>
              <span>♥ CUSTOM RESIN ART & GIFTS</span>
            </div>
            <div className="flex space-x-8 items-center shrink-0" aria-hidden="true">
              <span>♥ NEW ARRIVALS JUST DROPPED</span>
              <span>♥ RESTOCKED FAVORITES</span>
              <span>♥ HANDCRAFTED WITH LOVE</span>
              <span>♥ CUSTOM RESIN ART & GIFTS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Navigation Drawer Overlay (Kioko Style - Image 2) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop Fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer Content Slide from Left */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 230 }}
              className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
            >
              <div>
                {/* Drawer Header (Close Box | Centered Logo | Search & Bag) */}
                <div className="p-4 flex items-center justify-between border-b border-stone-200">
                  {/* Close Button Box */}
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="border border-stone-400 p-1.5 rounded-sm hover:bg-stone-100 transition-colors text-stone-700"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>

                  {/* Centered Logo */}
                  <Link to="/" className="flex items-center space-x-1.5" onClick={() => setIsDrawerOpen(false)}>
                    <img src="/Logo.png" alt="SB CREATION" className="h-8 w-auto" />
                    <span className="text-lg font-serif text-[#8B7355] font-medium tracking-widest">
                      SB CREATION
                    </span>
                  </Link>

                  {/* Right Icons */}
                  <div className="flex items-center space-x-3 text-stone-700">
                    <button
                      onClick={() => {
                        setIsDrawerOpen(false);
                        setIsSearchOpen(true);
                      }}
                      aria-label="Search"
                    >
                      <Search size={18} />
                    </button>
                    <Link to="/products" onClick={() => setIsDrawerOpen(false)} aria-label="Shopping Bag">
                      <ShoppingBag size={18} />
                    </Link>
                  </div>
                </div>

                {/* Navigation Items (Vertical List matching Image 2) */}
                <nav className="p-4 space-y-1">
                  {navItems.map((item) => {
                    const active = isActive(item.path);
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center justify-between px-4 py-3 text-xs sm:text-sm tracking-wider uppercase font-medium transition-all ${
                          active
                            ? 'bg-[#F4F4F4] text-stone-900 rounded-md font-semibold'
                            : 'text-stone-700 hover:bg-stone-50 hover:text-[#8B7355]'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.hasArrow && <ArrowRight size={16} className="text-stone-500" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Section (Chat Button | Country Selector | Social Links) */}
              <div className="p-6 bg-[#FAFAFA] border-t border-stone-200 space-y-5">
                {/* Chat Button */}
                <button
                  onClick={() => {
                    window.open('https://wa.me/919876543210', '_blank');
                  }}
                  className="bg-stone-200/80 hover:bg-stone-300/80 text-stone-800 px-4 py-2.5 rounded-full flex items-center space-x-2 text-xs font-medium shadow-xs border border-stone-300/60"
                >
                  <MessageSquare size={14} />
                  <span>Chat</span>
                </button>

                {/* Country Selector */}
                <div className="flex items-center space-x-1.5 text-xs text-stone-600 font-light">
                  <span>India | INR ₹</span>
                  <ChevronDown size={14} />
                </div>

                {/* Social Links */}
                <div>
                  <a
                    href="https://instagram.com/_sbcreation22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-700 hover:text-[#8B7355] transition-colors inline-block"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Animated Interactive Search Modal / Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
              onClick={() => setIsSearchOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-6 z-10 border border-stone-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center space-x-3 flex-1 mr-4">
                  <Search size={20} className="text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search products, resin frames, clocks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full text-base focus:outline-none text-stone-800 placeholder-stone-400"
                  />
                </div>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-stone-500 hover:text-stone-800 p-1"
                  aria-label="Close search"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Results Display */}
              <div className="mt-4 max-h-96 overflow-y-auto space-y-3">
                {searchQuery.trim() === '' ? (
                  <p className="text-xs text-stone-400 text-center py-6 uppercase tracking-wider">
                    Type to start searching...
                  </p>
                ) : searchResults.length === 0 ? (
                  <p className="text-sm text-stone-500 text-center py-6">
                    No products found matching "{searchQuery}"
                  </p>
                ) : (
                  searchResults.map((product, idx) => {
                    const imgSrc = getProductImage(product);
                    const title = product.name || 'Resin Product';
                    return (
                      <div
                        key={`${product.id}-${idx}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                          if (product.category === 'wallClocks') {
                            navigate('/products/wallClocks');
                          } else {
                            navigate(`/products/${product.category}`);
                          }
                        }}
                        className="flex items-center space-x-4 p-2.5 rounded-lg hover:bg-stone-50 cursor-pointer transition-colors border border-stone-100 group"
                      >
                        <img
                          src={imgSrc}
                          alt={title}
                          className="w-14 h-14 object-cover rounded-md border border-stone-200 shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/Logo.png';
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-stone-800 truncate group-hover:text-[#8B7355] transition-colors">
                            {title}
                          </h4>
                          <p className="text-xs text-stone-500 uppercase tracking-wider">
                            {product.category ? product.category.replace('-', ' ') : 'Product'}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-[#8B7355] shrink-0">
                          ₹{product.price}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;