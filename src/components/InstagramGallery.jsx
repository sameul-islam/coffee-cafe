import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  Insta1,
  Insta2,
  Insta3,
  Insta4,
  Insta5,
  Insta6,
  Insta7,
  Insta8,
  Insta9,
  Insta10,
  Insta11,
  Insta12,
];

const InstagramGallery = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);
  const scrollSpeed = 1.5;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let rafId;

    const smoothScroll = () => {
      if (!paused) {
        const newAmount = scrollAmount + scrollSpeed;
        container.scrollLeft = newAmount;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          setScrollAmount(0);
          container.scrollLeft = 0;
        } else {
          setScrollAmount(newAmount);
        }
      }
      rafId = requestAnimationFrame(smoothScroll);
    };

    rafId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(rafId);
  }, [paused, scrollAmount]);

  return (
    <section className="relative bg-[#f8f6f2] py-20 overflow-hidden font-Titillium">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#3e2723] font-cursive">
          Follow Us on Instagram
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          CoffeeCafeMoments || Where aroma meets aesthetics
        </p>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-6 cursor-grab select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {[...instaImages, ...instaImages].map((src, index) => (
          <div
            key={index}
            className="relative min-w-[240px] sm:min-w-[280px] md:min-w-[320px] rounded-2xl overflow-hidden group"
          >
            <div className="relative w-full h-[320px] overflow-hidden rounded-2xl">
              <img
                src={src}
                alt="Coffee Cafe Instagram"
                className="object-cover w-full h-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <motion.div
                className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center p-4">
              <p className="text-white text-lg font-semibold tracking-wide">
                @CoffeeCafe
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#f8f6f2] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#f8f6f2] to-transparent pointer-events-none" />

      {/* CTA Section */}
      <div className="mt-20 flex flex-col items-center justify-center gap-6 text-center">
        <motion.h3
          className="text-2xl sm:text-3xl font-cursive text-[#3e2723]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s brew memories together — one click at a time
        </motion.h3>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#7e2a0c] to-[#b85c38] text-white px-8 py-3 rounded-full shadow-xl font-semibold tracking-wide hover:shadow-2xl transition-all duration-500"
          onClick={() =>
            window.open("https://www.instagram.com/", "_blank", "noreferrer")
          }
        >
          Follow us on Instagram
        </motion.button>
      </div>
    </section>
  );
};

export default InstagramGallery;
