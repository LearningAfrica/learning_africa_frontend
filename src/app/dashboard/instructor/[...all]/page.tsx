import Link from "next/link";
import React from "react";

export default function NotFoundInstructorPage() {
  return (
    <div className="p-10 flex justify-center items-center flex-col gap-4 min-h-[60vh] bg-white m-2">
      <div className="text-center">
        <h1 className="text-4xl">404</h1>
        <p className="text-lg">
          The page you are looking for does not exist. Please check the URL and
          try again.
        </p>
        <p>
          <Link
            href="/dashboard/instructor"
            className="text-blue-600 hover:underline text-lg transition-all ease-linear duration-75"
          >
            <span className="">Go to my courses</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
