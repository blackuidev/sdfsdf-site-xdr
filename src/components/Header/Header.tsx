import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 to-black text-white shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primarylw">
          ShoeStore
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}        
        <nav
          className={`md:flex space-x-6 items-center ${isMenuOpen ? 'block absolute top-full left-0 w-full bg-gray-900 p-4' : 'hidden'}`}
        >
          <NavLink
            to="/products"
            className="hover:text-primarylw transition-colors duration-300"
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="hover:text-primarylw transition-colors duration-300"
          >
            Cart
          </NavLink>
          <NavLink
            to="/checkout"
            className="hover:text-primarylw transition-colors duration-300"
          >
            Checkout
          </NavLink>

          {/* Search Bar (Hidden on Small Screens) */}
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primarylw"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="hover:text-primarylw transition-colors duration-300">
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
