import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import EditorialSplit from "../components/EditorialSplit";
import { articles } from "../data/articles";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <Navigate to="/world-of-lorvique" replace />;
  }

  // Get 3 related articles for the bottom section
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-serif min-h-screen bg-white selection:bg-lorvique-dark selection:text-white">
      <Navbar theme="light" />

      <main className="pt-32">
        {/* SECTION 1 — ARTICLE HERO */}
        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-lorvique-dark mb-6"
            >
              {article.title}
            </motion.h1>

            {article.heroSubtitle && (
              <motion.p
                variants={fadeUpVariants}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-sm font-sans tracking-widest uppercase text-lorvique-text mb-8"
              >
                {article.heroSubtitle}
              </motion.p>
            )}

            {article.heroIntro && (
              <motion.p
                variants={fadeUpVariants}
                transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-sm md:text-base font-light text-lorvique-text leading-relaxed max-w-3xl mx-auto"
              >
                {article.heroIntro}
              </motion.p>
            )}
          </motion.div>
        </section>

        {/* SECTION 2 — FEATURE VIDEO OR HERO IMAGE */}
        {article.featureMediaUrl && (
          <section className="w-full px-6 md:px-12 lg:px-24 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-[1400px] mx-auto text-center"
            >
              {article.featureMediaTitle && (
                <h2 className="text-2xl md:text-3xl font-serif text-lorvique-dark mb-10">
                  {article.featureMediaTitle}
                </h2>
              )}

              <div className="w-full aspect-video bg-lorvique-beige relative overflow-hidden mb-8">
                {article.featureMediaUrl.endsWith(".mp4") ? (
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                    preload="auto"
                    // @ts-expect-error - fetchPriority is not yet in @types/react
                    fetchPriority="high"
                  >
                    <source src={article.featureMediaUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={article.featureMediaUrl}
                    alt={article.featureMediaTitle || article.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>

              {article.featureMediaCaption && (
                <p className="text-xs font-light text-lorvique-text max-w-2xl mx-auto leading-relaxed">
                  {article.featureMediaCaption}
                </p>
              )}
            </motion.div>
          </section>
        )}

        {/* SECTION 3 — INTRODUCTORY ARTICLE TEXT */}
        {(article.introTitle || article.introText) && (
          <section className="px-6 py-16 md:py-24 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {article.introTitle && (
                <h2 className="text-2xl md:text-3xl font-serif text-lorvique-dark mb-6">
                  {article.introTitle}
                </h2>
              )}
              {article.introText && (
                <p className="text-sm md:text-base font-light text-lorvique-text leading-relaxed">
                  {article.introText}
                </p>
              )}
            </motion.div>
          </section>
        )}

        {/* SECTIONS 4, 5, 6 — ALTERNATING EDITORIAL SPLITS */}
        {article.splits && article.splits.length > 0 && (
          <div className="flex flex-col">
            {article.splits.map((split, index) => (
              <EditorialSplit
                key={index}
                image={split.image}
                imagePosition={split.imagePosition}
                title={split.title}
                description={split.description}
                linkText={split.linkText}
                linkUrl={split.linkUrl}
              />
            ))}
          </div>
        )}

        {/* SECTION 7 — RELATED ARTICLES */}
        <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto border-t border-gray-100 mt-12">
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
            <Link
              to="/world-of-lorvique"
              className="text-xs font-sans tracking-widest uppercase border-b border-lorvique-dark pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300"
            >
              Explore all
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {relatedArticles.map((relArticle, index) => (
              <BlogCard
                key={relArticle.id}
                article={relArticle}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      {/* SECTION 8 — GLOBAL FOOTER */}
      <Footer />
    </div>
  );
};

export default ArticlePage;
