
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
      name: "PAK MAYA - SUPER EKA 300",
      image: "/lovable-uploads/ab13828d-6ff9-4b6d-aa8f-75f02fbc89e8.png",
      description: "Professional-Grade Softness, Volume & Golden Perfection in Every Loaf",
      category: "Baking Agent",
      features: ["Professional-grade quality", "Enhanced softness & volume", "Golden crust perfection"]
    },
    {
      name: "PAK MAYA - EKA PAN",
      image: "/lovable-uploads/a342924e-7fc4-404b-b6c3-39ce388725e4.png",
      description: "Versatile Bread Improver for Reliable Texture and Consistency",
      category: "Baking Agent",
      features: ["Versatile application", "Superior texture", "Consistent results"]
    },
    {
      name: "PAK MAYA - ALBATROS",
      image: "/lovable-uploads/a2fd7ec4-7aae-4209-8952-440fc8e5db20.png",
      description: "Premium Dough Performance for Softer, Sliceable, High-Quality Bread",
      category: "Baking Agent",
      features: ["Premium quality", "Multifunctional improver", "Sliceable soft bread"]
    },
    {
      name: "PAK MAYA - EKA EXCEL FROST",
      image: "/lovable-uploads/d75d7d6f-f3de-41f7-81ce-84e84120910f.png",
      description: "Superior Frozen Dough Solution for Long-Lasting Freshness & Structure",
      category: "Baking Agent",
      features: ["Frozen dough specialist", "Enhanced dough strength", "Prevents freeze damage"]
    },
    {
      name: "PAK GHIZA - BAKING POWDER",
      image: "/lovable-uploads/677e12d8-6763-4fb9-88ee-3025f225b2b0.png",
      description: "Consistent Rise, Flawless Texture – Every Bake, Every Time",
      category: "Baking Agent",
      features: ["Consistent leavening", "Fine crumb texture", "Uniform performance"]
    },
    {
      name: "SOY FLOUR - FULL FAT ENZYME ACTIVE",
      image: "/lovable-uploads/bf220f1d-6528-4e7e-9bbe-6af34bb92678.png",
      description: "Boost Dough Strength and Nutrition with Enzyme-Rich Soy Flour",
      category: "Flour",
      features: ["Protein-rich", "Enhanced dough strength", "Nutritional enhancement"]
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
