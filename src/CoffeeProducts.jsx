// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { BsMinecartLoaded, BsSearch, BsX, BsFillCartFill } from "react-icons/bs";
// import useCartStore from "./store/cartStore";
// import products from "./ProductApi";

// const CoffeeProducts = () => {
//   const [query, setQuery] = useState("");
//   const [openFilters, setOpenFilters] = useState(false);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [detailProduct, setDetailProduct] = useState(null);
//   const [cartOpen, setCartOpen] = useState(false);

//   const addToCart = useCartStore((s) => s.addToCart);
//   const totalItems = useCartStore((s) => s.totalItems)();

//   const categories = useMemo(() => Array.from(new Set(products.map((p) => p.category))), []);
//   const brands = useMemo(() => Array.from(new Set(products.map((p) => p.brand))), []);

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     return products.filter((p) => {
//       if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
//       if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
//       if (!q) return true;
//       const hay = `${p.name} ${p.category} ${p.brand}`.toLowerCase();
//       return hay.includes(q);
//     });
//   }, [query, selectedCategories, selectedBrands]);

//   const toggleCategory = (c) =>
//     setSelectedCategories((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
//   const toggleBrand = (b) =>
//     setSelectedBrands((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));

//   return (
//     <div className="min-h-screen mt-24 font-Titillium bg-gray-50 text-gray-900">
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex gap-6">
//           {/* Sidebar */}
//           <aside className="hidden md:block w-72 shrink-0">
//             <div className="bg-white p-4 rounded-lg shadow-sm sticky top-24">
//                   <div className="flex-1 relative">
//                 <input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search products..."
//                   className="w-full border rounded-lg py-2 px-3 focus:outline-none"
//                   aria-label="Search products"
//                 />
//                 <BsSearch className="absolute right-3 top-2.5 text-gray-400" />
//               </div>
//               {/* Categories */}
//               <div className="mb-4 mt-4">
//                 <h4 className="text-sm font-semibold mb-2">Categories</h4>
//                 <div className="flex flex-col gap-2 text-sm">
//                   {categories.map((c) => (
//                     <label key={c} className="inline-flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={selectedCategories.includes(c)}
//                         onChange={() => toggleCategory(c)}
//                         className="form-checkbox h-4 w-4"
//                         aria-label={`Filter by ${c}`}
//                       />
//                       <span>{c}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Brands */}
//               <div>
//                 <h4 className="text-sm font-semibold mb-2">Brands</h4>
//                 <div className="flex flex-col gap-2 text-sm">
//                   {brands.map((b) => (
//                     <label key={b} className="inline-flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={selectedBrands.includes(b)}
//                         onChange={() => toggleBrand(b)}
//                         className="form-checkbox h-4 w-4"
//                         aria-label={`Filter by ${b}`}
//                       />
//                       <span>{b}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Main content */}
//           <main className="flex-1">
//             {/* Mobile search + filter */}
//             <div className="md:hidden mb-4 flex items-center gap-3">
//               <div className="flex-1 relative">
//                 <input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search products..."
//                   className="w-full border rounded-lg py-2 px-3 focus:outline-none"
//                   aria-label="Search products"
//                 />
//                 <BsSearch className="absolute right-3 top-2.5 text-gray-400" />
//               </div>
//               <button
//                 onClick={() => setOpenFilters(!openFilters)}
//                 className="p-2 bg-white rounded-lg shadow"
//                 aria-expanded={openFilters}
//                 aria-controls="mobile-filters"
//                 aria-label="Toggle filters"
//               >
//                 Filters
//               </button>
//             </div>

//             {openFilters && (
//               <div id="mobile-filters" className="md:hidden mb-4 bg-white p-4 rounded-lg shadow">
//                 <h4 className="font-semibold mb-2">Categories</h4>
//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {categories.map((c) => (
//                     <button
//                       key={c}
//                       onClick={() => toggleCategory(c)}
//                       className={`px-3 py-1 rounded-full border ${
//                         selectedCategories.includes(c) ? "bg-primary/90 text-white" : "bg-white"
//                       }`}
//                     >
//                       {c}
//                     </button>
//                   ))}
//                 </div>
//                 <h4 className="font-semibold mb-2">Brands</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {brands.map((b) => (
//                     <button
//                       key={b}
//                       onClick={() => toggleBrand(b)}
//                       className={`px-3 py-1 rounded-full border ${
//                         selectedBrands.includes(b) ? "bg-primary/90 text-white" : "bg-white"
//                       }`}
//                     >
//                       {b}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Grid header */}
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl font-bold">Coffee Products</h2>
//               <div className="text-sm text-gray-600">
//                 Showing <span className="font-semibold">{filtered.length}</span> results
//               </div>
//             </div>

//             {/* Product Grid */}
//             <section>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {filtered.map((p) => (
//                   <article
//                     key={p.id}
//                     className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 relative"
//                   >
//                     <div className="relative">
//                       <img
//                         src={p.image}
//                         alt={p.name}
//                         className="w-full h-44 sm:h-48 md:h-44 lg:h-52 object-cover"
//                         loading="lazy"
//                       />
//                       {/* overlay action icons */}
//                       <div className="absolute top-2 right-2 flex flex-col gap-2">
//                         <button
//                           onClick={() => addToCart(p, 1)}
//                           title="Add to cart"
//                           className="bg-white/90 p-2 rounded-full shadow hover:scale-105 transition-transform"
//                           aria-label={`Add ${p.name} to cart`}
//                         >
//                           <BsFillCartFill className="text-primary" />
//                         </button>
//                         <button
//                           onClick={() => setDetailProduct(p)}
//                           title="View details"
//                           className="bg-white/90 p-2 rounded-full shadow hover:scale-105 transition-transform"
//                           aria-label={`View details of ${p.name}`}
//                         >
//                           <BsSearch className="text-gray-700" />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="p-3 flex flex-col gap-2">
//                       <div className="flex items-center justify-between">
//                         <h3 className="font-semibold text-sm">{p.name}</h3>
//                         <span className="text-sm text-gray-500">{p.category}</span>
//                       </div>
//                       <div className="text-xs text-gray-500">{p.brand}</div>
//                       <div className="mt-2 text-lg font-bold">${p.price.toFixed(2)}</div>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </section>
//           </main>
//         </div>
//       </div>

//       {/* Fixed vertical cart icon */}
//       <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
//         <div className="relative bg-secondary p-3 rounded-full shadow-lg hover:scale-105 transition-transform">
//           <BsMinecartLoaded className="text-2xl text-white " />
//           {totalItems > 0 && (
//             <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//               {totalItems}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* DETAILS MODAL */}
//       {detailProduct && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center"
//         >
//           {/* overlay */}
//           <div
//             onClick={() => setDetailProduct(null)}
//             className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//             aria-hidden
//           />
//           <motion.div
//             initial={{ y: 20, scale: 0.97 }}
//             animate={{ y: 0, scale: 1 }}
//             transition={{ type: "spring", stiffness: 260, damping: 25 }}
//             className="relative bg-white rounded-lg max-w-3xl w-full mx-4 md:mx-0 shadow-2xl overflow-hidden z-50"
//             role="dialog"
//             aria-modal="true"
//             aria-label={`Details of ${detailProduct.name}`}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               <div className="h-auto">
//                 <img
//                   src={detailProduct.image}
//                   alt={detailProduct.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6 flex flex-col gap-4">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold">{detailProduct.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       {detailProduct.brand} • {detailProduct.category}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => setDetailProduct(null)}
//                     aria-label="Close details"
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <BsX className="text-2xl" />
//                   </button>
//                 </div>

//                 <div className="text-gray-700">
//                   <p>{detailProduct.description}</p>
//                 </div>

//                 <div className="flex items-center justify-between mt-auto">
//                   <div>
//                     <div className="text-xl font-bold">${detailProduct.price.toFixed(2)}</div>
//                     <div className="text-sm text-gray-500">Rating: {detailProduct.rating} / 5</div>
//                   </div>

//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => {
//                         addToCart(detailProduct, 1);
//                       }}
//                       className="bg-primary text-white px-4 py-2 rounded-lg"
//                     >
//                       Add to cart
//                     </button>
//                     <button onClick={() => setDetailProduct(null)} className="px-4 py-2 border rounded-lg">
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default CoffeeProducts;















// ./CoffeeProducts.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BsMinecartLoaded, BsSearch, BsX, BsFillCartFill } from "react-icons/bs";
import useCartStore from "./store/cartStore";
import products from "./ProductApi";
import CartDrawer from "./components/CartDrawer/CartDrawer";

const CoffeeProducts = () => {
  const [query, setQuery] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [detailProduct, setDetailProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCartStore((s) => s.addToCart);
  const totalItems = useCartStore((s) => s.cart.reduce((sum, it) => sum + it.qty,0));

  const categories = useMemo(() => Array.from(new Set(products.map((p) => p.category))), []);
  const brands = useMemo(() => Array.from(new Set(products.map((p) => p.brand))), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false;
      if (!q) return true;
      const hay = `${p.name} ${p.category} ${p.brand}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, selectedCategories, selectedBrands]);

  const toggleCategory = (c) =>
    setSelectedCategories((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  const toggleBrand = (b) =>
    setSelectedBrands((prev) => (prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]));

  return (
    <div className="min-h-screen mt-24 font-Titillium bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden md:block w-72 shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-sm sticky top-24">
              <div className="flex-1 relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full border rounded-lg py-2 px-3 focus:outline-none"
                  aria-label="Search products"
                />
                <BsSearch className="absolute right-3 top-2.5 text-gray-400" />
              </div>

              {/* Categories */}
              <div className="mb-4 mt-4">
                <h4 className="text-sm font-semibold mb-2">Categories</h4>
                <div className="flex flex-col gap-2 text-sm">
                  {categories.map((c) => (
                    <label key={c} className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(c)}
                        onChange={() => toggleCategory(c)}
                        className="form-checkbox h-4 w-4"
                        aria-label={`Filter by ${c}`}
                      />
                      <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="text-sm font-semibold mb-2">Brands</h4>
                <div className="flex flex-col gap-2 text-sm">
                  {brands.map((b) => (
                    <label key={b} className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(b)}
                        onChange={() => toggleBrand(b)}
                        className="form-checkbox h-4 w-4"
                        aria-label={`Filter by ${b}`}
                      />
                      <span>{b}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {/* Mobile search + filter */}
            <div className="md:hidden mb-4 flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full border rounded-lg py-2 px-3 focus:outline-none"
                  aria-label="Search products"
                />
                <BsSearch className="absolute right-3 top-2.5 text-gray-400" />
              </div>
              <button
                onClick={() => setOpenFilters(!openFilters)}
                className="p-2 bg-white rounded-lg shadow"
                aria-expanded={openFilters}
                aria-controls="mobile-filters"
                aria-label="Toggle filters"
              >
                Filters
              </button>
            </div>

            {openFilters && (
              <div id="mobile-filters" className="md:hidden mb-4 bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">Categories</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => toggleCategory(c)}
                      className={`px-3 py-1 rounded-full border ${
                        selectedCategories.includes(c) ? "bg-primary/90 text-white" : "bg-white"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <h4 className="font-semibold mb-2">Brands</h4>
                <div className="flex flex-wrap gap-2">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => toggleBrand(b)}
                      className={`px-3 py-1 rounded-full border ${
                        selectedBrands.includes(b) ? "bg-primary/90 text-white" : "bg-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Grid header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Coffee Products</h2>
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold">{filtered.length}</span> results
              </div>
            </div>

            {/* Product Grid */}
            <section>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((p) => (
                  <article
                    key={p.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 relative"
                  >
                    <div className="relative">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-44 sm:h-48 md:h-44 lg:h-52 object-cover"
                        loading="lazy"
                      />
                      {/* overlay action icons */}
                      <div className="absolute top-2 right-2 flex flex-col gap-2">
                        <button
                          onClick={() => {
                            addToCart(p, 1);
                            
                          }}
                          title="Add to cart"
                          className="bg-white/90 p-2 rounded-full shadow hover:scale-105 transition-transform"
                          aria-label={`Add ${p.name} to cart`}
                        >
                          <BsFillCartFill className="text-primary" />
                        </button>
                        <button
                          onClick={() => setDetailProduct(p)}
                          title="View details"
                          className="bg-white/90 p-2 rounded-full shadow hover:scale-105 transition-transform"
                          aria-label={`View details of ${p.name}`}
                        >
                          <BsSearch className="text-gray-700" />
                        </button>
                      </div>
                    </div>

                    <div className="p-3 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm">{p.name}</h3>
                        <span className="text-sm text-gray-500">{p.category}</span>
                      </div>
                      <div className="text-xs text-gray-500">{p.brand}</div>
                      <div className="mt-2 text-lg font-bold">${p.price.toFixed(2)}</div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Fixed vertical cart icon */}
      <div
        onClick={() => setCartOpen(true)}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 cursor-pointer"
      >
        <div className="relative bg-secondary p-3 rounded-full shadow-lg hover:scale-105 transition-transform">
          <BsMinecartLoaded className="text-2xl text-white " />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </div>

      {/* CART DRAWER (component) */}
      <AnimatePresence>
        {cartOpen && <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />}
      </AnimatePresence>

      {/* DETAILS MODAL */}
      {detailProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* overlay */}
          <div
            onClick={() => setDetailProduct(null)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            aria-hidden
          />
          <motion.div
            initial={{ y: 20, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="relative bg-white rounded-lg max-w-3xl w-full mx-4 md:mx-0 shadow-2xl overflow-hidden z-50"
            role="dialog"
            aria-modal="true"
            aria-label={`Details of ${detailProduct.name}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-auto">
                <img
                  src={detailProduct.image}
                  alt={detailProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{detailProduct.name}</h3>
                    <p className="text-sm text-gray-500">
                      {detailProduct.brand} • {detailProduct.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setDetailProduct(null)}
                    aria-label="Close details"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <BsX className="text-2xl" />
                  </button>
                </div>

                <div className="text-gray-700">
                  <p>{detailProduct.description}</p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-xl font-bold">${detailProduct.price.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">Rating: {detailProduct.rating} / 5</div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        addToCart(detailProduct, 1);
                      }}
                      className="bg-primary text-white px-4 py-2 rounded-lg"
                    >
                      Add to cart
                    </button>
                    <button onClick={() => setDetailProduct(null)} className="px-4 py-2 border rounded-lg">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CoffeeProducts;
