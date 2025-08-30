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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full">
        {heroImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 w-full ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Product showcase ${index + 1}`} 
              className="w-full h-full object-cover object-center" 
            />
          </div>
        ))}
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50 sm:from-black/40 sm:via-black/20 sm:to-black/30 w-full"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 sm:from-black/50 sm:to-black/30 w-full"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full">
        <div className="absolute top-8 left-4 w-16 h-16 sm:top-20 sm:left-10 sm:w-32 sm:h-32 bg-gradient-to-br from-amber-300/10 to-yellow-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-8 right-4 w-20 h-20 sm:bottom-20 sm:right-10 sm:w-40 sm:h-40 bg-gradient-to-br from-orange-300/10 to-amber-300/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-yellow-200/5 to-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 w-full">
        <div className="animate-fade-in w-full">
          
          <div className="space-y-4 sm:space-y-8 mb-6 sm:mb-12 w-full">
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white border-0 px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 inline-block animate-pulse" />
              Trusted Excellence Since 1998
            </Badge>
            
            <div className="relative px-1 sm:px-6 py-2 sm:py-6 overflow-hidden w-full">
              <h1 className="font-playfair text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] sm:leading-tight text-center w-full break-words">
                <span 
                  className={`inline-block transition-opacity duration-500 ${
                    isTaglineAnimating ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{
                    background: 'linear-gradient(to right, hsl(45, 93%, 62%), hsl(50, 100%, 60%), hsl(39, 100%, 57%))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.4), 0 0 20px rgba(245, 158, 11, 0.4)'
                  }}
                >
                  {taglines[currentTagline]}
                </span>
              </h1>
            </div>
            
            <div className="relative px-2 sm:px-4 max-w-5xl mx-auto w-full">
              <p className="font-inter text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed sm:leading-relaxed text-center w-full break-words"
                 style={{
                   textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)'
                 }}>
                Transforming culinary excellence with{' '}
                <span className="relative inline-block">
                  <span 
                    className={`font-medium transition-opacity duration-500 ${
                      isKeywordAnimating ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                      color: 'hsl(45, 84%, 78%)',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    {keywords[currentKeyword]}
                  </span>
                </span>
                {' '}and unmatched quality standards that professional chefs and manufacturers trust worldwide.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 w-full">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-8 text-base sm:text-lg lg:text-xl rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl border-0 font-semibold min-h-[52px] sm:min-h-[60px] max-w-full" 
              onClick={() => window.location.href = '/products'}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="whitespace-nowrap">Explore Our Products</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 flex-shrink-0" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentSlide(index)} 
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-amber-400 scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75'
            }`} 
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
