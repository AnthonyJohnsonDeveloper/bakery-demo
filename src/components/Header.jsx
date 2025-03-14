import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Helmet>
        <title>SweetTreats Bakery | Home</title>
        <meta name="description" content="Freshly baked treats delivered with love. Explore our menu, custom orders, and sweet creations!" />
      </Helmet>

      <header className="w-full px-4 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600 dark:text-yellow-400">
            🍰 Sweet Bakery
          </h1>
          <nav className="space-x-4 text-sm sm:text-base">
            <a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-pink-500 dark:hover:text-yellow-300">Home</a>
            <a href="#menu" className="text-gray-800 dark:text-gray-200 hover:text-pink-500 dark:hover:text-yellow-300">Menu</a>
            <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-pink-500 dark:hover:text-yellow-300">About</a>
            <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-pink-500 dark:hover:text-yellow-300">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 text-lg"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}