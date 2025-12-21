import React, { useState } from "react";

const properties = [
  {
    id: 1,
    title: "The Pinnacle at Highland Park",
    price: "$3,567,980.00",
    location: "123 Maple Street, New York",
    beds: 5,
    baths: 2,
    img: "/download (11).jpeg",
  },
  {
    id: 2,
    title: "The Pinnacle at Highland Park",
    price: "$2,408,980.39",
    location: "789 Forest Lane, Denver CO",
    beds: 5,
    baths: 2,
    img: "/download (12).jpeg",
  },
  {
    id: 3,
    title: "The Pinnacle at Highland Park",
    price: "$4,567,045.00",
    location: "123 Serenity Drive, Austin TX",
    beds: 6,
    baths: 3,
    img: "/download (13).jpeg",
  },
];

function Prop() {
  const [selected, setSelected] = useState(null);

  return (
    // Updated section background to a deep black/gray
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
                // Styled cards with dark background and subtle gold border
                className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shadow-lg hover:shadow-yellow-500/30 transition duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-gray-500">📍 {p.location}</p>

                  {/* Gold price text */}
                  <p className="text-xl font-bold text-yellow-500 my-3">
                    {p.price}
                  </p>

                  <div className="flex justify-between text-sm text-gray-400">
                    <span>🛏 {p.beds} Beds</span>
                    <span>🛁 {p.baths} Baths</span>
                  </div>

                  <button
                    onClick={() => setSelected(p)}
                    // Gold button styling
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
        <div 
            // Darkened modal overlay
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div 
            // Modal content is dark theme
            className="bg-gray-900 max-w-5xl w-full rounded-xl relative overflow-hidden">

            <button
              onClick={() => setSelected(null)}
              // Gold close button
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
                <h1 className="text-3xl font-bold text-white">{selected.title}</h1>
                {/* Gold price text */}
                <p className="text-2xl text-yellow-500 my-2">
                  {selected.price}
                </p>
                <p className="text-gray-400">📍 {selected.location}</p>

                <div className="flex gap-6 mt-6 text-gray-300">
                  <span>🛏 {selected.beds} Beds</span>
                  <span>🛁 {selected.baths} Baths</span>
                </div>

                <button 
                    // Gold contact button
                    className="mt-8 px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-300">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Prop;
