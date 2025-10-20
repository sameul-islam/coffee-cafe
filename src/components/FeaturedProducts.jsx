import React, {useRef} from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/products/coffee1.jpg";
import Img2 from "../assets/products/coffee2.jpg";
import Img3 from "../assets/products/coffee3.jpg";
import Img4 from "../assets/products/coffee4.jpg";
import Img5 from "../assets/products/coffee5.jpg";
import Img6 from "../assets/products/coffee6.jpg";
import Img7 from "../assets/products/coffee7.jpg";
import Img8 from "../assets/products/coffee8.jpg";
import Img9 from "../assets/products/coffee9.jpg";
import Img10 from "../assets/products/coffee10.jpg";
import Img11 from "../assets/products/coffee11.jpg";
import Img12 from "../assets/products/coffee12.jpg";


const featuredProducts = [
  { id: 1, name: "Espresso", price: "$5.99", img: Img1 },
  { id: 2, name: "Cappuccino", price: "$6.99", img: Img2 },
  { id: 3, name: "Latte", price: "$7.49", img: Img3 },
  { id: 4, name: "Mocha", price: "$7.99", img: Img4 },
  { id: 5, name: "Americano", price: "$4.99", img: Img5 },
  { id: 6, name: "Flat White", price: "$6.49", img: Img6 },
  { id: 7, name: "Macchiato", price: "$5.49", img: Img7 },
  { id: 8, name: "Affogato", price: "$8.99", img: Img8 },
  { id: 9, name: "Irish Coffee", price: "$9.99", img: Img9 },
  { id: 10, name: "Cortado", price: "$6.79", img: Img10 },
  { id: 11, name: "Ristretto", price: "$5.29", img: Img11 },
  { id: 12, name: "Vienna", price: "$7.89", img: Img12 },
];


const FeaturedProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      if (direction === "next") {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-brandLight font-Titillium py-12 relative">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl text-secondary sm:text-5xl font-cursive font-bold text-center mb-8">
          Featured Products
        </h2>

        {/* Horizontal Scroll Buttons */}
        <div className="hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 md:flex gap-2">
          <button
            onClick={() => scroll("prev")}
            className="bg-primary text-white w-10 h-10 p-2 rounded-full shadow-lg  duration-200"
          >
            &#8249;
          </button>
          <button
            onClick={() => scroll("next")}
            className="bg-primary text-white p-2 w-10 h-10 rounded-full shadow-lg  duration-200"
          >
            &#8250;
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide px-4"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{  }}
              className="min-w-[250px] sm:min-w-[280px] bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center cursor-pointer snap-start"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-primary font-bold text-lg">{product.price}</p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
