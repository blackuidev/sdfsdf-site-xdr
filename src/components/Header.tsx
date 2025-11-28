import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, Home } from 'lucide-react';
import { cn } from "@/components/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  isMobile?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isMobile, className, ...props }) => {
  return (
    <header className={cn("bg-white shadow-md sticky top-0 z-50", className)} {...props}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primarylw">
          ShoeStore
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primarylw transition-colors duration-200">
            <Home className="inline-block mr-1" size={16} />
            Home
          </Link>
          <Link to="/products" className="hover:text-primarylw transition-colors duration-200">
            Products
          </Link>
          <Link to="/cart" className="hover:text-primarylw transition-colors duration-200">
            <ShoppingCart className="inline-block mr-1" size={16} />
            Cart
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
