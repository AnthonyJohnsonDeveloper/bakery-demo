import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} SweetTreats. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-pink-600">Facebook</a>
          <a href="#" className="hover:text-pink-600">Instagram</a>
          <a href="#" className="hover:text-pink-600">TikTok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;