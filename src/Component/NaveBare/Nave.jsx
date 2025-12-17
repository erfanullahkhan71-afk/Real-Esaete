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
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-50 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Logo */}
        <h1
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-green-400 via-teal-400 to-green-800 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => navigate("/")}
        >
          EverGreen
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-medium text-gray-700 items-center">
          {menuItems.map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              <Link
                to={item.to}
                className="px-3 py-1 rounded-md hover:bg-white/40 transition"
              >
                {item.label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-green-400 to-green-800 rounded-full transition-all group-hover:w-full"></span>
            </li>
          ))}
          <li>
            <button
              onClick={() => navigate("/signup")}
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-800 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
            >
              Sign Up
            </button>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white/90 backdrop-blur-md w-full transition-max-height duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 py-4 px-6">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                className="block py-2 rounded-md hover:bg-green-400/20 transition"
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
              className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-800 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
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
