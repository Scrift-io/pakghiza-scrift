
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeatureCards from '@/components/home/FeatureCards';
import FeaturedProductsCarousel from '@/components/FeaturedProductsCarousel';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';
import TextMarquee from '@/components/ui/text-marquee';

const Home = () => {
  // Use niche-relevant background images (industry/manufacturing scenes, not products)
  const heroImages = [
    "/lovable-uploads/966936c5-6052-44a9-a354-373285053f76.png",
    "/lovable-uploads/677e12d8-6763-4fb9-88ee-3025f225b2b0.png",
    "/lovable-uploads/a342924e-7fc4-404b-b6c3-39ce388725e4.png"
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
