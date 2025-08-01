
import React, { useEffect, useRef, useState } from 'react';
import { Award, TrendingUp, Star, Users, Handshake, Building, Phone, Mail } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/animated-card';
import { useCounter } from '@/hooks/use-counter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const yearsCounter = useCounter({ start: 0, end: 25, duration: 2000 });
  const clientsCounter = useCounter({ start: 0, end: 1000, duration: 2500, delay: 200 });

  const [partnerFormData, setPartnerFormData] = useState({
    customerName: '',
    cityName: '',
    businessName: '',
    businessNature: '',
    mobileNumber: '',
    email: '',
    comment: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            yearsCounter.startAnimation();
            clientsCounter.startAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Pak Ghiza
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                With decades of experience in the food industry, Pak Ghiza has established itself as a trusted supplier of premium food ingredients across Pakistan and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for professional bakers, food manufacturers, and culinary enthusiasts.
              </p>
              <div ref={statsRef} className="grid grid-cols-2 gap-6 mt-8">
                <AnimatedCard className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    {yearsCounter.count}+
                  </div>
                  <div className="text-gray-600 font-medium">Years of Experience</div>
                </AnimatedCard>
                <AnimatedCard className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    {clientsCounter.count}+
                  </div>
                  <div className="text-gray-600 font-medium">Satisfied Clients</div>
                </AnimatedCard>
              </div>
            </div>
            <AnimatedCard className="relative">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To provide the highest quality food ingredients that enable our customers to create exceptional products while maintaining the highest standards of food safety and quality.
                </p>
              </div>
            </AnimatedCard>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">We never compromise on quality. Every ingredient undergoes rigorous testing to ensure it meets our high standards.</p>
            </AnimatedCard>
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">We continuously innovate to bring you the latest ingredients and solutions for modern food production.</p>
            </AnimatedCard>
            <AnimatedCard className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600">Our customers are at the heart of everything we do. We provide personalized service and support.</p>
            </AnimatedCard>
          </div>

          {/* Company Story */}
          <AnimatedCard className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded with a vision to transform the food industry in Pakistan, Pak Ghiza began as a small family business with big dreams. Our founders recognized the need for high-quality food ingredients that could meet international standards while being accessible to local businesses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the years, we've grown from a regional supplier to a nationally recognized brand, serving thousands of customers across Pakistan. Our success is built on the foundation of trust, quality, and consistent service that our customers have come to expect from us.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to innovate and expand our product range, always staying ahead of industry trends and customer needs. Our commitment to excellence remains unwavering as we look toward the future of food ingredient supply in Pakistan and beyond.
              </p>
            </div>
          </AnimatedCard>

          {/* Partnership Section */}
          <div className="mt-20">
            <AnimatedCard className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100">
              <div className="text-center mb-12">
                <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner With Us</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join our growing network of trusted distributors, HoReCa & O&I professionals
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Partnership Benefits */}
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner With Pak Ghiza?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Star className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Exclusive Pricing</h4>
                          <p className="text-gray-600 text-sm">Get access to best-in-market pricing and special rates</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Priority Support</h4>
                          <p className="text-gray-600 text-sm">Dedicated account management and priority customer service</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-amber-100 p-2 rounded-lg">
                          <Building className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Business Growth</h4>
                          <p className="text-gray-600 text-sm">Marketing support and business development opportunities</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <Award className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                          <p className="text-gray-600 text-sm">Guaranteed quality products with full traceability</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Phone className="w-5 h-5 text-amber-600 mr-2" />
                      Need Immediate Assistance?
                    </h4>
                    <p className="text-gray-600 mb-4">Our partnership team is ready to help you get started</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white flex-1"
                        onClick={() => window.open('https://wa.me/92XXXXXXXXX', '_blank')}
                      >
                        WhatsApp Now
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-amber-500 text-amber-600 hover:bg-amber-50 flex-1"
                        onClick={() => window.location.href = 'mailto:partnerships@pakghiza.com'}
                      >
                        Email Us
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Partnership Form */}
                <Card className="bg-white shadow-xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Register Your Interest</h3>
                    <p className="text-amber-100">Take the first step toward joining our network</p>
                  </div>
                  
                  <div className="p-8">
                    <form onSubmit={handlePartnerSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="customerName" className="text-sm font-semibold text-gray-700 mb-2 block">
                            Customer Name *
                          </Label>
                          <Input 
                            id="customerName"
                            name="customerName"
                            value={partnerFormData.customerName}
                            onChange={handlePartnerInputChange}
                            className="rounded-lg border-gray-200 focus:border-amber-500 focus:ring-amber-500" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cityName" className="text-sm font-semibold text-gray-700 mb-2 block">
                            City Name *
                          </Label>
                          <Input 
                            id="cityName"
                            name="cityName"
                            value={partnerFormData.cityName}
                            onChange={handlePartnerInputChange}
                            className="rounded-lg border-gray-200 focus:border-amber-500 focus:ring-amber-500" 
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="businessName" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Business Name *
                        </Label>
                        <Input 
                          id="businessName"
                          name="businessName"
                          value={partnerFormData.businessName}
                          onChange={handlePartnerInputChange}
                          className="rounded-lg border-gray-200 focus:border-amber-500 focus:ring-amber-500" 
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="businessNature" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Nature of Business *
                        </Label>
                        <Select onValueChange={handleBusinessNatureChange} value={partnerFormData.businessNature}>
                          <SelectTrigger className="rounded-lg border-gray-200 focus:border-amber-500 focus:ring-amber-500 bg-white">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border shadow-lg rounded-lg z-50">
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

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="mobileNumber" className="text-sm font-semibold text-gray-700 mb-2 block">
                            Mobile Number *
                          </Label>
                          <Input 
                            id="mobileNumber"
                            name="mobileNumber"
                            type="tel"
                            placeholder="+92 XXX XXXXXXX"
                            value={partnerFormData.mobileNumber}
                            onChange={handlePartnerInputChange}
                            className="rounded-lg border-gray-200 focus:border-amber-500 focus:ring-amber-500" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="partnerEmail" className="text-sm font-semibold text-gray-700 mb-2 block">
                            Email Address *
                          </Label>
                          <Input 
                            id="partnerEmail"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={partnerFormData.email}
                            onChange={handlePartnerInputChange}
                            className="rounded-lg border-gray-200 focus:border-amber-500 focus:ring-amber-500" 
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="comment" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Additional Comments
                        </Label>
                        <Textarea 
                          id="comment"
                          name="comment"
                          value={partnerFormData.comment}
                          onChange={handlePartnerInputChange}
                          className="rounded-lg border-gray-200 focus:border-amber-500 focus:ring-amber-500" 
                          rows={4}
                          placeholder="Tell us more about your business requirements, volume needs, or any specific questions..."
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        Submit Partnership Application
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our terms and conditions. 
                        We'll contact you within 24 hours to discuss partnership opportunities.
                      </p>
                    </form>
                  </div>
                </Card>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
