import React, { useState, useRef } from 'react';
import { Search, ShoppingCart, X, ChevronLeft, ChevronRight, Package, Cookie, Droplet, Coffee } from 'lucide-react';
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

const Consumer = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const productsRef = useRef(null);

  const products = [
    {
      id: 23,
      name: 'CHOCOLINO - MILK CHOCOLATE BAR',
      category: 'chocolate-bar',
      image: '/lovable-uploads/chocolino_milk_1.png',
      images: [
        '/lovable-uploads/chocolino_milk_1.png',
        '/lovable-uploads/chocolino_milk_back.png',
        '/lovable-uploads/chocolino_milk_3.png'
      ],
      description: 'Premium compound chocolate with superior taste, quality & aroma. A delicious milk chocolate bar perfect for everyday indulgence.',
      usageRate: 'Ready to eat',
      packSize: '200g Bar',
      shelfLife: '2 Years',
      features: ['Premium quality', 'Superior taste & aroma', 'Milk chocolate', 'Ready to eat'],
      price: 'Contact for pricing'
    },
    {
      id: 24,
      name: 'CHOCOLINO - DARK CHOCOLATE BAR',
      category: 'chocolate-bar',
      image: '/lovable-uploads/chocolino_dark_front.png',
      images: [
        '/lovable-uploads/chocolino_dark_front.png',
        '/lovable-uploads/chocolino_dark_back.png',
        '/lovable-uploads/chocolino_dark_3.png'
      ],
      description: 'Premium dark chocolate compound with rich cocoa flavor. An intense chocolate experience for those who prefer bold, sophisticated taste.',
      usageRate: 'Ready to eat',
      packSize: '200g Bar',
      shelfLife: '2 Years',
      features: ['Premium dark chocolate', 'Rich cocoa flavor', 'Intense taste', 'Ready to eat'],
      price: 'Contact for pricing'
    },
    {
      id: 25,
      name: 'CHOCOLINO - DARK CHOCOLATE SPREAD',
      category: 'spread',
      image: '/lovable-uploads/chocolino_dark_spread_consumer_front.png',
      images: [
        '/lovable-uploads/chocolino_dark_spread_consumer_front.png',
        '/lovable-uploads/chocolino_dark_spread_consumer_back.png'
      ],
      description: 'Rich dark chocolate spread with intense cocoa flavor. Perfect for spreading on bread, toast, or as a dessert topping.',
      usageRate: 'Ready to use',
      packSize: '350g Jar',
      shelfLife: '18 Months',
      features: ['Rich dark chocolate', 'Smooth spreadable texture', 'Intense flavor', 'Versatile use'],
      price: 'Contact for pricing'
    },
    {
      id: 26,
      name: 'CHOCOLINO - HAZELNUT CHOCOLATE SPREAD',
      category: 'spread',
      image: '/lovable-uploads/chocolino_hazelnut_spread_consumer_front.png',
      images: [
        '/lovable-uploads/chocolino_hazelnut_spread_consumer_front.png',
        '/lovable-uploads/chocolino_hazelnut_consumer_spread_back.png'
      ],
      description: 'Delicious hazelnut chocolate spread combining premium cocoa with roasted hazelnuts. A creamy, indulgent treat for any occasion.',
      usageRate: 'Ready to use',
      packSize: '350g Jar',
      shelfLife: '18 Months',
      features: ['Roasted hazelnuts', 'Premium chocolate', 'Creamy texture', 'Perfect for breakfast'],
      price: 'Contact for pricing'
    },
    {
      id: 27,
      name: 'CHOCOLINO - MILK CHOCOLATE SPREAD',
      category: 'spread',
      image: '/lovable-uploads/milk_choc_spread1.png',
      images: [
        '/lovable-uploads/milk_choc_spread1.png',
        '/lovable-uploads/chocolinio_milk_spread_consumer_back.png'
      ],
      description: 'Creamy milk chocolate spread with smooth, velvety texture. A sweet and delicious spread perfect for bread, pancakes, or desserts.',
      usageRate: 'Ready to use',
      packSize: '350g Jar',
      shelfLife: '18 Months',
      features: ['Creamy milk chocolate', 'Smooth texture', 'Sweet taste', 'Versatile spread'],
      price: 'Contact for pricing'
    },
    {
      id: 28,
      name: 'FUN DRIPS - CHOCOLATE SYRUP',
      category: 'syrup',
      image: '/lovable-uploads/fundrips_chocolate_front.png',
      images: [
        '/lovable-uploads/fundrips_chocolate_front.png',
        '/lovable-uploads/fundrips_choc_back.png'
      ],
      description: 'Rich chocolate syrup perfect for drizzling over ice cream, pancakes, waffles, and desserts. A delicious treat for the whole family.',
      usageRate: 'Ready to use',
      packSize: '300ml Bottle',
      shelfLife: '2 Years',
      features: ['Rich chocolate flavor', 'Easy squeeze bottle', 'Perfect for desserts', 'Family favorite'],
      price: 'Contact for pricing'
    },
    {
      id: 29,
      name: 'FUN DRIPS - STRAWBERRY SYRUP',
      category: 'syrup',
      image: '/lovable-uploads/fundrips_strawberry_front.png',
      images: [
        '/lovable-uploads/fundrips_strawberry_front.png',
        '/lovable-uploads/fundrips_strawberry_back.png'
      ],
      description: 'Sweet strawberry syrup that adds fruity flavor to your favorite treats. Great for ice cream, milkshakes, pancakes, and more.',
      usageRate: 'Ready to use',
      packSize: '300ml Bottle',
      shelfLife: '2 Years',
      features: ['Fresh strawberry taste', 'Sweet & fruity', 'Versatile topping', 'Kid-friendly'],
      price: 'Contact for pricing'
    },
    {
      id: 30,
      name: 'FUN DRIPS - CARAMEL SYRUP',
      category: 'syrup',
      image: '/lovable-uploads/fundrips_caramel_front.png',
      images: [
        '/lovable-uploads/fundrips_caramel_front.png',
        '/lovable-uploads/fundrips_caramel_back.png'
      ],
      description: 'Smooth, buttery caramel syrup for drizzling on coffee, ice cream, waffles, and desserts. Adds a golden touch to any treat.',
      usageRate: 'Ready to use',
      packSize: '300ml Bottle',
      shelfLife: '2 Years',
      features: ['Buttery caramel flavor', 'Golden drizzle', 'Perfect for coffee', 'Dessert essential'],
      price: 'Contact for pricing'
    }
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
      id: 'chocolate-bar', 
      name: 'Chocolate Bars', 
      count: products.filter(p => p.category === 'chocolate-bar').length,
      icon: Cookie,
      color: 'bg-amber-700 text-white',
      hoverColor: 'hover:bg-amber-800'
    },
    { 
      id: 'spread', 
      name: 'Spreads', 
      count: products.filter(p => p.category === 'spread').length,
      icon: Coffee,
      color: 'bg-orange-500 text-white',
      hoverColor: 'hover:bg-orange-600'
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
  }, [searchTerm, activeFilter]);

  const scrollToTop = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    if (!product) return null;

    const images = product.images || [product.image];

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

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
                  <div className="relative">
                    <img 
                      src={images[currentImageIndex]} 
                      alt={product.name} 
                      className="w-full h-80 object-contain rounded-xl shadow-lg bg-white p-4" 
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                      </>
                    )}
                  </div>
                  {images.length > 1 && (
                    <div className="flex justify-center gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex 
                              ? 'bg-amber-500 scale-110' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}
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
            Consumer Goods
          </GradientText>
          <Typewriter
            text="Premium retail products for everyday enjoyment - quality you can taste in every bite"
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
                        !isActive && category.id === 'chocolate-bar' ? 'hover:from-amber-700 hover:to-amber-800 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'spread' ? 'hover:from-orange-500 hover:to-orange-600 hover:text-white' : ''
                      } ${
                        !isActive && category.id === 'syrup' ? 'hover:from-blue-500 hover:to-blue-600 hover:text-white' : ''
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
              Showing {filteredProducts.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {currentProducts.map(product => (
              <Card 
                key={product.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-0 shadow-lg"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="premium" className="text-xs px-3 py-1.5 capitalize">
                        {product.category.replace('-', ' ')}
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
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Consumer;