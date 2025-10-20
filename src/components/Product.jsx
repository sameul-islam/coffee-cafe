
import React, { useEffect, useRef, useState } from "react";
import Img2 from "../assets/coffee2.png";
import { Link } from "react-router-dom";



const ProductsData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "A perfect blend of bold aroma and rich taste to refresh your day.",
    delay: 0,
  },
  {
    id: 2,
    img: Img2,
    name: "Cappuccino",
    description: "Creamy, foamy, and full-bodied — your morning’s best companion.",
    delay: 120,
  },
  {
    id: 3,
    img: Img2,
    name: "Latte",
    description: "Smooth, balanced, and delightfully milky — for true lovers.",
    delay: 240,
  },
];

function useInView(ref, options = { threshold: 0.15, once: true }) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options.once) observer.unobserve(node);
          }
        });
      },
      { threshold: options.threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, options.threshold, options.once]);
  return inView;
}

const ProductCard = ({ product, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <article
      ref={ref}
      className="rounded-2xl bg-white font-Titillium relative shadow-xl group max-w-[300px] w-full transition-transform"
      style={{
        willChange: "transform",
      }}
    >
      <div
        className="h-[140px] flex justify-center items-center overflow-hidden"
        aria-hidden
      >
      <Link to="/coffeeproducts">  <img
          src={product.img}
          alt={product.name}
          className={`max-w-[180px] hover:rotate-12 cursor-pointer transform duration-700 ease-out`}
          style={{
            transform: inView ? "translateY(0) scale(1)" : "translateY(12px) scale(.98)",
            opacity: inView ? 1 : 0,
            transitionDelay: `${delay}ms`,
            willChange: "transform, opacity",
            display: "block",
          }}
          loading="lazy"
        />  </Link>
      </div>

      <div
        className="p-5 text-center"
        style={{
          transform: inView ? "translateY(0)" : "translateY(8px)",
          opacity: inView ? 1 : 0,
          transition: `opacity 600ms ease, transform 600ms ease`,
          transitionDelay: `${delay + 60}ms`,
          willChange: "transform, opacity",
        }}
      >
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
      </div>
    </article>
  );
};

const Product = () => {
  return (
    <div className="container py-14 px-4 sm:px-6 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-cursive text-gray-800">
          Best Coffee For You
        </h1>
        <p className="text-gray-500 mt-2">Handcrafted with love — brewed to perfection.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {ProductsData.map((p, idx) => (
          <ProductCard key={p.id} product={p} delay={p.delay || idx * 120} />
        ))}
      </div>
    </div>
  );
};

export default Product;
