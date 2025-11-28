import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '@/components/lib/utils';

// Placeholder shoe data (replace with real data fetching)
const shoesData = [
    {
        id: '1', name: 'Sneaker Pro', price: 99.99, imageUrl: 'https://images.unsplash.com/photo-1542296637-516355c71b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'High-performance sneakers for athletes.'
    },
    {
        id: '2', name: 'Casual Walkers', price: 59.99, imageUrl: 'https://images.unsplash.com/photo-1588361505916-ec2ba89ec9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'Comfortable shoes for everyday wear.'
    },
    {
        id: '3', name: 'Leather Boots', price: 149.99, imageUrl: 'https://images.unsplash.com/photo-1606107557195-0a29a5b2c539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'Durable leather boots for all weather conditions.'
    },
    {
        id: '4', name: 'Running Shoes', price: 79.99, imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description: 'Lightweight running shoes for optimal performance.'
    },
    {
        id: '5', name: 'Elegant Heels', price: 129.99, imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description: 'Stylish heels for special occasions.'
    },
    {
        id: '6', name: 'Classic Loafers', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1610475523336-5494742ee47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvYWZlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        description: 'Timeless loafers for a sophisticated look.'
    }
];

const HomePage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  const cardHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div className="space-y-6" variants={fadeIn} initial="initial" animate="animate">
              <h1 className="text-4xl md:text-5xl font-bold">Step into Style with Every Stride</h1>
              <p className="text-lg text-gray-300">Discover the perfect pair of shoes for every occasion. Quality, comfort, and style combined.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors duration-300">
                Explore Collection <ArrowRight className="ml-2" />
              </Button>
              </motion.div>
            </motion.div>
            <motion.div className="overflow-hidden rounded-lg" variants={fadeIn} initial="initial" animate="animate">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1542296660-9b67c724687f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Hero Shoe"
                  className="object-cover"
                />
              </AspectRatio>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Product Cards */}
            {shoesData.map((shoe, index) => (
              <motion.div key={index} variants={cardHover} whileHover="whileHover" className="">
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={`https://images.unsplash.com/photo-1525966222134-fcfa9d60a036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1998&q=80`}
                      alt="Product"
                      className="object-cover"
                    />
                  </AspectRatio>
                  <CardContent className="p-4">
                    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link to={`/product/${shoe.id}`}>
                    <AspectRatio ratio={4 / 3}>
                      <img
                        src={shoe.imageUrl}
                        alt={shoe.name}
                        className="object-cover"
                      />
                    </AspectRatio>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium">{shoe.name}</h3>
                      <p className="text-sm text-muted-foreground">{shoe.description}</p>
                      <p className="text-sm text-muted-foreground">{formatCurrency(shoe.price)}</p>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            )}
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeIn} initial="initial" animate="animate">
              <h2 className="text-3xl font-semibold mb-4">About Our Store</h2>
              <p className="text-gray-700">We are dedicated to providing high-quality shoes that combine style, comfort, and durability. Our mission is to help you find the perfect pair for any occasion.</p>
              <Button asChild>
                <Link to="/products">View All Products</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeIn} initial="initial" animate="animate">
              <AspectRatio ratio={4 / 3}>
                <img
                  src="https://images.unsplash.com/photo-1549066743-8a6308c8552a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Store"
                  className="object-cover"
                />
              </AspectRatio>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
          <div className="text-center">
            <p className="text-gray-700">Email: support@example.com</p>
            <p className="text-gray-700">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-700">Address: 123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
