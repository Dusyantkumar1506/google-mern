import React from "react";

import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col space-y-4">
      <h1 className="text-red-500 text-5xl font-semibold">
        404 Page Not Found!
      </h1>

      <button
        className="bg-yellow-500 py-2 px-4 text-white rounded-xl"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default PageNotFound;
