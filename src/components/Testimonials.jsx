import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const testimonials = [
  {
    name: "Emily Rose",
    quote: "The best cupcakes I've ever had. Period. SweetTreats is my go-to!",
    avatar: "/images/avatars/A1.webp",
  },
  {
    name: "Mark Thompson",
    quote: "They made my wedding cake and it was a dream come true!",
    avatar: "/images/avatars/A2.webp",
  },
  {
    name: "Sofia Lin",
    quote: "Always fresh, always delicious. Their macarons are to die for.",
    avatar: "/images/avatars/A4.webp",
  },
  {
    name: "James Wright",
    quote: "Fast delivery and even better taste. Highly recommend!",
    avatar: "/images/avatars/A3.webp",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) next();
    else if (distance < -threshold) prev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-yellow-50 dark:bg-gray-900 transition-colors"
    >
      <Helmet>
        <title>Testimonials | SweetTreats Bakery</title>
        <meta name="description" content="What our happy customers say." />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          What Our Customers Say
        </h2>

        <div
          className="relative h-[300px] overflow-hidden"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              } flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
              />
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                “{t.quote}”
              </p>
              <h4 className="font-semibold text-pink-500 dark:text-yellow-400">
                - {t.name}
              </h4>
            </div>
          ))}

          {/* Arrows: absolutely positioned center-left & center-right */}
          <button
  onClick={prev}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-pink-600 transition"
  aria-label="Previous"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15 19.5 7.5 12m0 0L15 4.5M7.5 12H21" />
  </svg>
</button>

<button
  onClick={next}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-pink-600 transition"
  aria-label="Next"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 rotate-180">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M15 19.5 7.5 12m0 0L15 4.5M7.5 12H21" />
  </svg>
</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;