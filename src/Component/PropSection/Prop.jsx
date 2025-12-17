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
    <section className="w-full py-20 px-6 lg:px-16">

      {/* PROPERTY LIST */}
      {!selected && (
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Homes for Sale
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl overflow-hidden border border-gray-200"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">📍 {p.location}</p>

                  <p className="text-xl font-bold text-green-600 my-3">
                    {p.price}
                  </p>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>🛏 {p.beds} Beds</span>
                    <span>🛁 {p.baths} Baths</span>
                  </div>

                  <button
                    onClick={() => setSelected(p)}
                    className="mt-6 w-full py-3 rounded-xl bg-green-600 text-white"
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
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white max-w-5xl w-full rounded-3xl relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-xl font-bold"
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
                <p className="text-2xl text-green-600 my-2">
                  {selected.price}
                </p>
                <p className="text-gray-600">📍 {selected.location}</p>

                <div className="flex gap-6 mt-6">
                  <span>🛏 {selected.beds} Beds</span>
                  <span>🛁 {selected.baths} Baths</span>
                </div>

                <button className="mt-8 px-8 py-4 bg-green-600 text-white rounded-xl">
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
