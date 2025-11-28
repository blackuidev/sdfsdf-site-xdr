import React from 'react';
import { productsData } from '@/data/productsData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const ProductsPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData.map((product) => (
          <Card key={product.id} className="shadow-md">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-blue-500 font-bold mt-2">${product.price}</p>
              <Button onClick={() => router.push(`/product/${product.id}`)} className="mt-4 w-full">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
