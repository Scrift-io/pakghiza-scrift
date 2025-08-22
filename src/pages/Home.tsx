
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeatureCards from '@/components/home/FeatureCards';
import FeaturedProductsCarousel from '@/components/FeaturedProductsCarousel';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';
import TextMarquee from '@/components/ui/text-marquee';

const Home = () => {
  // Updated with new product showcase images
  const heroImages = [
    "/lovable-uploads/86e3c425-a665-45a0-bfb2-5de226988f5a.png",
    "/lovable-uploads/f5dc64a7-99cb-4f24-9a87-84124218c9db.png",
    "/lovable-uploads/221d4aeb-900a-4a87-8ed4-0f49e803cfca.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <HeroSection heroImages={heroImages} />
      <FeatureCards />
      <FeaturedProductsCarousel />
      <StatsSection />
      
      {/* Brand Marquee Section */}
      <section className="py-12 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 overflow-hidden">
        <div className="space-y-4">
          <TextMarquee
            baseVelocity={-2}
            delay={0}
            clasname="font-bold tracking-[-0.05em] leading-[90%] text-white/90"
          >
            PREMIUM INGREDIENTS • EXCEPTIONAL QUALITY • TRUSTED PARTNERS •
          </TextMarquee>
          <TextMarquee
            baseVelocity={2}
            delay={200}
            clasname="font-bold tracking-[-0.05em] leading-[90%] text-white/80"
          >
            BAKING EXCELLENCE • FOOD INNOVATION • INDUSTRY LEADERS •
          </TextMarquee>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default Home;
