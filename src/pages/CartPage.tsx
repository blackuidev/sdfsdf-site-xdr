import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import { formatCurrency } from '@/components/lib/utils';
import { motion } from 'framer-motion';

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Get cart items from local storage on initial load
    const storedCartItems = localStorage.getItem('cart');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    // Save cart items to local storage whenever cartItems change
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    // Simulate checkout process (replace with actual payment gateway integration)
    setIsCheckoutModalOpen(true);
    setTimeout(() => {
      setCheckoutSuccess(true);
      setCartItems([]); // Clear the cart
      localStorage.removeItem('cart'); // Clear local storage
      setTimeout(() => {
        setIsCheckoutModalOpen(false);
        setCheckoutSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-gray-500">
          Your cart is empty. <Link to="/" className="text-blue-500 hover:underline">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{formatCurrency(item.price)}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, -1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="ml-auto">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Total: {formatCurrency(calculateTotal())}</h2>
              <Button onClick={handleCheckout} disabled={cartItems.length === 0}>
                Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {isCheckoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md">
            {checkoutSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-green-500 font-semibold">Checkout Successful!</p>
                <p>Thank you for your order.</p>
              </motion.div>
            ) : (
              <p>Processing checkout...</p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CartPage;
