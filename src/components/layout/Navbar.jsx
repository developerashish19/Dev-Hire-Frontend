import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        DevHire
      </Link>

      <ul className="hidden md:flex gap-6 text-gray-700">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/jobs-listings" className="hover:text-blue-600">Jobs</Link></li>
        <li><Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
        <li><Link to="/register" className="hover:text-blue-600">Register</Link></li>
        <li><Link to="/candidates" className="hover:text-blue-600">Candidate Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
