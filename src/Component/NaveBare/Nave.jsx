import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nave() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl flex justify-between items-center px-6 py-3 z-50">
      
      {/* Logo */}
      <h1
        className="text-3xl font-extrabold bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={() => navigate("/")}
      >
        EverGreen
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-100">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/property", label: "Property List" },
          { to: "/contact", label: "Contact Us" }
        ].map((item, i) => (
          <li key={i} className="relative group cursor-pointer">
            <Link
              to={item.to}
              className="px-3 py-1 text-gray-700 rounded-md hover:bg-white/30 transition"
            >
              {item.label}
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Sign Up Button */}
      <button
        onClick={() => navigate("/signup")}
        className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Sign Up
      </button>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden ml-4 cursor-pointer flex flex-col gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`block w-6 h-0.5 bg-gray-100 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-100 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-100 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-4/5 bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col items-center py-4 gap-4 md:hidden">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/property", label: "Property List" },
            { to: "/contact", label: "Contact Us" }
          ].map((item, i) => (
            <li key={i} className="w-full text-center">
              <Link
                to={item.to}
                className="block w-full py-2 hover:bg-green-400/20 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nave;
