import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { categoryData } from '../data/categoryData';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Fallback to jewelry if category doesn't exist to prevent crashes
  const currentCategory = categoryId && categoryData[categoryId] ? categoryData[categoryId] : categoryData['jewelry'];
  
  // Filter products based on the current category
  const categoryProducts = products.filter(p => p.category === currentCategory.id);
  
  // If no products found for this category, fallback to all products (for mockup purposes)
  const displayProducts = categoryProducts.length > 0 ? categoryProducts : products.slice(0, 8);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // If the URL has an invalid category, we could redirect to jewelry
  if (categoryId && !categoryData[categoryId]) {
    return <Navigate to="/category/jewelry" replace />;
  }

  return (
    <div className="font-serif min-h-screen bg-white selection:bg-lorvique-dark selection:text-white">
      <Navbar theme="dark" />
      
      <main>
        {/* Category Hero Banner */}
        <section className="relative w-full h-[60vh] min-h-[400px] bg-lorvique-dark overflow-hidden pt-32">
          <motion.img 
            key={currentCategory.heroImage} // Key forces re-render/animation on route change
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            src={currentCategory.heroImage} 
            alt={currentCategory.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-16">
            <motion.div 
              key={currentCategory.id} // Key forces re-render/animation on route change
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.2 }}
              className="max-w-3xl text-white"
            >
              <motion.div variants={fadeUpVariants} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="text-xs tracking-widest uppercase mb-4 opacity-80">
                {currentCategory.breadcrumb}
              </motion.div>
              <motion.h1 variants={fadeUpVariants} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
                {currentCategory.title}
              </motion.h1>
              <motion.p variants={fadeUpVariants} transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }} className="text-sm md:text-base font-light tracking-wide max-w-2xl">
                {currentCategory.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter + Sort Bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="text-xs font-sans tracking-widest text-lorvique-text">
            {displayProducts.length * 101} Results
          </div>
          <div className="flex gap-6">
            <button className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase hover:opacity-70 transition-opacity">
              <SlidersHorizontal size={16} />
              <span>Filters</span>
            </button>
            <button className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase hover:opacity-70 transition-opacity">
              <span>Sort by</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <section className="px-6 md:px-12 py-12 max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
            
            {/* First 4 Products */}
            {displayProducts.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}

            {/* Promotional Banner inside Grid (Spans 2 columns) */}
            {currentCategory.promo && (
              <motion.div 
                key={`promo-${currentCategory.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="col-span-2 row-span-1 flex flex-col bg-lorvique-beige group cursor-pointer"
              >
                <div className="w-full h-64 overflow-hidden relative">
                  <img 
                    src={currentCategory.promo.image} 
                    alt={currentCategory.promo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center bg-white flex-grow">
                  <h3 className="text-lg font-bold font-sans tracking-wide text-lorvique-dark mb-2">{currentCategory.promo.title}</h3>
                  <p className="text-sm font-light text-lorvique-text mb-6">{currentCategory.promo.description}</p>
                  <button className="border border-lorvique-dark px-6 py-2 text-xs tracking-widest uppercase hover:bg-lorvique-dark hover:text-white transition-colors duration-300 w-fit">
                    {currentCategory.promo.buttonText}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Next Products */}
            {displayProducts.slice(4, 8).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index + 4} />
            ))}

          </div>

          {/* Load More */}
          <div className="flex justify-center mt-20">
            <button className="bg-black text-white px-12 py-4 text-xs font-sans tracking-widest uppercase hover:bg-black/80 transition-colors duration-300">
              Load more
            </button>
          </div>
        </section>

        {/* Category Information */}
        <section className="bg-lorvique-beige py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              key={`infoTitle1-${currentCategory.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl font-serif text-lorvique-dark mb-6"
            >
              {currentCategory.infoTitle1}
            </motion.h2>
            <motion.p 
              key={`infoText1-${currentCategory.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="text-sm font-light text-lorvique-text leading-relaxed mb-8"
            >
              {currentCategory.infoText1}
            </motion.p>
            
            <motion.h3 
              key={`infoTitle2-${currentCategory.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="text-xl font-serif text-lorvique-dark mb-4"
            >
              {currentCategory.infoTitle2}
            </motion.h3>
            <motion.p 
              key={`infoText2-${currentCategory.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              className="text-sm font-light text-lorvique-text leading-relaxed"
            >
              {currentCategory.infoText2}
            </motion.p>
          </div>
        </section>

        {/* Recommendation Tags */}
        <section className="bg-lorvique-beige pb-24 px-6 md:px-12 text-center">
          <h3 className="text-lg font-bold font-sans tracking-wide text-lorvique-dark mb-8">You may also like</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
            {currentCategory.tags.map((tag) => (
              <button key={tag} className="px-6 py-2 rounded-full bg-black/5 hover:bg-black/10 text-xs font-sans tracking-wide text-lorvique-dark transition-colors duration-300">
                {tag}
              </button>
            ))}
          </div>
          <button className="text-xs font-bold tracking-widest uppercase border-b border-lorvique-dark pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300">
            Show more
          </button>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
