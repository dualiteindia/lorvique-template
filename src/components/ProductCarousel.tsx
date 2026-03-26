import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  images: string[];
  tag?: string;
  name: string;
  description: string;
  price: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
  bgColor?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products, bgColor = 'bg-lorvique-beige' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={`w-full py-24 ${bgColor} overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-lorvique-dark">
          {title}
        </h2>
      </motion.div>

      <div className="relative max-w-[1800px] mx-auto px-4 md:px-12">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors duration-300"
        >
          <ChevronLeft size={24} className="text-lorvique-dark" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white hover:bg-black/80 flex items-center justify-center transition-colors duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-8 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1 
              }}
              className="min-w-[260px] md:min-w-[320px] flex-shrink-0 snap-start group cursor-pointer bg-white p-6 flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square mb-6 overflow-hidden flex items-center justify-center">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
              </div>
              
              {product.tag && (
                <span className="text-[10px] uppercase tracking-widest text-lorvique-text mb-2">
                  {product.tag}
                </span>
              )}
              
              <h3 className="text-sm font-bold font-sans tracking-wide text-lorvique-dark mb-1">
                {product.name}
              </h3>
              
              <p className="text-xs font-light text-lorvique-text mb-3 line-clamp-1">
                {product.description}
              </p>
              
              <p className="text-sm font-sans text-lorvique-dark">
                {product.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
