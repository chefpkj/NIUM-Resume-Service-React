import { useState } from "react";
import { getResumeById } from "../apis";

export const useResumeRetrieval = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resume, setResume] = useState(null);

  const retrieve = async (resumeId) => {
    setLoading(true);
    setError(null);
    setResume(null);

    try {
      const data = await getResumeById(resumeId);
      setResume(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setResume(null);
  };

  return { retrieve, loading, error, resume, reset };
};
