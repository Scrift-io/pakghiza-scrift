import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GradientText } from '@/components/ui/gradient-text';
import { Typewriter } from '@/components/ui/typewriter-text';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });
      
      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);
      
      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Message sent successfully!');
      } else {
        alert('Submission failed: ' + (responseData.error || responseData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting form: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GradientText
              colors={["#f59e0b", "#d97706", "#f59e0b"]}
              animationSpeed={6}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </GradientText>
            <div className="text-xl text-gray-600">
              <Typewriter
                text={[
                  "Ready to elevate your products with premium ingredients?",
                  "We're here to help you succeed.",
                  "Let's create something amazing together."
                ]}
                speed={50}
                loop={true}
                delay={2000}
                className="text-xl text-gray-600"
              />
            </div>
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
                  <div className="text-gray-600 space-y-1">
                    <p><strong>Karachi Head Office:</strong></p>
                    <p>021-35026618-20, 35026622, 021-35026602</p>
                    <p><strong>Lahore Regional Office:</strong></p>
                    <p>042-36361067-9</p>
                    <p><strong>Rawalpindi Regional Office:</strong></p>
                    <p>051-5145024</p>
                  </div>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Offices</h3>
                    <div className="text-gray-600 space-y-3">
                      <div>
                        <p className="font-semibold">Karachi Head Office</p>
                        <p>LC-40, Landhi Industrial Area</p>
                        <p>Near Opal Laboratory, Karachi, Pakistan</p>
                        <p>Post Code 71500</p>
                      </div>
                      <div>
                        <p className="font-semibold">Lahore Regional Office</p>
                        <p>60th Mall Road</p>
                        <p>Shahrah-e-Quaid-e-Azam, Lahore Pakistan</p>
                      </div>
                      <div>
                        <p className="font-semibold">Rawalpindi Regional Office</p>
                        <p>House No. 51, Street #5, Khan Avenue</p>
                        <p>Behind Shell Filling Station, Chaklala Scheme III</p>
                        <p>Rawalpindi</p>
                      </div>
                    </div>
                  </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
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
                    onClick={() => window.open('https://wa.me/923502661820', '_blank')}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Offices</h2>
              <p className="text-lg text-gray-600">Find us at our facilities in Karachi, Lahore, and Rawalpindi</p>
            </div>

            <Card className="overflow-hidden shadow-xl border-0 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2!2d67.255!3d24.824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLC-40%2C%20Landhi%20Industrial%20Area%2C%20Near%20Opal%20Laboratory%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pak Ghiza Head Office - LC-40, Landhi Industrial Area, Karachi"
                className="rounded-xl"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
