import React from "react";
import Foter from "../Footer/Foter"; // Assuming Foter is in the correct path

function About() {
  return (
    // Changed main background to black/dark gray
    <div className="w-full min-h-screen bg-gray-900 text-white">

      {/* Hero Section */}
      <section className="bg-gray-950 text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-yellow-500">Luxury Estates</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400">
          We help people find their dream homes with ease and confidence. Our team is dedicated to providing the best real estate experience.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To connect families and individuals with homes that truly match their lifestyle and needs. We prioritize honesty, transparency, and top-notch service.
            </p>

            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the leading real estate agency known for excellence, innovation, and customer satisfaction.
            </p>
          </div>

          {/* Image (Bordered in a subtle gold tone) */}
          <div>
            <img
              src="/img6.jpg"
              alt="Real Estate"
              className="rounded-xl shadow-lg border-2 border-yellow-700/30"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-950 py-20 px-8 md:px-20">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">Meet Our Team</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Team Card Component (Styled for dark mode) */}
          {[
            {
              name: "John Doe",
              role: "CEO & Founder",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              desc: "Passionate about finding the perfect home for every client."
            },
            {
              name: "Jane Smith",
              role: "Lead Agent",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              desc: "Expert in luxury properties and client satisfaction."
            },
            {
              name: "Mike Johnson",
              role: "Marketing Head",
              img: "https://randomuser.me/api/portraits/men/76.jpg",
              desc: "Bringing our brand to life and connecting with clients online."
            }
          ].map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 text-center border border-gray-700">
              <img
                src={member.img}
                alt={member.name}
                // Image border changed to match theme
                className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-yellow-700/50"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-yellow-500 font-medium mb-2">{member.role}</p>
              <p className="text-gray-400">{member.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 text-center bg-black text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for Your Dream Home?</h2>
        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-400">
          Contact us today and let our team guide you to the perfect property!
        </p>
        {/* You may want to add a button here styled like your other gold buttons */}
      </section>
      
      {/* Footer is already styled in Black & Gold from previous prompt */}
      <Foter/>
    </div>
  );
}

export default About;
