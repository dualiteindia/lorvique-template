import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CalendarCheck, Lightbulb, Gift } from 'lucide-react';

const services = [
  {
    icon: <MessageSquare strokeWidth={1} size={32} />,
    title: "CUSTOMER SERVICE LIVE CHAT",
    description: "Need help?\nSpeak to our Customer Service team via chat"
  },
  {
    icon: <CalendarCheck strokeWidth={1} size={32} />,
    title: "BOOK AN APPOINTMENT IN STORE",
    description: "Book an appointment with our Crystal Experts in your local store."
  },
  {
    icon: <Lightbulb strokeWidth={1} size={32} />,
    title: "CUSTOMER SERVICE",
    description: "Explore answers to our FAQs or connect with our Customer Service team."
  },
  {
    icon: <Gift strokeWidth={1} size={32} />,
    title: "GIFT SERVICES",
    description: "Add a personalized touch"
  }
];

const Services = () => {
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
          Lorvique Services
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1400px] mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: index * 0.1
            }}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="mb-6 text-lorvique-dark transition-transform duration-500 ease-luxury group-hover:-translate-y-2">
              {service.icon}
            </div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-lorvique-dark mb-3">
              {service.title}
            </h3>
            <p className="text-xs font-light text-lorvique-text whitespace-pre-line leading-relaxed max-w-[250px]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
