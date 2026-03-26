import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: "Jewelry",
    image: "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5648937/matrix-tennis-bracelet--round-cut--white--rhodium-plated-swarovski-5648937.jpg"
  },
  {
    title: "Watches",
    image: "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5644062/octea-lux-sport-watch--swiss-made--metal-bracelet--rose-gold-tone--rose-gold-tone-finish-swarovski-5644062.jpg"
  },
  {
    title: "Decorations",
    image: "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5615387/annual-edition-ornament-2022-swarovski-5615387.jpg"
  },
  {
    title: "Accessories",
    image: "https://asset.swarovski.com/images/c_crop,g_xy_center,w_10000,h_10000,x_0,y_0/dpr_1.0,f_auto,q_auto,c_lpad,w_800,h_1066/v1/5224390/crystalline-ballpoint-pen--rose-gold-tone--rose-gold-tone-plated-swarovski-5224390.jpg"
  }
];

const CategoryShowcase = () => {
  return (
    <section className="w-full bg-lorvique-beige py-24 px-4 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-lorvique-dark">
          Shop by Category
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1600px] mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.1
            }}
            className="group cursor-pointer flex flex-col items-center bg-white p-8"
          >
            <div className="w-full aspect-square overflow-hidden mb-6 flex items-center justify-center">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-3/4 h-3/4 object-contain mix-blend-multiply transition-transform duration-700 ease-luxury group-hover:scale-110"
              />
            </div>
            <h3 className="text-sm font-sans tracking-wide text-lorvique-text">
              {category.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
