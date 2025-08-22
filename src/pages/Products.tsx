import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cake, Candy, Factory, IceCream, Layers3, ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  features: string[];
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  count: number;
}

const Products = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const products: Product[] = [
    {
      id: '1',
      name: "FUN DRIPS - CARAMEL SYRUP",
      image: "/lovable-uploads/1148c3f0-b9fc-4a15-b2a9-464aae369df1.png",
      description: "Premium Caramel Decor Sauce for Dessert Enhancement",
      category: "decorative",
      features: ["Premium quality", "Smooth texture", "Perfect for desserts"]
    },
    {
      id: '2',
      name: "FUN DRIPS - STRAWBERRY SYRUP",
      image: "/lovable-uploads/1060326f-27a6-43ee-96cb-3a2198ae510e.png",
      description: "Delicious Strawberry Decor Sauce with Natural Flavor",
      category: "decorative",
      features: ["Natural strawberry flavor", "Vibrant color", "Versatile application"]
    },
    {
      id: '3',
      name: "FUN DRIPS - CHOCOLATE SYRUP",
      image: "/lovable-uploads/898229e8-d9a2-44b1-9fe1-79f1f51bd1f0.png",
      description: "Rich Chocolate Decor Sauce for Premium Desserts",
      category: "decorative",
      features: ["Rich chocolate taste", "Professional grade", "Easy application"]
    },
    {
      id: '4',
      name: "CHOCOLINO - STANDARD COMPOUND",
      image: "/lovable-uploads/53b8a033-8fc0-4016-af1d-031479d8dd8c.png",
      description: "Superior Quality Dark Chocolate Compound",
      category: "chocolate",
      features: ["Superior taste", "Premium quality", "Professional aroma"]
    },
    {
      id: '5',
      name: "CHOCOLINO - MILK COMPOUND",
      image: "/lovable-uploads/4193ce9d-be87-4e11-9477-ffcb11dc76af.png",
      description: "Premium Milk Chocolate Compound with Rich Flavor",
      category: "chocolate",
      features: ["Creamy milk chocolate", "Superior quality", "Rich taste & aroma"]
    },
    {
      id: '6',
      name: "CHOCOLINO - DARK COMPOUND",
      image: "/lovable-uploads/c3cb38dc-2ece-459b-a69c-b74b36928b64.png",
      description: "Premium Dark Chocolate Compound for Professional Use",
      category: "chocolate",
      features: ["Intense dark chocolate", "Premium quality", "Professional grade"]
    },
    {
      id: '7',
      name: "CHOCOLINO - HAZELNUT SPREAD",
      image: "/lovable-uploads/141b75b4-03a8-408f-a99b-6ea09214a15b.png",
      description: "Indulgent Hazelnut Chocolate Spread",
      category: "spreads",
      features: ["Rich hazelnut flavor", "Smooth texture", "Premium ingredients"]
    },
    {
      id: '8',
      name: "MASTERCREAM - VANILLA",
      image: "/lovable-uploads/f63478f5-7694-4a34-b460-32e7ef3cffbd.png",
      description: "Vanilla flavored cream",
      category: "baking",
      features: ["Vanilla Flavor", "Smooth texture", "Versatile application"]
    },
    {
      id: '9',
      name: "CREAMOLINO - CUSTARD",
      image: "/lovable-uploads/31c2b2d7-eaf0-4390-93ed-15ce571cc8ae.png",
      description: "Custard flavored cream",
      category: "baking",
      features: ["Custard Flavor", "Smooth texture", "Versatile application"]
    },
    {
      id: '10',
      name: "CREAMOLINO - CHOCOLATE",
      image: "/lovable-uploads/1c70f403-22b6-432b-8450-6c89fb9e1f32.png",
      description: "Chocolate flavored cream",
      category: "baking",
      features: ["Chocolate Flavor", "Smooth texture", "Versatile application"]
    },
    {
      id: '11',
      name: "CHOCOLINO - WHITE COMPOUND",
      image: "/lovable-uploads/7910a92b-596d-4408-8298-89435263376a.png",
      description: "White flavored compound",
      category: "compounds",
      features: ["White Flavor", "Smooth texture", "Versatile application"]
    },
    {
      id: '12',
      name: "CHOCOLINO - COCONUT COMPOUND",
      image: "/lovable-uploads/9955234b-6c57-41a4-8582-0348996a400a.png",
      description: "Coconut flavored compound",
      category: "compounds",
      features: ["Coconut Flavor", "Smooth texture", "Versatile application"]
    },
    {
      id: '13',
      name: "CHOCOLINO - ORANGE COMPOUND",
      image: "/lovable-uploads/a9332397-8574-4987-990a-3949e9614317.png",
      description: "Orange flavored compound",
      category: "compounds",
      features: ["Orange Flavor", "Smooth texture", "Versatile application"]
    },
    {
      id: '14',
      name: "INDUSTRIAL SOLUTIONS",
      image: "/lovable-uploads/69991511-8e29-4841-8fef-7999e937919d.png",
      description: "Solutions for industrial use",
      category: "industrial",
      features: ["Industrial Flavor", "Smooth texture", "Versatile application"]
    },
  ];

  const categories: Category[] = [
    { id: 'all', name: 'All Products', icon: ShoppingBag, color: 'bg-gray-100 text-gray-800', count: products.length },
    { id: 'baking', name: 'Baking Creams', icon: Cake, color: 'bg-orange-100 text-orange-800', count: products.filter(p => p.category === 'baking').length },
    { id: 'decorative', name: 'Decor Sauces', icon: Candy, color: 'bg-pink-100 text-pink-800', count: products.filter(p => p.category === 'decorative').length },
    { id: 'chocolate', name: 'Chocolates', icon: IceCream, color: 'bg-amber-100 text-amber-800', count: products.filter(p => p.category === 'chocolate').length },
    { id: 'spreads', name: 'Spreads', icon: Layers3, color: 'bg-purple-100 text-purple-800', count: products.filter(p => p.category === 'spreads').length },
    { id: 'compounds', name: 'Compounds', icon: Breadcrumbs, color: 'bg-blue-100 text-blue-800', count: products.filter(p => p.category === 'compounds').length },
    { id: 'industrial', name: 'Industrial Solutions', icon: Factory, color: 'bg-green-100 text-green-800', count: products.filter(p => p.category === 'industrial').length },
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl modern-title-bold text-gray-900 mb-6">
              Our Product Range
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter font-light">
              Discover our comprehensive collection of premium food ingredients, 
              carefully crafted to meet the highest industry standards
            </p>
          </div>

          {/* Fixed Category Filter with Better Spacing */}
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/30 max-w-5xl">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map(category => {
                  const IconComponent = category.icon;
                  const isActive = activeFilter === category.id;
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                        isActive 
                          ? `${category.color} shadow-lg scale-105` 
                          : `bg-white/90 text-gray-700 hover:bg-gradient-to-r hover:shadow-md hover:scale-105`
                      } ${
                        !isActive && category.id === 'baking' ? 'hover:from-orange-500 hover:to-orange-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'decorative' ? 'hover:from-pink-500 hover:to-pink-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'chocolate' ? 'hover:from-amber-600 hover:to-amber-700 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'spreads' ? 'hover:from-purple-500 hover:to-purple-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'compounds' ? 'hover:from-blue-500 hover:to-blue-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'industrial' ? 'hover:from-green-500 hover:to-green-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'all' ? 'hover:from-gray-500 hover:to-gray-600 hover:text-white' : ''
                      }`}
                    >
                      <IconComponent className="w-5 h-5 flex-shrink-0" />
                      <span className="font-inter font-medium">{category.name}</span>
                      <span className="ml-1 bg-black/10 text-xs px-1.5 py-0.5 rounded-full font-inter font-medium">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white/90 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-inter font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 font-inter font-light leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-sm font-inter font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button 
                      onClick={() => window.location.href = '/contact'}
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
