import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const properties = [
  {
    id: 1,
    title: "The Pinnacle at Highland Park",
    price: "$580000",
    location: "Kabul, Karte Char",
    beds: 5,
    baths: 2,
    img: "/download (11).jpeg",
  },
  {
    id: 2,
    title: "The Pinnacle at Highland Park",
    price: "$380000",
    location: "Herat",
    beds: 5,
    baths: 2,
    img: "/download (12).jpeg",
  },
  {
    id: 3,
    title: "The Pinnacle at Highland Park",
    price: "$870000",
    location: "Maidan-Shar",
    beds: 9,
    baths: 3,
    img: "/download (13).jpeg",
  },
];

function Prop() {
  const [selected, setSelected] = useState(null);
  const [showAgent, setShowAgent] = useState(false);

  return (
    <section className="w-full py-20 px-6 lg:px-16 bg-black text-white">

      {/* PROPERTY LIST */}
      {!selected && (
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Homes <span className="text-yellow-500">for Sale</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((p) => (
              <div
                key={p.id}
                className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shadow-lg hover:shadow-yellow-500/30 transition duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <FaLocationDot className="text-yellow-600" /> {p.location}
                  </p>

                  <p className="text-xl font-bold text-yellow-500 my-3">
                    {p.price}
                  </p>

                  <div className="flex justify-between text-sm text-gray-400">
                    <span>🛏 {p.beds} Beds</span>
                    <span>🛁 {p.baths} Baths</span>
                  </div>

                  <button
                    onClick={() => setSelected(p)}
                    className="mt-6 w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DETAILS MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 max-w-5xl w-full rounded-xl relative overflow-hidden">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => {
                setSelected(null);
                setShowAgent(false);
              }}
              className="absolute top-4 right-4 text-2xl font-bold text-yellow-500 hover:text-yellow-400 z-10"
            >
              ✕
            </button>

            <div className="grid lg:grid-cols-2">
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-10">
                <h1 className="text-3xl font-bold">{selected.title}</h1>
                <p className="text-2xl text-yellow-500 my-2">
                  {selected.price}
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaLocationDot className="text-yellow-600" /> {selected.location}
                </p>

                <div className="flex gap-6 mt-6 text-gray-300">
                  <span>🛏 {selected.beds} Beds</span>
                  <span>🛁 {selected.baths} Baths</span>
                </div>

                {/* CONTACT AGENT BUTTON */}
                <button
                  onClick={() => setShowAgent(!showAgent)}
                  className="mt-8 px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300"
                >
                  Contact Agent
                </button>

                {/* AGENT DETAILS */}
                {showAgent && (
                  <div className="mt-6 p-6 bg-black border border-yellow-500 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-500 mb-2">
                      Agent Details
                    </h3>
                    <p className="text-gray-300">
                      <strong>Name:</strong> Erfanullah Rahmatzai
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
        </div>
      )}
    </section>
  );
}

export default Prop;
