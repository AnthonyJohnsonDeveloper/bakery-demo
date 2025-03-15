import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | SweetTreats Bakery</title>
        <meta
          name="description"
          content="Welcome to SweetTreats Bakery — freshly baked, lovingly made. Discover our handcrafted treats made to bring you joy in every bite!"
        />
        <meta name="robots" content="index, follow" />

        {/* ✅ Preload Caveat font for faster LCP text render */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
        />

        {/* ✅ (Optional) Preload hero image */}
        <link rel="preload" as="image" href="/images/1.webp" />
      </Helmet>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-4 bg-yellow-100 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-3xl flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-6xl font-bold text-brown-800 dark:text-white mb-6 leading-snug tracking-tight">
            Welcome to <span className="text-pink-500">SweetTreats Bakery</span> 🍩
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
            Freshly baked. Lovingly made. We serve joy in every bite!
          </p>

          <a
            href="#menu"
            className="inline-block px-8 py-3 text-white bg-pink-500 hover:bg-pink-600 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 rounded-full text-lg font-semibold transition duration-300"
          >
            Explore Our Menu
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;