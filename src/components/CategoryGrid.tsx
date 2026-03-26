import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Romantic Gifts",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT-Image-Mar-13-2026-12_38_14-AM.webp",
  },
  {
    title: "Decorations",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT%20Image%20Mar%2012%2C%202026%2C%2011_41_00%20PM.webp",
  },
  {
    title: "Bracelets",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT-Image-Mar-12-2026-11_46_48-PM.webp",
  },
  {
    title: "Earrings",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT-Image-Mar-13-2026-12_31_19-AM.webp",
  },
  {
    title: "Necklaces",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT-Image-Mar-12-2026-11_41_04-PM.webp",
  },
  {
    title: "Rings",
    image:
      " https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT%20Image%20Mar%2013%2C%202026%2C%2012_31_21%20AM.webp",
  },
  {
    title: "Watches",
    image:
      "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/ChatGPT-Image-Mar-13-2026-12_31_22-AM.webp",
  },
];

const CategoryGrid = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 lg:px-12">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 max-w-[1600px] mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.1, // Stagger effect
            }}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="w-full aspect-square overflow-hidden bg-lorvique-beige mb-4 shadow-sm transition-shadow duration-500 ease-luxury group-hover:shadow-xl p-8">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-luxury group-hover:scale-105"
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

export default CategoryGrid;
