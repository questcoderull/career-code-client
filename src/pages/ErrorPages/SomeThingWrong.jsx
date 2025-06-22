import React from "react";
import { Link } from "react-router";

const SomeThingWrong = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-700 mb-6">
          We’re sorry, but something unexpected happened. Please try again later
          or go back to the homepage.
        </p>
        <Link to="/" className="btn btn-primary mr-3">
          Go to HomePage
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary hover:btn-active text-white font-semibold px-6 py-2 rounded transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default SomeThingWrong;
