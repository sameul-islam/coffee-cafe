import React from "react";
import { motion } from "framer-motion";
import { FaCoffee, FaMugHot, FaLeaf } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCoffee className="text-4xl text-primary" />,
    title: "Coffee Brewing Workshops",
    description:
      "Learn the art of brewing the perfect cup of coffee. Hands-on classes with our expert baristas.",
  },
  {
    id: 2,
    icon: <FaMugHot className="text-4xl text-primary" />,
    title: "Catering & Events",
    description:
      "Professional coffee catering for corporate events, weddings, and parties. Make every event memorable.",
  },
  {
    id: 3,
    icon: <FaLeaf className="text-4xl text-primary" />,
    title: "Sustainable Coffee Consulting",
    description:
      "We guide businesses in sourcing and serving sustainably grown coffee while maintaining premium quality.",
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen mt-20 flex flex-col font-Titillium bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-secondary/35 text-white py-24 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Professional Coffee Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Elevate your coffee experience with our curated services for enthusiasts and businesses alike.
        </p>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/80 text-white py-16 px-4 text-center rounded-t-xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Elevate Your Coffee Experience?
        </h2>
        <p className="mb-6 text-lg">
          Contact us today to schedule a workshop, event, or consultation.
        </p>
        <a
          href="/contact"
          className="bg-white text-primary/35 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
        >
          Get in Touch
        </a>
      </section>

    </div>
  );
};

export default ServicePage;
