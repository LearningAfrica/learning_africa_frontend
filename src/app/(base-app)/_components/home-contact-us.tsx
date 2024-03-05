import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  LucidePhone,
  LucidePlane,
  LucideSend,
  LucideSendHorizonal,
} from "lucide-react";
import React from "react";

export default function HomeContactUs() {
  return (
    <div className="py-12 bg-neutral-100">
      <MaxWidthWrapper>
        <div className="px-4 flex flex-col gap-4 md:gap-8">
          <div>
            <h1 className="text-4xl">Sign up for Newsletter</h1>
          </div>
          <form
            action=""
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 border p-4"
          >
            <div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded focus:ring-0 focus:outline-none"
                  placeholder="Email"
                />
              </div>{" "}
              <div>
                <label htmlFor="">Message</label>
                <textarea
                  className="w-full border rounded resize-none h-24 p-2 focus:ring-0 focus:outline-none"
                  placeholder="Message....."
                />
              </div>
              <button className="flex items-center py-2 px-8 font-bold text-white bg-black border rounded">
                <span className="text-lg">Send</span>
                <LucideSendHorizonal size={24} />
              </button>
            </div>
            {/* <div className="py-4 flex flex-col gap-4 bg-black p-2 text-white rounded">
              {[1, 2, 3, 4].map((d) => (
                <div key={d}
                className="p-2"
                >
                  <div className="flex gap-2 text-xl">
                    <LucidePhone />
                    <div>+(254) 000 000 000</div>
                  </div>
                </div>
              ))}
            </div> */}
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
