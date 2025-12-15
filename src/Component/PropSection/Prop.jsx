import React from "react";

const properties = [
  { id: 1, title: "The Pinnacle at Highland Park", price: "$3,567,980.00", location: "123 Maple Street, New York", beds: 5, baths: 2, img: "/img4.jpg" },
  { id: 2, title: "The Pinnacle at Highland Park", price: "$2,408,980.39", location: "789 Forest Lane, Denver CO", beds: 5, baths: 2, img: "/img5.jpg" },
  { id: 3, title: "The Pinnacle at Highland Park", price: "$4,567,045.00", location: "123 Serenity Drive, Austin TX", beds: 6, baths: 3, img: "/img6.jpg" },
  { id: 4, title: "The Pinnacle at Highland Park", price: "$3,567,980.00", location: "123 Maple Street, New York", beds: 5, baths: 2, img: "/img7.jpg" },
  { id: 5, title: "The Pinnacle at Highland Park", price: "$2,408,980.39", location: "789 Forest Lane, Denver CO", beds: 5, baths: 2, img: "/img3.jpg" },
  { id: 6, title: "The Pinnacle at Highland Park", price: "$4,567,045.00", location: "123 Serenity Drive, Austin TX", beds: 6, baths: 3, img: "/img9.jpg" },
];

function Prop() {
  return (
    <div className="w-full py-12 px-6 lg:px-16">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={property.img}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow">
                For Sale
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-2">
              {/* Details */}
              <div className="text-gray-600 text-sm flex items-center gap-4">
                <span>{property.beds} Bedrooms</span>
                <span>{property.baths} Bathrooms</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{property.title}</h3>

              {/* Price */}
              <p className="text-xl font-bold">{property.price}</p>

              {/* Location */}
              <p className="text-gray-500 text-sm">{property.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prop;
