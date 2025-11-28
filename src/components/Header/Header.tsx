import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-gray-800">Your Logo</a>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="/products" className="text-gray-600 hover:text-gray-800">Products</a>
          <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-50 py-2 px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-gray-600 hover:text-gray-800 block py-1">Home</a>
              <a href="/products" className="text-gray-600 hover:text-gray-800 block py-1">Products</a>
              <a href="/about" className="text-gray-600 hover:text-gray-800 block py-1">About</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800 block py-1">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
