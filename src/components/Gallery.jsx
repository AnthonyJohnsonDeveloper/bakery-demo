import React from "react";

const images = Array.from({ length: 16 }, (_, i) => (
  `https://via.placeholder.com/300x200?text=Treat+${i + 1}`
));

const Gallery = () => {
  return (
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
              alt={`Gallery ${idx + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition"
              loading="lazy"
              width="300"
              height="200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;