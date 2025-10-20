import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { BsCartPlus } from "react-icons/bs";


const CoffeeProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

useEffect(() => {
  const filtered = products.filter((product) => {
    const name = product.name || "";
    const description = product.description || "";
    const category = product.category || "";

    const matchesCategory =
      selectedCategory === "All" ||
      category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase());

    const price = product.price || 0;
    const matchesPrice = price >= minPrice && price <= maxPrice;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  setFilteredProducts(filtered);
}, [searchTerm, selectedCategory, minPrice, maxPrice, products]);


  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          {/* Category Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <ul>
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Price Filter */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
            <div className="flex gap-2">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 px-3 py-2 border rounded"
                placeholder="Min"
              />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 px-3 py-2 border rounded"
                placeholder="Max"
              />
            </div>
          </div>
          {/* Search Bar */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Search</h3>
            <div className="flex items-center border rounded">
              {/* <FiSearch className="ml-2 text-gray-500" /> */}
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border-none rounded"
                placeholder="Search products..."
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:border p-4 flex flex-col items-center text-center"
                whileHover={{  }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.category}</p>
                <p className="text-xl font-bold text-primary mb-4">
                  ${product.price}
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <BsCartPlus />
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeProducts;













