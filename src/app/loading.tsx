import React from "react";

function LoadingBasePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-center">
      {/* Section 1 */}
      {[1, 2, 3, 4, 5].map((rindex) => (
        <div key={rindex} className="flex flex-col items-center gap-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default LoadingBasePage;
