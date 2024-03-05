import MaxWidthWrapper from "@/components/max-width-wrapper";
import { homeCoursedData } from "@/data/home-courses.data";
import Image from "next/image";
import React from "react";

function HomeCourses() {
  return (
    <div className="bg-neutral-100">
      <MaxWidthWrapper>
        <div className="py-10 px-4">
          <div className="py-8 flex justify-center">
            <h1 className="text-4xl font-bold uppercase font-bold">
              Our Courses
            </h1>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4">
            {homeCoursedData.map((cs) => (
              <div key={cs.title} className="shadow-md border">
                <div className="relative w-full h-72 overflow-hidden rounded ">
                  <Image
                    src={cs.thumbnail}
                    alt=""
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2>{cs.title}</h2>
                  {cs.tags.length > 0 ? (
                    <div className="flex gap-2">
                      {cs.tags.map((tg) => (
                        <span
                          key={tg}
                          className="bg-neutral-300 text-sm px-2 rounded-full"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default HomeCourses;
