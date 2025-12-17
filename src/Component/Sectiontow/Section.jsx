import React, { useState, useEffect } from "react";

const houses = [
  {
    id: 1,
    title: "Modern Apartment",
    price: "$1,200 / month",
    location: "New York",
    img: "/download (8).jpeg",
    description: "2 Beds • 1 Bath • 900 sq.ft. Modern apartment in the city center.",
  },
  {
    id: 2,
    title: "Cozy House",
    price: "$2,500 / month",
    location: "Los Angeles",
    img: "/download (9).jpeg",
    description: "3 Beds • 2 Baths • 1,200 sq.ft. Perfect for families with a garden.",
  },
  {
    id: 3,
    title: "Luxury Villa",
    price: "$5,000 / month",
    location: "Miami",
    img: "/download (10).jpeg",
    description: "5 Beds • 4 Baths • 3,500 sq.ft. Private pool and ocean view.",
  },
];

function Section() {
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedHouse ? "hidden" : "auto";
  }, [selectedHouse]);

  return (
    <section className="w-full max-w-7xl mx-auto mt-24 px-6">

      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold">Featured Properties</h2>
        <p className="text-gray-600 mt-2">
          Find your dream home from our curated selection
        </p>
      </div>

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {houses.map((house) => (
          <div
            key={house.id}
            className="rounded-3xl overflow-hidden bg-white border"
          >
            <img
              src={house.img}
              alt={house.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">{house.title}</h3>
              <p className="text-sm text-gray-500">📍 {house.location}</p>
              <p className="text-lg font-bold text-green-600 mt-3">
                {house.price}
              </p>

              <button
                onClick={() => setSelectedHouse(house)}
                className="mt-5 w-full py-3 rounded-xl bg-green-600 text-white"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedHouse && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedHouse(null)}
        >
          <div
            className="bg-white max-w-5xl w-full rounded-3xl overflow-hidden grid md:grid-cols-2 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedHouse(null)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ✕
            </button>

            <img
              src={selectedHouse.img}
              alt={selectedHouse.title}
              className="w-full h-80 md:h-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold">{selectedHouse.title}</h3>
              <p className="text-2xl text-green-600 my-2">
                {selectedHouse.price}
              </p>
              <p className="text-gray-600 mb-4">
                📍 {selectedHouse.location}
              </p>
              <p className="text-gray-700 mb-6">
                {selectedHouse.description}
              </p>

              <button className="px-6 py-3 bg-green-600 text-white rounded-xl">
                Contact Owner
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Section;
