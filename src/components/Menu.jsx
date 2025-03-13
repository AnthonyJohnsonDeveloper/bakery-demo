import React from "react";
import { Helmet } from "react-helmet";

const items = [
  {
    name: "Chocolate Cupcake",
    price: "$3.50",
    image: "./assets/1.svg",
  },
  {
    name: "Strawberry Tart",
    price: "$4.00",
    image: "./assets/2.svg",
  },
  {
    name: "Fresh Baguette",
    price: "$2.25",
    image: "./assets/3.svg",
  },
  {
    name: "Vanilla Macaron",
    price: "$1.75",
    image: "./assets/4.svg",
  },
];

const Menu = () => {
  return (
    <section
      id="menu"
      className="scroll-mt-24 py-20 bg-pink-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-pink-600 dark:text-yellow-400 mb-10">
          Popular Treats
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                width="300"
                height="200"
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
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
