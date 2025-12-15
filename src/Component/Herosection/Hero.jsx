import React from "react";

function Hero() {
  return (
    <section className="w-full pt-32 pb-20 flex flex-col items-center text-center px-6">
      
      {/* Hero Image */}
      <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl mb-8">
        <img
          src="/img1.jpg"
          alt="Property"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-3 mb-6 flex-wrap justify-center">
        <span className="px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
          House
        </span>
        <span className="px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
          Apartment
        </span>
        <span className="px-4 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
          Residential
        </span>
      </div>

      {/* Hero Text */}
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight max-w-2xl">
        Build Your Future, One Property at a Time.
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl">
        Own Your World. One Property at a Time. Own Your World. One Property at a Time.
      </p>
    </section>
  );
}

export default Hero;
