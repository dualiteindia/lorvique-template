import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import CTABanner from "../components/CTABanner";
import BlogCard from "../components/BlogCard";
import EditorialSplit from "../components/EditorialSplit";
import ProductCarousel from "../components/ProductCarousel";
import { articles } from "../data/articles";
import { products } from "../data/products";

const WorldOfLorvique = () => {
  const highlights = articles.slice(0, 3);
  const additionalStories = articles.slice(3, 6);

  // Select some trending products for the carousel
  const trendingProducts = products.filter((p) =>
    ["1", "4", "w2", "a2"].includes(p.id),
  );

  return (
    <div className="font-serif min-h-screen bg-white selection:bg-lorvique-dark selection:text-white">
      <Navbar theme="light" />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-lorvique-beige py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-lorvique-dark mb-6">
              World of Lorvique
            </h1>
            <p className="text-sm md:text-base font-light text-lorvique-text tracking-wide">
              Illuminating the many facets of Lorvique from heritage to
              lifestyle and beyond.
            </p>
          </motion.div>
        </section>

        {/* Highlights Grid */}
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-lorvique-dark">
              Highlights
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {highlights.map((article, index) => (
              <BlogCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </section>

        {/* Alternating Editorial Splits */}
        <EditorialSplit
          image="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=compress&fit=crop&q=80&w=1600"
          imagePosition="left"
          title="Spotlight"
          description="Discover the latest news, events, and highlights in the world of crystal. From red carpet moments to exclusive behind-the-scenes glimpses of our ateliers."
          linkText="Discover more"
          linkUrl={`/article/${articles[0].id}`}
        />

        <EditorialSplit
          image="https://images.unsplash.com/photo-1588444837495-c6cfcb75f07c?auto=compress&fit=crop&q=80&w=1600"
          imagePosition="right"
          title="Style Stories"
          description="Explore inspirations for personal expression from jewelry styling to trends in fashion, art, and culture. Learn how to curate your own unique look with Lorvique pieces."
          linkText="Discover more"
          linkUrl={`/article/${articles[1].id}`}
        />

        <EditorialSplit
          image="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/Luxury_Jewelry_Video_Generation-1.webm"
          isVideo={true}
          imagePosition="left"
          title="Inside Lorvique"
          description="Learn about Lorvique's heritage of craftsmanship, innovation, and creativity. Journey through 130 years of mastery in crystal cutting and design."
          linkText="Discover more"
          linkUrl={`/article/${articles[2].id}`}
        />

        {/* Trending Pieces Carousel */}
        <ProductCarousel
          title="Trending Pieces"
          products={trendingProducts}
          bgColor="bg-lorvique-beige"
        />

        {/* Additional Stories Grid */}
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-lorvique-dark mb-4">
              World of Lorvique
            </h2>
            <p className="text-sm font-light text-lorvique-text mb-6">
              Illuminating the many facets of Lorvique from heritage to
              lifestyle and beyond.
            </p>
            <a
              href="#"
              className="text-xs font-sans tracking-widest uppercase border-b border-lorvique-dark pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
            >
              Explore all
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {additionalStories.map((article, index) => (
              <BlogCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </section>

        <Services />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default WorldOfLorvique;

