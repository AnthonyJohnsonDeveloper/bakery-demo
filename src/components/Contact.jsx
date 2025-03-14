import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <Helmet>
        <title>Contact | SweetTreats Bakery</title>
        <meta
          name="description"
          content="Contact SweetTreats Bakery to place an order or ask a question."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Want to work with us or just say hi? Drop a message below!
        </p>
        <form className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="name"
              className="block text-left mb-1 text-gray-800 dark:text-gray-200"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              aria-label="Name"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left mb-1 text-gray-800 dark:text-gray-200"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              aria-label="Email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-left mb-1 text-gray-800 dark:text-gray-200"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              required
              aria-label="Message"
              placeholder="Your message..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;