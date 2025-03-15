import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/7.webp",
  "/images/8.webp",
];

const Gallery = () => {
  const location = useLocation();

  // Scroll to #home when returning from this page
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#home") {
      const homeSection = document.getElementById("home");
      if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {images.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Treat ${idx + 1}`}
                className="rounded-lg shadow-md hover:scale-105 transition object-cover w-full h-[200px]"
                loading="lazy"
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/#home"
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
