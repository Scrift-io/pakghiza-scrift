import React from 'react';
import { Factory, Truck, Shield, Award, Users, Cog } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GradientText } from '@/components/ui/gradient-text';

const Industrial = () => {
  const solutions = [
    {
      title: 'Customized Premixes',
      description: 'Tailored premixes designed to meet specific nutritional and functional requirements, ensuring consistent quality and performance.',
      icon: Cog,
      features: [
        'Custom ingredient blending',
        'Nutrient fortification',
        'Texture and flavor enhancement',
      ],
    },
    {
      title: 'Supply Chain Solutions',
      description: 'Efficient and reliable supply chain management, ensuring timely delivery of ingredients and minimizing disruptions.',
      icon: Truck,
      features: [
        'Global sourcing network',
        'Inventory management',
        'Logistics optimization',
      ],
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes, guaranteeing the safety and purity of all ingredients.',
      icon: Shield,
      features: [
        'Raw material testing',
        'In-process monitoring',
        'Final product analysis',
      ],
    },
    {
      title: 'Technical Support',
      description: 'Expert technical support and formulation assistance, helping you optimize your products and processes.',
      icon: Award,
      features: [
        'Formulation guidance',
        'Troubleshooting assistance',
        'Product development support',
      ],
    },
    {
      title: 'Training Programs',
      description: 'Comprehensive training programs for your team, ensuring they have the knowledge and skills to maximize the value of our ingredients.',
      icon: Users,
      features: [
        'Ingredient handling',
        'Processing techniques',
        'Quality control',
      ],
    },
    {
      title: 'Manufacturing Solutions',
      description: 'Advanced manufacturing solutions that enhance production efficiency and reduce costs.',
      icon: Factory,
      features: [
        'Process optimization',
        'Equipment recommendations',
        'Automation strategies',
      ],
    },
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
            Industrial Solutions
          </GradientText>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive food ingredient solutions designed for large-scale manufacturing and industrial applications.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <solution.icon className="w-6 h-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{solution.description}</p>
                <ul>
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 mb-2">
                      <Badge variant="secondary" className="mr-2">{i + 1}</Badge>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Scale Up?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your industrial food ingredient needs and how we can help you achieve your goals.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industrial;
