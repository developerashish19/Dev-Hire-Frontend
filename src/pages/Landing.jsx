import React from "react";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div>
      

      {/* 🧩 Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
          
          {/* Left side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Hire the Best Tech Talent with{" "}
              <span className="text-blue-600">DevHire</span>
            </h1>
            <p className="mt-6 text-gray-600">
              DevHire helps you find, assess, and hire top developers faster
              with AI-powered matching and integrated coding tests.
            </p>

            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Get Started
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://via.placeholder.com/500x400.png?text=DevHire+Hero+Image"
              alt="DevHire Hero"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* 🧩 Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose DevHire?
          </h2>
          <p className="mt-4 text-gray-600">
            We make hiring developers smarter, faster, and more efficient.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold">AI-Powered Matching</h3>
              <p className="mt-2 text-gray-600">
                Our AI suggests the best candidates based on skills and fit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold">Coding Tests</h3>
              <p className="mt-2 text-gray-600">
                Assess developers with integrated, customizable coding tests.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold">Interview Scheduling</h3>
              <p className="mt-2 text-gray-600">
                Schedule interviews seamlessly with calendar integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🧩 Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to find your next developer?
          </h2>
          <p className="mt-4 text-blue-100">
            Join DevHire and start hiring smarter today.
          </p>

          <button >
           <Link
  to="/register"
  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
>
  Get Started
</Link>

          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
