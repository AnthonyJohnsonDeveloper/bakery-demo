import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const testimonials = [
  {
    name: "Emily Rose",
    quote: "The best cupcakes I've ever had. Period. SweetTreats is my go-to!",
    avatar: "https://via.placeholder.com/80x80?text=ER",
  },
  {
    name: "Mark Thompson",
    quote: "They made my wedding cake and it was a dream come true!",
    avatar: "https://via.placeholder.com/80x80?text=MT",
  },
  {
    name: "Sofia Lin",
    quote: "Always fresh, always delicious. Their macarons are to die for.",
    avatar: "https://via.placeholder.com/80x80?text=SL",
  },
  {
    name: "James Wright",
    quote: "Fast delivery and even better taste. Highly recommend!",
    avatar: "https://via.placeholder.com/80x80?text=JW",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle swipe gestures
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
    const threshold = 50; // Minimum swipe distance

    if (distance > threshold) {
      next(); // Swipe left
    } else if (distance < -threshold) {
      prev(); // Swipe right
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-yellow-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          What Our Customers Say
        </h2>

        <div
          className="relative h-[300px]"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              } flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
              />
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                “{testimonial.quote}”
              </p>
              <h4 className="font-semibold text-pink-500 dark:text-yellow-400">
                - {testimonial.name}
              </h4>
            </div>
          ))}

          {/* Manual controls */}
          <div className="flex justify-center gap-4 mt-6 relative z-20">
            <button
              onClick={prev}
              className="text-xl px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              aria-label="Previous"
            >
              ⬅
            </button>
            <button
              onClick={next}
              className="text-xl px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
              aria-label="Next"
            >
              ➡
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;