import React from "react";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go Home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
