import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";
import React from "react";

function HomeBannerSection() {
  return (
    <div
      style={{ backgroundImage: `url('/bg-header.png')` }}
      className=" bg-orange-300 bg-opacity-35 bg-cover bg-center bg-fixed"
    >
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[40vh] md:min-h-[60vh] p-4 md:p-8">
          <div className="flex flex-col gap-4 py-10 justify-center">
            <h1 className="text-4xl font-bold">Learning Africa</h1>
            <p className="text-2xl">
              Spread Your Skills Around the world Confidence in Skills with
              experienced mentors and updated curriculum, E-learning is ready to
              advance your career
            </p>
            <div className="flex gap-4">
              <Link
                href={"/login"}
                className="border px-4 py-2 bg-orange-600 text-lg rounded-md text-white font-medium"
              >
                Get Started
              </Link>
              <Link
                href={"/login"}
                className="border px-4 py-2 border-orange-600 text-lg rounded-md bg-white text-orange-600 font-medium"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default HomeBannerSection;
