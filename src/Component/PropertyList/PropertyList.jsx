import React, { useState } from "react";

const properties = [
  {
    title: "The Pinnacle at Highland Park",
    price: "$3,567,980.00",
    location: "123 Maple Street, New York",
    beds: 5,
    baths: 2,
    img: "/download (11).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$2,408,980.39",
    location: "789 Forest Lane, Denver CO",
    beds: 5,
    baths: 2,
    img: "/download (12).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$4,567,045.00",
    location: "123 Serenity Drive, Austin TX",
    beds: 6,
    baths: 3,
    img: "/download (15).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$3,200,000.00",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    img: "/download (17).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$2,900,000.00",
    location: "Los Angeles, CA",
    beds: 5,
    baths: 4,
    img: "/download (16).jpeg",
  },  {
    title: "The Pinnacle at Highland Park",
    price: "$2,800,000",
    location: "Los Angeles, CA",
    beds: 5,
    baths: 4,
    img: "/download (18).jpeg",
  },






  {
    title: "The Pinnacle at Highland Park",
    price: "$3,00000",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    img: "/download (19).jpeg",
  },
  {
    title: "The Pinnacle at Highland Park",
    price: "$4,,000.00",
    location: "Los Angeles, CA",
    beds: 5,
    baths: 4,
    img: "/download (20).jpeg",
  },  {
    title: "The Pinnacle at Highland Park",
    price: "$3,89,000",
    location: "Los Angeles, CA",
    beds: 5,
    baths: 4,
    img: "/download (21).jpeg",
  },
];

function PropertyList() {
  const [selectedCard, setSelectedCard] = useState(null);

  /* ================= DETAILS VIEW ================= */
  if (selectedCard) {
    return (
      <div className="max-w-6xl mx-auto p-6 lg:p-12">
        <button
          onClick={() => setSelectedCard(null)}
          className="mb-6 text-blue-600 font-medium"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-2 gap-10">
          <img
            src={selectedCard.img}
            alt={selectedCard.title}
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl"
          />

          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-3xl lg:text-4xl font-bold">
              {selectedCard.title}
            </h1>

            <p className="text-2xl text-green-600 font-semibold">
              {selectedCard.price}
            </p>

            <p className="text-gray-600">
              📍 {selectedCard.location}
            </p>

            <div className="flex gap-6 mt-4 text-lg">
              <span>🛏 {selectedCard.beds} Beds</span>
              <span>🛁 {selectedCard.baths} Baths</span>
            </div>

            <button className="mt-6 w-full sm:w-fit px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= CARDS VIEW ================= */
  return (
    <div className="w-full py-12 px-6 lg:px-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(property)}
            className="cursor-pointer bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={property.img}
              alt={property.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-xl font-bold">{property.price}</p>
              <p className="text-gray-500 text-sm">{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
