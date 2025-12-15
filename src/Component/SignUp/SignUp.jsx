import React from "react";

function SignUp() {
  const fields = [
    { label: "Full Name", type: "text", placeholder: "Your Full Name" },
    { label: "Email", type: "email", placeholder: "Your Email" },
    { label: "Password", type: "password", placeholder: "Your Password" },
    { label: "Confirm Password", type: "password", placeholder: "Confirm Password" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          Create an Account
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Sign up to start your journey with EverGreen Real Estate.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {fields.map((field, i) => (
            <div key={i}>
              <label className="block text-gray-700 font-medium mb-1">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm mt-6 text-center">
          Already have an account?{" "}
          <span className="text-green-600 font-semibold cursor-pointer">
            Log In
          </span>
        </p>

      </div>
    </div>
  );
}

export default SignUp;
