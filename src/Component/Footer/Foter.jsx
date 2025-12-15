import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Foter() {
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Property List", to: "/property" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <footer className="w-full bg-gray-100 py-10 px-6 md:px-20 border-t mt-20">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h3 className="text-xl font-semibold">
            Discover Nature's Wonders<br />With Expert Guidance
          </h3>
        </div>
        <div className="text-gray-700 text-sm">
          <p>12345 Erafn</p>
          <p>0148948465</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6 text-sm text-gray-600">

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-semibold">
          {navLinks.map((link, i) => (
            <li key={i} className="cursor-pointer relative group">
              <Link to={link.to}>{link.label}</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-green-500 rounded-full transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div
          className="font-semibold text-lg mt-4 md:mt-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          EverGreen
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-xs text-gray-500">
        © 2025 EverGreen. All rights reserved.
      </div>
    </footer>
  );
}

export default Foter;
