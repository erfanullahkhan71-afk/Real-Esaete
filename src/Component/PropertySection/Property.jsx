import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const properties = [
  { id: 1, title: "Modern Apartment", location: "New York", coords: [40.7128, -74.006], price: "$1,200 / month" },
  { id: 2, title: "Cozy House", location: "Los Angeles", coords: [34.0522, -118.2437], price: "$2,500 / month" },
  { id: 3, title: "Luxury Villa", location: "Miami", coords: [25.7617, -80.1918], price: "$5,000 / month" },
];

function Property() {
  const [openMap, setOpenMap] = useState(false);

  return (
    <section className="w-full py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* MAP PREVIEW */}
        <div
          onClick={() => setOpenMap(true)}
          className="relative cursor-pointer rounded-3xl overflow-hidden shadow-xl"
        >
          <MapContainer
            center={[40.7128, -74.006]}
            zoom={3}
            scrollWheelZoom={false}
            className="w-full h-[420px]"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {properties.map((p) => (
              <Marker key={p.id} position={p.coords}>
                <Popup>
                  <strong>{p.title}</strong>
                  <div>{p.location}</div>
                  <div>{p.price}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-white px-6 py-3 rounded-full font-medium">
              Open Map
            </span>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Discover Properties Near You
          </h2>
          <p className="text-gray-600 mb-6">
            Explore nearby homes directly on the interactive map.
          </p>
          <button
            onClick={() => setOpenMap(true)}
            className="bg-green-600 text-white px-8 py-4 rounded-2xl"
          >
            View on Map
          </button>
        </div>
      </div>

      {/* MAP MODAL */}
      {openMap && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setOpenMap(false)}
        >
          <div
            className="bg-white w-full max-w-6xl rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <h3 className="font-semibold">Nearby Properties</h3>
              <button onClick={() => setOpenMap(false)} className="text-xl">✕</button>
            </div>

            <MapContainer center={[40.7128, -74.006]} zoom={3} className="h-[420px]">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {properties.map((p) => (
                <Marker key={p.id} position={p.coords}>
                  <Popup>
                    <strong>{p.title}</strong>
                    <div>{p.location}</div>
                    <div>{p.price}</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      )}
    </section>
  );
}

export default Property;
