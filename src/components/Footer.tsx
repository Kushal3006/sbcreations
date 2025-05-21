import React from 'react';
import { Link } from './ui/Link';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F5F5DC]/30 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Main footer content */}
        <div className="pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
              sbcreations
            </h3>
            <p className="mb-4 text-gray-500">
              Handcrafted resin art pieces that bring beauty, color, and joy to
              your space. Every creation is unique, just like the moments they
              commemorate.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/_sbcreation22"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium"
              >
                <Instagram size={24} />
                <span>@_sbcreation22</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#products"
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#collections"
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="#custom"
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                >
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-teal-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="mr-3 h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className='text-gray-500'>+91-934804009</span>
              </li>
              <li className="flex">
                <Mail className="mr-3 h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className='text-gray-500'>info@sbcreation.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer / Copyright */}
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} sbcreation. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 flex items-center text-gray-500">
            Made with <Heart size={14} className="mx-1 text-red-500" /> for
            artisans and craft lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;