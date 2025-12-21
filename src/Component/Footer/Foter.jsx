import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
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
    // Switched background from green gradient to a deep black/dark gray
    <footer className="w-full bg-gray-950 text-white py-20 px-6 md:px-20 border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">

        {/* Branding */}
        <div className="flex flex-col gap-4">
          <h2
            // Used a gold gradient for the luxury brand name
            className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent hover:opacity-80 transition"
            onClick={() => navigate("/")}
          >
            Luxury Estates
          </h2>

          <p className="text-gray-400">
            Explore the best properties with expert guidance.
          </p>

          <p className="text-gray-500 text-sm">Erfanullah</p>
          <p className="text-gray-500 text-sm">0748948465</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold mb-3 text-yellow-500">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li key={i} className="group relative">
                <Link
                  to={link.to}
                  // White text with gold hover accent
                  className="hover:text-yellow-400 transition font-sans"
                >
                  {link.label}
                </Link>
                <span 
                    // Gold underline effect
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-500 rounded-full transition-all group-hover:w-20"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold mb-3 text-yellow-500">Stay Connected</h4>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              // Dark background with gold hover color
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition text-white"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/93748948465?text=Hello%20Erfanullah!."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black transition text-white"
            >
              <FaWhatsapp />
            </a>
          </div>

          <input
            type="email"
            placeholder="Your email"
            // Input field styled for dark mode with gold focus ring
            className="mt-4 p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-gray-600 text-sm">
        © 2025 Luxury Estates. All rights reserved.
      </div>
    </footer>
  );
}

export default Foter;
