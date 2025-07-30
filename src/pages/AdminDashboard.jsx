import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Candidates</h2>
          <p className="text-gray-600 mt-2">120 registered candidates</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Jobs Posted</h2>
          <p className="text-gray-600 mt-2">45 active jobs</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Interviews</h2>
          <p className="text-gray-600 mt-2">10 interviews scheduled</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Post a Job
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Candidates
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
