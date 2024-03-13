import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";
import { homeStats } from "../_data/home-stats.data";

function HomeStats() {
  return (
    <div className="bg-white py-10">
      <MaxWidthWrapper>
        <div className="w-full p-4 flex flex-col gap-8">
          <div>
            <h1 className="text-4xl text-center">We are trusted globally</h1>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
            {homeStats.map((st) => (
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
