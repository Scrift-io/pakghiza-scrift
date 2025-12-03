import React, { useState, useRef } from 'react';
import { Search, ShoppingCart, X, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const productsRef = useRef(null);

  const products = [
    {
      id: 23,
      name: 'CHOCOLINO - MILK CHOCOLATE BAR',
      category: 'consumer',
      image: '/lovable-uploads/chocolino_milk_1.png',
      backImage: '/lovable-uploads/Chocolino_Dark_Back.png',
      description: 'Premium compound chocolate with superior taste, quality & aroma. A delicious milk chocolate bar perfect for everyday indulgence.',
      usageRate: 'Ready to eat',
      packSize: '200g Bar',
      shelfLife: '2 Years',
      features: ['Premium quality', 'Superior taste & aroma', 'Milk chocolate', 'Ready to eat'],
      price: 'Contact for pricing'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Consumer;
