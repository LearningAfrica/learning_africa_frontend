import MaxWidthWrapper from "@/components/max-width-wrapper";
import { LucideGraduationCap, LucideLibrary } from "lucide-react";
import React from "react";

const stats = [
  {
    title: "Courses",
    Icon: LucideLibrary,
    count: "20K+",
  },
  {
    title: "Certifications",
    Icon: LucideGraduationCap,
    count: "20K+",
  },
  {
    title: "Instructors",
    Icon: LucideGraduationCap,
    count: "4.2K+",
  },
];

function HomeStats() {
  return (
    <div className="bg-white py-10">
      <MaxWidthWrapper>
        <div className="w-full p-4 flex flex-col gap-8">
          <div>
            <h1 className="text-4xl text-center">We are trusted globally</h1>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
            {stats.map((st) => (
              <div key={st.title} className="border p-4">
                <div className="flex justify-center">
                  <st.Icon size={48} className="" />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h2 className="text-5xl">{st.count}</h2>
                  <p className="text-lg">{st.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default HomeStats;
