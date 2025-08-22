import React, { useState } from 'react';
import { Search, Package, Leaf, Layers3 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { GradientText } from '@/components/ui/gradient-text';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Premium Baking Powder',
      description: 'A high-quality leavening agent for consistent baking results.',
      category: 'baking',
      benefits: ['Consistent rise', 'Extended shelf life'],
      applications: ['Cakes', 'Pastries', 'Breads'],
      image: '/lovable-uploads/f63478f5-7694-4a34-b460-32e7ef3cffbd.png',
    },
    {
      id: 2,
      name: 'Natural Food Coloring',
      description: 'Vibrant and safe coloring derived from natural sources.',
      category: 'coloring',
      benefits: ['Vibrant colors', 'Natural ingredients'],
      applications: ['Cakes', 'Desserts', 'Confectionery'],
      image: '/lovable-uploads/31c2b2d7-eaf0-4390-93ed-15ce571cc8ae.png',
    },
    {
      id: 3,
      name: 'Organic Vanilla Extract',
      description: 'Rich and aromatic vanilla extract made from organic beans.',
      category: 'extracts',
      benefits: ['Rich flavor', 'Organic'],
      applications: ['Cakes', 'Ice cream', 'Desserts'],
      image: '/lovable-uploads/1c70f403-22b6-432b-8450-6c89fb9e1f32.png',
    },
    {
      id: 4,
      name: 'High Gluten Flour',
      description: 'Specially formulated flour for enhanced dough strength and elasticity.',
      category: 'flour',
      benefits: ['Strong dough', 'Elastic texture'],
      applications: ['Breads', 'Pizzas', 'Pastries'],
      image: '/lovable-uploads/f63478f5-7694-4a34-b460-32e7ef3cffbd.png',
    },
    {
      id: 5,
      name: 'Dairy-Free Chocolate Chips',
      description: 'Delicious chocolate chips made without dairy, perfect for vegan baking.',
      category: 'chocolate',
      benefits: ['Dairy-free', 'Rich chocolate flavor'],
      applications: ['Cookies', 'Brownies', 'Cakes'],
      image: '/lovable-uploads/31c2b2d7-eaf0-4390-93ed-15ce571cc8ae.png',
    },
    {
      id: 6,
      name: 'Stabilized Vitamin C',
      description: 'A potent antioxidant that enhances the nutritional profile of food products.',
      category: 'vitamins',
      benefits: ['Antioxidant', 'Nutritional enhancement'],
      applications: ['Beverages', 'Supplements', 'Fortified foods'],
      image: '/lovable-uploads/1c70f403-22b6-432b-8450-6c89fb9e1f32.png',
    },
  ];

  const filteredProducts = products.filter(product => {
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    return searchMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <GradientText 
            colors={["#f59e0b", "#eab308", "#d97706", "#f59e0b"]}
            animationSpeed={6}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Products
          </GradientText>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality food ingredients and baking solutions, crafted to meet the diverse needs of the food industry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Search className="w-5 h-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search products..."
              className="rounded-full py-3 px-6 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex space-x-2 md:space-x-4 items-center justify-start md:justify-end w-full md:w-auto overflow-x-auto">
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${selectedCategory === 'all' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Categories
            </button>
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${selectedCategory === 'baking' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory('baking')}
            >
              Baking
            </button>
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${selectedCategory === 'coloring' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory('coloring')}
            >
              Coloring
            </button>
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${selectedCategory === 'extracts' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory('extracts')}
            >
              Extracts
            </button>
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${selectedCategory === 'flour' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory('flour')}
            >
              Flour
            </button>
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${selectedCategory === 'chocolate' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory('chocolate')}
            >
              Chocolate
            </button>
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 ${selectedCategory === 'vitamins' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory('vitamins')}
            >
              Vitamins
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden border-0 shadow-lg card-hover">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.benefits.map((benefit, index) => (
                    <Badge key={index} className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium">{benefit}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-medium">{application}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
