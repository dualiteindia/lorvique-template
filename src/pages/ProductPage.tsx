import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductCarousel";
import CategoryShowcase from "../components/CategoryShowcase";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const { addToCart, showToast, setIsCartOpen } = useCart();

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [openSection, setOpenSection] = useState<string | null>("description");
  const [deliveryOption, setDeliveryOption] = useState<"address" | "store">(
    "address",
  );
  const [isAdding, setIsAdding] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleAddToBag = () => {
    setIsAdding(true);
    addToCart(product, 1);
    showToast(`${product.name} added to bag`);
    setIsCartOpen(true);
    setTimeout(() => setIsAdding(false), 600);
  };

  // Mock related products
  const completeTheLook = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const youMayAlsoLike = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="font-serif min-h-screen bg-lorvique-beige selection:bg-lorvique-dark selection:text-white">
      <Navbar theme="light" />

      <main className="pt-40">
        <section className="flex flex-col lg:flex-row max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-8 gap-12">
          {/* Left: Product Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto hide-scrollbar md:w-20 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-20 flex-shrink-0 border transition-all duration-300 ${activeImage === img ? "border-lorvique-dark" : "border-transparent hover:border-gray-300"}`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              <button className="w-16 h-20 flex-shrink-0 border border-transparent hover:border-gray-300 flex flex-col items-center justify-center bg-gray-100 text-lorvique-text transition-colors">
                <span className="text-xs font-sans">360°</span>
                <svg
                  className="w-4 h-4 mt-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  <path d="M9 12a3 3 0 106 0 3 3 0 00-6 0z"></path>
                </svg>
              </button>
            </div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-grow bg-white relative aspect-[4/5] overflow-hidden group cursor-zoom-in"
            >
              <img
                src={activeImage}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain p-8 transition-transform duration-700 ease-luxury group-hover:scale-110"
              />
              <button className="absolute top-6 right-6 z-10 text-lorvique-text hover:text-lorvique-dark transition-colors">
                <Heart size={24} strokeWidth={1} />
              </button>
            </motion.div>
          </div>

          {/* Right: Product Info & Options */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4 max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
            >
              {product.isNew && (
                <span className="text-[10px] uppercase tracking-widest text-lorvique-text block mb-2">
                  New
                </span>
              )}

              <h1 className="text-2xl md:text-3xl font-serif text-lorvique-dark mb-2">
                {product.name}
              </h1>

              <p className="text-sm font-light text-lorvique-text mb-6">
                {product.description}
              </p>

              <div className="mb-8">
                <p className="text-xl font-sans text-lorvique-dark mb-1">
                  {product.price}
                </p>
                <p className="text-[10px] text-lorvique-text">
                  MRP (incl. of all taxes)
                </p>
              </div>

              {/* Delivery Options */}
              <div className="mb-8 border-t border-gray-200 pt-6">
                <h3 className="text-xs font-bold font-sans tracking-widest uppercase mb-4">
                  Delivery options
                </h3>

                <div className="space-y-4">
                  <label
                    className={`flex items-start gap-3 p-4 cursor-pointer border transition-colors ${deliveryOption === "address" ? "bg-white border-lorvique-dark" : "bg-transparent border-transparent hover:bg-white/50"}`}
                  >
                    <div className="mt-1 relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="delivery"
                        checked={deliveryOption === "address"}
                        onChange={() => setDeliveryOption("address")}
                        className="peer sr-only"
                      />
                      <div className="w-4 h-4 rounded-full border border-lorvique-dark peer-checked:border-lorvique-dark flex items-center justify-center">
                        {deliveryOption === "address" && (
                          <div className="w-2 h-2 rounded-full bg-lorvique-dark"></div>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-sans block mb-1">
                        Delivery to address
                      </span>
                      <span className="text-xs text-green-700 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-700 inline-block"></span>{" "}
                        Available online
                      </span>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-3 p-4 cursor-pointer border transition-colors ${deliveryOption === "store" ? "bg-white border-lorvique-dark" : "bg-transparent border-transparent hover:bg-white/50"}`}
                  >
                    <div className="mt-1 relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="delivery"
                        checked={deliveryOption === "store"}
                        onChange={() => setDeliveryOption("store")}
                        className="peer sr-only"
                      />
                      <div className="w-4 h-4 rounded-full border border-lorvique-dark peer-checked:border-lorvique-dark flex items-center justify-center">
                        {deliveryOption === "store" && (
                          <div className="w-2 h-2 rounded-full bg-lorvique-dark"></div>
                        )}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-sans block mb-1">
                        Find in store
                      </span>
                      <span className="text-xs text-lorvique-text underline hover:text-lorvique-dark transition-colors">
                        Click & Collect: Check Availability
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <button
                  onClick={handleAddToBag}
                  className={`w-full bg-black text-white py-4 text-xs font-sans tracking-widest uppercase transition-all duration-300 ${isAdding ? "bg-green-700 scale-[0.98]" : "hover:bg-black/80"}`}
                >
                  {isAdding ? "Added to Bag" : "Add to bag"}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-lorvique-text mb-12">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
                <span>Free standard shipping over $120.00.</span>
              </div>
            </motion.div>

            {/* Expandable Details */}
            <div className="border-t border-gray-200">
              {[
                {
                  id: "description",
                  title: "Description",
                  content:
                    product.longDescription ||
                    `Signifying the values of love, joy, and eternal beauty, this delicate ${product.name.toLowerCase()} interprets the iconic Lorvique swan in rose gold-tone plating and a variety of Lorvique Zirconia in round and marquise cuts.\n\n• Article no.: ${product.id}8202\n• Collection: ${product.category}\n• Length: 15.5 - 20 cm\n• Material: Cubic Zirconia, Rose gold-tone plated\n• Color: White`,
                },
                {
                  id: "shipping",
                  title: "Shipping & returns",
                  content:
                    "Standard shipping takes 3-5 business days. Returns are accepted within 14 days of delivery.",
                },
                {
                  id: "care",
                  title: "Care & maintenance",
                  content:
                    "Store your jewelry in the original packaging or a soft pouch to avoid scratches. Polish frequently with a soft cloth.",
                },
                {
                  id: "gift",
                  title: "Gift-giving services",
                  content:
                    "Add a personalized touch with our premium gift packaging and greeting cards available at checkout.",
                },
                {
                  id: "appointment",
                  title: "Book an appointment",
                  content:
                    "Book an in-store appointment with our Crystal Experts for personalized styling advice.",
                },
              ].map((section) => (
                <div key={section.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex justify-between items-center py-5 text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="text-xs font-bold font-sans tracking-widest text-lorvique-dark">
                      {section.title}
                    </span>
                    {openSection === section.id ? (
                      <span className="text-xl font-light">-</span>
                    ) : (
                      <span className="text-xl font-light">+</span>
                    )}
                  </button>
                  <AnimatePresence>
                    {openSection === section.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-xs font-light text-lorvique-text leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete the Look */}
        {completeTheLook.length > 0 && (
          <ProductCarousel
            title="Complete the Look"
            products={completeTheLook}
            bgColor="bg-lorvique-beige"
          />
        )}

        {/* You May Also Like */}
        <ProductCarousel
          title="You May Also Like"
          products={youMayAlsoLike}
          bgColor="bg-lorvique-beige"
        />

        {/* Promotional Banner */}
        <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=compress&fit=crop&q=80&w=2000"
            alt="Charming Love"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-xl text-white"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
                Charming Love
              </h2>
              <p className="text-base md:text-lg font-light mb-8">
                Personalize every look with new Lorvique Charms
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-white text-black text-xs font-sans tracking-widest uppercase hover:bg-gray-100 transition-colors">
                  Shop now
                </button>
                <button className="px-8 py-3 bg-transparent border border-white text-white text-xs font-sans tracking-widest uppercase hover:bg-white/10 transition-colors">
                  Discover more
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Shop by Category */}
        <CategoryShowcase />

        <CTABanner />

        {/* Breadcrumbs at very bottom per ref image */}
        <div className="px-6 md:px-12 lg:px-24 py-8 text-[10px] font-sans tracking-wide text-lorvique-text bg-lorvique-beige border-t border-gray-200">
          Home |{" "}
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}{" "}
          | {product.name}, {product.description}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
