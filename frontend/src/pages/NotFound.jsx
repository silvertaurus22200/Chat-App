import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">404</h1>
      <p className="font-semibold mt-2 text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-2 underline text-md">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
