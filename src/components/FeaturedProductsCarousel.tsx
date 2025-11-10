
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const products: Product[] = [
    {
      name: "FUN DRIPS - CARAMEL SYRUP",
      image: "/lovable-uploads/1148c3f0-b9fc-4a15-b2a9-464aae369df1.png",
      description: "Premium Caramel Decor Sauce for Dessert Enhancement",
      category: "Decor Sauce",
      features: ["Premium quality", "Smooth texture", "Perfect for desserts"]
    },
    {
      name: "FUN DRIPS - STRAWBERRY SYRUP",
      image: "/lovable-uploads/1060326f-27a6-43ee-96cb-3a2198ae510e.png",
      description: "Delicious Strawberry Decor Sauce with Natural Flavor",
      category: "Decor Sauce",
      features: ["Natural strawberry flavor", "Vibrant color", "Versatile application"]
    },
    {
      name: "FUN DRIPS - CHOCOLATE SYRUP",
      image: "/lovable-uploads/898229e8-d9a2-44b1-9fe1-79f1f51bd1f0.png",
      description: "Rich Chocolate Decor Sauce for Premium Desserts",
      category: "Decor Sauce",
      features: ["Rich chocolate taste", "Professional grade", "Easy application"]
    },
    {
      name: "CHOCOLINO - STANDARD COMPOUND",
      image: "/lovable-uploads/53b8a033-8fc0-4016-af1d-031479d8dd8c.png",
      description: "Superior Quality Dark Chocolate Compound",
      category: "Chocolate",
      features: ["Superior taste", "Premium quality", "Professional aroma"]
    },
    {
      name: "CHOCOLINO - MILK COMPOUND",
      image: "/lovable-uploads/4193ce9d-be87-4e11-9477-ffcb11dc76af.png",
      description: "Premium Milk Chocolate Compound with Rich Flavor",
      category: "Chocolate",
      features: ["Creamy milk chocolate", "Superior quality", "Rich taste & aroma"]
    },
    {
      name: "CHOCOLINO - DARK COMPOUND",
      image: "/lovable-uploads/c3cb38dc-2ece-459b-a69c-b74b36928b64.png",
      description: "Premium Dark Chocolate Compound for Professional Use",
      category: "Chocolate",
      features: ["Intense dark chocolate", "Premium quality", "Professional grade"]
    },
    {
      name: "CHOCOLINO - HAZELNUT SPREAD",
      image: "/lovable-uploads/141b75b4-03a8-408f-a99b-6ea09214a15b.png",
      description: "Indulgent Hazelnut Chocolate Spread",
      category: "Spread",
      features: ["Rich hazelnut flavor", "Smooth texture", "Premium ingredients"]
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
              onClick={() => navigate('/products')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore All Products
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedProductsCarousel;
