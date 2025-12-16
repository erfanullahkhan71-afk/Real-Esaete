import React from "react";

const faqs = [
  { question: "What types of properties do you sell?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur alias asperiores labore suscipit, eligendi dignissimos quod ducimus sit rerum et voluptate reprehenderit unde! Ex aut distinctio eligendi adipisci cupiditate veritatis?" },
  { question: "Do I need to hire a real estate agent?", answer: "" },
  { question: "Can I tour a property?", answer: "" },
  { question: "How do I schedule a consultation?", answer: "" },
];

const testimonial = {
  name: "Erfanullah Rahmatzai",
  role: "Front-End Developer",
  image: "/me.jpg",
  feedback: "“Working with this team was a pleasure. They understood our vision and helped us find a property that exceeded our expectations. We couldn’t have done it without them!”",
  reviews: "More than 500+ Client Reviews"
};

export default function Faq() {
  return (
    <div className="w-full bg-white text-gray-900 py-16 px-6 md:px-20 space-y-20">

      {/* FAQ Section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>

        <div className="md:flex md:items-start md:justify-between gap-10">
          {/* FAQ List */}
          <div className="md:w-2/3 space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className={i !== 0 ? "border-t pt-6" : ""}>
                <h3 className="font-medium text-lg">{faq.question}</h3>
                {faq.answer && <p className="text-gray-600 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>

          {/* FAQ Image */}
          <div className="md:w-1/3 mt-10 md:mt-0">
            <img
              src="/img4.jpg"
              alt="Property interior"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold">What our clients say about us</h2>

        <div className="md:flex items-start gap-10">
          <div className="md:w-1/3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-xl shadow-lg w-full object-cover h-80"
            />
          </div>

          <div className="md:w-2/3 bg-gray-50 p-8 rounded-xl shadow-md">
            <p className="text-lg italic text-gray-700">{testimonial.feedback}</p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium">{testimonial.reviews}</span>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
