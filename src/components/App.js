import React from "react";
import { UploadForm } from "./UploadForm";
import { RetrievalForm } from "./RetrievalForm";
import { GitHubLinks } from "./GitHubLinks";
import { useResumeUpload } from "../hooks/useResumeUpload";
import { useResumeRetrieval } from "../hooks/useResumeRetrieval";

export const App = () => {
  const {
    upload,
    loading: uploadLoading,
    error: uploadError,
    resumeId,
  } = useResumeUpload();

  const {
    retrieve,
    loading: retrieveLoading,
    error: retrieveError,
    resume,
  } = useResumeRetrieval();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Resume Management System
        </h1>

        <GitHubLinks />

        <UploadForm
          onSubmit={upload}
          loading={uploadLoading}
          error={uploadError}
          resumeId={resumeId}
        />

        <RetrievalForm
          onRetrieve={retrieve}
          loading={retrieveLoading}
          error={retrieveError}
          resume={resume}
        />
      </div>
    </div>
  );
};
