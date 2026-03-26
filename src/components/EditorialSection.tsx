import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: "130 Years of Joy",
    description: "Discover the journey of brightening the world since 1895, celebrating 130 years of creating joy and brilliance.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT-Image-Mar-13-2026-10_45_54-PM.webp",
    link: "Discover more"
  },
  {
    title: "Spring Jewelry Trends & Color Palettes",
    description: "Discover the spring color palette with revitalizing shades from nature. Learn how to style warm hues with soft neutrals and gold tones for an uplifting look.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/d06e7b100348ffd71345ddd2eb480448.webp",
    link: "Read more"
  },
  {
    title: "Lorvique Osaka",
    description: "Discover the new Lorvique store in Osaka, as we celebrate 130 years of crafting beautiful jewelry that makes the world shine.",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/eca09e856bd54705b36e8646796519b9.webp",
    link: "Discover more"
  }
];

const EditorialSection = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-lorvique-dark mb-4">
          World of Lorvique
        </h2>
        <p className="text-sm font-light text-lorvique-text mb-6">
          Illuminating the many facets of Lorvique from heritage to lifestyle and beyond.
        </p>
        <a href="#" className="text-sm tracking-widest uppercase border-b border-lorvique-dark pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300">
          Explore all
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
        {articles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.2
            }}
            className="group cursor-pointer flex flex-col"
          >
            <div className="w-full aspect-[4/5] overflow-hidden mb-6">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-serif text-lorvique-dark mb-3">
              {article.title}
            </h3>
            <p className="text-sm font-light text-lorvique-text mb-6 flex-grow">
              {article.description}
            </p>
            <a href="#" className="text-sm tracking-widest border-b border-lorvique-dark pb-1 w-fit hover:text-gray-500 hover:border-gray-500 transition-colors duration-300">
              {article.link}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EditorialSection;
