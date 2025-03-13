import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Array of image URLs
const images = [
  "./assets/1.svg",
  "./assets/2.svg",
  "./assets/3.svg",
  "./assets/4.svg",
  "./assets/5.svg",
  "./assets/6.svg",
  "./assets/7.svg",
  "./assets/8.svg",
  // Add paths to your 16 images
];

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | SweetTreats Bakery</title>
        <meta
          name="description"
          content="A showcase of our beautifully baked and decorated customer treats."
        />
      </Helmet>

      <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Customer Favorites
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {images.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Treat ${idx + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition"
                loading="lazy"
                width="300"
                height="200"
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
            >
              ⬅ Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;