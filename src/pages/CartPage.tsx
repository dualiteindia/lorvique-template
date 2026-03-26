import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Minus, Plus, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();

  const [giftPackaging, setGiftPackaging] = useState(false);
  const [giftNote, setGiftNote] = useState(false);
  const [giftReceipt, setGiftReceipt] = useState(false);

  const formatPrice = (num: number) => {
    return (
      "$ " +
      num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const giftPackagingFee = 5;
  const total = subtotal + (giftPackaging ? giftPackagingFee : 0);

  const recommendedProducts = products.slice(10, 14);

  return (
    <div className="font-serif min-h-screen bg-lorvique-beige selection:bg-lorvique-dark selection:text-white">
      <Navbar theme="light" />

      <main className="pt-40 pb-24 px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center text-lorvique-dark mb-12"
        >
          Your shopping bag
        </motion.h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white shadow-sm">
            <p className="text-lg text-lorvique-text mb-6">
              Your shopping bag is currently empty.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="bg-black text-white px-8 py-3 text-xs font-sans tracking-widest uppercase hover:bg-black/80 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Items & Gift Options */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items */}
              <div className="bg-white p-6 shadow-sm">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col sm:flex-row gap-6 py-6 ${index !== cartItems.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    {/* Product Image */}
                    <div className="w-full sm:w-32 aspect-square bg-lorvique-beige relative flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-contain p-2"
                      />
                      <button className="absolute top-2 right-2 text-lorvique-text hover:text-lorvique-dark">
                        <Heart size={16} strokeWidth={1.5} />
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-bold font-sans text-lorvique-dark mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-xs font-light text-lorvique-text mb-4">
                          {item.product.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-gray-300">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                )
                              }
                              className="p-2 hover:bg-gray-50"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center font-sans text-xs">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                )
                              }
                              className="p-2 hover:bg-gray-50"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-xs font-sans tracking-wide text-lorvique-text underline hover:text-lorvique-dark"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="text-sm font-sans text-lorvique-dark">
                          {item.product.price}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gift Options */}
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-lg font-serif text-lorvique-dark mb-6">
                  Gift options
                </h3>

                {/* Packaging */}
                <div className="flex gap-4 pb-6 border-b border-gray-100">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-50 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=compress&fit=crop&q=80&w=100"
                      alt="gift packaging"
                      className="w-10 h-10 object-cover opacity-70"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-sans text-lorvique-dark mb-1">
                      Gift packaging
                    </h4>
                    <p className="text-xs font-light text-lorvique-text mb-4">
                      Make your gift even more special with a premium branded
                      bag and colorful bow...{" "}
                      <span className="underline cursor-pointer">more</span>
                    </p>

                    <label className="flex items-center justify-between p-4 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={giftPackaging}
                          onChange={(e) => setGiftPackaging(e.target.checked)}
                          className="w-4 h-4 accent-black border-gray-300 rounded-none cursor-pointer"
                        />
                        <span className="text-sm font-sans">
                          Add gift packaging *
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-sans block">$ 5.00</span>
                        <span className="text-[10px] text-lorvique-text">
                          Service fee
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Note */}
                <div className="flex gap-4 py-6 border-b border-gray-100">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-50 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=compress&fit=crop&q=80&w=100"
                      alt="gift note"
                      className="w-10 h-10 object-cover opacity-70"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-sans text-lorvique-dark mb-1">
                      Gift note
                    </h4>
                    <p className="text-xs font-light text-lorvique-text mb-4">
                      You may also include a personalized gift message.
                    </p>

                    <label className="flex items-center justify-between p-4 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={giftNote}
                          onChange={(e) => setGiftNote(e.target.checked)}
                          className="w-4 h-4 accent-black border-gray-300 rounded-none cursor-pointer"
                        />
                        <span className="text-sm font-sans">Add gift note</span>
                      </div>
                      <span className="text-sm font-sans">Free</span>
                    </label>
                  </div>
                </div>

                {/* Receipt */}
                <div className="pt-6">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={giftReceipt}
                      onChange={(e) => setGiftReceipt(e.target.checked)}
                      className="w-4 h-4 mt-0.5 accent-black border-gray-300 rounded-none cursor-pointer"
                    />
                    <div>
                      <span className="text-sm font-sans block mb-1">
                        Include a free gift receipt
                      </span>
                      <p className="text-[11px] font-light text-lorvique-text leading-relaxed">
                        Due to legal requirements, please be aware that a
                        physical invoice is always attached to the parcel.
                        <br />
                        Select this option if you would like to receive a
                        digital gift receipt with your order. The digital gift
                        receipt will not display prices, making it suitable for
                        warranty purposes or returns by the gift recipient.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 shadow-sm sticky top-32">
                <h3 className="text-lg font-serif text-lorvique-dark mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-lorvique-text">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  {giftPackaging && (
                    <div className="flex justify-between">
                      <span className="text-lorvique-text">Gift packaging</span>
                      <span>{formatPrice(giftPackagingFee)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-lorvique-text">Shipping</span>
                    <span>Free</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-b border-gray-100 mb-6">
                  <span className="text-base font-bold font-sans">Total</span>
                  <span className="text-base font-bold font-sans">
                    {formatPrice(total)}
                  </span>
                </div>

                {/* Promo Code */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold font-sans mb-2">
                    Promo code
                  </h4>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      className="flex-grow border border-gray-300 px-4 py-2 text-sm font-sans focus:outline-none focus:border-lorvique-dark"
                    />
                    <button className="border border-l-0 border-lorvique-dark bg-white text-lorvique-dark px-6 py-2 text-xs font-sans tracking-widest uppercase hover:bg-gray-50 transition-colors">
                      Apply
                    </button>
                  </div>

                  <div className="mt-4 space-y-3">
                    <p className="text-[11px] font-bold font-sans">
                      How to use promo codes and gift cards?
                    </p>
                    <div className="flex items-start gap-3 text-[11px] text-lorvique-text">
                      <div className="w-6 h-6 border border-gray-300 flex items-center justify-center flex-shrink-0">
                        %
                      </div>
                      <p>Apply promo codes here in the shopping bag</p>
                    </div>
                    <div className="flex items-start gap-3 text-[11px] text-lorvique-text">
                      <div className="w-6 h-6 border border-gray-300 flex items-center justify-center flex-shrink-0">
                        💳
                      </div>
                      <p>Use Gift Cards at the payment step of the checkout</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-4 text-xs font-sans tracking-widest uppercase hover:bg-black/80 transition-colors mb-8">
                  Checkout
                </button>

                {/* Payment Options */}
                <div>
                  <h4 className="text-xs font-sans mb-3 text-lorvique-text">
                    Payment options
                  </h4>
                  <div className="flex gap-2">
                    {/* Mock Payment Icons */}
                    <div className="w-10 h-6 bg-[#006FCF] rounded flex items-center justify-center text-[8px] text-white font-bold">
                      AMEX
                    </div>
                    <div className="w-10 h-6 bg-[#1A1F71] rounded flex items-center justify-center text-[8px] text-white font-bold italic">
                      VISA
                    </div>
                    <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] text-lorvique-dark font-bold">
                      Diners
                    </div>
                    <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] text-[#F58220] font-bold italic">
                      Discover
                    </div>
                    <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#EB001B] rounded-full -mr-1 mix-blend-multiply"></div>
                      <div className="w-3 h-3 bg-[#F79E1B] rounded-full mix-blend-multiply"></div>
                    </div>
                    <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] text-[#003087] font-bold italic">
                      PayPal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Recommended */}
      <div className="bg-lorvique-beige pb-24">
        <ProductCarousel
          title="You May Also Like"
          products={recommendedProducts}
          bgColor="bg-lorvique-beige"
        />
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
