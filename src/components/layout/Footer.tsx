
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" 
                alt="Pak Ghiza Logo" 
                className="h-10 w-10 object-contain" 
              />
              <span className="text-2xl font-bold">Pak Ghiza</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Premium food ingredients for professional bakers and food manufacturers across Pakistan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-amber-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Baking Agents</span></li>
              <li><span className="text-gray-400">Preservatives</span></li>
              <li><span className="text-gray-400">Flavorings</span></li>
              <li><span className="text-gray-400">Specialty Flours</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest products and offers</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white rounded-lg" 
              />
              <Button className="bg-amber-500 hover:bg-amber-600 rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2024 Pak Ghiza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
