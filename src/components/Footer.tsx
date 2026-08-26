import React from 'react';
import { Link } from './ui/Link';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F5F5DC]/30 text-gray-300 pt-10 pb-4 px-2 sm:px-4">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
          {/* Column 1: About */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:items-start">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-2 sm:mb-4">sbcreations</h3>
            <p className="mb-2 sm:mb-4 text-xs sm:text-sm text-gray-500 max-w-xs">Handcrafted resin art pieces that bring beauty, color, and joy to your space. Every creation is unique, just like the moments they commemorate.</p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              <a href="https://instagram.com/_sbcreation22" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium text-xs sm:text-sm">
                <span>@_sbcreation22</span>
              </a>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="#products" className="text-gray-500 hover:text-teal-400 transition-colors">Products</a></li>
              <li><a href="#collections" className="text-gray-500 hover:text-teal-400 transition-colors">Collections</a></li>
              <li><a href="#custom" className="text-gray-500 hover:text-teal-400 transition-colors">Custom Orders</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-teal-400 transition-colors">About Us</a></li>
            </ul>
          </div>
          {/* Column 3: Customer Service */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-4">Customer Service</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          {/* Column 4: Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center justify-center sm:justify-start"><span className='text-gray-500'>+91-934804009</span></li>
              <li className="flex items-center justify-center sm:justify-start"><span className='text-gray-500'>info@sbcreation.com</span></li>
            </ul>
          </div>
        </div>
        {/* Bottom footer / Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} sbcreation. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center text-gray-500 justify-center"><span className="mx-1 text-red-500">♥</span> Made with love for artisans and craft lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;