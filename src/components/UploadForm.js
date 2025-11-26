import React, { useState } from "react";

export const UploadForm = ({ onSubmit, loading, error, resumeId }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    current_job_title: "",
    current_job_description: "",
    current_job_company: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = {
      name: `${formData.first_name} ${formData.last_name}`,
      current_job_title: formData.current_job_title,
      current_job_description: formData.current_job_description,
      current_job_company: formData.current_job_company,
    };
    await onSubmit(submitData);
    setFormData({
      first_name: "",
      last_name: "",
      current_job_title: "",
      current_job_description: "",
      current_job_company: "",
    });
  };

  return (
    <div className="bg-white p-6 mb-6 border rounded">
      <h2 className="text-xl font-semibold mb-4">Upload Resume Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
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
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.current_job_title}
            onChange={(e) =>
              setFormData({ ...formData, current_job_title: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Job Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.current_job_description}
            onChange={(e) =>
              setFormData({
                ...formData,
                current_job_description: e.target.value,
              })
            }
            className="w-full p-2 border rounded"
            rows="3"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Company <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.current_job_company}
            onChange={(e) =>
              setFormData({ ...formData, current_job_company: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>
      </form>

      {resumeId && (
        <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded text-green-800">
          <strong>Success!</strong> Resume ID: {resumeId}
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
