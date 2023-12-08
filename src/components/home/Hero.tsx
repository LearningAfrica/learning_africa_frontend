import { FaCheck } from "react-icons/fa";

import { hero } from "./Data";

const Hero = () => {
  const { title, subtitle, buttonText, buttonText1 } = hero;

  return (
    <section className="h-screen w-full relative bg-grey-2">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 mt-8 lg:mt-0 flex justify-center relative">
            <div className="bg-grey w-full mt-16 mb-8 h-[350px] lg:h-[600px] rounded-t-full">
              <img src="/images/hero-img.png" alt="learning-Africa-logo" />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-12 lg:mt-0">
            <div className="flex gap-1">
              <div className="inline-block px-1 py-1 text-[#ff581f]">
                <FaCheck />
              </div>
              <p className="text-base font-medium mb-4">{title}</p>
            </div>
            <h1 className="title mb-8">{subtitle}</h1>

            <div className="flex items-center gap-20 text-base font-medium mb-8">
              <div className="flex gap-2 items-center">
                <div className="inline-block px-1 py-1 rounded-full bg-orange text-white">
                  <FaCheck />
                </div>
                <h4>Unlimited Courses</h4>
              </div>
              <div className="flex gap-2 items-center">
                <div className="inline-block px-1 py-1 rounded-full bg-orange text-white">
                  <FaCheck />
                </div>
                <h4>24/7 Support</h4>
              </div>
            </div>

            <div className="flex gap-8">
              <button className="bg-orange hover:bg-green-600 px-[35px] py-[9px] mb-12 text-xl rounded-md backdrop-blur-md transition lg:px-[30px] lg:py-[8px] lg:mb-20 capitalize">
                {buttonText}
              </button>

              <button className="hover:bg-green-600 bg-blue-600 px-[35px] py-[9px] mb-12 text-xl rounded-md backdrop-blur-md transition lg:px-[30px] lg:py-[8px] lg:mb-20 capitalize">
                {buttonText1}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
