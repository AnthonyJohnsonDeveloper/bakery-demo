// src/components/Menu.jsx
import React from "react";

const items = [
  {
    name: "Chocolate Cupcake",
    price: "$3.50",
    image: "https://via.placeholder.com/300x200?text=Cupcake",
  },
  {
    name: "Strawberry Tart",
    price: "$4.00",
    image: "https://via.placeholder.com/300x200?text=Tart",
  },
  {
    name: "Fresh Baguette",
    price: "$2.25",
    image: "https://via.placeholder.com/300x200?text=Baguette",
  },
  {
    name: "Vanilla Macaron",
    price: "$1.75",
    image: "https://via.placeholder.com/300x200?text=Macaron",
  },
];

const Menu = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Popular Treats
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
