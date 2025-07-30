import React from "react";

const CandidateDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Candidate Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Summary */}
        <div className="bg-white shadow rounded p-4 md:col-span-1">
          <h2 className="text-xl font-semibold mb-2">My Profile</h2>
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Email: john@example.com</p>
          <p className="text-gray-600">Skills: React, Node, MongoDB</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Edit Profile
          </button>
        </div>

        {/* Jobs & Interviews */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold mb-2">Jobs Applied</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Frontend Developer at ABC Corp</li>
              <li>Backend Developer at XYZ Ltd</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold mb-2">Interview Invites</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Interview for Full Stack Developer at TechWorld</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;
