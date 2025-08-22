import React, { useState } from 'react';
import { Search, ShoppingCart, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    // PAK MAYA - Bread Improvers
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
      id: 2,
      name: 'PAK MAYA - EKA PAN',
      category: 'baking',
      image: '/lovable-uploads/a342924e-7fc4-404b-b6c3-39ce388725e4.png',
      description: 'Versatile Bread Improver for Reliable Texture and Consistency. A versatile bread improver designed for superior texture and baking performance across various products like buns, pitta bread, and rusk.',
      usageRate: 'As recommended',
      packSize: '10Kg Bag',
      shelfLife: '2 Years',
      features: ['Versatile application', 'Superior texture', 'Consistent results', 'Tolerates flour variations'],
      price: 'Contact for pricing'
    },
    {
      id: 3,
      name: 'PAK MAYA - ALBATROS',
      category: 'baking',
      image: '/lovable-uploads/a2fd7ec4-7aae-4209-8952-440fc8e5db20.png',
      description: 'Premium Dough Performance for Softer, Sliceable, High-Quality Bread. Achieve premium baked goods with ALBATROS – a multifunctional improver enhancing dough handling, appearance, texture, and shelf life.',
      usageRate: 'As recommended',
      packSize: '500g x 20 pcs | 1Kg | 5Kg Bag',
      shelfLife: '2 Years',
      features: ['Premium quality', 'Multifunctional improver', 'Sliceable soft bread', 'White crumb texture'],
      price: 'Contact for pricing'
    },
    {
      id: 4,
      name: 'PAK MAYA - EKA EXCEL FROST',
      category: 'baking',
      image: '/lovable-uploads/d75d7d6f-f3de-41f7-81ce-84e84120910f.png',
      description: 'Superior Frozen Dough Solution for Long-Lasting Freshness & Structure. Specially formulated for frozen dough products, this improver enhances dough strength and volume while preventing freeze damage.',
      usageRate: 'As recommended',
      packSize: '500g x 20 pcs',
      shelfLife: '2 Years',
      features: ['Frozen dough specialist', 'Enhanced dough strength', 'Prevents freeze damage', 'Long-lasting freshness'],
      price: 'Contact for pricing'
    },
    {
      id: 5,
      name: 'PAK MAYA - EKA EXCEL (Pizza)',
      category: 'baking',
      image: '/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png',
      description: 'Perfect Crust & Browning – Even After Cold Storage. Get the perfect pizza every time! This improver strengthens dough, enhances browning, and allows for oil-free recipes with longer usability.',
      usageRate: 'As recommended',
      packSize: '500g x 20 pcs',
      shelfLife: '2 Years',
      features: ['Perfect pizza crust', 'Enhanced browning', 'Cold storage compatible', 'Oil-free recipes'],
      price: 'Contact for pricing'
    },

    // PAK GHIZA - Baking Essentials
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
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      description: 'Golden Crunch, Irresistible Texture – Fry or Bake to Perfection. Crispy, golden coating for fried or baked foods. Available in white and orange variants, our breadcrumbs deliver irresistible crunch and texture.',
      usageRate: 'As needed for coating',
      packSize: '10Kg Bag | 1Kg x 10 pcs',
      shelfLife: '9 Months',
      features: ['Golden crispy coating', 'White & orange variants', 'Irresistible crunch', 'Versatile application'],
      price: 'Contact for pricing'
    },
    {
      id: 8,
      name: 'PAK GHIZA - CAKE GEL',
      category: 'baking',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
      description: 'Enhance Volume, Moisture & Softness in Every Slice. A translucent cake improver gel that increases batter volume, improves crumb softness, and retains moisture for longer freshness.',
      usageRate: 'As recommended',
      packSize: '1Kg x 12 pcs | Custom: 4Kg & 15Kg',
      shelfLife: '1 Year',
      features: ['Enhanced volume', 'Improved moisture retention', 'Softer crumb', 'Longer freshness'],
      price: 'Contact for pricing'
    },

    // Preservatives
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

    // Bakery Enhancers
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

    // CHOCOLINO - Cocoa & Chocolate
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
      id: 16,
      name: 'CHOCOLINO - HAZELNUT CHOCOLATE SPREAD',
      category: 'chocolate',
      image: '/lovable-uploads/d98e959f-7b74-4857-9138-65e6d330ad58.png',
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
      image: '/lovable-uploads/ef05060b-66ed-4bf9-bc44-9e00d3dd13c7.png',
      description: 'Creamy Chocolate Spread – Smooth, Sweet & Versatile. Smooth milk chocolate spread perfect for creamy cake layers and delightful desserts.',
      usageRate: 'As needed',
      packSize: '1Kg | 3Kg Bucket',
      shelfLife: '2 Years',
      features: ['Creamy smooth texture', 'Sweet & versatile', 'Cake layers', 'Delightful desserts'],
      price: 'Contact for pricing'
    },
    {
      id: 18,
      name: 'CHOCOLINO - LIQUID CHOCOLATE COUVERTURE',
      category: 'chocolate',
      image: '/lovable-uploads/e4e3ccf4-aeef-4435-81b6-e64e5d94b47e.png',
      description: 'Professional Couverture for Perfect Coating & Molding. Premium couverture chocolate perfect for tempering, molding, and glazing pastries and desserts.',
      usageRate: 'As needed',
      packSize: 'Custom Commercial Packaging',
      shelfLife: '2 Years',
      features: ['Professional grade', 'Perfect coating', 'Molding & glazing', 'Premium couverture'],
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

    // FUNDRIPS - Syrups
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
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'baking', name: 'Baking Agents', count: products.filter(p => p.category === 'baking').length },
    { id: 'preservative', name: 'Preservatives', count: products.filter(p => p.category === 'preservative').length },
    { id: 'flavoring', name: 'Flavorings', count: products.filter(p => p.category === 'flavoring').length },
    { id: 'flour', name: 'Flours', count: products.filter(p => p.category === 'flour').length },
    { id: 'chocolate', name: 'Chocolate', count: products.filter(p => p.category === 'chocolate').length },
    { id: 'syrup', name: 'Syrups', count: products.filter(p => p.category === 'syrup').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          <div className="relative">
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-contain rounded-xl shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50 p-4" 
                    />
                    {product.backImage && (
                      <img 
                        src={product.backImage} 
                        alt={`${product.name} - Back`} 
                        className="w-full h-64 object-contain rounded-xl shadow-lg bg-gradient-to-br from-amber-50 to-yellow-50 p-4" 
                      />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-amber-50/80 text-amber-700 border border-amber-200/50 shadow-sm hover:bg-amber-100/80 backdrop-blur-sm text-xs px-2.5 py-1">
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
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-800 mb-2">Usage Rate</h3>
                      <p className="text-amber-700">{product.usageRate}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Pack Size</h3>
                      <p className="text-blue-700">{product.packSize}</p>
                    </div>
                    {product.shelfLife && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Shelf Life</h3>
                        <p className="text-green-700">{product.shelfLife}</p>
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of premium food ingredients designed for professional bakers and food manufacturers
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-10 py-3 rounded-xl border-amber-200 focus:border-amber-500" 
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeFilter === category.id 
                      ? 'bg-amber-500 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden border-0 shadow-lg"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-yellow-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-300" 
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
            </Card>
          ))}
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

      {/* Product Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Products;
