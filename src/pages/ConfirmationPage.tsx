import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ConfirmationPage = () => {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate a mock order number on mount
    setOrderNumber(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

  return (
    <div className="font-serif min-h-screen bg-lorvique-beige selection:bg-lorvique-dark selection:text-white flex flex-col">
      <Navbar theme="light" />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-white p-12 md:p-16 shadow-sm max-w-2xl w-full text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
            className="flex justify-center mb-8"
          >
            <CheckCircle size={64} className="text-green-600" strokeWidth={1} />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-serif text-lorvique-dark mb-4">
            Thank you for your order
          </h1>
          
          <p className="text-sm font-light text-lorvique-text mb-8 leading-relaxed">
            Your payment was successful and your order is currently being processed. You will receive an email confirmation shortly with your tracking details.
          </p>
          
          <div className="bg-lorvique-beige p-6 mb-10">
            <p className="text-xs font-sans tracking-widest text-lorvique-text uppercase mb-2">Order Number</p>
            <p className="text-xl font-sans font-bold text-lorvique-dark">{orderNumber}</p>
          </div>
          
          <Link 
            to="/"
            className="inline-block bg-black text-white px-12 py-4 text-xs font-sans tracking-widest uppercase hover:bg-black/80 transition-colors"
          >
            Return to Home
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ConfirmationPage;
