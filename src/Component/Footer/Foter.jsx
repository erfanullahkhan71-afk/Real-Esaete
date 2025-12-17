import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Foter() {
  const navigate = useNavigate();
  
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Properties", to: "/property" },
    { label: "Contact", to: "/contact" },
  ];
  return (
     <footer className="w-full bg-gradient-to-r from-green-500 to-green-800 text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        {/* Branding */}
        <div className="flex flex-col gap-4">
          <h2
            className="text-3xl font-bold cursor-pointer hover:text-gray-100 transition"
            onClick={() => navigate("/")}
          >
            EverGreen
          </h2>
          <p className="text-gray-100/80">
            Explore the best properties with expert guidance.
          </p>
          <p className="text-gray-100/70 text-sm">Erfanullah</p>
          <p className="text-gray-100/70 text-sm">0748948465</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li key={i} className="group relative cursor-pointer">
                <Link
                  to={link.to}
                  className="hover:text-gray-200 transition font-sans"
                >
                  {link.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white rounded-full transition-all group-hover:w-20"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold mb-3">Stay Connected</h4>

<div className="flex gap-3">
  <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/40 transition">
    <FaFacebookF />
  </div>
  <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/40 transition">
    <FaTwitter />
  </div>
  <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/40 transition">
    <FaInstagram />
  </div>
</div>

          <input
            type="email"
            placeholder="Your email"
            className="mt-4 p-3 rounded-xl border border-white/40 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/70"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-white/60 text-sm">
        © 2025 EverGreen. All rights reserved.
      </div>
    </footer>
  )
}

export default Foter






























 
  

