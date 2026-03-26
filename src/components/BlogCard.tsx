import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Article } from '../data/articles';

interface BlogCardProps {
  article: Article;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
      className="group flex flex-col h-full"
    >
      <Link to={`/article/${article.id}`} className="block w-full aspect-[3/4] overflow-hidden mb-6 bg-lorvique-beige">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
        />
      </Link>
      
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-serif text-lorvique-dark mb-2">
          {article.title}
        </h3>
        <span className="text-[10px] uppercase tracking-widest text-lorvique-text mb-4 block">
          {article.category}
        </span>
        <p className="text-sm font-light text-lorvique-text leading-relaxed mb-6 flex-grow">
          {article.shortDescription}
        </p>
        <Link 
          to={`/article/${article.id}`} 
          className="text-xs font-sans tracking-widest uppercase border-b border-lorvique-dark pb-1 w-fit hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
        >
          Read more
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
