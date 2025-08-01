
import React from 'react';
import { Users, Building2, Globe, Award } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/animated-card';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Trusted by businesses nationwide"
    },
    {
      icon: Building2,
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise and knowledge"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Product Lines",
      description: "Comprehensive ingredient solutions"
    },
    {
      icon: Award,
      number: "99%",
      label: "Quality Guarantee",
      description: "Consistent product excellence"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-gradient-modern">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has made us a preferred partner for food manufacturers across Pakistan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCard 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100"
            >
              <div className="inline-flex p-4 rounded-2xl bg-amber-50 mb-6 transition-all duration-300 group-hover:bg-amber-100 group-hover:scale-110">
                <stat.icon className="w-8 h-8 text-amber-500 transition-all duration-300 group-hover:text-amber-600 group-hover:rotate-12" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 transition-all duration-300 group-hover:text-amber-600 group-hover:scale-110">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-amber-600">
                {stat.label}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                {stat.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
