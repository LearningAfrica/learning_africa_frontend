import MaxWidthWrapper from "@/components/max-width-wrapper";
import { whyUsData } from "@/data/why-us.data";
import React from "react";

// const

function WhyUs() {
  return (
    <div className="bg-white">
      <MaxWidthWrapper>
        <div className="w-full py-10 md:py-20 p-4">
          <div>
            <h1 className="text-5xl py-4 font-bold">Why Learning Africa</h1>
          </div>
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8">
            {whyUsData.map((ws) => (
              <div key={ws.title} className="flex flex-col gap-4 p-4 border">
                <div>
                  <ws.Icon size={32} />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl">{ws.title}</h2>
                  <p>{ws.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default WhyUs;
