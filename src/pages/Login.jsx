import React from "react";
import Navbar from "../components/layout/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />

      <section className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login to DevHire</h2>

          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account? <a href="#" className="text-blue-600">Register</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
