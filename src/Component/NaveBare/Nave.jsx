import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nave() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/property", label: "Property List" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    // Switched background to a dark, slightly transparent base
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md shadow-lg shadow-black/30 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Logo (Now Black & Gold Gradient) */}
        <h1
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => navigate("/")}
        >
          Luxury Estates
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-medium text-gray-100 items-center">
          {menuItems.map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              <Link
                to={item.to}
                className="px-3 py-1 rounded-md hover:bg-gray-800/50 transition"
              >
                {item.label}
              </Link>
              {/* Gold underglow effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all group-hover:w-full"></span>
            </li>
          ))}
          <li>
            <button
              onClick={() => navigate("/signup")}
              // Gold Button Styling
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-transform duration-300 transform hover:scale-105"
            >
              Sign Up
            </button>
          </li>
        </ul>

        {/* Hamburger Icon (Now White/Gray for contrast) */}
        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        // Darkened mobile menu background
        className={`lg:hidden bg-gray-800/95 backdrop-blur-md w-full transition-max-height duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 py-4 px-6">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                // White text with gold hover effect
                className="block py-2 rounded-md text-white hover:bg-yellow-500/20 hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                navigate("/signup");
                setIsOpen(false);
              }}
              // Gold Button Styling
              className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold shadow-md hover:scale-105 transition-transform duration-300"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nave;
