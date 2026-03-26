import React from 'react';
import { motion } from 'framer-motion';

const BrandStatement = () => {
  return (
    <section className="w-full bg-lorvique-beige py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-lorvique-dark mb-6">
          Masters of Light Since 1895
        </h2>
        <p className="text-sm md:text-base font-light text-lorvique-text leading-relaxed tracking-wide">
          Since 1895, founder Daniel Lorvique's passion for innovation and design, and mastery of crystal cutting has defined Lorvique as the leading jewelry and accessories brand.
        </p>
      </motion.div>
    </section>
  );
};

export default BrandStatement;
