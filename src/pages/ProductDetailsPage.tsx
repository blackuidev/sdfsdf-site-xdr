import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const { id } = useParams();

    // Sample product data (replace with actual data fetching)
    const products = [
        {
            'id': '1',
            'name': 'Awesome Shoe',
            'description': 'A very comfortable and stylish shoe.',
            'price': 99.99,
            'imageUrl': 'https://images.unsplash.com/photo-1542296693-8f7a6946833d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
        }
    ];

    // Find the product based on the ID
    const product = products.find(p => p.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src={product.imageUrl} alt={product.name} className="rounded-lg shadow-md" />
                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-xl font-semibold text-primarylw">${product.price}</p>
                    <button className="bg-primarylw hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
