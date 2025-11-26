import { useState } from "react";
import { getResumeById, getResumeByName } from "../apis";

export const useResumeRetrieval = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resume, setResume] = useState(null);

  const retrieve = async (searchData) => {
    setLoading(true);
    setError(null);
    setResume(null);

    try {
      let data;
      if (searchData.resumeId) {
        data = await getResumeById(searchData.resumeId);
      } else if (searchData.firstName && searchData.lastName) {
        data = await getResumeByName(searchData.firstName, searchData.lastName);
      }
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
