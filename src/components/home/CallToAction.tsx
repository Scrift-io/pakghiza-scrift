
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-modern mb-4 sm:mb-6 leading-tight sm:leading-relaxed overflow-visible py-2 px-2">
          Ready to Elevate Your Products?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
          Join thousands of satisfied customers who trust Pak Ghiza for their premium ingredient needs
        </p>
        <Button 
          size="lg"
          className="w-full xs:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 text-base sm:text-lg md:text-xl rounded-xl transition-all duration-300 hover:scale-105 shadow-xl btn-hover mx-4 sm:mx-0 font-semibold"
          onClick={() => window.location.href = '/contact'}
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
          Start Your Journey Today
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
