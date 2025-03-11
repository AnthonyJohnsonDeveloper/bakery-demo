import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Sweet Treats Bakery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Freshly baked goodness delivered to your door. Taste the joy in
            every bite! 🍪
          </p>
          <Link
            to="/gallery"
            className="inline-block mt-10 px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-full transition"
          >
            🍰 View Our Creations
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://source.unsplash.com/600x400/?bakery,cake"
            alt="Delicious baked goods"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
