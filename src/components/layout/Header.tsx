
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, Home, Package, Info, Factory, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const leftNavItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' }
  ];

  const rightNavItems = [
    { path: '/industrial', label: 'Industrial' },
    { path: '/policy', label: 'Policy' },
    { path: '/contact', label: 'Contact' }
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg shadow-black/5">
      {/* Elegant top accent bar */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
      
      {/* Main navigation */}
      <div className="bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Navigation - Perfectly Spaced */}
            <div className="hidden lg:flex items-center justify-end flex-1 space-x-12 pr-16">
              {leftNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                   className={`relative text-[15px] font-semibold tracking-wide transition-all duration-300 hover:text-amber-600 group ${
                     location.pathname === item.path 
                       ? 'text-amber-600' 
                       : 'text-gray-900 hover:text-amber-600'
                   }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-6 left-0 w-full h-0.5 bg-amber-500 transform transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Center Logo - Premium Styling */}
            <Link to="/" className="flex items-center justify-center px-8 group">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-100 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <img 
                  src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" 
                  alt="Pak Ghiza Logo" 
                  className="relative h-24 w-24 object-contain animate-spin-slow transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Right Navigation - Perfectly Balanced */}
            <div className="hidden lg:flex items-center justify-start flex-1 space-x-12 pl-16">
              {rightNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                   className={`relative text-[15px] font-semibold tracking-wide transition-all duration-300 hover:text-amber-600 group ${
                     location.pathname === item.path 
                       ? 'text-amber-600' 
                       : 'text-gray-900 hover:text-amber-600'
                   }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-6 left-0 w-full h-0.5 bg-amber-500 transform transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button - Refined */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-3 rounded-full hover:bg-white/10 transition-colors duration-200"
            >
              {isMenuOpen ? 
                <X className="w-5 h-5 text-gray-900" /> : 
                <Menu className="w-5 h-5 text-gray-900" />
              }
            </button>
          </div>
        </div>

        {/* Refined Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden backdrop-blur-md bg-white/90 border-t border-white/20 shadow-lg animate-fade-in">
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-1">
                {allNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.path 
                        ? 'bg-amber-50 text-amber-600 border-l-4 border-amber-500' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
