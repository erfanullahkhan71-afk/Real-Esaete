import React from "react";
// You will likely want to import your Foter component here if this page is used in your main layout
// import Foter from "../Footer/Foter"; 


function Contact() {
  return (
    // Changed background to dark gray
    <div className="w-full min-h-screen bg-gray-900 py-20 px-6 lg:px-20 text-white">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
          <form className="flex flex-col gap-6">
            {[
              { label: "Name", type: "text", placeholder: "Your Name" },
              { label: "Email", type: "email", placeholder: "Your Email" }
            ].map((field, i) => (
              <div key={i}>
                <label className="text-gray-300 font-medium mb-1 block">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  // Styled input fields for the dark theme
                  className="w-full border border-gray-600 bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none placeholder-gray-500"
                />
              </div>
            ))}

            <div>
              <label className="text-gray-300 font-medium mb-1 block">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-600 bg-gray-700 text-white rounded-lg p-3 h-32 focus:ring-2 focus:ring-yellow-500 focus:outline-none placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              // Gold button styling
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between gap-8">
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-yellow-500">Get in Touch</h3>
            <p className="text-gray-400">
              Have questions? Our team is here to help you find your dream home.
            </p>
            <div className="flex flex-col gap-4 text-gray-300">
              <p>
                <span className="font-semibold text-white">Phone: </span>
                (+93) 748948465
              </p>
              <p>
                <span className="font-semibold text-white">Email: </span>
                erfanullahrahmatzi@gmail.com
              </p>
              <p>
                <span className="font-semibold text-white">Address: </span>
                Kabul, Afghanistan
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* If you add the footer component back, uncomment this line: */}
      {/* <Foter /> */}
    </div>
  );
}

export default Contact;
