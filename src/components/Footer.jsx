import React from "react";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} <strong>SweetTreats</strong>. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition">Facebook</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition">Instagram</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition">TikTok</a>
        </div>

        {/* Optional Scroll to Top Button */}
        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-pink-500 hover:underline"
        >
          ↑ Back to top
        </button> */}
      </div>
    </footer>
  );
};

export default Footer;