import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import Logo from "../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { BsMinecartLoaded } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiAccountPinCircleLine } from "react-icons/ri";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-secondary shadow-md text-white fixed top-0 left-0 w-full z-50">
      <div className="container py-3 flex justify-between items-center relative">
        {/* ---------- Mobile Menu Button ---------- */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center space-y-1 md:hidden z-50 relative"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white rounded-full"
          ></motion.span>
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-white rounded-full"
          ></motion.span>
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-white rounded-full"
          ></motion.span>
        </button>

        {/* ----------- Logo Section ------------ */}
        <div data-aos="fade-down" data-aos-once="true" className="mx-auto md:mx-0 flex items-center gap-2 flex-none">
          <Link
            to="/"
            className="font-bold text-2xl md:text-3xl flex justify-center items-center gap-2 font-cursive"
          >
            <img src={Logo} alt="Logo" className="w-14 lg:w-18 object-contain" />
            <span className="hidden lg:flex">Coffee Cafe</span>
          </Link>
        </div>

        {/* ---------Link Section--------- */}
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          className="flex justify-between items-center gap-4"
        >
          {/* ----------- Desktop Menu ------------ */}
          <ul className="hidden md:flex items-center gap-4 font-Titillium">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* --------Mobile Search icon -------- */}
          {/* <button className="flex md:hidden">
            <CiSearch
              title="Search"
              className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
            />
          </button> */}

          {/* ---------- Order Button ---------- */}
      <Link to='/coffeeproducts'>    <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
            Order <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>  </Link>

          {/* ---------- Cart / Search / Account ---------- */}
          <div className="border-l hidden md:flex">
            <div className="pl-3.5">
              <button className="flex items-center gap-4 cursor-pointer">
                <BsMinecartLoaded
                  title="Cart"
                  className="text-xl text-gray-300 hover:text-white drop-shadow-sm"
                />
                {/* <CiSearch
                  title="Search"
                  className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
                /> */}
                <RiAccountPinCircleLine
                  title="Account"
                  className="text-xl text-gray-300 hover:text-white drop-shadow-sm"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Drawer ---------- */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={open ? { y: 0 } : { y: "-100%" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="md:hidden fixed top-0 left-0 w-full bg-secondary backdrop-blur-md flex flex-col items-center justify-center gap-6 py-20"
      >
        {Menu.map((menu) => (
          <Link
            key={menu.id}
            to={menu.link}
            onClick={() => setOpen(false)}
            className="text-white text-2xl font-Titillium hover:text-primary duration-200"
          >
            {menu.name}
          </Link>
        ))}

        {/* ---------- Mobile Buttons ---------- */}
        <div className="flex items-center gap-6 mt-6">
          <BsMinecartLoaded
            title="Cart"
            className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
          />
          <RiAccountPinCircleLine
            title="Account"
            className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;













// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom"; 
// import Logo from "../assets/website/coffee_logo.png";
// import { FaCoffee } from "react-icons/fa";
// import { BsMinecartLoaded } from "react-icons/bs";
// import { CiSearch } from "react-icons/ci";
// import { RiAccountPinCircleLine } from "react-icons/ri";

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Services", link: "/services" },
//   { id: 3, name: "About", link: "/about" },
//   { id: 4, name: "Contact", link: "/contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false); // সার্চ ইনপুটের স্টেট

//   return (
//     <div className="bg-secondary shadow-md text-white fixed top-0 left-0 w-full z-50">
//       <div className="container py-2 flex justify-between items-center relative">
//         {/* ---------- Mobile Menu Button ---------- */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex flex-col justify-center items-center space-y-1 md:hidden z-50 relative"
//         >
//           <motion.span
//             animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//             className="w-6 h-[2px] bg-white rounded-full"
//           ></motion.span>
//           <motion.span
//             animate={open ? { opacity: 0 } : { opacity: 1 }}
//             className="w-6 h-[2px] bg-white rounded-full"
//           ></motion.span>
//           <motion.span
//             animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//             className="w-6 h-[2px] bg-white rounded-full"
//           ></motion.span>
//         </button>

//         {/* ----------- Logo Section ------------ */}
//         <div data-aos="fade-down" data-aos-once="true" className="mx-auto md:mx-0 flex items-center gap-2 flex-none">
//           <Link
//             to="/"
//             className="font-bold text-2xl md:text-3xl flex justify-center items-center gap-2 font-cursive"
//           >
//             <img src={Logo} alt="Logo" className="w-14 lg:w-18 object-contain" />
//             <span className="hidden lg:flex">Coffee Cafe</span>
//           </Link>
//         </div>

//         {/* ---------Link Section--------- */}
//         <div
//           data-aos="fade-down"
//           data-aos-once="true"
//           data-aos-delay="300"
//           className="flex justify-between items-center gap-4"
//         >
//           {/* ----------- Desktop Menu ------------ */}
//           <ul className="hidden md:flex items-center gap-4 font-Titillium">
//             {Menu.map((menu) => (
//               <li key={menu.id}>
//                 <Link
//                   to={menu.link}
//                   className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
//                 >
//                   {menu.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* --------Search Icon ---------- */}
//           <button
//             onClick={() => setSearchOpen(true)}
//             className="flex md:flex items-center"
//           >
//             <CiSearch
//               title="Search"
//               className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
//             />
//           </button>

//           {/* ---------- Order Button ---------- */}
//           <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
//             Order <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
//           </button>

//           {/* ---------- Cart / Search / Account ---------- */}
//           <div className="border-l hidden md:flex">
//             <div className="pl-3.5">
//               <button className="flex items-center gap-4 cursor-pointer">
//                 <BsMinecartLoaded
//                   title="Cart"
//                   className="text-xl text-gray-300 hover:text-white drop-shadow-sm"
//                 />
//                 <CiSearch
//                   title="Search"
//                   onClick={() => setSearchOpen(true)}
//                   className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
//                 />
//                 <RiAccountPinCircleLine
//                   title="Account"
//                   className="text-xl text-gray-300 hover:text-white drop-shadow-sm"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Mobile Drawer ---------- */}
//       <motion.div
//         initial={{ y: "-100%" }}
//         animate={open ? { y: 0 } : { y: "-100%" }}
//         transition={{ type: "spring", stiffness: 80, damping: 15 }}
//         className="md:hidden fixed top-0 left-0 w-full bg-secondary backdrop-blur-md flex flex-col items-center justify-center gap-6 py-20"
//       >
//         {Menu.map((menu) => (
//           <Link
//             key={menu.id}
//             to={menu.link}
//             onClick={() => setOpen(false)}
//             className="text-white text-2xl font-Titillium hover:text-primary duration-200"
//           >
//             {menu.name}
//           </Link>
//         ))}

//         {/* ---------- Mobile Buttons ---------- */}
//         <div className="flex items-center gap-6 mt-6">
//           <BsMinecartLoaded
//             title="Cart"
//             className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
//           />
//           <RiAccountPinCircleLine
//             title="Account"
//             className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
//           />
//         </div>
//       </motion.div>

//       {/* ---------- Search Overlay ---------- */}
//       {searchOpen && (
//         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
//           <div className="relative w-full max-w-md p-6 bg-white text-black rounded-lg shadow-lg">
//             <input
//               type="text"
//               placeholder="Search by coffee name..."
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               autoFocus
//             />
//             <button
//               onClick={() => setSearchOpen(false)}
//               className="absolute top-2 right-2 text-xl text-gray-400 hover:text-gray-600"
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;










