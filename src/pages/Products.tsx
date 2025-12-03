import React, { useState, useRef } from 'react';
import { Search, ShoppingCart, X, Package, Cake, Shield, Palette, Wheat, Coffee, Droplet, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { GradientText } from '@/components/ui/gradient-text';
import { Typewriter } from '@/components/ui/typewriter-text';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 products per page for better mobile experience
  const productsRef = useRef(null);

  const products = [
    // TIER 1: HIGH-QUALITY IMAGES WITH PLAIN BACKGROUNDS (FUNDRIPS SYRUPS)
    {
      id: 20,
      name: 'FUNDRIPS - CHOCOLATE SYRUP',
      category: 'syrup',
      image: '/lovable-uploads/4908033d-4add-48fe-b311-417be43da8a6.png',
      backImage: '/lovable-uploads/d4686f25-6ab0-47df-854e-3a1c469313c5.png',
      description: 'Classic Cocoa Richness for Desserts, Beverages & More. Classic chocolate syrup that enhances ice cream, shakes, cakes, and more with deep cocoa richness.',
      usageRate: 'As needed',
      packSize: '750g PET Bottle x 12 pcs',
      shelfLife: '2 Years',
      features: ['Classic cocoa richness', 'Versatile use', 'Deep flavor', 'Premium syrup'],
      price: 'Contact for pricing'
    },
    {
      id: 21,
      name: 'FUNDRIPS - STRAWBERRY SYRUP',
      category: 'syrup',
      image: '/lovable-uploads/a366421d-9444-4bb0-8ac8-4fd8f1019c90.png',
      backImage: '/lovable-uploads/7bf98528-bded-4130-8b77-cde8c954ba89.png',
      description: 'Sweet Strawberry Flavor That Pops in Every Dish. Fresh strawberry flavor for baked goods and desserts, delivering sweet fruitiness and visual appeal.',
      usageRate: 'As needed',
      packSize: '750g PET Bottle x 12 pcs',
      shelfLife: '2 Years',
      features: ['Fresh strawberry flavor', 'Sweet fruitiness', 'Visual appeal', 'Versatile application'],
      price: 'Contact for pricing'
    },
    {
      id: 22,
      name: 'FUNDRIPS - CARAMEL SYRUP',
      category: 'syrup',
      image: '/lovable-uploads/91deaf67-a331-42f7-bc09-6f2ab5269bdc.png',
      backImage: '/lovable-uploads/6c8e1e68-ab78-41db-8381-42a153afe5e6.png',
      description: 'Golden Caramel Goodness – Smooth, Sweet, and Buttery. Sweet, buttery caramel flavor ideal for coffee, desserts, and garnishing.',
      usageRate: 'As needed',
      packSize: '750g PET Bottle x 12 pcs',
      shelfLife: '2 Years',
      features: ['Golden caramel', 'Smooth & buttery', 'Coffee compatible', 'Perfect garnishing'],
      price: 'Contact for pricing'
    },

    // TIER 2: PREMIUM CHOCOLATE PRODUCTS WITH MULTIPLE HIGH-QUALITY IMAGES
    {
      id: 12,
      name: 'CHOCOLINO CHOCOLATE SLAB - PREMIUM DARK',
      category: 'chocolate',
      image: '/lovable-uploads/862a84e4-6d6b-4236-bbc1-b101da5a3eb5.png',
      backImage: '/lovable-uploads/136b263c-2458-4fd1-a6f3-90ece00e0fc0.png',
      description: 'Deep, Intense Flavor for Luxurious Chocolate Creations. Deep, rich chocolate flavor designed for professional use in cakes, brownies, and fudge recipes.',
      usageRate: 'As needed',
      packSize: '2Kg x 5 pcs',
      shelfLife: '2 Years',
      features: ['Deep intense flavor', 'Professional grade', 'Premium dark chocolate', 'Luxurious creations'],
      price: 'Contact for pricing'
    },
    {
      id: 13,
      name: 'CHOCOLINO CHOCOLATE SLAB - PREMIUM MILK',
      category: 'chocolate',
      image: '/lovable-uploads/e5da5cb5-d743-4313-9f66-ed330509c1c5.png',
      backImage: '/lovable-uploads/96a536b3-c57e-4177-8792-d85d41b62743.png',
      description: 'Velvety Milk Chocolate for Decadent Desserts. Lusciously smooth milk chocolate perfect for creamy cakes and milky brownies.',
      usageRate: 'As needed',
      packSize: '2Kg x 5 pcs',
      shelfLife: '2 Years',
      features: ['Velvety smooth', 'Decadent desserts', 'Premium milk chocolate', 'Creamy texture'],
      price: 'Contact for pricing'
    },
    {
      id: 14,
      name: 'CHOCOLINO CHOCOLATE SLAB - PREMIUM WHITE',
      category: 'chocolate',
      image: '/lovable-uploads/c480a5c6-1231-4251-8f0f-57c6155b796c.png',
      backImage: '/lovable-uploads/a3c995a3-d10e-4996-af11-07e32ffbc8aa.png',
      description: 'Elegant, Creamy White Chocolate for Gourmet Treats. Smooth, rich white chocolate for elegant desserts like ganache and fantasy cakes.',
      usageRate: 'As needed',
      packSize: '2Kg x 5 pcs',
      shelfLife: '2 Years',
      features: ['Elegant creamy texture', 'Gourmet treats', 'Premium white chocolate', 'Fantasy cakes'],
      price: 'Contact for pricing'
    },
    {
      id: 15,
      name: 'CHOCOLINO CHOCOLATE SLAB - STANDARD DARK',
      category: 'chocolate',
      image: '/lovable-uploads/5ef642fc-15f3-41d6-bf75-570001fb1245.png',
      backImage: '/lovable-uploads/4da2fce8-0116-4b6f-81a1-85789d1185ec.png',
      description: 'Balanced Dark Chocolate for Everyday Cake Excellence. A well-balanced dark chocolate ideal for cakes and desserts like Kitkat and Cadbury cakes.',
      usageRate: 'As needed',
      packSize: '2Kg x 5 pcs',
      shelfLife: '2 Years',
      features: ['Well-balanced flavor', 'Everyday excellence', 'Standard dark chocolate', 'Versatile use'],
      price: 'Contact for pricing'
    },
    {
      id: 10,
      name: 'CALCIUM ACETATE',
      category: 'preservative',
      image: '/lovable-uploads/ecb641e8-d3bd-483c-9466-c11cb901f8f3.png',
      description: 'Effective Rope Prevention for Extended Shelf Life. A powerful preservative preventing rope formation and spoilage in baked goods, extending shelf life without compromising quality.',
      usageRate: '0.1-0.2% of total weight',
      packSize: '25Kg Bag | 1Kg x 10 pcs',
      shelfLife: '2 Years',
      features: ['Rope prevention', 'Spoilage protection', 'Quality preservation', 'Extended shelf life'],
      price: 'Contact for pricing'
    },
    {
      id: 9,
      name: 'CALCIUM PROPIONATE',
      category: 'preservative',
      image: '/lovable-uploads/56a0dfbb-f740-41ad-98b3-fd2f7d4a87fb.png',
      description: 'Reliable Mold Inhibition Without Compromising Fermentation. A safe, halal-certified preservative that extends the mold-free shelf life of bread without affecting yeast activity.',
      usageRate: '0.1-0.3% of flour weight',
      packSize: '25Kg Bag | 1Kg x 10 pcs',
      shelfLife: '2 Years',
      features: ['Mold inhibition', 'Halal certified', 'No yeast interference', 'Extended shelf life'],
      price: 'Contact for pricing'
    },

    // TIER 3: GOOD QUALITY SINGLE IMAGES - PAK GHIZA PRODUCTS WITH BACK IMAGES
    {
      id: 8,
      name: 'PAK GHIZA - CAKE GEL',
      category: 'baking',
      image: '/lovable-uploads/6c6c03a0-2e73-4dc6-8698-9a1dcf947a34.png',
      backImage: '/lovable-uploads/7f7dc588-fbfc-4be6-8139-7390d374270e.png',
      description: 'Enhance Volume, Moisture & Softness in Every Slice. A translucent cake improver gel that increases batter volume, improves crumb softness, and retains moisture for longer freshness.',
      usageRate: 'As recommended',
      packSize: '1Kg x 12 pcs | Custom: 4Kg & 15Kg',
      shelfLife: '1 Year',
      features: ['Enhanced volume', 'Improved moisture retention', 'Softer crumb', 'Longer freshness'],
      price: 'Contact for pricing'
    },

    // TIER 4: SINGLE QUALITY IMAGES - PAK MAYA & PAK GHIZA
    {
      id: 1,
      name: 'PAK MAYA - SUPER EKA 300',
      category: 'baking',
      image: '/lovable-uploads/ab13828d-6ff9-4b6d-aa8f-75f02fbc89e8.png',
      description: 'Professional-Grade Softness, Volume & Golden Perfection in Every Loaf. Enhance your bread quality with Super EKA-300 – a powerful bread improver that boosts dough handling, improves bread softness and texture, and delivers a golden crust.',
      usageRate: 'As recommended',
      packSize: '500g x 20 pcs | 10Kg Bag',
      shelfLife: '2 Years',
      features: ['Professional-grade quality', 'Enhanced softness & volume', 'Golden crust perfection', 'Extended freshness'],
      price: 'Contact for pricing'
    },
    {
      id: 6,
      name: 'PAK GHIZA - BAKING POWDER',
      category: 'baking',
      image: '/lovable-uploads/677e12d8-6763-4fb9-88ee-3025f225b2b0.png',
      description: 'Consistent Rise, Flawless Texture – Every Bake, Every Time. Ensure consistent leavening and fine crumb texture in cakes, biscuits, and cookies. Produces a soft, white interior and uniform baking performance.',
      usageRate: 'As recommended',
      packSize: '4.5Kg | 10Kg Bag',
      shelfLife: '2 Years',
      features: ['Consistent leavening', 'Fine crumb texture', 'Soft white interior', 'Uniform performance'],
      price: 'Contact for pricing'
    },
    {
      id: 7,
      name: 'PAK GHIZA - BREADCRUMBS',
      category: 'baking',
      image: '/lovable-uploads/123278a7-4077-469b-97f7-07a680cc5957.png',
      description: 'Golden Crunch, Irresistible Texture – Fry or Bake to Perfection. Crispy, golden coating for fried or baked foods. Available in white and orange variants, our breadcrumbs deliver irresistible crunch and texture.',
      usageRate: 'As needed for coating',
      packSize: '10Kg Bag | 1Kg x 10 pcs',
      shelfLife: '9 Months',
      features: ['Golden crispy coating', 'White & orange variants', 'Irresistible crunch', 'Versatile application'],
      price: 'Contact for pricing'
    },
    {
      id: 11,
      name: 'SOY FLOUR - FULL FAT ENZYME ACTIVE',
      category: 'flour',
      image: '/lovable-uploads/bf220f1d-6528-4e7e-9bbe-6af34bb92678.png',
      description: 'Boost Dough Strength and Nutrition with Enzyme-Rich Soy Flour. Protein-rich, high-fat soy flour that enhances dough strength, crumb brightness, and nutritional value – perfect for healthier baking.',
      usageRate: '1-3% of flour weight',
      packSize: '25Kg Bag | 1Kg x 10 pcs',
      shelfLife: '6 Months',
      features: ['Protein-rich', 'Enhanced dough strength', 'Brighter crumb', 'Nutritional enhancement'],
      price: 'Contact for pricing'
    },
    {
      id: 19,
      name: 'CHOCOLINO - COCOA POWDER',
      category: 'flavoring',
      image: '/lovable-uploads/966936c5-6052-44a9-a354-373285053f76.png',
      description: 'Pure cocoa powder made from roasted cacao beans – perfect for rich, chocolaty flavor in baking and desserts.',
      usageRate: '2-8% of flour weight',
      packSize: '25Kg Bag | 1Kg x 10 pcs',
      shelfLife: '2 Years',
      features: ['Pure cocoa powder', 'Roasted cacao beans', 'Rich chocolaty flavor', 'Premium quality'],
      price: 'Contact for pricing'
    },

    // TIER 5: LOGO PLACEHOLDER PRODUCTS (MOVED TO END)
    {
      id: 16,
      name: 'CHOCOLINO - HAZELNUT CHOCOLATE SPREAD',
      category: 'chocolate',
      image: '/lovable-uploads/hazlenut_spread1.png',
      backImage: '/lovable-uploads/hazlenut_spread_3.png',
      description: 'Indulgent Hazelnut Delight for Elevated Bakes. Rich hazelnut chocolate spread for cakes, cheesecakes, and brownies – perfect for indulgent baking.',
      usageRate: 'As needed',
      packSize: '1Kg | 3Kg Bucket',
      shelfLife: '2 Years',
      features: ['Rich hazelnut flavor', 'Indulgent delight', 'Elevated baking', 'Versatile spread'],
      price: 'Contact for pricing'
    },
    {
      id: 17,
      name: 'CHOCOLINO - MILK CHOCOLATE SPREAD',
      category: 'chocolate',
      image: '/lovable-uploads/milk_choc_spread1.png',
      backImage: '/lovable-uploads/milk_choc_spread2.png',
      description: 'Creamy Chocolate Spread – Smooth, Sweet & Versatile. Smooth milk chocolate spread perfect for creamy cake layers and delightful desserts.',
      usageRate: 'As needed',
      packSize: '1Kg | 3Kg Bucket',
      shelfLife: '2 Years',
      features: ['Creamy smooth texture', 'Sweet & versatile', 'Cake layers', 'Delightful desserts'],
      price: 'Contact for pricing'
    },
  ];

  const categories = [
    { 
      id: 'all', 
      name: 'All Products', 
      count: products.length,
      icon: Package,
      color: 'bg-amber-500 text-white',
      hoverColor: 'hover:bg-amber-600'
    },
    { 
      id: 'baking', 
      name: 'Baking Agents', 
      count: products.filter(p => p.category === 'baking').length,
      icon: Cake,
      color: 'bg-orange-500 text-white',
      hoverColor: 'hover:bg-orange-600'
    },
    { 
      id: 'preservative', 
      name: 'Preservatives', 
      count: products.filter(p => p.category === 'preservative').length,
      icon: Shield,
      color: 'bg-green-500 text-white',
      hoverColor: 'hover:bg-green-600'
    },
    { 
      id: 'flavoring', 
      name: 'Flavorings', 
      count: products.filter(p => p.category === 'flavoring').length,
      icon: Palette,
      color: 'bg-purple-500 text-white',
      hoverColor: 'hover:bg-purple-600'
    },
    { 
      id: 'flour', 
      name: 'Flours', 
      count: products.filter(p => p.category === 'flour').length,
      icon: Wheat,
      color: 'bg-yellow-500 text-white',
      hoverColor: 'hover:bg-yellow-600'
    },
    { 
      id: 'chocolate', 
      name: 'Chocolate', 
      count: products.filter(p => p.category === 'chocolate').length,
      icon: Coffee,
      color: 'bg-amber-700 text-white',
      hoverColor: 'hover:bg-amber-800'
    },
    { 
      id: 'syrup', 
      name: 'Syrups', 
      count: products.filter(p => p.category === 'syrup').length,
      icon: Droplet,
      color: 'bg-blue-500 text-white',
      hoverColor: 'hover:bg-blue-600'
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchTerm]);

  const scrollToTop = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      // Fallback to window scroll if ref is not available
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Small delay to ensure state update, then scroll
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1001] p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in my-auto">
          <div className="relative">
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <div className="space-y-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-contain rounded-xl shadow-lg bg-gray-50 p-4" 
                    />
                    {product.backImage && (
                      <img 
                        src={product.backImage} 
                        alt={`${product.name} - Back`} 
                        className="w-full h-64 object-contain rounded-xl shadow-lg bg-white p-4" 
                      />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-white text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-50 text-xs px-2.5 py-1">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Usage Rate</h3>
                      <p className="text-gray-700">{product.usageRate}</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Pack Size</h3>
                      <p className="text-gray-700">{product.packSize}</p>
                    </div>
                    {product.shelfLife && (
                      <div className="bg-white border border-gray-200 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">Shelf Life</h3>
                        <p className="text-gray-700">{product.shelfLife}</p>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy on Daraz
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 py-3 rounded-lg font-semibold"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <GradientText
            colors={["#f59e0b", "#d97706", "#f59e0b"]}
            animationSpeed={6}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Industrial Goods
          </GradientText>
          <Typewriter
            text="Premium food ingredients designed for professional bakers, confectioners, and food manufacturers"
            speed={50}
            loop={false}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          />
        </div>

        <div className="mb-12 space-y-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-10 py-3 rounded-xl border-amber-200 focus:border-amber-500 bg-white/80 backdrop-blur-sm shadow-sm" 
              />
            </div>
          </div>

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
                        !isActive && category.id === 'preservative' ? 'hover:from-green-500 hover:to-green-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'flavoring' ? 'hover:from-purple-500 hover:to-purple-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'flour' ? 'hover:from-yellow-500 hover:to-yellow-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'chocolate' ? 'hover:from-amber-700 hover:to-amber-800 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'syrup' ? 'hover:from-blue-500 hover:to-blue-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'consumer' ? 'hover:from-pink-500 hover:to-pink-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'all' ? 'hover:from-amber-500 hover:to-amber-600 hover:text-white' : ''
                      }`}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold text-sm whitespace-nowrap">
                        {category.name}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className={`ml-1 text-xs px-2 py-0.5 flex-shrink-0 ${
                          isActive 
                            ? 'bg-white/20 text-white border-white/30' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30'
                        }`}
                      >
                        {category.count}
                      </Badge>
                      
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-full opacity-80" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8" ref={productsRef}>
          <div className="text-center">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {currentProducts.map(product => (
              <Card 
                key={product.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-0 shadow-lg"
                onClick={() => setSelectedProduct(product)}
              >
                <div className={`relative overflow-hidden ${['syrup', 'consumer', 'baking', 'preservative', 'flavoring', 'flour'].includes(product.category) || [16, 17].includes(product.id) ? 'bg-white' : 'bg-gradient-to-br from-amber-50 to-yellow-50'}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={`w-full h-64 group-hover:scale-110 transition-transform duration-300 ${
                      ['syrup', 'consumer', 'baking', 'preservative', 'flavoring', 'flour'].includes(product.category) || [16, 17].includes(product.id) ? 'object-contain p-4' : 'object-cover'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="premium" className="text-xs px-3 py-1.5">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Usage Rate:</span>
                      <span className="font-medium text-amber-600">{product.usageRate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Pack Size:</span>
                      <span className="font-medium">{product.packSize}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-lg">
                      View Details
                    </Button>
                    <Button variant="outline" size="icon" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <Pagination className="mx-auto">
                <PaginationContent className="flex items-center gap-1">
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'hover:bg-amber-50 hover:text-amber-600 cursor-pointer'} transition-colors duration-200`}
                    />
                  </PaginationItem>
                  
                  {getPageNumbers().map((page, index) => (
                    <PaginationItem key={index}>
                      {page === 'ellipsis' ? (
                        <PaginationEllipsis className="text-gray-400" />
                      ) : (
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className={`cursor-pointer transition-all duration-200 ${
                            currentPage === page 
                              ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-md' 
                              : 'hover:bg-amber-50 hover:text-amber-600 text-gray-600'
                          }`}
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'hover:bg-amber-50 hover:text-amber-600 cursor-pointer'} transition-colors duration-200`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Products;
