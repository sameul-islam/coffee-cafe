import React from "react";
import BrandHero from "../assets/coffee-hero.jpg";
import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="relative w-full min-h-[600px] font-Titillium sm:min-h-[800px] bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BrandHero})` }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-cursive mb-6 leading-tight"
        >
          Experience the Richest <span className="text-[#d29c76]">Coffee</span> in Town
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm sm:text-lg max-w-xl mb-6 text-gray-200"
        >
          Our coffee beans are hand-selected from the finest plantations, roasted to perfection, and delivered with love to give you an unforgettable premium experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="/coffeeproducts"
            className="bg-gradient-to-r from-[#d29c76] to-[#7e2a0c] py-3 px-6 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore Our Coffee
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
