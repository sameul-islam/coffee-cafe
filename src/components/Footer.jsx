import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/website/coffee_logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#1e0a04] to-[#0d0401] text-white font-Titillium overflow-hidden">
      {/* Animated Background Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-primary/30 blur-[120px] rounded-full"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-[150px] rounded-full"
      ></motion.div>

      <div className="container mx-auto relative z-10 px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-4 text-center md:text-left"
        >
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Coffee Cafe" className="w-14 h-14 object-contain" />
            <h1 className="text-3xl font-cursive font-bold tracking-wide">
              Coffee Cafe
            </h1>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-sm">
            Where every sip tells a story — rich aroma, smooth flavor, and a touch of perfection in every cup.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary/70 duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center md:items-start gap-3"
        >
          <h3 className="text-2xl font-semibold font-cursive text-primary mb-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            {["Home", "Products", "About", "Contact"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, color: "#c49b63" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <Link to={`/${link.toLowerCase()}`}>{link}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <h3 className="text-2xl font-semibold font-cursive text-primary mb-2">
            Subscribe
          </h3>
          <p className="text-gray-300">
            Get exclusive offers and the latest coffee trends.
          </p>
          <form className="flex w-full max-w-sm gap-2">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="flex-1 px-4 py-2 rounded-full border border-[#7e2a0c] text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:scale-105 duration-300"
            >
              Join
            </motion.button>
          </form>
        </motion.div>

        {/* Contact / Location */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <h3 className="text-2xl font-semibold font-cursive text-primary mb-2">Contact Us</h3>
          <div className="flex items-center gap-3 text-gray-300">
            <FaMapMarkerAlt className="text-primary w-6 h-6" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FaPhoneAlt className="text-primary w-6 h-6" />
            <span>+880 1234 567890</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-white/20 py-4 text-center text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} Coffee Cafe — Crafted with by Sameul Islam
      </motion.div>
    </footer>
  );
};

export default Footer;
