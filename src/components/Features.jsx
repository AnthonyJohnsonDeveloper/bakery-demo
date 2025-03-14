import React from "react";
import { Helmet } from "react-helmet";

const features = [
  {
    title: "Freshly Baked Daily",
    description: "Our goodies are made every morning for maximum freshness.",
    icon: "🍞",
  },
  {
    title: "Custom Orders",
    description: "Cakes, cookies, cupcakes – personalized for any event!",
    icon: "🎂",
  },
  {
    title: "Local Ingredients",
    description: "We source locally to support farms and flavor.",
    icon: "🌾",
  },
  {
    title: "Delivery Available",
    description: "Get your favorites delivered right to your doorstep.",
    icon: "🚚",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="scroll-mt-24 py-20 bg-gray-100 dark:bg-gray-800 transition-colors"
    >
      <Helmet>
        <title>Why Choose Us | SweetTreats Bakery</title>
        <meta
          name="description"
          content="Discover the top reasons customers love SweetTreats Bakery—from daily freshness to custom treats and delivery options."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Why Choose Us?
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
