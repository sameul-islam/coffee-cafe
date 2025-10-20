import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/products/coffee1.jpg";
import Img2 from "../assets/products/coffee2.jpg";
import Img3 from "../assets/products/coffee3.jpg";
import Img4 from "../assets/products/coffee4.jpg";
import Img5 from "../assets/products/coffee5.jpg";
import Img6 from "../assets/products/coffee6.jpg";
import Img7 from "../assets/products/coffee7.jpg";
import Img8 from "../assets/products/coffee8.jpg";

const products = [
  {
    id: 1,
    name: "Espresso Delight",
    price: "$12.99",
    img: Img1,
    description: "Rich and aromatic espresso crafted from the finest beans.",
  },
  {
    id: 2,
    name: "Cappuccino Dream",
    price: "$14.50",
    img: Img2,
    description: "Perfectly balanced cappuccino with creamy foam.",
  },
  {
    id: 3,
    name: "Latte Lux",
    price: "$13.75",
    img: Img3,
    description: "Smooth latte with hints of vanilla and chocolate.",
  },
  {
    id: 4,
    name: "Cold Brew Supreme",
    price: "$11.50",
    img: Img4,
    description: "Chilled cold brew, perfect for refreshing moments.",
  },
  {
    id: 5,
    name: "Cold Brew Supreme",
    price: "$11.50",
    img: Img5,
    description: "Chilled cold brew, perfect for refreshing moments.",
  },
  {
    id: 6,
    name: "Cold Brew Supreme",
    price: "$11.50",
    img: Img6,
    description: "Chilled cold brew, perfect for refreshing moments.",
  },
  {
    id: 7,
    name: "Cold Brew Supreme",
    price: "$11.50",
    img: Img7,
    description: "Chilled cold brew, perfect for refreshing moments.",
  },
  {
    id: 8,
    name: "Cold Brew Supreme",
    price: "$11.50",
    img: Img8,
    description: "Chilled cold brew, perfect for refreshing moments.",
  },
];

const PremiumProducts = () => {
  return (
    <section className="py-20 bg-[#fdfcf9]">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-cursive font-bold text-gray-800">
          Our Premium Collection
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover our finest selection of handpicked coffee blends, roasted
          to perfection for an exceptional experience.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl relative group cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
              <span className="text-lg font-bold text-primary">{product.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PremiumProducts;
