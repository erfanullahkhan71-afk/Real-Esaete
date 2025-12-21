import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <img
        src="/ChatGPT Image Dec 16, 2025, 11_01_53 AM.png"
        alt="Luxury Property"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 text-center text-white">

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {["House", "Apartment", "Residential"].map(tag => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full text-xs sm:text-sm
              bg-gray-900/70 text-yellow-400 border border-yellow-500/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
          Build Your Future
          <span className="block">One Property at a Time</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Discover premium homes and smart investments designed for your lifestyle and long-term growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/property"
            className="px-8 py-3 rounded-lg font-bold bg-yellow-500 text-black
            hover:bg-yellow-400 transition"
          >
            Explore Properties
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-lg font-bold border border-yellow-500
            hover:bg-yellow-400 transition"
          >
            Contact Agent
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;
