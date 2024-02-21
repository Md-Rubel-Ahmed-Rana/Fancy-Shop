import React, { useState } from "react";

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Kitchen",
  "Health & Beauty",
  "Toys & Games",
  "Sports & Outdoors",
  "Automotive",
  "Grocery",
  "Movies & TV",
  "Music",
  "Pet Supplies",
  "Tools & Home Improvement",
  "Office Products",
  "Jewelry",
  "Shoes",
  "Watches",
  "Handmade",
  "Industrial & Scientific",
  "Software",
  "Baby",
  "Kindle Store",
  "Luggage & Travel Gear",
  "Arts, Crafts & Sewing",
  "Collectibles & Fine Art",
  "Patio, Lawn & Garden",
  "Musical Instruments",
  "Video Games",
  "Beauty & Personal Care",
  "Appliances",
  "CDs & Vinyl",
  "Cell Phones & Accessories",
  "Computers",
  "Electronics",
  "Gift Cards",
  "Grocery & Gourmet Food",
  "Health & Personal Care",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Kindle Store",
  "Kitchen & Dining",
  "Magazine Subscriptions",
  "Movies & TV",
  "Music",
  "Musical Instruments",
  "Office Products",
  "Patio, Lawn & Garden",
  "Pet Supplies",
  "Software",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  "Video Games",
];

const ProductSearchNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center justify-between">
      {/* Filtering Section (Left Side) */}
      <div className="flex items-center space-x-4">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="px-3 py-2 border rounded-md w-24 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="px-3 py-2 border rounded-md w-24 focus:outline-none"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none"
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Search Section (Right Side) */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search in Fancy Shop"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 border rounded-md w-48 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ProductSearchNavbar;
