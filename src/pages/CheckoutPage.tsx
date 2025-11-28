import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/components/lib/utils';
import { motion } from 'framer-motion';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<any>>) => {
    setter({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<any>>) => {
    setter({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const processPayment = async () => {
    setProcessing(true);
    setPaymentError(null);

    // Simulate payment processing (replace with actual payment gateway integration)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const randomNumber = Math.random();

    if (randomNumber < 0.8) {
      // Simulate successful payment
      setPaymentSuccess(true);
      setPaymentError(null);
      setTimeout(() => {
        navigate('/confirmation'); // Redirect to confirmation page
      }, 1500);
    } else {
      // Simulate payment failure
      setPaymentSuccess(false);
      setPaymentError('Payment failed. Please check your payment information and try again.');
    }

    setProcessing(false);
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md bg-white shadow-md rounded-md border dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">Checkout</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentError && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{paymentError}</AlertDescription>
            </Alert>
          )}

          {paymentSuccess && (
            <Alert>
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Payment successful! Redirecting...</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={shippingInfo.name}
              onChange={(e) => handleChange(e, setShippingInfo)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primarylw focus:ring-primarylw dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="123 Main St"
              value={shippingInfo.address}
              onChange={(e) => handleChange(e, setShippingInfo)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primarylw focus:ring-primarylw dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
            <Input
              type="text"
              id="city"
              name="city"
              placeholder="Anytown"
              value={shippingInfo.city}
              onChange={(e) => handleChange(e, setShippingInfo)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primarylw focus:ring-primarylw dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Zip Code</label>
            <Input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="12345"
              value={shippingInfo.zipCode}
              onChange={(e) => handleChange(e, setShippingInfo)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primarylw focus:ring-primarylw dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Card Number</label>
            <Input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1111-2222-3333-4444"
              value={paymentInfo.cardNumber}
              onChange={(e) => handlePaymentChange(e, setPaymentInfo)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primarylw focus:ring-primarylw dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Expiry Date</label>
            <Input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              value={paymentInfo.expiryDate}
              onChange={(e) => handlePaymentChange(e, setPaymentInfo)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primarylw focus:ring-primarylw dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CVV</label>
            <Input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={paymentInfo.cvv}
              onChange={(e) => handlePaymentChange(e, setPaymentInfo)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primarylw focus:ring-primarylw dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <Button
            onClick={processPayment}
            disabled={processing}
            className="w-full bg-primarylw text-white font-semibold rounded-md hover:bg-primarylw/80 focus:outline-none focus:ring-2 focus:ring-primarylw focus:ring-offset-1 dark:bg-primarylw dark:hover:bg-primarylw/80 dark:text-white"
          >
            {processing ? 'Processing...' : 'Pay Now'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CheckoutPage;
