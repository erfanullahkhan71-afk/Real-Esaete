import React from "react";

const properties = [
  {
    id: 1,
    title: "The Pinnacle at Highland Park",
    price: "$3,567,980",
    location: "123 Maple Street, New York",
    beds: 5,
    baths: 2,
    img: "/img4.jpg",
  },
  {
    id: 2,
    title: "Modern Luxury Villa",
    price: "$2,408,980",
    location: "789 Forest Lane, Denver CO",
    beds: 5,
    baths: 2,
    img: "/img5.jpg",
  },
  {
    id: 3,
    title: "Serenity Estate",
    price: "$4,567,045",
    location: "123 Serenity Drive, Austin TX",
    beds: 6,
    baths: 3,
    img: "/img4.jpg",
  },
];

function Prop() {
  return (
    <div className="w-full py-16 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
        Explore Our Properties
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Property Image */}
            <img
              src={property.img}
              alt={property.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay info on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">{property.title}</h3>
              <p className="text-white font-semibold mb-1">{property.price}</p>
              <p className="text-gray-200 text-sm mb-2">{property.location}</p>
              <div className="flex gap-4 text-gray-200 text-sm">
                <span>{property.beds} Beds</span>
                <span>{property.baths} Baths</span>
              </div>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 w-full">
                View Details
              </button>
            </div>

            {/* Static info below image for quick view */}
            <div className="absolute bottom-0 left-0 bg-white/80 backdrop-blur-md w-full p-4 flex justify-between items-center">
              <p className="text-gray-800 font-semibold">{property.title}</p>
              <p className="text-green-700 font-bold">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prop;
