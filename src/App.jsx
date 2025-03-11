import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";

// Lazy-loaded components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Features = lazy(() => import("./components/Features"));
const Menu = lazy(() => import("./components/Menu"));
const Hero = lazy(() => import("./components/Hero"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Header />
      <Menu />
      <Gallery />
      <Testimonials />

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <About />
        <Contact />
        <Features />
        <Hero />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
