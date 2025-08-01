
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gradient-modern mb-6 md:text-4xl lg:text-5xl leading-relaxed overflow-visible py-2">
          Ready to Elevate Your Products?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto md:text-xl">
          Join thousands of satisfied customers who trust Pak Ghiza for their premium ingredient needs
        </p>
        <Button 
          size="lg"
          className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl btn-hover md:px-12 md:py-8 md:text-xl"
          onClick={() => window.location.href = '/contact'}
        >
          <Phone className="w-5 h-5 mr-3 md:w-6 md:h-6" />
          Start Your Journey Today
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
