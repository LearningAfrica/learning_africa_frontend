import Link from "next/link";
import React from "react";

function PageNotFound() {
  return (
    <div
    className="flex flex-col items-center justify-center h-screen gap-4 text-center"
    >
      <h1
        className="text-4xl font-bold"  
      >Page Not Found</h1>
      <p
      className="text-sm sm:text-lg"
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <p
      className="text-sm sm:text-lg"
      >
        Please make sure you spelled the URL correctly or return to the{" "}
        <Link href="/"
        className="text-primary-pk underline hover:text-primary text-lg uppercase font-medium"
        >homepage</Link>.
      </p>
    </div>
  );
}

export default PageNotFound;
