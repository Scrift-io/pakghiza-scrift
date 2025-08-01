import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, Home, Package, Info, Factory, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [{
    path: '/',
    label: 'Home',
    icon: Home
  }, {
    path: '/products',
    label: 'Products',
    icon: Package
  }, {
    path: '/about',
    label: 'About',
    icon: Info
  }, {
    path: '/industrial',
    label: 'Industrial',
    icon: Factory
  }, {
    path: '/policy',
    label: 'Policy',
    icon: Shield
  }, {
    path: '/contact',
    label: 'Contact',
    icon: MessageCircle
  }];
  const tabItems = navItems.map(item => ({
    title: item.label,
    icon: item.icon
  }));
  const getCurrentTabIndex = () => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    return currentIndex !== -1 ? currentIndex : null;
  };
  const handleTabChange = (index: number | null) => {
    if (index !== null && navItems[index]) {
      navigate(navItems[index].path);
      // Scroll to top when navigating
      window.scrollTo(0, 0);
    }
  };

  // Update selected tab when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg border-b border-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name - Left Side */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" alt="Pak Ghiza Logo" className="h-12 w-12 object-contain" />
            </div>
            
          </Link>
          
          {/* Navigation Tabs - Center */}
          <div className="hidden md:flex items-center">
            <ExpandableTabs tabs={tabItems} className="border-amber-200 bg-amber-50/50" activeColor="text-amber-600" onChange={handleTabChange} selectedIndex={getCurrentTabIndex()} />
          </div>

          {/* Buy Button - Right Side */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:flex bg-amber-500 hover:bg-amber-600 text-white animate-glow" onClick={() => window.open('https://daraz.pk', '_blank')}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy on Daraz
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-amber-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`block w-full text-left py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors ${location.pathname === item.path ? 'bg-amber-50 text-amber-600' : 'text-gray-700'}`}>
                {item.label}
              </Link>)}
          </div>
        </div>}

      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.5); }
          50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.8); }
        }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
      `}</style>
    </nav>;
};
export default Header;