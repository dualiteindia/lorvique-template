import React from "react";
import { motion } from "framer-motion";

interface LinkProp {
  label: string;
  url: string;
}

interface FeatureSplitProps {
  image: string;
  isVideo?: boolean;
  subtitle: string;
  title: string;
  description: string;
  links: LinkProp[];
}

const FeatureSplit: React.FC<FeatureSplitProps> = ({
  image,
  isVideo,
  subtitle,
  title,
  description,
  links,
}) => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full flex flex-col md:flex-row bg-lorvique-beige min-h-[600px]">
      {/* Left: Image / Video */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden">
        {isVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            // @ts-expect-error - fetchPriority is not yet in @types/react
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={image} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 lg:p-32 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-md w-full"
        >
          <motion.span
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="block text-[10px] uppercase tracking-widest text-lorvique-text mb-4"
          >
            {subtitle}
          </motion.span>

          <motion.h2
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-4xl font-serif text-lorvique-dark mb-6 leading-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm font-light text-lorvique-text leading-relaxed mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-sm tracking-widest uppercase border-b border-lorvique-dark pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors duration-300 w-fit"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSplit;
