import React, { useState } from "react";
// Using icons that fit a luxury aesthetic
import { Gem, Home, Phone, MapPin, ChevronRight, ChevronDown } from 'lucide-react'; 

// FAQ Data
const faqsData = [
  {
    question: "What types of properties do you sell?",
    answer:
      "We specialize in a wide range of properties, including residential homes, luxury apartments, commercial real estate, and undeveloped land. Our portfolio is diverse to meet various client needs.",
  },
  {
    question: "Do I need to hire a real estate agent?",
    answer:
      "While you can search independently, a professional agent provides invaluable expertise in negotiation, legal documentation, and market trends, ensuring you get the best deal possible.",
  },
  {
    question: "Can I tour a property?",
    answer:
      "Yes, absolutely. Once you express interest in a property, we can arrange a private showing at your convenience.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "Simply fill out the contact form on our website or call our main office number. A representative will contact you within 24 hours.",
  },
];

const testimonial = {
  name: "Erfanullah Rahmatzai",
  role: "Front-End Developer",
  image: "/me.jpg",
  feedback:
    "Working with this team was a pleasure. They understood our vision and helped us find a property that exceeded our expectations.",
  reviews: "More than 500+ Client Reviews",
};

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    // Main container with a deep black background
    <div className="w-full bg-black text-white py-24 px-4 md:px-12 lg:px-20 space-y-24">

      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-yellow-500 tracking-wider">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="md:flex gap-12">
          {/* FAQ LIST */}
          <div className="md:w-2/3 space-y-5">
            {faqsData.map((faq, i) => (
              // Sleek dark gray cards with gold border on hover/active
              <div key={i} className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800 hover:border-yellow-600 transition duration-300">
                <button
                  onClick={() => toggleFaq(i)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <span className="text-yellow-500">
                    {openFaqIndex === i ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </span>
                </button>

                {openFaqIndex === i && (
                  <p className="mt-4 text-gray-300 border-t border-gray-700 pt-4 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* IMAGE (Stylized with luxury details) */}
          <div className="md:w-1/3 mt-10 md:mt-0 relative">
            <img
              src="/download (14).jpeg"
              alt="Property"
              className="rounded-xl shadow-2xl w-full h-96 object-cover border border-yellow-700/50"
            />
            {/* Added a subtle gold accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white p-4">
                <p className="text-2xl font-bold text-yellow-500 flex items-center">
                    <Home className="w-6 h-6 mr-3"/>
                    Luxury Living
                </p>
                <p className="text-sm text-gray-300">Discover properties that define excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL (Redesigned for maximum luxury effect) */}
      <section className="py-16 max-w-6xl mx-auto">
  
        <h3 className="text-5xl font-extrabold text-center mb-16 text-white">
          CLIENT <span className="text-yellow-500">EXPERIENCE</span>
        </h3>

        <div className="flex justify-center px-4">
          {/* A prominent, dark testimonial card with strong gold highlights */}
          <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl max-w-3xl text-white relative overflow-hidden">
            
            {/* Quotation mark in gold in the background */}
            <span className="absolute top-4 right-4 text-yellow-900 text-9xl font-serif opacity-30">”</span>

            {/* Content Container */}
            <div className="flex flex-col items-center text-center relative z-10">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    // A bold gold border around the image
                    className="w-32 h-32 rounded-full object-cover border-4 border-yellow-600 shadow-lg mb-6"
                />

                <div>
                    <p className="text-xl mb-6 leading-relaxed italic text-gray-200">
                        "{testimonial.feedback}"
                    </p>
                    <p className="font-bold text-2xl text-yellow-500">{testimonial.name}</p>
                    <p className="text-gray-500 text-md">{testimonial.role}</p>
                    <p className="text-gray-600 text-xs mt-4 flex items-center justify-center">
                        <Gem className="w-4 h-4 mr-2 text-yellow-500"/>
                        {testimonial.reviews}
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
