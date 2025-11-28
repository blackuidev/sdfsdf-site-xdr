import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/components/lib/utils';

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

const ProductsPage = () => {
    const [shoes, setShoes] = useState(shoesData);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('price-asc');

    useEffect(() => {
        let filteredShoes = shoesData.filter(shoe =>
            shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortBy === 'price-asc') {
            filteredShoes = [...filteredShoes].sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            filteredShoes = [...filteredShoes].sort((a, b) => b.price - a.price);
        }

        setShoes(filteredShoes);
    }, [searchQuery, sortBy]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSortChange = (value: string) => {
        setSortBy(value);
    };

    return (
        <motion.div
            className="container mx-auto py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <Input
                    type="text"
                    placeholder="Search for shoes..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full md:w-auto"
                />
                <Select onValueChange={handleSortChange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shoes.map(shoe => (
                    <motion.div
                        key={shoe.id}
                        className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Card className="h-full flex flex-col justify-between">
                            <CardHeader>
                                <CardTitle>{shoe.name}</CardTitle>
                            </CardHeader>
                            <div className="aspect-w-3 aspect-h-4">
                                <img
                                    src={shoe.imageUrl}
                                    alt={shoe.name}
                                    className="object-cover rounded-md h-48 w-full"
                                />
                            </div>
                            <CardContent>
                                <CardDescription>{shoe.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <span className="text-lg font-semibold">${shoe.price.toFixed(2)}</span>
                                <Button>Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProductsPage;
