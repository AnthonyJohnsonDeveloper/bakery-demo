import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-600 dark:text-white">
          SweetTreats
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-100 font-medium">
          <li><a href="#about" className="hover:text-pink-500">About</a></li>
          <li><a href="#menu" className="hover:text-pink-500">Menu</a></li>
          <li><a href="#testimonials" className="hover:text-pink-500">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
        </ul>
        <button className="md:hidden text-gray-800 dark:text-white focus:outline-none">
          {/* Mobile menu icon could go here if needed */}
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;