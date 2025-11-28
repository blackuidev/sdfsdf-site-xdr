import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/components/lib/utils';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className={cn(
        'w-full py-12 bg-gray-900 text-white relative overflow-hidden',
        'bg-gradient-to-br from-gray-900 to-black',
        'before:absolute before:inset-0 before:bg-[url(https://www.transparenttextures.com/patterns/carbon-fibre-v2.png)] before:opacity-10',
        'backdrop-blur-md bg-white/5 border-t border-white/10'
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-400">
              Your destination for premium footwear. We offer a curated selection of stylish and comfortable shoes for every occasion.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>123 Main Street, Anytown</li>
              <li>Email: support@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Shoe Store. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
