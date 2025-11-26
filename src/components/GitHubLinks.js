import React from "react";

export const GitHubLinks = () => {
  return (
    <div className="text-right mb-6">
      <a
        href="https://github.com/chefpkj/NIUM-Resume-Service-React"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Frontend
      </a>
      {" | "}
      <a
        href="https://github.com/chefpkj/NIUM-Resume-Service"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Backend
      </a>
    </div>
  );
};
