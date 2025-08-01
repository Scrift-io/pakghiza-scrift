
import React, { useEffect, useRef } from 'react';
import { Award, TrendingUp, Star, Users } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/animated-card';
import { useCounter } from '@/hooks/use-counter';

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const yearsCounter = useCounter({ start: 0, end: 25, duration: 2000 });
  const clientsCounter = useCounter({ start: 0, end: 1000, duration: 2500, delay: 200 });

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
        </div>
      </div>
    </div>
  );
};

export default About;
