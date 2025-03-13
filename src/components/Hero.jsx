import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    
    <section className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Sweet Treats Bakery
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Freshly baked goodness delivered to your door. Taste the joy in
            every bite! 🍪
          </p>
          <Link
            to="/gallery"
            className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition duration-300 shadow-md"
          >
            🍰 View Our Creations
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="./assets/1.svg"
            alt="Delicious baked goods"
            loading="lazy"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
