import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: use emojis or other icons if not installed

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 container mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DevHire
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/jobs-listings" className="hover:text-blue-600">Jobs</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
          <li><Link to="/register" className="hover:text-blue-600">Register</Link></li>
          <li><Link to="/candidates" className="hover:text-blue-600">Candidate Dashboard</Link></li>
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/jobs-listings" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Jobs</Link>
          <Link to="/dashboard" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/login" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Login</Link>
          <Link to="/register" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Register</Link>
          <Link to="/candidates" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Candidate Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
