import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <>
        <Helmet>
          <title>SweetTreats | Bakery</title>
        </Helmet>
  
        <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-pink-600 dark:text-white">
              SweetTreats
            </div>
  
            {/* Desktop nav */}
            <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-100 font-medium">
              <li><a href="#about" className="hover:text-pink-500">About</a></li>
              <li><a href="#menu" className="hover:text-pink-500">Menu</a></li>
              <li><a href="#testimonials" className="hover:text-pink-500">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
            </ul>
  
            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-800 dark:text-white focus:outline-none text-2xl"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
  
          {/* Mobile dropdown */}
          {menuOpen && (
            <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-800 dark:text-white font-medium transition-all">
              <li><a href="#about" onClick={() => setMenuOpen(false)} className="block">About</a></li>
              <li><a href="#menu" onClick={() => setMenuOpen(false)} className="block">Menu</a></li>
              <li><a href="#testimonials" onClick={() => setMenuOpen(false)} className="block">Testimonials</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a></li>
            </ul>
          )}
        </nav>
      </>
    );
  };
  
  export default Navbar;