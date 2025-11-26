import { useState } from "react";
import { uploadResume } from "../apis";

export const useResumeUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resumeId, setResumeId] = useState(null);

  const upload = async (formData) => {
    setLoading(true);
    setError(null);
    setResumeId(null);

    try {
      const data = await uploadResume(formData);
      setResumeId(data.resumeId);
      return data.resumeId;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setResumeId(null);
  };

  return { upload, loading, error, resumeId, reset };
};
