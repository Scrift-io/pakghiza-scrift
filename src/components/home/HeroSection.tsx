
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Award, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  heroImages: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroImages
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [isTaglineAnimating, setIsTaglineAnimating] = useState(false);
  const [isKeywordAnimating, setIsKeywordAnimating] = useState(false);

  const taglines = ["Premium Ingredients", "Culinary Excellence", "Quality Solutions", "Trusted Partners"];
  const keywords = ["world-class ingredients", "premium quality standards", "innovative food solutions", "exceptional taste profiles"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const taglineTimer = setInterval(() => {
      setIsTaglineAnimating(true);
      setTimeout(() => {
        setCurrentTagline(prev => (prev + 1) % taglines.length);
        setIsTaglineAnimating(false);
      }, 500);
    }, 3000);
    return () => clearInterval(taglineTimer);
  }, [taglines.length]);

  useEffect(() => {
    const keywordTimer = setInterval(() => {
      setIsKeywordAnimating(true);
      setTimeout(() => {
        setCurrentKeyword(prev => (prev + 1) % keywords.length);
        setIsKeywordAnimating(false);
      }, 500);
    }, 4000);
    return () => clearInterval(keywordTimer);
  }, [keywords.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Product showcase ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-300/10 to-yellow-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-300/10 to-amber-300/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/5 to-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-8">
        <div className="animate-fade-in">
          
          <div className="space-y-8 mb-12">
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white border-0 px-6 py-3 text-sm font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              <Award className="w-4 h-4 mr-2 inline-block animate-pulse" />
              Trusted Excellence Since 1998
            </Badge>
            
            <div className="relative px-6 py-6 overflow-hidden">
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-center">
                <span 
                  className={`inline-block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent transition-opacity duration-500 ${
                    isTaglineAnimating ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(245, 158, 11, 0.3)'
                  }}
                >
                  {taglines[currentTagline]}
                </span>
              </h1>
            </div>
            
            <div className="relative px-4">
              <p className="font-inter text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed text-center"
                 style={{
                   textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0 0 15px rgba(0,0,0,0.3)'
                 }}>
                Transforming culinary excellence with{' '}
                <span className="relative inline-block">
                  <span 
                    className={`text-amber-200 font-medium transition-opacity duration-500 ${
                      isKeywordAnimating ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                      textShadow: '2px 2px 4px rgba(0,0,0,0.7), 0 0 10px rgba(245, 158, 11, 0.2)'
                    }}
                  >
                    {keywords[currentKeyword]}
                  </span>
                </span>
                {' '}and unmatched quality standards that professional chefs and manufacturers trust worldwide.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl md:px-12 md:py-8 md:text-xl border-0" 
              onClick={() => window.location.href = '/products'}
            >
              <Sparkles className="w-5 h-5 mr-3 md:w-6 md:h-6" />
              Explore Our Products
              <ArrowRight className="w-5 h-5 ml-3 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-400 scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75'
            }`} 
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
