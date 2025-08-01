
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FAQs = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: 'What is the shelf life of your products?',
      answer: 'Most of our products have a shelf life of 2-3 years when stored in cool, dry conditions. Specific shelf life information is printed on each package.'
    },
    {
      question: 'Do you provide technical support for product usage?',
      answer: 'Yes, we offer comprehensive technical support including usage guidelines, formulation assistance, and troubleshooting help for all our products.'
    },
    {
      question: 'Are your products halal certified?',
      answer: 'Yes, all Pak Ghiza products are halal certified and meet international food safety standards.'
    },
    {
      question: 'Can I get samples before placing a bulk order?',
      answer: 'Yes, we provide samples for evaluation. Please contact our sales team to request samples for your specific requirements.'
    },
    {
      question: 'What are your minimum order quantities?',
      answer: 'Minimum order quantities vary by product. Please contact us for specific MOQ information and bulk pricing.'
    },
    {
      question: 'Do you offer custom formulations?',
      answer: 'Yes, we work with clients to develop custom formulations based on their specific requirements and production needs.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, letters of credit, and cash on delivery for local orders.'
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We have a comprehensive quality control system including raw material testing, in-process monitoring, and final product analysis before shipment.'
    },
    {
      question: 'Do you provide delivery services?',
      answer: 'Yes, we offer delivery services across Pakistan. Delivery charges and timelines vary based on location and order size.'
    },
    {
      question: 'Can you provide certificates of analysis?',
      answer: 'Yes, we provide certificates of analysis (COA) for all our products upon request, detailing the chemical and microbiological specifications.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our customer support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Support
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+92XXXXXXXXX'}
                  className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
