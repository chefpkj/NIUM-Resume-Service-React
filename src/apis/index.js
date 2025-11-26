import config from "../config";

export const uploadResume = async (resumeData) => {
  const response = await fetch(
    `${config.API_BASE_URL}/api/uploadResumeDetails`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resumeData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Upload failed");
  }

  return data.data;
};

export const getResumeById = async (resumeId) => {
  const response = await fetch(
    `${config.API_BASE_URL}/api/getResumeById/${resumeId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to retrieve resume");
  }

  return data.data;
};
