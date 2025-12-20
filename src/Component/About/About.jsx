import React from "react";
import Foter from "../Footer/Foter";



function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About EverGreen Real Estate</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We help people find their dream homes with ease and confidence. Our team is dedicated to providing the best real estate experience.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To connect families and individuals with homes that truly match their lifestyle and needs. We prioritize honesty, transparency, and top-notch service.
            </p>

            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading real estate agency known for excellence, innovation, and customer satisfaction.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/img6.jpg"
              alt="Real Estate"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-20 px-8 md:px-20">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">Meet Our Team</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Team Card Component */}
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
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-green-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 text-center bg-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for Your Dream Home?</h2>
        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
          Contact us today and let our team guide you to the perfect property!
        </p>
      </section>
  <Foter/>
    </div>
  );
}

export default About;
