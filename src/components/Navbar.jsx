import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { BsMinecartLoaded } from "react-icons/bs";
import { RiAccountPinCircleLine } from "react-icons/ri";
import useCartStore from "../store/cartStore";
import CartDrawer from "./CartDrawer/CartDrawer";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "About", link: "/about" },
  { id: 4, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false); // Mobile menu
  const [cartOpen, setCartOpen] = useState(false); // Cart drawer
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Zustand: total items in cart
  const totalItems = useCartStore((s) =>
    s.cart.reduce((sum, it) => sum + it.qty, 0)
  );

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div>
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-secondary/90 shadow-lg" : "bg-secondary"
      } text-white`}
    >
      <div className="container py-3 flex justify-between items-center relative">
        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
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

        {/* Logo */}
        <div className="mx-auto md:mx-0 flex items-center gap-2 flex-none">
          <Link
            to="/"
            className="font-bold text-2xl md:text-3xl flex justify-center items-center gap-2 font-cursive"
          >
            <img
              src={Logo}
              alt="Coffee Cafe logo"
              className="w-14 lg:w-18 object-contain"
            />
            <span className="hidden lg:flex">Coffee Cafe</span>
          </Link>
        </div>

        {/* Links + Cart */}
        <div className="flex justify-between items-center gap-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 font-Titillium">
            {Menu.map((menu) => {
              const isActive = location.pathname === menu.link;
              return (
                <li key={menu.id} className="relative group">
                  <Link
                    to={menu.link}
                    className={`inline-block text-xl py-4 px-4 duration-200 relative ${
                      isActive
                        ? "text-white after:w-full"
                        : "text-white/70 hover:text-white after:w-0 group-hover:after:w-full"
                    } after:absolute after:bottom-1 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300`}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Order Button */}
          <Link to="/coffeeproducts">
            <button className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
              Order <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </Link>

          {/* Cart / Account */}
          <div className="border-l hidden md:flex relative">
            <div className="pl-3.5 flex items-center gap-4">
              {/* Cart Icon */}
              <div
                className="relative cursor-pointer"
                onClick={() => setCartOpen(true)}
              >
                <BsMinecartLoaded
                  title="Cart"
                  className="text-xl text-gray-300 hover:text-white drop-shadow-sm"
                />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>

              {/* Account Icon */}
          <Link to="/signin" >   <RiAccountPinCircleLine
                title="Account"
                className="text-xl text-gray-300 hover:text-white drop-shadow-sm cursor-pointer"
              />   </Link> 
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={open ? { y: 0 } : { y: "-100%" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="md:hidden fixed top-0 left-0 w-full bg-secondary/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 py-20"
      >
        {Menu.map((menu) => {
          const isActive = location.pathname === menu.link;
          return (
            <Link
              key={menu.id}
              to={menu.link}
              onClick={() => setOpen(false)}
              className={`text-white text-2xl font-Titillium duration-200 ${
                isActive ? "border-b-2 border-white" : "hover:text-primary hover:border-primary"
              }`}
            >
              {menu.name}
            </Link>
          );
        })}

        {/* Mobile Cart */}
        <div className="flex items-center gap-6 mt-6">
          <div
            className="relative cursor-pointer"
            onClick={() => setCartOpen(true)}
          >
            <BsMinecartLoaded
              title="Cart"
              className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
       <Link to="/signin">   <RiAccountPinCircleLine
            title="Account"
            className="text-2xl text-gray-300 hover:text-white drop-shadow-sm"
          /> </Link>
        </div>
      </motion.div>

    </div>
          {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} className="" />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
