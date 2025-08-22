import React from 'react';
import { Shield, Users, Leaf, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { GradientText } from '@/components/ui/gradient-text';

const Policy = () => {
  const policies = [
    {
      title: 'Quality Assurance Policy',
      description: 'We are committed to providing the highest quality food ingredients through rigorous testing and adherence to international standards.',
      icon: Shield
    },
    {
      title: 'Sustainability Policy',
      description: 'Our sustainability efforts focus on reducing environmental impact, promoting responsible sourcing, and supporting local communities.',
      icon: Leaf
    },
    {
      title: 'Ethical Business Practices',
      description: 'We uphold the highest ethical standards in all our business dealings, ensuring transparency, fairness, and integrity.',
      icon: Award
    },
    {
      title: 'Customer Satisfaction Policy',
      description: 'We prioritize customer satisfaction by providing exceptional service, timely support, and tailored solutions to meet their needs.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <GradientText 
            colors={["#f59e0b", "#eab308", "#d97706", "#f59e0b"]}
            animationSpeed={6}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Policies
          </GradientText>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, sustainability, and ethical business practices guides everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <policy.icon className="w-6 h-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{policy.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{policy.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
