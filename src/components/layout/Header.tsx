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
    <nav className="sticky top-0 z-40 bg-white shadow-lg">
      {/* Top colored bar */}
      <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>
      
      {/* Main navigation */}
      <div className="bg-gray-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {leftNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    location.pathname === item.path 
                      ? 'text-amber-600 border-b-2 border-amber-600 pb-4' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" 
                alt="Pak Ghiza Logo" 
                className="h-10 w-10 object-contain"
              />
            </Link>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {rightNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    location.pathname === item.path 
                      ? 'text-amber-600 border-b-2 border-amber-600 pb-4' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Buy Button */}
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-2 animate-glow" 
                onClick={() => window.open('https://daraz.pk', '_blank')}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy on Daraz
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {allNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors ${
                    location.pathname === item.path ? 'bg-amber-50 text-amber-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white mt-4" 
                onClick={() => window.open('https://daraz.pk', '_blank')}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy on Daraz
              </Button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.5); }
          50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.8); }
        }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
      `}</style>
    </nav>
  );
};
export default Header;