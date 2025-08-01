
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
      center: [67.2556, 24.8238], // Landhi Industrial Area coordinates
      zoom: 16,
      pitch: 0,
      bearing: 0
    });

    // Custom marker element to match the reference red pin
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.style.width = '40px';
    markerElement.style.height = '50px';
    markerElement.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='40' height='50' viewBox='0 0 40 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0C8.96 0 0 8.96 0 20C0 35 20 50 20 50S40 35 40 20C40 8.96 31.04 0 20 0ZM20 27C16.14 27 13 23.86 13 20C13 16.14 16.14 13 20 13C23.86 13 27 16.14 27 20C27 23.86 23.86 27 20 27Z' fill='%23FF0000'/%3E%3C/svg%3E")`;
    markerElement.style.backgroundSize = 'contain';
    markerElement.style.backgroundRepeat = 'no-repeat';
    markerElement.style.cursor = 'pointer';

    // Add the custom marker
    new mapboxgl.Marker(markerElement)
    .setLngLat([67.2556, 24.8238])
    .setPopup(new mapboxgl.Popup({ 
      offset: 25,
      closeButton: true,
      closeOnClick: false 
    }).setHTML(`
      <div style="padding: 10px; font-family: Arial, sans-serif;">
        <h3 style="margin: 0 0 8px 0; color: #333; font-size: 16px; font-weight: bold;">Pak Ghiza</h3>
        <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.4;">
          L-C, 40, near opal laboratory<br>
          Sector 29 Landhi Industrial Area<br>
          Karachi, 75160<br>
          Pakistan
        </p>
      </div>
    `))
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: false
    }), 'top-right');

    // Add scale control
    map.current.addControl(new mapboxgl.ScaleControl({
      maxWidth: 100,
      unit: 'metric'
    }), 'bottom-left');

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

            <Card className="overflow-hidden shadow-xl border-0 rounded-xl">
              <div 
                ref={mapContainer} 
                className="w-full h-[500px] bg-gray-100 rounded-xl"
                style={{ display: mapboxToken ? 'block' : 'none' }}
              />
              {!mapboxToken && (
                <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center rounded-xl">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Map will appear here once token is provided</p>
                    <p className="text-sm text-gray-400 mt-2">Location: L-C, 40, Sector 29 Landhi Industrial Area</p>
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
