import React, { useState, useEffect } from "react";
import { MapPin, DollarSign, Home, Phone, Mail, User } from "lucide-react";

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

export default function Section() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [showOwner, setShowOwner] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedHouse ? "hidden" : "auto";
  }, [selectedHouse]);

  return (
    <>
      {/* LIST SECTION */}
      <section className="w-full bg-black text-white pt-24 pb-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Featured <span className="text-yellow-500">Properties</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Find your dream home from our curated selection
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {houses.map((house) => (
              <div
                key={house.id}
                onClick={() => {
                  setSelectedHouse(house);
                  setShowOwner(false);
                }}
                className="bg-gradient-to-b from-gray-900 to-gray-950
                           border border-gray-800 rounded-2xl overflow-hidden
                           shadow-lg hover:shadow-yellow-500/30
                           transform hover:-translate-y-1 transition
                           cursor-pointer flex flex-col h-full"
              >
                <img
                  src={house.img}
                  alt={house.title}
                  className="h-60 lg:h-72 w-full object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {house.title}
                  </h3>

                  <p className="text-sm text-gray-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
                    {house.location}
                  </p>

                  <p className="text-lg font-bold text-yellow-500 mt-3 flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {house.price}
                  </p>

                  <button
                    className="mt-auto w-full py-3 rounded-xl
                               bg-yellow-500 text-black font-semibold
                               hover:bg-yellow-400 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedHouse && (
        <div
          onClick={() => {
            setSelectedHouse(null);
            setShowOwner(false);
          }}
          className="fixed inset-0 bg-black/80 z-50
                     flex items-center justify-center px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-2xl max-w-6xl w-full
                       grid grid-cols-1 md:grid-cols-2
                       max-h-[85vh] overflow-y-auto relative"
          >
            <button
              onClick={() => {
                setSelectedHouse(null);
                setShowOwner(false);
              }}
              className="absolute top-4 right-4 text-2xl
                         text-yellow-500 hover:text-yellow-400"
            >
              ✕
            </button>

            <img
              src={selectedHouse.img}
              alt={selectedHouse.title}
              className="w-full h-72 md:h-full object-cover"
            />

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                {selectedHouse.title}
              </h3>

              <p className="text-2xl text-yellow-500 mb-3">
                {selectedHouse.price}
              </p>

              <p className="text-gray-400 mb-4 flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
                {selectedHouse.location}
              </p>

              <p className="text-gray-300 mb-6 flex items-center">
                <Home className="w-4 h-4 mr-2 text-yellow-600" />
                {selectedHouse.description}
              </p>

              {/* CONTACT OWNER BUTTON */}
              <button
                onClick={() => setShowOwner(!showOwner)}
                className="w-full py-3 bg-yellow-500
                           text-black font-semibold rounded-xl
                           hover:bg-yellow-400 transition"
              >
                Contact Owner
              </button>

              {/* OWNER DETAILS */}
              {showOwner && (
                <div className="mt-5 p-5 bg-black border border-yellow-500 rounded-xl">
                  <h4 className="text-lg font-bold text-yellow-500 mb-3">
                    Owner Information
                  </h4>

                  <p className="flex items-center gap-2 text-gray-300">
                    <User className="w-4 h-4 text-yellow-600" />
                    Erfanullah Rahmatzai
                  </p>

                  <p className="flex items-center gap-2 text-gray-300">
                    <Phone className="w-4 h-4 text-yellow-600" />
                    +93 748 948 465
                  </p>

                  <p className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4 text-yellow-600" />
                    erfan@rentals.com
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
