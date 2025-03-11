import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4 bg-yellow-100 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-brown-800 dark:text-white mb-6">
          Welcome to <span className="text-pink-500">SweetTreats Bakery</span> 🍩
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Freshly baked. Lovingly made. We serve joy in every bite!
        </p>
        <a
          href="#menu"
          className="inline-block px-8 py-3 text-white bg-pink-500 hover:bg-pink-600 rounded-full text-lg transition"
        >
          Explore Our Menu
        </a>
      </div>
    </section>
  );
}

export default Home;