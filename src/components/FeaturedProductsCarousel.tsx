
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CircularGallery from './CircularGallery';

interface Product {
  name: string;
  image: string;
  description: string;
  category: string;
  features: string[];
}

const FeaturedProductsCarousel = () => {
  const products: Product[] = [
    {
      name: "Super Eka-300 Bread Improver",
      image: "/lovable-uploads/56a0dfbb-f740-41ad-98b3-fd2f7d4a87fb.png",
      description: "Premium bread improver for enhanced texture and extended shelf life",
      category: "Baking Agent",
      features: ["Enhanced texture", "Extended shelf life", "Improved dough handling"]
    },
    {
      name: "Pakmaya Gold Instant Yeast",
      image: "/lovable-uploads/bf220f1d-6528-4e7e-9bbe-6af34bb92678.png",
      description: "Premium instant dry yeast for professional baking applications",
      category: "Leavening",
      features: ["High fermentation power", "Consistent performance", "Long shelf life"]
    },
    {
      name: "Premium Cocoa Powder",
      image: "/lovable-uploads/ab13828d-6ff9-4b6d-aa8f-75f02fbc89e8.png",
      description: "Dutch-processed cocoa powder for rich chocolate flavor",
      category: "Flavoring",
      features: ["Rich chocolate flavor", "Excellent solubility", "Premium quality"]
    },
    {
      name: "Natural Preservative Blend",
      image: "/lovable-uploads/d75d7d6f-f3de-41f7-81ce-84e84120910f.png",
      description: "Natural preservation solutions for extended freshness",
      category: "Preservative",
      features: ["Natural ingredients", "Extended shelf life", "Clean label"]
    },
    {
      name: "Protein Enhancement Complex",
      image: "/lovable-uploads/e4e3ccf4-aeef-4435-81b6-e64e5d94b47e.png",
      description: "Complete protein supplements for nutritional enhancement",
      category: "Nutrition",
      features: ["Complete amino profile", "Easy dissolution", "Multiple sources"]
    },
    {
      name: "Artisan Flavor System",
      image: "/lovable-uploads/ecb641e8-d3bd-483c-9466-c11cb901f8f3.png",
      description: "Premium flavoring system for exceptional taste profiles",
      category: "Flavoring",
      features: ["Natural extracts", "Concentrated formulas", "Global sourcing"]
    },
    {
      name: "Professional Emulsifier Blend",
      image: "/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png",
      description: "Advanced emulsifiers for superior texture and stability",
      category: "Emulsifier",
      features: ["Superior binding", "Texture enhancement", "Long-lasting stability"]
    },
    {
      name: "Calcium Propionate Food Grade",
      image: "/lovable-uploads/d98e959f-7b74-4857-9138-65e6d330ad58.png",
      description: "Premium food-grade preservative for mold prevention",
      category: "Preservative",
      features: ["Effective mold prevention", "Food safety certified", "Extended freshness"]
    }
  ];

  // Transform products for the circular gallery
  const galleryItems = products.map(product => ({
    image: product.image,
    text: product.name,
    category: product.category,
    description: product.description
  }));

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient-modern mb-4 md:text-4xl lg:text-5xl">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto md:text-xl">
            Discover our premium range of food ingredients trusted by professionals worldwide
          </p>
        </div>
        
        <div className="relative">
          <CircularGallery
            items={galleryItems}
            bend={2}
            textColor="#f59e0b"
            borderRadius={0.08}
            font="bold 24px Inter, sans-serif"
            scrollSpeed={1.5}
            scrollEase={0.08}
          />
          
          <div className="text-center mt-8">
            <Button 
              onClick={() => window.location.href = '/products'}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore All Products
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer"
            >
              <div className="mb-4">
                <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 group-hover:bg-amber-200">
                  {product.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-amber-600">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 transition-colors duration-300 group-hover:text-gray-700">
                {product.description}
              </p>
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 transition-all duration-300 group-hover:bg-amber-600 group-hover:scale-125"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsCarousel;
