
import React, { useState } from 'react';
import { Star, Phone, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedCard } from '@/components/ui/animated-card';

const Industrial = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    requirements: ''
  });

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Industrial & Commercial Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Bulk solutions for large-scale food production with customized formulations and technical support
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AnimatedCard className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Custom Formulations</h3>
              <p className="text-gray-600 text-center">Tailored ingredient solutions for your specific production requirements</p>
            </AnimatedCard>
            <AnimatedCard className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Technical Support</h3>
              <p className="text-gray-600 text-center">24/7 technical assistance from our team of food technology experts</p>
            </AnimatedCard>
            <AnimatedCard className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Bulk Orders</h3>
              <p className="text-gray-600 text-center">Competitive pricing for large volume orders with flexible delivery options</p>
            </AnimatedCard>
          </div>

          {/* Industrial Benefits */}
          <AnimatedCard className="bg-white rounded-2xl shadow-lg p-12 mb-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Industrial Solutions?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive solutions designed for enterprise-scale food production with unmatched reliability and support</p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Scale-Ready Solutions</h4>
                    <p className="text-gray-600 leading-relaxed">Ingredients optimized for large-scale production with consistent performance across all batch sizes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Cost-Effective</h4>
                    <p className="text-gray-600 leading-relaxed">Competitive bulk pricing for volume orders with transparent pricing structure and no hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Consistent Quality</h4>
                    <p className="text-gray-600 leading-relaxed">Batch-to-batch consistency guaranteed with rigorous quality control and testing protocols</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Flexible Delivery</h4>
                    <p className="text-gray-600 leading-relaxed">Scheduled deliveries to match your production needs with real-time tracking and logistics support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Expert Consultation</h4>
                    <p className="text-gray-600 leading-relaxed">Technical guidance for optimal usage with dedicated account managers and R&D support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Regulatory Compliance</h4>
                    <p className="text-gray-600 leading-relaxed">All products meet international food safety standards with complete documentation and certifications</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Quote Request Form */}
          <Card className="p-8 shadow-lg border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Industrial Quote</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <Input 
                  name="companyName"
                  placeholder="Company Name" 
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="rounded-lg border-amber-200 focus:border-amber-500" 
                  required
                />
                <Input 
                  name="contactPerson"
                  placeholder="Contact Person" 
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="rounded-lg border-amber-200 focus:border-amber-500" 
                  required
                />
                <Input 
                  name="email"
                  type="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-lg border-amber-200 focus:border-amber-500" 
                  required
                />
                <Input 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="rounded-lg border-amber-200 focus:border-amber-500" 
                  required
                />
                <textarea
                  name="requirements"
                  placeholder="Product Requirements & Specifications"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className="md:col-span-2 w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none resize-none"
                  rows={4}
                  required
                />
              </div>
              <Button 
                type="submit"
                className="mt-6 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg"
              >
                Submit Request
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Industrial;
