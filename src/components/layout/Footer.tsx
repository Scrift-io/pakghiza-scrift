
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

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
                <a href="https://www.facebook.com/people/Pure-N-Fresh/61583943389438/?rdid=GCOd5d3iWya5uxO9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15wjxkHcY3%2F" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-800/50 rounded hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                  <Facebook size={16} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/purenfresh.official/?igsh=MXFwOGpwYzIydmRnOA%3D%3D" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-800/50 rounded hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                  <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://wa.me/923148039941" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-gray-800/50 rounded hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="group-hover:scale-110 transition-transform">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
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
