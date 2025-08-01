
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [mapboxToken, setMapboxToken] = useState('');
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [67.2556, 24.8238], // Updated coordinates for Landhi Industrial Area
      zoom: 16
    });

    // Add marker for Pak Ghiza location
    new mapboxgl.Marker({
      color: '#f59e0b' // amber-500
    })
    .setLngLat([67.2556, 24.8238])
    .setPopup(new mapboxgl.Popup().setHTML('<h3>Pak Ghiza</h3><p>L-C, 40, near opal laboratory<br>Sector 29 Landhi Industrial Area<br>Karachi, 75160</p>'))
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Ready to elevate your products with premium ingredients? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+92 XXX XXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@pakghiza.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">L-C, 40, near opal laboratory</p>
                    <p className="text-gray-600">Sector 29 Landhi Industrial Area</p>
                    <p className="text-gray-600">Karachi, 75160</p>
                  </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://wa.me/92XXXXXXXXX', '_blank')}
                  >
                    WhatsApp Us
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-amber-500 text-amber-600 hover:bg-amber-50"
                    onClick={() => window.location.href = '/industrial'}
                  >
                    Request Industrial Quote
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                    onClick={() => window.location.href = '/products'}
                  >
                    Browse Products
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-lg border-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-lg border-amber-200 focus:border-amber-500" 
                      required
                    />
                    <Input 
                      name="email"
                      type="email"
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="rounded-lg border-amber-200 focus:border-amber-500" 
                      required
                    />
                  </div>
                  <Input 
                    name="subject"
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="rounded-lg border-amber-200 focus:border-amber-500" 
                    required
                  />
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6} 
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none resize-none" 
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
              <p className="text-lg text-gray-600">Find us at our facility in Landhi Industrial Area, Karachi</p>
            </div>

            {!mapboxToken && (
              <Card className="p-6 mb-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Map Configuration Required</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Please enter your Mapbox public token to display the map. Get your token from{' '}
                    <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">
                      mapbox.com
                    </a>
                  </p>
                  <div className="max-w-md mx-auto">
                    <Input 
                      placeholder="Enter Mapbox public token"
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="rounded-lg border-amber-200 focus:border-amber-500"
                    />
                  </div>
                </div>
              </Card>
            )}

            <Card className="overflow-hidden shadow-lg border-0">
              <div 
                ref={mapContainer} 
                className="w-full h-96 bg-gray-100"
                style={{ display: mapboxToken ? 'block' : 'none' }}
              />
              {!mapboxToken && (
                <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Map will appear here once token is provided</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
