import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Important Leaflet configuration to make the default marker icons work correctly
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
    // Updated section background to dark gray/black
    <section className="w-full py-20 px-6 lg:px-20 -z-0 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* MAP PREVIEW (Border stylized for the theme) */}
        <div
          onClick={() => setOpenMap(true)}
          className="cursor-pointer rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-700/30 hover:border-yellow-500 transition duration-300"
        >
          <MapContainer
            center={[40.7128, -74.006]}
            zoom={3}
            scrollWheelZoom={false}
            className="w-full h-[420px] -z-0"
          >
            {/* Keeping the standard tile layer, as map tiles can't be easily restyled with Tailwind */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {properties.map((p) => (
              <Marker key={p.id} position={p.coords}>
                <Popup>
                  {/* Default popups will inherit base white background from Leaflet */}
                  <strong>{p.title}</strong>
                  <div>{p.location}</div>
                  <div className="text-yellow-600">{p.price}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Discover Properties <span className="text-yellow-500">Near You</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Explore nearby homes directly on the interactive map.
          </p>
          <button
            onClick={() => setOpenMap(true)}
            // Styled button with gold background and black text
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
          >
            View on Map
          </button>
        </div>
      </div>

      {/* MAP MODAL */}
      {openMap && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setOpenMap(false)}
        >
          <div
            // Modal content is dark theme
            className="bg-gray-900 w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
              <h3 className="font-semibold text-white">Nearby Properties</h3>
              {/* Gold close button */}
              <button onClick={() => setOpenMap(false)} className="text-xl text-yellow-500 hover:text-yellow-400">
                ✕
              </button>
            </div>

            <MapContainer center={[40.7128, -74.006]} zoom={3} className="h-[420px]">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {properties.map((p) => (
                <Marker key={p.id} position={p.coords}>
                  <Popup>
                    <strong>{p.title}</strong>
                    <div>{p.location}</div>
                    <div className="text-yellow-600">{p.price}</div>
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
