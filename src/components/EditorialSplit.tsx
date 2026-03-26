import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface EditorialSplitProps {
  image: string;
  isVideo?: boolean;
  imagePosition: 'left' | 'right';
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const EditorialSplit: React.FC<EditorialSplitProps> = ({ 
  image, 
  isVideo = false,
  imagePosition, 
  title, 
  description, 
  linkText, 
  linkUrl 
}) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`w-full flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white min-h-[70vh]`}>
      {/* Media Side */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden">
        {isVideo ? (
          <motion.video 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={image} type="video/mp4" />
          </motion.video>
        ) : (
          <motion.img 
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 lg:p-32 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-md w-full"
        >
          <motion.h2 
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-lorvique-dark mb-6 leading-tight"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm font-light text-lorvique-text leading-relaxed mb-10"
          >
            {description}
          </motion.p>
          
          <motion.div 
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link 
              to={linkUrl}
              className="text-xs font-sans tracking-widest uppercase border-b border-lorvique-dark pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300 w-fit"
            >
              {linkText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialSplit;
