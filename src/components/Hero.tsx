import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-lorvique-dark">
      {/* Video Background with 20% zoom (scale-[1.2]) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.2]"
        preload="auto"
        // @ts-expect-error - fetchPriority is not yet in @types/react
        fetchPriority="high"
      >
        <source
          src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/lorvique/Luxury_Jewelry_Commercial_Video_Generation-1.webm"
          type="video/mp4"
        />
      </video>

      {/* 15% opacity black overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-8 md:px-16 lg:px-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3, delayChildren: 0.5 }}
          className="max-w-xl text-white mt-20"
        >
          <motion.h2
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl font-serif mb-4"
          >
            Charming Love
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl font-light tracking-wide mb-10"
          >
            Personalize every look with new Lorvique Charms
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-3 bg-white text-black font-sans text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors duration-300 ease-luxury">
              Shop now
            </button>
            <button className="px-8 py-3 bg-transparent border border-white text-white font-sans text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300 ease-luxury">
              Discover more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
