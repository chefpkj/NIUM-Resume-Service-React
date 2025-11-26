import React, { useState } from "react";

export const RetrievalForm = ({ onRetrieve, loading, error, resume }) => {
  const [resumeId, setResumeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRetrieve(resumeId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Retrieve Resume Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resume ID
          </label>
          <input
            type="text"
            value={resumeId}
            onChange={(e) => setResumeId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Resume ID"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Retrieving..." : "Retrieve Resume Details"}
        </button>
      </form>

      {resume && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="font-semibold text-blue-900 mb-3">Resume Details</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Name:</strong> {resume.name}
            </p>
            <p>
              <strong>Job Title:</strong> {resume.current_job_title}
            </p>
            <p>
              <strong>Company:</strong> {resume.current_job_company}
            </p>
            <p>
              <strong>Job Description:</strong> {resume.current_job_description}
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800">
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}
    </div>
  );
};

