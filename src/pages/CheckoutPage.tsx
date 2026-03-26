import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    address: '',
    paymentMethod: 'credit-card'
  });

  const formatPrice = (num: number) => {
    return '$ ' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      navigate('/confirmation');
    }, 2500);
  };

  useEffect(() => {
    if (cartItems.length === 0 && !isProcessing) {
      navigate('/cart');
    }
  }, [cartItems.length, isProcessing, navigate]);

  if (cartItems.length === 0 && !isProcessing) {
    return null;
  }

  return (
    <div className="font-serif min-h-screen bg-lorvique-beige selection:bg-lorvique-dark selection:text-white">
      <Navbar theme="light" />
      
      <main className="pt-40 pb-24 px-4 md:px-8 lg:px-12 max-w-[1200px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-lorvique-dark mb-12"
        >
          Secure Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Details */}
              <div>
                <h2 className="text-xl font-serif text-lorvique-dark mb-6">Shipping Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans tracking-widest text-lorvique-text mb-2">FULL NAME *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-4 py-3 text-sm font-sans focus:outline-none focus:border-lorvique-dark transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans tracking-widest text-lorvique-text mb-2">CONTACT NUMBER *</label>
                    <input 
                      type="tel" 
                      name="contactNumber"
                      required
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-4 py-3 text-sm font-sans focus:outline-none focus:border-lorvique-dark transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans tracking-widest text-lorvique-text mb-2">DELIVERY ADDRESS *</label>
                    <input 
                      type="text" 
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-4 py-3 text-sm font-sans focus:outline-none focus:border-lorvique-dark transition-colors"
                      placeholder="123 Luxury Ave, New York, NY 10001"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="pt-6 border-t border-gray-100">
                <h2 className="text-xl font-serif text-lorvique-dark mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <label className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${formData.paymentMethod === 'credit-card' ? 'border-lorvique-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-black"
                    />
                    <span className="text-sm font-sans">Credit Card (Demo)</span>
                  </label>
                  <label className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${formData.paymentMethod === 'paypal' ? 'border-lorvique-dark bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-black"
                    />
                    <span className="text-sm font-sans">PayPal (Demo)</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-black text-white py-4 text-xs font-sans tracking-widest uppercase hover:bg-black/80 transition-colors disabled:bg-gray-400 flex justify-center items-center h-14"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  `Confirm Payment - ${formatPrice(subtotal)}`
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 shadow-sm h-fit"
          >
            <h2 className="text-xl font-serif text-lorvique-dark mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-lorvique-beige flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-xs font-bold font-sans text-lorvique-dark line-clamp-1">{item.product.name}</h3>
                    <p className="text-xs font-sans text-lorvique-text mt-1">Qty: {item.quantity}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-sans text-lorvique-dark">{item.product.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-100 pt-6 space-y-4 text-sm font-sans">
              <div className="flex justify-between">
                <span className="text-lorvique-text">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lorvique-text">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-base font-bold">Total</span>
                <span className="text-base font-bold">{formatPrice(subtotal)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
