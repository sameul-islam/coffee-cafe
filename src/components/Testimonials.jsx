import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    role: "Coffee Enthusiast",
    comment: "Absolutely love the aroma and taste! Every sip feels like a luxury experience.",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 2,
    name: "James K.",
    role: "Barista",
    comment: "Premium quality beans, perfectly roasted. Highly recommend for true coffee lovers!",
    avatar: "https://i.pravatar.cc/100?img=21",
  },
  {
    id: 3,
    name: "Sophia L.",
    role: "Coffee Aficionado",
    comment: "The flavors are rich and smooth. Hands down the best coffee I have ever tasted.",
    avatar: "https://i.pravatar.cc/100?img=31",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-cursive font-bold text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
          <motion.div
            key={current}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 px-6 py-10"
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
            </div>
            <p className="text-gray-600 text-lg italic relative">
              <FaQuoteLeft className="absolute -left-4 -top-2 text-primary" />
              {testimonials[current].comment}
              <FaQuoteRight className="absolute -right-4 -bottom-2 text-primary" />
            </p>
            <h3 className="text-xl font-bold mt-4 text-gray-800">
              {testimonials[current].name}
            </h3>
            <span className="text-gray-500">{testimonials[current].role}</span>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
