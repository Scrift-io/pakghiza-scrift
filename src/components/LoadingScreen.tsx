
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 2 + 0.5; // Natural progression with variation
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 to-white transition-all duration-1000 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-80 h-80">
        {/* Logo container with natural water fill effect */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Background logo (grayscale) */}
          <img 
            src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" 
            alt="Pak Ghiza Logo" 
            className="absolute inset-0 w-full h-full object-contain opacity-30 filter grayscale"
          />
          
          {/* Water fill container with sloshing animation */}
          <div 
            className="absolute inset-0 overflow-hidden transition-all duration-300 ease-out"
            style={{
              clipPath: `polygon(0 ${100 - progress}%, 100% ${100 - progress}%, 100% 100%, 0 100%)`
            }}
          >
            {/* Dynamic water surface with natural sloshing */}
            <div 
              className="absolute w-full h-4 bg-gradient-to-r from-amber-400/80 via-yellow-400/90 to-amber-500/80"
              style={{
                top: `${100 - progress}%`,
                transform: 'translateY(-50%)',
                borderRadius: '50%',
                animation: 'waterSlosh 1.8s ease-in-out infinite'
              }}
            />
            
            {/* Secondary wave layer for depth */}
            <div 
              className="absolute w-full h-3 bg-gradient-to-r from-yellow-300/60 via-amber-300/70 to-yellow-400/60"
              style={{
                top: `${100 - progress + 1}%`,
                transform: 'translateY(-50%)',
                borderRadius: '60%',
                animation: 'waterSlosh 2.2s ease-in-out infinite reverse'
              }}
            />
            
            {/* Filled logo with vibrant colors */}
            <img 
              src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" 
              alt="Pak Ghiza Logo" 
              className="w-full h-full object-contain"
              style={{
                filter: 'brightness(1.2) saturate(1.4) contrast(1.1)',
              }}
            />
            
            {/* Realistic water bubbles that rise */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/50 rounded-full"
                  style={{
                    width: `${Math.random() * 6 + 3}px`,
                    height: `${Math.random() * 6 + 3}px`,
                    left: `${20 + i * 12 + Math.random() * 8}%`,
                    bottom: `${Math.random() * 20}%`,
                    animation: `bubbleRise ${1.5 + Math.random() * 1.5}s ease-out infinite`,
                    animationDelay: `${i * 0.3 + Math.random() * 0.4}s`
                  }}
                />
              ))}
            </div>
            
            {/* Water shimmer effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-40"
              style={{
                animation: 'shimmerWave 2.5s ease-in-out infinite',
                borderRadius: '50%'
              }}
            />
            
            {/* Surface tension ripples */}
            <div 
              className="absolute w-full h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                top: `${100 - progress}%`,
                transform: 'translateY(-50%)',
                animation: 'surfaceRipple 1.4s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS animations for natural water movement */}
      <style>{`
        @keyframes waterSlosh {
          0%, 100% { 
            transform: translateY(-50%) scaleX(1) scaleY(1) skewX(0deg);
            opacity: 0.9;
          }
          25% { 
            transform: translateY(-50%) scaleX(1.05) scaleY(1.2) skewX(2deg);
            opacity: 1;
          }
          50% { 
            transform: translateY(-50%) scaleX(0.95) scaleY(0.8) skewX(-1deg);
            opacity: 0.95;
          }
          75% { 
            transform: translateY(-50%) scaleX(1.02) scaleY(1.1) skewX(-2deg);
            opacity: 1;
          }
        }
        
        @keyframes shimmerWave {
          0% { 
            transform: translateX(-150%) rotate(-45deg);
            opacity: 0;
          }
          50% { 
            transform: translateX(0%) rotate(-45deg);
            opacity: 1;
          }
          100% { 
            transform: translateX(150%) rotate(-45deg);
            opacity: 0;
          }
        }
        
        @keyframes bubbleRise {
          0% { 
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-30px) scale(1.2);
            opacity: 1;
          }
          100% { 
            transform: translateY(-60px) scale(0.6);
            opacity: 0;
          }
        }
        
        @keyframes surfaceRipple {
          0%, 100% { 
            opacity: 0.2;
            transform: translateY(-50%) scaleX(1);
          }
          50% { 
            opacity: 0.5;
            transform: translateY(-50%) scaleX(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
