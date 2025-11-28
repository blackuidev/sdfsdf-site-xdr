import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder product data (replace with actual data fetching)
const products = [
  {
    id: '1', name: 'Awesome Shoe', price: 129.99, description: 'This is a fantastic shoe for running and everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1542296635-0776e83c2132?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8MTY4NzEwNDQzNw&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1588361035994-295e21daa671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8MTY4NzEwNDQzNw&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fDE2ODcxMDQ0Mzc&auto=format&fit=crop&w=500&q=60'
    ],
    related: ['2', '3']
  },
  {
    id: '2', name: 'Sporty Sneakers', price: 99.99, description: 'Perfect for sports and casual activities.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fDE2ODcxMDQ0Mzc&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560769629-975ef6bbefb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fDE2ODcxMDQ0Mzc&auto=format&fit=crop&w=500&q=60'
    ],
    related: ['1', '3']
  },
  {
    id: '3', name: 'Classic Kicks', price: 79.99, description: 'Timeless design for everyday comfort.',
    images: [
      'https://images.unsplash.com/photo-1549298713-244e32c6f818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fDE2ODcxMDQ0Mzc&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1584799459348-634405954999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fDE2ODcxMDQ0Mzc&auto=format&fit=crop&w=500&q=60'
    ],
    related: ['1', '2']
  },
];

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  const relatedProducts = products.filter(p => product.related.includes(p.id));

  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <Link to="/" className="text-blue-500 hover:underline flex items-center">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Carousel */}
        <div>
          <AspectRatio ratio={1} className="rounded-md overflow-hidden">
            <img
              src={selectedImage}
              alt={product.name}
              className="object-cover w-full h-full cursor-zoom"
              style={{ transition: 'all 0.3s ease' }}
            />
          </AspectRatio>

          <Carousel className="w-full mt-4">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <AspectRatio ratio={1} className="rounded-md overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                    <img
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      className="object-cover w-full h-full"
                      onClick={() => setSelectedImage(image)}
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious><ArrowLeft/></CarouselPrevious>
            <CarouselNext><ArrowRight/></CarouselNext>
          </Carousel>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <Button className="w-full"><ShoppingCart className="mr-2"/>Add to Cart</Button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id}>
                <CardContent className="p-4">
                  <AspectRatio ratio={1} className="mb-2 rounded-md overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <h3 className="text-lg font-medium mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-600">${relatedProduct.price.toFixed(2)}</p>
                  <Link to={`/product/${relatedProduct.id}`}>
                    <Button variant="secondary" className="mt-2">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProductDetailsPage;
