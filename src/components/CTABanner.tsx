import React from 'react';
import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="w-full bg-[#8BB8E8] py-20 px-6 relative overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-lorvique-dark mb-4">
          Sign up and get 10% off*
        </h2>
        <p className="text-sm font-light text-lorvique-dark mb-8 leading-relaxed">
          Be first to receive updates on new collections, style inspiration, gift ideas and exclusive access. Sign up to the Lorvique Club today and receive 10% off* on your next online purchase (full-price items only). <a href="#" className="underline hover:text-white transition-colors">*Terms and conditions apply</a>
        </p>
        <button className="px-10 py-3 bg-black text-white font-sans text-sm tracking-widest hover:bg-black/80 transition-colors duration-300 ease-luxury">
          Join the Club
        </button>
      </motion.div>

      {/* Decorative Graphic Right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute right-[-10%] md:right-[5%] lg:right-[15%] top-1/2 -translate-y-1/2 opacity-30 md:opacity-100 pointer-events-none"
      >
        {/* Using a stylized CSS shape to represent the crystal graphic for reliable rendering */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/40 flex items-center justify-center relative backdrop-blur-sm bg-white/10">
           <div className="absolute inset-4 rounded-full border border-white/20"></div>
           <div className="text-white/60 font-serif text-8xl italic">L</div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
