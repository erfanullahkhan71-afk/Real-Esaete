import React, { useState } from "react";
import Foter from "../Footer/Foter";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const properties = [
  {
    title: "The Pinnacle at Highland Park",
    price: "$930,000",
    location: "Kabul, Afghanistan",
    beds: 5,
    baths: 2,
    img: "/download (11).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$890,000",
    location: "Herat, Afghanistan",
    beds: 5,
    baths: 2,
    img: "/download (12).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$1,200,000",
    location: "Mazar-e-Sharif, Afghanistan",
    beds: 6,
    baths: 3,
    img: "/download (15).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$1,500,000",
    location: "Kandahar, Afghanistan",
    beds: 4,
    baths: 3,
    img: "/download (17).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$1,122,000",
    location: "Jalalabad, Afghanistan",
    beds: 5,
    baths: 4,
    img: "/download (16).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$599,000",
    location: "Kunduz, Afghanistan",
    beds: 5,
    baths: 4,
    img: "/download (18).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$300,000",
    location: "Ghazni, Afghanistan",
    beds: 4,
    baths: 3,
    img: "/download (19).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$400,000",
    location: "Bamyan, Afghanistan",
    beds: 5,
    baths: 4,
    img: "/download (20).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$700,000",
    location: "Faizabad, Afghanistan",
    beds: 5,
    baths: 4,
    img: "/download (21).jpeg",
  },
];

function PropertyList() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showAgent, setShowAgent] = useState(false);

  /* ================= DETAILS VIEW ================= */
  if (selectedCard) {
    return (
      <div className="relative bg-black min-h-screen text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 pb-28">
          <div className="grid lg:grid-cols-2 gap-12">
            <img
              src={selectedCard.img}
              alt={selectedCard.title}
              className="w-full h-[450px] object-cover rounded-xl shadow-lg border-2 border-yellow-700/30"
            />

            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-4xl font-bold">
                {selectedCard.title}
              </h1>

              <p className="text-3xl font-semibold text-yellow-500">
                {selectedCard.price}
              </p>

              <p className="flex items-center gap-3 text-gray-400 text-lg">
                <FaLocationDot className="text-yellow-600" />
                {selectedCard.location}
              </p>

              <div className="flex gap-10 text-lg font-medium mt-4 text-gray-300">
                <span>🛏 {selectedCard.beds} Beds</span>
                <span>🛁 {selectedCard.baths} Baths</span>
              </div>

              {/* CONTACT AGENT BUTTON */}
              <button
                onClick={() => setShowAgent(!showAgent)}
                className="mt-8 w-fit px-10 py-4 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition font-semibold"
              >
                Contact Agent
              </button>

              {/* AGENT DETAILS */}
              {showAgent && (
                <div className="mt-4 p-6 bg-gray-900 border border-yellow-500 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">
                    Agent Information
                  </h3>
                  <p className="text-gray-300">
                    <strong>Name:</strong>Erfanullah Rahmatzai
                  </p>
                  <p className="text-gray-300">
                    <strong>Phone:</strong> +93 748 948 465
                  </p>
                  <p className="text-gray-300">
                    <strong>Email:</strong> erfan@realestate.com
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
          <button
            onClick={() => {
              setSelectedCard(null);
              setShowAgent(false);
            }}
            className="flex items-center gap-3 px-8 py-4 rounded-full
                       bg-gray-800 text-white shadow-xl
                       hover:bg-gray-700 hover:text-yellow-400 transition"
          >
            <FaArrowLeft />
            Back to listings
          </button>
        </div>
      </div>
    );
  }

  /* ================= CARDS VIEW ================= */
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Properties in <span className="text-yellow-500">Afghanistan</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <div
              key={index}
              onClick={() => setSelectedCard(property)}
              className="group cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-yellow-500/30 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-4 left-4 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  {property.price}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  {property.title}
                </h3>

                <p className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaLocationDot className="text-yellow-600" />
                  {property.location}
                </p>

                <div className="flex justify-between text-sm font-medium pt-2 text-gray-300">
                  <span>🛏 {property.beds} Beds</span>
                  <span>🛁 {property.baths} Baths</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Foter />
    </div>
  );
}

export default PropertyList;
