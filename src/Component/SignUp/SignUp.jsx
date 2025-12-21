import React from "react";

function SignUp() {
  const fields = [
    { label: "Full Name", type: "text", placeholder: "Your Full Name" },
    { label: "Email", type: "email", placeholder: "Your Email" },
    { label: "Password", type: "password", placeholder: "Your Password" },
    { label: "Confirm Password", type: "password", placeholder: "Confirm Password" },
  ];

  return (
    // Changed background to dark gray
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center px-6 lg:px-20 py-20">
      {/* Form container styled for the dark theme */}
      <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-md p-8 border border-gray-700">

        {/* Heading (Gold accent) */}
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Create an Account
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Sign up to start your journey with Luxury Estates.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {fields.map((field, i) => (
            <div key={i}>
              <label className="block text-gray-300 font-medium mb-1">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                // Styled input fields for dark mode
                className="w-full border border-gray-600 bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none placeholder-gray-500"
              />
            </div>
          ))}

          <button
            type="submit"
            // Gold button styling
            className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm mt-6 text-center">
          Already have an account?{" "}
          {/* Gold link */}
          <span className="text-yellow-500 font-semibold cursor-pointer hover:text-yellow-400 transition">
            Log In
          </span>
        </p>

      </div>
    </div>
  );
}

export default SignUp;
