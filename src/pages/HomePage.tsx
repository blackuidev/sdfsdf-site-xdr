import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  // Variants for hero section animation
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  // Variants for product grid animation
  const gridVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeInOut' } },
  };

  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Store</h1>
        <p className="text-lg text-gray-700">Discover amazing products for your needs.</p>
      </motion.section>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sample Product Items (replace with actual product data) */}
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
          <p className="text-gray-600">Description of product 1.</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold text-gray-800">Product 2</h2>
          <p className="text-gray-600">Description of product 2.</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-xl font-semibold text-gray-800">Product 3</h2>
          <p className="text-gray-600">Description of product 3.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;