import React, { useState } from "react";

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
    <div className="w-full bg-gray-50 py-20 px-4 md:px-20 space-y-20">

      {/* FAQ SECTION */}
      <section>
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="md:flex gap-16">
          {/* FAQ LIST */}
          <div className="md:w-2/3 space-y-4">
            {faqsData.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <button
                  onClick={() => toggleFaq(i)}
                  className="flex justify-between w-full text-left"
                >
                  <h3 className="font-semibold">{faq.question}</h3>
                  <span>{openFaqIndex === i ? "−" : "+"}</span>
                </button>

                {openFaqIndex === i && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div className="md:w-1/3 mt-10 md:mt-0">
            <img
              src="/download (14).jpeg"
              alt="Property"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>
      {/* TESTIMONIAL */}
      <section class="bg- py-16">
  
        <h3 class="text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
          TESTIMONIALS
        </h3>

        <div class="flex justify-center px-4">
          <div class="bg-green-700 p-10 rounded-3xl shadow-2xl max-w-2xl text-white relative">
            
            {/* Quotation Marks */}
            <span class="absolute top-4 left-4 text-white text-6xl font-serif opacity-75">“</span>
            <span class="absolute bottom-4 right-4 text-white text-6xl font-serif opacity-75">”</span>

            {/* Image and Text Container */}
            <div class="flex flex-col items-center text-center">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6"
                />

                <div>
                    <p class="text-lg mb-6 leading-relaxed">
                        I really like the dresses from the Borcelle Boutique. Nice design, feminine color, soft and comfortable material in addition, at an affordable price I can get a dress with good quality like this. Borcelle is special, thank you.
                    </p>
                    <p class="font-bold text-xl">{testimonial.name}</p>
                    <p class="text-green-300 text-sm">{testimonial.role}</p>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Faq;
