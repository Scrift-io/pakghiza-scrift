
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

  const [partnerFormData, setPartnerFormData] = useState({
    customerName: '',
    cityName: '',
    businessName: '',
    businessNature: '',
    mobileNumber: '',
    email: '',
    comment: ''
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

  const handlePartnerInputChange = (e) => {
    const { name, value } = e.target;
    setPartnerFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    // Handle partner form submission
    console.log('Partner form submitted:', partnerFormData);
  };

  const handleBusinessNatureChange = (value) => {
    setPartnerFormData(prev => ({
      ...prev,
      businessNature: value
    }));
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [67.0011, 24.8607], // Karachi coordinates
      zoom: 12
    });

    // Add marker for Pak Ghiza location
    new mapboxgl.Marker({
      color: '#f59e0b' // amber-500
    })
    .setLngLat([67.0011, 24.8607])
    .setPopup(new mapboxgl.Popup().setHTML('<h3>Pak Ghiza</h3><p>Karachi, Pakistan</p>'))
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
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
                  <p className="text-gray-600">Karachi, Pakistan</p>
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

            {/* Partner With Us Form */}
            <Card className="p-8 shadow-lg border-0">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome Professionals</h3>
                <p className="text-sm text-gray-600">(Distributors, HoReCa & O&I Professionals)</p>
                <p className="text-sm text-gray-700 mt-3">
                  Take the first step toward joining a growing network of trusted distributors and HoReCa & O&I professionals. 
                  Fill out the form below to <strong>register your interest</strong> and unlock exclusive access to best pricing and priority support
                </p>
              </div>
              
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="customerName" className="text-sm font-medium text-gray-900">Customer Name:</Label>
                  <Input 
                    id="customerName"
                    name="customerName"
                    value={partnerFormData.customerName}
                    onChange={handlePartnerInputChange}
                    className="mt-1 rounded-lg border-amber-200 focus:border-amber-500" 
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="cityName" className="text-sm font-medium text-gray-900">City Name:</Label>
                  <Input 
                    id="cityName"
                    name="cityName"
                    value={partnerFormData.cityName}
                    onChange={handlePartnerInputChange}
                    className="mt-1 rounded-lg border-amber-200 focus:border-amber-500" 
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="businessName" className="text-sm font-medium text-gray-900">Business Name:</Label>
                  <Input 
                    id="businessName"
                    name="businessName"
                    value={partnerFormData.businessName}
                    onChange={handlePartnerInputChange}
                    className="mt-1 rounded-lg border-amber-200 focus:border-amber-500" 
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="businessNature" className="text-sm font-medium text-gray-900">Nature of Business:</Label>
                  <Select onValueChange={handleBusinessNatureChange} value={partnerFormData.businessNature}>
                    <SelectTrigger className="mt-1 rounded-lg border-amber-200 focus:border-amber-500">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="distributor">Distributor</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="cafe">Café</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="institution">Institution</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="mobileNumber" className="text-sm font-medium text-gray-900">Mobile Number:</Label>
                  <Input 
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    value={partnerFormData.mobileNumber}
                    onChange={handlePartnerInputChange}
                    className="mt-1 rounded-lg border-amber-200 focus:border-amber-500" 
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="partnerEmail" className="text-sm font-medium text-gray-900">Email:</Label>
                  <Input 
                    id="partnerEmail"
                    name="email"
                    type="email"
                    value={partnerFormData.email}
                    onChange={handlePartnerInputChange}
                    className="mt-1 rounded-lg border-amber-200 focus:border-amber-500" 
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-sm font-medium text-gray-900">Comment Section:</Label>
                  <Textarea 
                    id="comment"
                    name="comment"
                    value={partnerFormData.comment}
                    onChange={handlePartnerInputChange}
                    className="mt-1 rounded-lg border-amber-200 focus:border-amber-500" 
                    rows={4}
                    placeholder="Additional comments or requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold mt-6"
                >
                  Register Interest
                </Button>
              </form>
            </Card>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600">Visit our location in Karachi, Pakistan</p>
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
