import React from "react";
import CoffeeBg from "../assets/website/coffee-parallax.jpg"; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CoffeeParallaxSection = () => {
  return (
    <section
      className="relative h-[500px] sm:h-[750px] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${CoffeeBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-5xl font-cursive font-bold mb-4 drop-shadow-lg">
          From Bean to Perfection
        </h2>
        <p className="text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Every cup of our coffee begins with handpicked beans, slow-roasted to
          perfection. Experience the aroma, taste, and warmth that connect you
          to every origin — one sip at a time.
        </p>

     <Link to="/coffeeproducts">  <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-secondary text-white rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-primary/90 transition-all duration-300"
        >
          Explore Our Collection
        </motion.button> </Link> 
      </motion.div>
    </section>
  );
};

export default CoffeeParallaxSection;
