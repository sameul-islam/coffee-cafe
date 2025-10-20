import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import Insta1 from "../assets/Instagram/Insta1.jpg";
import Insta2 from "../assets/Instagram/Insta2.jpg";
import Insta3 from "../assets/Instagram/Insta3.jpg";
import Insta4 from "../assets/Instagram/Insta4.jpg";
import Insta5 from "../assets/Instagram/Insta5.jpg";
import Insta6 from "../assets/Instagram/Insta6.jpg";
import Insta7 from "../assets/Instagram/Insta7.jpg";
import Insta8 from "../assets/Instagram/Insta8.jpg";
import Insta9 from "../assets/Instagram/Insta9.jpg";
import Insta10 from "../assets/Instagram/Insta10.jpg";
import Insta11 from "../assets/Instagram/Insta11.jpg";
import Insta12 from "../assets/Instagram/Insta12.jpg";


const instaImages = [
  { id: 1, src: Insta1, alt: "Latte Art" },
  { id: 2, src: Insta2, alt: "Coffee Beans" },
  { id: 3, src: Insta3, alt: "Espresso Moment" },
  { id: 4, src: Insta4, alt: "Morning Coffee" },
  { id: 5, src: Insta5, alt: "Cafe Interior" },
  { id: 6, src: Insta6, alt: "Pour Over Brew" },
  { id: 7, src: Insta7, alt: "Barista at Work" },
  { id: 8, src: Insta8, alt: "Iced Coffee" },
  { id: 9, src: Insta9, alt: "Coffee Break" },
  { id: 10, src: Insta10, alt: "Fresh Roast" },
  { id: 11, src: Insta11, alt: "Cappuccino Art" },
  { id: 12, src: Insta12, alt: "Evening Vibes" },
];

const InstagramGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-[#f9f7f4] py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#3e2723] font-cursive">
          Follow Us on Instagram
        </h2>
        <p className="text-gray-600 mt-3 text-lg font-Titillium">
          Experience our coffee moments around the world
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 px-4 md:px-12">
        {instaImages.map((img) => (
          <motion.div
            key={img.id}
            className="relative overflow-hidden group rounded-xl shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">@CoffeeCafe</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-3xl w-full px-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full"
              >
                <X size={28} />
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected Instagram"
                className="rounded-xl w-full h-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstagramGallery;















