import React from "react";

const JobListings = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      type: "Full-Time",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "InnoSoft",
      location: "Bangalore, India",
      type: "Part-Time",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "CodeWorks",
      location: "San Francisco, CA",
      type: "Contract",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Job Listings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold text-blue-700">
              {job.title}
            </h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-gray-500">{job.type}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
