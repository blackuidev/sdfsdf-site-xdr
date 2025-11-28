import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from '@/components/lib/utils';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative"
    >
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="aspect-w-3 aspect-h-4 relative overflow-hidden rounded-md">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover rounded-md w-full h-full transition-transform duration-300"
            />
          </div>
          {product.description && (
            <CardDescription className="mt-2 text-sm text-muted-foreground">
              {product.description.substring(0, 75)}...
            </CardDescription>
          )}
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-lg font-semibold">{formatCurrency(product.price)}</div>
          {/* Add to cart button or other actions */}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
