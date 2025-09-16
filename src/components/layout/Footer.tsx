
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" 
                alt="Pak Ghiza Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain flex-shrink-0" 
              />
              <span className="text-xl sm:text-2xl font-bold">Pak Ghiza</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xs">
              Premium food ingredients for professional bakers and food manufacturers across Pakistan.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base block py-1">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base block py-1">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base block py-1">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm sm:text-base block py-1">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm sm:text-base block py-1">Baking Agents</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base block py-1">Preservatives</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base block py-1">Flavorings</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base block py-1">Specialty Flours</span></li>
            </ul>
          </div>
          
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-white">Contact Info</h3>
            <div className="text-gray-400 text-sm sm:text-base space-y-2">
              <div>
                <p className="font-semibold text-amber-400">Karachi Head Office</p>
                <p>LC-40, Landhi Industrial Area</p>
                <p>Tel: 021-35026618-20, 35026622</p>
              </div>
              <div>
                <p className="font-semibold text-amber-400">Lahore Regional</p>
                <p>60th Mall Road, Shahrah-e-Quaid-e-Azam</p>
                <p>Tel: 042-36361067-9</p>
              </div>
              <div>
                <p className="font-semibold text-amber-400">Rawalpindi Regional</p>
                <p>Khan Avenue, Chaklala Scheme III</p>
                <p>Tel: 051-5145024</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-gray-400 text-sm sm:text-base">© 2024 Pak Ghiza. All rights reserved.</p>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 group">
              <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">Powered by</span>
              <img 
                src="/lovable-uploads/e3005d4d-c05c-4f18-9b8b-65f49b30fb0d.png" 
                alt="Scrift Logo" 
                className="h-4 w-4 sm:h-5 sm:w-5 object-contain flex-shrink-0"
              />
              <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">Scrift</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
