import React from "react";

function Contact() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-20 px-6 lg:px-20">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-green-700 text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="flex flex-col gap-6">
            {[
              { label: "Name", type: "text", placeholder: "Your Name" },
              { label: "Email", type: "email", placeholder: "Your Email" }
            ].map((field, i) => (
              <div key={i}>
                <label className="text-gray-700 font-medium mb-1 block">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>
            ))}

            <div>
              <label className="text-gray-700 font-medium mb-1 block">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-green-700">Get in Touch</h3>
            <p className="text-gray-600">
              Have questions? Our team is here to help you find your dream home.
            </p>
            <div className="flex flex-col gap-4">
              <p>
                <span className="font-semibold text-gray-700">Phone: </span>
                (+93) 748948465
              </p>
              <p>
                <span className="font-semibold text-gray-700">Email: </span>
                erfanullahrahmatzi@gmail.com
              </p>
              <p>
                <span className="font-semibold text-gray-700">Address: </span>
                Kabul, Afghanistan
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
