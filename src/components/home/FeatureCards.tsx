
import React from 'react';
import { Shield, Award, Users, Truck, Leaf, Clock } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/animated-card';

const FeatureCards = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring the highest quality standards for all our food ingredients and additives.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Award,
      title: "Premium Products", 
      description: "Sourced from trusted suppliers worldwide, our ingredients meet international food safety standards.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our technical team provides comprehensive support for product applications and formulations.",
      color: "text-purple-500", 
      bgColor: "bg-purple-50"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Efficient nationwide distribution network ensuring timely delivery of your orders.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Committed to environmentally responsible sourcing and manufacturing processes.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock customer service to address your queries and provide technical assistance.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Why Choose <span className="text-gradient-modern">Pak Ghiza</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Leading the food industry with innovative solutions, premium quality products, and unmatched customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-2xl ${feature.bgColor} mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110`}>
                <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color} transition-all duration-300 group-hover:rotate-12`} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-amber-600">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                {feature.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FeatureCards;
