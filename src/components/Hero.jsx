// import React from "react";
// import HeroPng from "../assets/coffee2.png";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="bg-brandDark text-white font-Titillium mt-16 overflow-hidden">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 items-center py-10 sm:py-20">
//         {/* Text Section */}
//         <div className="flex flex-col justify-center gap-6 text-center sm:text-left order-2 sm:order-1">
//           <h1
//             data-aos="fade-up"
//             data-aos-once="true"
//             className="text-5xl sm:text-6xl lg:text-7xl font-bold"
//           >
//             We serve the richest{" "}
//             <span
//               data-aos="zoom-out"
//               data-aos-delay="300"
//               className="text-[#7e2a0c] font-cursive"
//             >
//               coffee
//             </span>{" "}
//             in the city
//           </h1>
//           <div data-aos="fade-up" data-aos-delay="400">
//             <Link to="/coffeeproducts">
//               <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
//                 Get Your Coffee Now
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div
//           data-aos="zoom-in"
//           data-aos-duration="300"
//           className="relative flex justify-center items-center order-1 sm:order-2"
//         >
//           <img
//             src={HeroPng}
//             alt="Coffee"
//             data-aos-once="true"
//             className="w-[260px] sm:w-[420px] mx-auto spin"
//           />
//           <div
//             data-aos="fade-left"
//             className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-8 left-6 sm:top-10 sm:left-10"
//           >
//             <h1 className="text-white text-sm sm:text-base">Hey Coffee Lover</h1>
//           </div>
//           <div
//             data-aos="fade-right"
//             data-aos-offset="0"
//             className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-8 right-6 sm:bottom-10 sm:right-10"
//           >
//             <h1 className="text-sm sm:text-base">Best Coffee Here</h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;











import React from "react";
import HeroPng from "../assets/coffee2.png";
import BackgroundImg from "../assets/hero_bg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const particles = [
  { id: 1, size: 20, top: "10%", left: "15%", color: "#7e2a0c", duration: 8 },
  { id: 2, size: 15, top: "70%", left: "30%", color: "#854d3d", duration: 10 },
  { id: 3, size: 18, top: "50%", left: "80%", color: "#c49b63", duration: 12 },
  { id: 4, size: 12, top: "25%", left: "60%", color: "#a45e4b", duration: 9 },
];

const Hero = () => {
  return (
    <section className="relative text-white font-Titillium overflow-hidden min-h-[700px] sm:min-h-[850px] lg:min-h-[1000px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            backgroundColor: p.color,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 items-center py-16 sm:py-28 relative z-10 px-4 sm:px-6 lg:px-12">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 text-center sm:text-left order-2 sm:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg"
          >
            We serve the richest{" "}
            <span className="text-[#7e2a0c] font-cursive drop-shadow-lg">coffee</span> in the city
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link to="/coffeeproducts">
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:rotate-z-6 duration-200 text-white py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl rounded-full shadow-xl hover:shadow-2xl">
                Explore Products
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center items-center order-1 sm:order-2 mt-10 sm:mt-0">
          <motion.img
            src={HeroPng}
            alt="Coffee"
            className="w-[260px] sm:w-[420px] lg:w-[550px] mx-auto z-10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-8 left-6 sm:top-10 sm:left-10 shadow-lg"
          >
            <h1 className="text-white text-sm sm:text-base font-semibold">Hey Coffee Lover</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-8 right-6 sm:bottom-10 sm:right-10 shadow-lg"
          >
            <h1 className="text-sm sm:text-base font-semibold">Best Coffee Here</h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
