
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-3">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" 
                alt="Pak Ghiza Logo" 
                className="h-8 w-8 object-contain flex-shrink-0" 
              />
              <span className="text-xl font-bold">Pak Ghiza</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium food ingredients for professional bakers and food manufacturers across Pakistan.
            </p>
            
            {/* Contact Email */}
            <div className="flex items-center gap-2 text-sm">
              <Mail size={14} className="text-amber-400 flex-shrink-0" />
              <a href="mailto:info@pakghiza.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                info@pakghiza.com
              </a>
            </div>

            {/* Social Media */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-white mb-2">Follow Us</p>
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/PowerPlusPakistan" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-800/50 rounded hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                  <Facebook size={16} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/official.powerpluspk?igsh=MW14N2FqODBvNzkzcg" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-800/50 rounded hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                  <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/company/progressive-group-pakistan/" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-800/50 rounded hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="p-1.5 bg-gray-800/50 rounded hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                  <Twitter size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Contact</Link></li>
            </ul>
            
            <div className="pt-2 space-y-1.5">
              <h4 className="text-xs font-semibold text-white">Categories</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Baking Agents</p>
                <p>Preservatives</p>
                <p>Flavorings</p>
                <p>Specialty Flours</p>
              </div>
            </div>
          </div>
          
          {/* Office Locations */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {/* Karachi */}
            <div className="space-y-1.5">
              <p className="font-semibold text-amber-400">Karachi Head Office</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=LC-40,+Landhi+Industrial+Area,+Near+Opal+Laboratory,+Karachi,+Pakistan+71500"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 leading-relaxed hover:text-amber-400 transition-colors cursor-pointer block"
              >
                LC-40, Landhi Industrial Area, Near Opal Laboratory, Karachi, Pakistan Post Code 71500
              </a>
              <div className="flex items-center gap-1">
                <Phone size={12} className="text-amber-400 flex-shrink-0" />
                <span className="text-gray-400">021-35026618-20, 35026622, 021-35026602</span>
              </div>
            </div>
            
            {/* Lahore */}
            <div className="space-y-1.5">
              <p className="font-semibold text-amber-400">Lahore Regional Office</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=60th+Mall+Road,+Shahrah-e-Quaid-e-Azam,+Lahore+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 leading-relaxed hover:text-amber-400 transition-colors cursor-pointer block"
              >
                60th Mall Road, Shahrah-e-Quaid-e-Azam, Lahore Pakistan
              </a>
              <div className="flex items-center gap-1">
                <Phone size={12} className="text-amber-400 flex-shrink-0" />
                <span className="text-gray-400">042-36361067-9</span>
              </div>
            </div>
            
            {/* Rawalpindi */}
            <div className="space-y-1.5">
              <p className="font-semibold text-amber-400">Rawalpindi Regional Office</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=House+No.+51,+Street+5,+Khan+Avenue,+Behind+Shell+Filling+Station,+Chaklala+Scheme+III,+Rawalpindi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 leading-relaxed hover:text-amber-400 transition-colors cursor-pointer block"
              >
                House No. 51, Street #5, Khan Avenue Behind Shell filling Station, Chaklala scheme III
              </a>
              <div className="flex items-center gap-1">
                <Phone size={12} className="text-amber-400 flex-shrink-0" />
                <span className="text-gray-400">051-5145024</span>
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
