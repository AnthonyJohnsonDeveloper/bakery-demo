import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <section id="about" className="bg-pink-50 dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-yellow-400 mb-6">
            About Our Bakery
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At <strong>SweetTreats</strong>, we bake with love. From cupcakes to croissants,
            our handcrafted pastries are made fresh daily with the finest ingredients. Whether
            you’re grabbing a quick bite or ordering a custom cake — we’ve got you covered.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            Every recipe is made with care and a sprinkle of joy. Come visit our cozy shop or place an order online!
          </p>
        </div>

        {/* Optional Image */}
        <div className="flex-1">
          <img
            src="./assets/1.svg"
            alt="Delicious baked goods"
            width="500"
            height="350"
            loading="lazy"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;