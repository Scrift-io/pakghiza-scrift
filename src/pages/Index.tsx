import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, Phone, Mail, MapPin, Star, ChevronDown, ChevronUp, ArrowUp, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const products = [{
    id: 1,
    name: 'Super Eka-300',
    category: 'baking',
    image: '/lovable-uploads/ab13828d-6ff9-4b6d-aa8f-75f02fbc89e8.png',
    description: 'Premium bread improver for enhanced texture and extended shelf life',
    usageRate: '0.5-1% of flour weight',
    packSize: '25kg',
    features: ['Enhanced texture', 'Extended shelf life', 'Improved volume'],
    price: 'Contact for pricing'
  }, {
    id: 2,
    name: 'Pakmaya Gold',
    category: 'baking',
    image: '/lovable-uploads/a342924e-7fc4-404b-b6c3-39ce388725e4.png',
    description: 'Premium instant dry yeast for professional baking',
    usageRate: '0.5-0.8% of flour weight',
    packSize: '500g, 25kg',
    features: ['High fermentation power', 'Consistent results', 'Long shelf life'],
    price: 'Contact for pricing'
  }, {
    id: 3,
    name: 'Calcium Propionate',
    category: 'preservative',
    image: '/lovable-uploads/56a0dfbb-f740-41ad-98b3-fd2f7d4a87fb.png',
    description: 'Natural mold inhibitor for bread and baked goods',
    usageRate: '0.1-0.3% of flour weight',
    packSize: '25kg',
    features: ['Mold prevention', 'Extended freshness', 'Food grade quality'],
    price: 'Contact for pricing'
  }, {
    id: 4,
    name: 'Baking Powder',
    category: 'baking',
    image: '/lovable-uploads/677e12d8-6763-4fb9-88ee-3025f225b2b0.png',
    description: 'Double-acting baking powder for consistent leavening',
    usageRate: '1-3% of flour weight',
    packSize: '1kg, 25kg',
    features: ['Double-acting formula', 'Consistent rise', 'Professional grade'],
    price: 'Contact for pricing'
  }, {
    id: 5,
    name: 'Calcium Acetate',
    category: 'preservative',
    image: '/lovable-uploads/ecb641e8-d3bd-483c-9466-c11cb901f8f3.png',
    description: 'Premium food-grade calcium acetate for preservation',
    usageRate: '0.1-0.2% of total weight',
    packSize: '25kg',
    features: ['Food grade quality', 'Effective preservation', 'Easy dissolution'],
    price: 'Contact for pricing'
  }, {
    id: 6,
    name: 'Cocoa Powder',
    category: 'flavoring',
    image: '/lovable-uploads/966936c5-6052-44a9-a354-373285053f76.png',
    description: 'Premium Dutch-processed cocoa powder',
    usageRate: '2-8% of flour weight',
    packSize: '1kg, 25kg',
    features: ['Rich chocolate flavor', 'Excellent solubility', 'Premium quality'],
    price: 'Contact for pricing'
  }, {
    id: 7,
    name: 'Soya Flour',
    category: 'flour',
    image: '/lovable-uploads/bf220f1d-6528-4e7e-9bbe-6af34bb92678.png',
    description: 'High-quality soya flour for bread improvement',
    usageRate: '1-3% of flour weight',
    packSize: '25kg',
    features: ['Protein enrichment', 'Improved texture', 'Natural enzyme activity'],
    price: 'Contact for pricing'
  }, {
    id: 8,
    name: 'Pakmaya Vanillin',
    category: 'flavoring',
    image: '/lovable-uploads/e4e3ccf4-aeef-4435-81b6-e64e5d94b47e.png',
    description: 'Premium synthetic vanillin for consistent flavor',
    usageRate: '0.1-0.3% of total weight',
    packSize: '1kg',
    features: ['Consistent flavor', 'Heat stable', 'Cost effective'],
    price: 'Contact for pricing'
  }];
  const faqs = [{
    question: 'What is the shelf life of your products?',
    answer: 'Most of our products have a shelf life of 2-3 years when stored in cool, dry conditions. Specific shelf life information is printed on each package.'
  }, {
    question: 'Do you provide technical support for product usage?',
    answer: 'Yes, we offer comprehensive technical support including usage guidelines, formulation assistance, and troubleshooting help for all our products.'
  }, {
    question: 'Are your products halal certified?',
    answer: 'Yes, all Pak Ghiza products are halal certified and meet international food safety standards.'
  }, {
    question: 'Can I get samples before placing a bulk order?',
    answer: 'Yes, we provide samples for evaluation. Please contact our sales team to request samples for your specific requirements.'
  }, {
    question: 'What are your minimum order quantities?',
    answer: 'Minimum order quantities vary by product. Please contact us for specific MOQ information and bulk pricing.'
  }];
  const categories = [{
    id: 'all',
    name: 'All Products',
    count: products.length
  }, {
    id: 'baking',
    name: 'Baking Agents',
    count: products.filter(p => p.category === 'baking').length
  }, {
    id: 'preservative',
    name: 'Preservatives',
    count: products.filter(p => p.category === 'preservative').length
  }, {
    id: 'flavoring',
    name: 'Flavorings',
    count: products.filter(p => p.category === 'flavoring').length
  }, {
    id: 'flour',
    name: 'Flours',
    count: products.filter(p => p.category === 'flour').length
  }];
  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Loader Component
  const Loader = () => <div className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 via-white to-yellow-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <img src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" alt="Pak Ghiza Logo" className="h-24 w-24 mx-auto animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-20 rounded-full animate-ping"></div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent animate-pulse">
            Pak Ghiza
          </div>
          <div className="text-sm text-gray-600 animate-fade-in">
            Crafting Excellence...
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full overflow-hidden">
            <div className="h-full bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>;
  const ProductModal = ({
    product,
    onClose
  }) => {
    if (!product) return null;
    return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          <div className="relative">
            <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
              <X className="w-5 h-5" />
            </button>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-contain rounded-xl shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50 p-4" />
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => <Badge key={index} variant="secondary" className="bg-amber-50/80 text-amber-700 border border-amber-200/50 shadow-sm hover:bg-amber-100/80 backdrop-blur-sm text-xs px-2.5 py-1">
                        {feature}
                      </Badge>)}
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-800 mb-2">Usage Rate</h3>
                      <p className="text-amber-700">{product.usageRate}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Pack Size</h3>
                      <p className="text-blue-700">{product.packSize}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy on Daraz
                    </Button>
                    <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 py-3 rounded-lg font-semibold">
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  };
  if (isLoading) {
    return <Loader />;
  }
  return <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.5); }
          50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.8); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .text-gradient { 
          background: linear-gradient(135deg, #f59e0b, #eab308, #d97706); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text; 
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg border-b border-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" alt="Pak Ghiza Logo" className="h-12 w-12 object-contain animate-pulse" />
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'products', 'about', 'industrial', 'faqs', 'contact'].map(section => <button key={section} onClick={() => scrollToSection(section)} className={`capitalize font-medium transition-all duration-300 hover:text-amber-600 relative group ${activeSection === section ? 'text-amber-600' : 'text-gray-700'}`}>
                  {section === 'industrial' ? 'Industrial & Commercial' : section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </button>)}
            </div>

            <div className="flex items-center space-x-4">
              <Button className="hidden sm:flex bg-amber-500 hover:bg-amber-600 text-white animate-glow">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy on Daraz
              </Button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden bg-white border-t border-amber-100 animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {['home', 'products', 'about', 'industrial', 'faqs', 'contact'].map(section => <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors capitalize">
                  {section === 'industrial' ? 'Industrial & Commercial' : section}
                </button>)}
            </div>
          </div>}
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-yellow-50/50 to-orange-100/30"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/10 to-amber-200/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="animate-fade-in">
            <div className="mb-12">
              <img src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" alt="Pak Ghiza Logo" className="h-32 w-32 mx-auto mb-8 animate-pulse drop-shadow-2xl" />
            </div>
            
            <div className="space-y-8 mb-12">
              <h1 className="text-6xl font-bold text-gradient leading-tight md:text-6xl py-[8px]">
                Premium Ingredients
              </h1>
              <div className="relative">
                <h2 className="text-4xl font-light text-gray-700 mb-4 md:text-4xl my-0 py-0">
                  Exceptional <span className="text-gradient font-bold">Taste</span>
                </h2>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent h-full animate-shimmer"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-amber-600">
                <div className="flex items-center space-x-2 animate-float">
                  <Award className="w-6 h-6" />
                  <span className="font-semibold">25+ Years</span>
                </div>
                <div className="flex items-center space-x-2 animate-float" style={{
                animationDelay: '0.5s'
              }}>
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-semibold">1000+ Clients</span>
                </div>
                <div className="flex items-center space-x-2 animate-float" style={{
                animationDelay: '1s'
              }}>
                  <Sparkles className="w-6 h-6" />
                  <span className="font-semibold">Premium Quality</span>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed md:text-base">
              Elevating the culinary landscape with <span className="text-gradient font-semibold">world-class ingredients</span> and uncompromising quality standards
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button onClick={() => scrollToSection('products')} className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-10 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
                <Sparkles className="w-6 h-6 mr-3" />
                Discover Excellence
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-10 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <Phone className="w-6 h-6 mr-3" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of premium food ingredients designed for professional bakers and food manufacturers
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input type="text" placeholder="Search products..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 py-3 rounded-xl border-amber-200 focus:border-amber-500" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => <button key={category.id} onClick={() => setActiveFilter(category.id)} className={`px-4 py-2 rounded-full font-medium transition-all ${activeFilter === category.id ? 'bg-amber-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-amber-100'}`}>
                    {category.name} ({category.count})
                  </button>)}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-0 shadow-lg" onClick={() => setSelectedProduct(product)}>
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-300" />
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
                  <p className="text-gray-600 mb-4 leading-relaxed">
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
              </Card>)}
          </div>

          {filteredProducts.length === 0 && <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Pak Ghiza
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With decades of experience in the food industry, Pak Ghiza has established itself as a trusted supplier of premium food ingredients across Pakistan and beyond.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for professional bakers, food manufacturers, and culinary enthusiasts.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-amber-600 mb-2">25+</div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-amber-600 mb-2">1000+</div>
                    <div className="text-gray-600">Satisfied Clients</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg leading-relaxed">
                    To provide the highest quality food ingredients that enable our customers to create exceptional products while maintaining the highest standards of food safety and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial & Commercial Section */}
      <section id="industrial" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Industrial & Commercial Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Bulk solutions for large-scale food production with customized formulations and technical support
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Formulations</h3>
                <p className="text-gray-600">Tailored ingredient solutions for your specific production requirements</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Support</h3>
                <p className="text-gray-600">24/7 technical assistance from our team of food technology experts</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bulk Orders</h3>
                <p className="text-gray-600">Competitive pricing for large volume orders with flexible delivery options</p>
              </div>
            </div>

            <Card className="p-8 shadow-lg border-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Industrial Quote</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Input placeholder="Company Name" className="rounded-lg border-amber-200 focus:border-amber-500" />
                <Input placeholder="Contact Person" className="rounded-lg border-amber-200 focus:border-amber-500" />
                <Input placeholder="Email Address" className="rounded-lg border-amber-200 focus:border-amber-500" />
                <Input placeholder="Phone Number" className="rounded-lg border-amber-200 focus:border-amber-500" />
                <Input placeholder="Product Requirements" className="md:col-span-2 rounded-lg border-amber-200 focus:border-amber-500" />
              </div>
              <Button className="mt-6 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg">
                Submit Request
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our products and services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => <Card key={index} className="overflow-hidden border-0 shadow-lg">
                  <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {expandedFaq === index ? <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-amber-500 flex-shrink-0" />}
                  </button>
                  {expandedFaq === index && <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>}
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Ready to elevate your products with premium ingredients? We're here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Karachi:</strong> 021-35026618-20, 35026622, 021-35026602</p>
                      <p><strong>Lahore:</strong> 042-36361067-9</p>
                      <p><strong>Rawalpindi:</strong> 051-5145024</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@pakghiza.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Offices</h3>
                    <div className="text-gray-600 space-y-2">
                      <p><strong>Karachi Head Office:</strong> LC-40, Landhi Industrial Area, Near Opal Laboratory, Karachi, Pakistan 71500</p>
                      <p><strong>Lahore:</strong> 60th Mall Road, Shahrah-e-Quaid-e-Azam, Lahore Pakistan</p>
                      <p><strong>Rawalpindi:</strong> House No. 51, Street #5, Khan Avenue, Behind Shell Filling Station, Chaklala Scheme III</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8 shadow-lg border-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="rounded-lg border-amber-200 focus:border-amber-500" />
                    <Input placeholder="Your Email" className="rounded-lg border-amber-200 focus:border-amber-500" />
                  </div>
                  <Input placeholder="Subject" className="rounded-lg border-amber-200 focus:border-amber-500" />
                  <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:border-amber-500 focus:outline-none resize-none" />
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold">
                    Send Message
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Product Showcase Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gradient">Our Premium Product Range</h3>
              <p className="text-gray-400 text-lg">Crafting excellence with every ingredient</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 to-yellow-50 p-8">
              <img src="/lovable-uploads/a2fd7ec4-7aae-4209-8952-440fc8e5db20.png" alt="Pak Ghiza Product Showcase" className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="text-white text-lg font-semibold mb-4">
                  From premium bread improvers to finest flavorings - we have everything you need
                </p>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg">
                  Explore All Products
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png" alt="Pak Ghiza Logo" className="h-10 w-10 object-contain" />
                <span className="text-2xl font-bold">Pak Ghiza</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium food ingredients for professional bakers and food manufacturers across Pakistan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-amber-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-amber-400 transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-amber-400 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Baking Agents</span></li>
                <li><span className="text-gray-400">Preservatives</span></li>
                <li><span className="text-gray-400">Flavorings</span></li>
                <li><span className="text-gray-400">Specialty Flours</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest products and offers</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white rounded-lg" />
                <Button className="bg-amber-500 hover:bg-amber-600 rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Pak Ghiza. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-50">
          <ArrowUp className="w-6 h-6" />
        </button>}

      {/* Product Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>;
};
export default Index;