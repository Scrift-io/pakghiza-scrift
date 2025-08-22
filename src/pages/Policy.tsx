
import React from 'react';
import { Shield, CheckCircle, Users, Award, Globe, Phone, Mail, Clock, HelpCircle, ChevronDown, Eye, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { GradientText } from '@/components/ui/gradient-text';
import { Typewriter } from '@/components/ui/typewriter-text';

const Policy = () => {
  const policyPoints = [
    {
      icon: CheckCircle,
      title: "Quality Management System",
      description: "Maintaining and continually improving our Food Safety and Quality Management System in accordance with ISO requirements i.e. monitoring, measurement, internal audits, corrective actions, and management review.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Regulatory Compliance", 
      description: "Complying with all statutory, regulatory, halal, and customer requirements and enhancing customer satisfaction through consistent product quality and reliable service.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Hazard Control",
      description: "Identifying and controlling food safety hazards and quality risk at all stages of the product lifecycle.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Stakeholder Communication",
      description: "Ensuring effective internal and external communication, including transparent information sharing and remedial recourse with stakeholders.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Long-term Relationships",
      description: "Building strong long-term relationships with customers, suppliers, communities, and stakeholders based on trust, mutual benefit, and shared values.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Eye,
      title: "Food Defense",
      description: "Preventing food fraud and international threats via a comprehensive food defense plan.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Activity,
      title: "Environmental Monitoring",
      description: "Implementing environmental monitoring programs where applicable to verify sanitation and control of microbiological hazards.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const faqs = [
    {
      question: "What quality certifications does Pak Ghiza hold?",
      answer: "Pak Ghiza maintains ISO certifications and complies with international food safety standards. We regularly undergo audits and certifications to ensure our products meet the highest quality standards."
    },
    {
      question: "How do you ensure food safety throughout the production process?",
      answer: "We implement comprehensive food safety protocols including hazard identification, risk assessment, environmental monitoring, and regular quality checks at every stage of production."
    },
    {
      question: "What is your policy on halal certification?",
      answer: "All our products are halal certified and we maintain strict compliance with halal requirements throughout our supply chain and production processes."
    },
    {
      question: "How do you handle customer complaints or quality issues?",
      answer: "We have a comprehensive quality management system that includes transparent communication channels, immediate investigation of issues, corrective actions, and a money-back guarantee for customer satisfaction."
    },
    {
      question: "What measures do you take to prevent food fraud?",
      answer: "We implement a comprehensive food defense plan that includes supplier verification, ingredient authentication, supply chain monitoring, and regular security assessments."
    },
    {
      question: "How often do you review and update your quality policies?",
      answer: "Our quality policies are regularly reviewed through management reviews, internal audits, and stakeholder feedback to ensure they remain relevant to our operational context and industry standards."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="premium" className="px-5 py-2.5 text-sm font-medium tracking-wide mb-6 md:px-6 md:py-3 md:text-base">
            Food Safety & Quality Policy
          </Badge>
          <GradientText
            colors={["#f59e0b", "#d97706", "#f59e0b"]}
            animationSpeed={6}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            PAK GHIZA (PRIVATE) LIMITED
          </GradientText>
          <Typewriter
            text="Committed to the production and supply of safe, high-quality food products and ingredients that consistently meet or exceed customer expectations and international standards."
            speed={50}
            loop={false}
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          />
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200 mb-12">
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-amber-500 rounded-full">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  Our Commitment to Excellence
                </CardTitle>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At Pak Ghiza (Pvt.) Ltd, a part of the Progressive Group of Companies, we are committed to the 
                  production and supply of safe, high-quality food products and ingredients that consistently meet 
                  or exceed customer expectations, regulatory requirements, industry norms and international food 
                  safety and quality standards.
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    We recognize our responsibility to uphold food safety and quality as fundamental values, 
                    ensuring the consistency of our products and ingredients. This commitment is guided by the 
                    principle of <span className="font-semibold text-amber-600">truth, benevolence, empathy, 
                    innovation, and accountability</span>, and is supported by our <span className="font-semibold text-amber-600">money back guarantee</span>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Policy Points */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                In pursuit of this policy, we commit to:
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Our comprehensive approach to food safety and quality management is built on seven core principles
              </p>
              
              {/* Featured Cards Layout */}
              <div className="space-y-8">
                {/* First Row - 3 Cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                  {policyPoints.slice(0, 3).map((point, index) => {
                    const Icon = point.icon;
                    return (
                      <Card key={index} className="group bg-white shadow-lg border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${point.color}`}></div>
                        <CardContent className="p-8">
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${point.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-center space-x-2">
                                <span className={`w-8 h-8 rounded-full bg-gradient-to-r ${point.color} text-white text-sm font-bold flex items-center justify-center shadow-md`}>
                                  {index + 1}
                                </span>
                                <h3 className="font-bold text-lg text-gray-900">
                                  {point.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 leading-relaxed text-sm">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Second Row - 2 Cards Centered */}
                <div className="flex justify-center">
                  <div className="grid lg:grid-cols-2 gap-6 max-w-4xl">
                    {policyPoints.slice(3, 5).map((point, index) => {
                      const Icon = point.icon;
                      const actualIndex = index + 3;
                      return (
                        <Card key={actualIndex} className="group bg-white shadow-lg border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                          <div className={`h-2 bg-gradient-to-r ${point.color}`}></div>
                          <CardContent className="p-8">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className={`p-4 rounded-2xl bg-gradient-to-r ${point.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-center justify-center space-x-2">
                                  <span className={`w-8 h-8 rounded-full bg-gradient-to-r ${point.color} text-white text-sm font-bold flex items-center justify-center shadow-md`}>
                                    {actualIndex + 1}
                                  </span>
                                  <h3 className="font-bold text-lg text-gray-900">
                                    {point.title}
                                  </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                  {point.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Third Row - 2 Cards Centered */}
                <div className="flex justify-center">
                  <div className="grid lg:grid-cols-2 gap-6 max-w-4xl">
                    {policyPoints.slice(5, 7).map((point, index) => {
                      const Icon = point.icon;
                      const actualIndex = index + 5;
                      return (
                        <Card key={actualIndex} className="group bg-white shadow-lg border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                          <div className={`h-2 bg-gradient-to-r ${point.color}`}></div>
                          <CardContent className="p-8">
                            <div className="flex flex-col items-center text-center space-y-4">
                              <div className={`p-4 rounded-2xl bg-gradient-to-r ${point.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="space-y-3">
                                <div className="flex items-center justify-center space-x-2">
                                  <span className={`w-8 h-8 rounded-full bg-gradient-to-r ${point.color} text-white text-sm font-bold flex items-center justify-center shadow-md`}>
                                    {actualIndex + 1}
                                  </span>
                                  <h3 className="font-bold text-lg text-gray-900">
                                    {point.title}
                                  </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                  {point.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Section */}
            <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white mb-16">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Communication and Responsibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed">
                  This policy is documented, communicated, understood, and agreed across all levels of the organization. 
                  It is regularly reviewed to ensure it remains relevant to our operational context and stakeholder expectations. 
                  It is also available to all interested parties upon request or through official communication channels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="premium" className="px-8 py-3 text-base font-bold tracking-wide mb-6">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Questions About Our Policies
              </h2>
              <p className="text-xl text-gray-700">
                Find answers to common questions about our food safety and quality policies.
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-amber-200">
                      <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-amber-600">
                        <div className="flex items-center space-x-3">
                          <HelpCircle className="w-5 h-5 text-amber-500" />
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-base leading-relaxed pt-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Have More Questions?
                </h3>
                <p className="text-gray-700 text-lg mb-8">
                  Our team is here to help with any questions about our food safety and quality policies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-amber-500 text-amber-700 hover:bg-amber-50"
                    onClick={() => window.open('tel:+1234567890', '_self')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
