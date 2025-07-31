import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLoggedInUser, logoutUser } from "../../utils/auth";
import { Menu, X } from "lucide-react"; // optional icons

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const user = getLoggedInUser();
    setUser(user);
  }, []);

  const NavLinks = () => (
    <>
      <Link to="/" className="hover:text-blue-600">Home</Link>
      <Link to="/jobs-listings" className="hover:text-blue-600">Jobs</Link>
      <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      <Link to="/candidates" className="hover:text-blue-600">Candidate</Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">DevHire</Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <NavLinks />
          {user ? (
            <button
              onClick={handleLogout}
              className="text-red-500 ml-4 hover:underline"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-600">Login</Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow">
          <NavLinks />
          {user ? (
            <button
              onClick={handleLogout}
              className="block text-red-500"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
              <Link
                to="/register"
                className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
