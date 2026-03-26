import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.05 }}
      className="group flex flex-col bg-white"
    >
      <div className="relative aspect-square overflow-hidden bg-lorvique-beige mb-4">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 group-hover:scale-105"
          />
        </Link>
        
        <button className="absolute top-4 right-4 z-10 p-2 text-lorvique-text hover:text-lorvique-dark transition-colors">
          <Heart size={20} strokeWidth={1.5} className="hover:fill-current transition-all duration-300" />
        </button>
      </div>

      <div className="px-2 pb-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 text-[10px] uppercase tracking-widest text-lorvique-text">
          <span>{product.isNew ? 'New' : ''}</span>
          <span>{product.colors ? `${product.colors} Colors` : ''}</span>
        </div>
        
        <Link to={`/product/${product.id}`} className="group-hover:opacity-70 transition-opacity">
          <h3 className="text-sm font-bold font-sans tracking-wide text-lorvique-dark mb-1">
            {product.name}
          </h3>
          <p className="text-xs font-light text-lorvique-text mb-3 line-clamp-2">
            {product.description}
          </p>
        </Link>
        
        <div className="mt-auto pt-2">
          <p className="text-sm font-sans text-lorvique-dark">
            {product.price}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
