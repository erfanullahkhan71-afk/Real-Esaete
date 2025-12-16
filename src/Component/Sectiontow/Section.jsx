// Three carde section
import React from "react";

function Section() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-20 px-6">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center md:text-left">
        Your primary home might begin to feel left out.
      </h2>

      {/* Grid Section */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Left Image with Overlay */}
        <div className="relative max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl group cursor-pointer hover:scale-105 transition-transform duration-500">
          <img src="/img2.jpg" alt="Home" className="w-full h-96 object-cover" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Overlay Text */}
          <div className="absolute bottom-8 left-6 text-white opacity-100 group-hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg mb-2">
              Your Dream Home
            </h2>
            <p className="text-md md:text-lg drop-shadow-md mb-4">
              Comfort, style, and elegance all in one place.
            </p>
          </div>
        </div>

        {/* Middle Text Card */}
        <div className="rounded-2xl bg-gray-100 p-6 shadow-md flex flex-col justify-center text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Big things can happen in small spaces.
          </h3>
          <p className="text-gray-600">
            With thoughtful design and smart organization, you can maximize every inch, making room for creativity.
          </p>
          <button className="mt-6 px-5 py-2 bg-black text-white rounded-full w-max mx-auto">
            Details
          </button>
        </div>

        {/* Right Image Card */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img src="/img3.jpg" alt="Small Home" className="w-full h-64 object-cover" />
          <div className="p-4 text-center">
            <p className="text-gray-800 font-medium">Pricing Start at $256K</p>
            <button className="mt-3 px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              Explore Properties
            </button>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-6 text-center max-w-2xl mx-auto">
        Whether it's creating a cozy corner for relaxation or transforming a small area into a workspace.
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center mt-16 gap-10">
        <div>
          <h3 className="text-3xl font-bold">100%</h3>
          <p className="text-gray-500">Satisfied Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-gray-500">Happy Homes</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">150+</h3>
          <p className="text-gray-500">Properties Sold</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">150+</h3>
          <p className="text-gray-500">Awards & Recognition</p>
        </div>
      </div>
    </section>
  );
}

export default Section;
