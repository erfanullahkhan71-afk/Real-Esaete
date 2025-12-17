import React from 'react';
// Import Link from react-router-dom
import { Link } from 'react-router-dom';

function Hero() {
  // Define button links data
  const buttons = [
    { label: "Explore Properties", to: "/property", primary: true },
    { label: "Contact Agent", to: "/contact", primary: false },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src="/ChatGPT Image Dec 16, 2025, 11_01_53 AM.png"
        alt="Property"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        {/* Tags */}
        <div className="flex gap-3 mb-6 flex-wrap justify-center">
          {["House", "Apartment", "Residential"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 rounded-full bg-white/20 backdrop-blur text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Your Future <br className="hidden md:block" />
          One Property at a Time
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          Discover premium homes and smart investments designed for your lifestyle and long-term growth.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          {/* Use the Link component styled as buttons */}
          {buttons.map((button) => (
            <Link
              key={button.label}
              to={button.to}
              // Apply Tailwind CSS classes dynamically based on the 'primary' flag
              className={`px-8 py-3 rounded-2xl font-medium transition duration-300 ease-in-out shadow-lg 
                ${button.primary
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'border border-white text-white hover:bg-white hover:text-black'
                }`
              }
            >
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
