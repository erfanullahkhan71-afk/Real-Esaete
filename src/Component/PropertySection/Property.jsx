// Map section
import React from "react";

function Property() {
  return (
    <section className="w-full flex flex-col items-center gap-16 py-12 px-6 lg:px-20">

      {/* Top Section */}
      <div className="w-full grid lg:grid-cols-2 gap-10 items-center">

        {/* Map / Image */}
        <img
          src="/map.png"
          alt="Map Preview"
          className="w-full rounded-xl shadow-md"
        />

        {/* Text Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-snug">
            Discover Properties with <br /> the Best Value
          </h2>
          <p className="text-gray-600 max-w-md">
            From minimalist interiors to compact solutions, small spaces inspire big ideas,
            proving that you don’t need much room.
          </p>

          <button className="mt-2 bg-black text-white px-6 py-3 rounded-full w-fit hover:bg-gray-900 transition">
            Find Nearest Properties
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Explore our Premier Houses</h3>
          <p className="text-gray-600 max-w-md">
            Join us in shaping a brighter future by nurturing potential and fostering growth
            through education and collaboration.
          </p>
        </div>

  
      </div>

    </section>
  );
}

export default Property;
