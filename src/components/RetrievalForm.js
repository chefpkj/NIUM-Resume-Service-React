import React, { useState } from "react";

export const RetrievalForm = ({ onRetrieve, loading, error, resume }) => {
  const [searchByName, setSearchByName] = useState(false);
  const [resumeId, setResumeId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchByName) {
      onRetrieve({ firstName, lastName });
    } else {
      onRetrieve({ resumeId });
    }
  };

  return (
    <div className="bg-white p-6 border rounded">
      <h2 className="text-xl font-semibold mb-4">Retrieve Resume Details</h2>

      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={searchByName}
            onChange={(e) => setSearchByName(e.target.checked)}
          />
          <span className="text-sm">Search by Name</span>
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        {!searchByName ? (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">
              Resume ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={resumeId}
              onChange={(e) => setResumeId(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter Resume ID"
              required
            />
          </div>
        ) : (
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? "Retrieving..." : "Retrieve Resume Details"}
        </button>
      </form>

      {resume && (
        <div className="mt-4">
          {Array.isArray(resume) ? (
            resume.map((r, index) => (
              <div
                key={index}
                className="p-4 bg-blue-50 border border-blue-200 rounded mb-2"
              >
                <h3 className="font-semibold mb-3">Resume {index + 1}</h3>
                <div className="text-sm">
                  <p className="mb-2">
                    <strong>Name:</strong> {r.name}
                  </p>
                  <p className="mb-2">
                    <strong>Job Title:</strong> {r.current_job_title}
                  </p>
                  <p className="mb-2">
                    <strong>Company:</strong> {r.current_job_company}
                  </p>
                  <p className="mb-2">
                    <strong>Job Description:</strong>{" "}
                    {r.current_job_description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h3 className="font-semibold mb-3">Resume Details</h3>
              <div className="text-sm">
                <p className="mb-2">
                  <strong>Name:</strong> {resume.name}
                </p>
                <p className="mb-2">
                  <strong>Job Title:</strong> {resume.current_job_title}
                </p>
                <p className="mb-2">
                  <strong>Company:</strong> {resume.current_job_company}
                </p>
                <p className="mb-2">
                  <strong>Job Description:</strong>{" "}
                  {resume.current_job_description}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded text-red-800">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};
