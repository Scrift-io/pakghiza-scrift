
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeatureCards from '@/components/home/FeatureCards';
import FeaturedProductsCarousel from '@/components/FeaturedProductsCarousel';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';
import TextMarquee from '@/components/ui/text-marquee';

const Home = () => {
  // Updated with new styled product showcase images
  const heroImages = [
    "/lovable-uploads/f63478f5-7694-4a34-b460-32e7ef3cffbd.png",
    "/lovable-uploads/31c2b2d7-eaf0-4390-93ed-15ce571cc8ae.png",
    "/lovable-uploads/1c70f403-22b6-432b-8450-6c89fb9e1f32.png"
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
