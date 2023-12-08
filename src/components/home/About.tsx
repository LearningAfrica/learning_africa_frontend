import { FaAsterisk } from "react-icons/fa";

import { about } from "./Data";

const About = () => {
  const { title, subtitle, buttonText } = about;
  return (
    <section className="section bg-grey-2">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 order-1 lg:-order-1 flex justify-center mt-8 lg:mt-0">
            <div className="mx-auto h-[450] w-[600]">
              <img
                className="h-full rounded-lg shadow-lg"
                src="/images/about-img.png"
                alt="hero-image"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-end">
            <h2 className="title mb-4">{title}</h2>
            <p className="text-[#71717a] text-base mb-8">{subtitle}</p>

            <h5 className="text-2xl font-semibold mb-4">We Exist For:</h5>

            <div className="mb-8">
              <div className="flex items-center gap-2 text-orange-500">
                <FaAsterisk />
                <p className="text-base text-black font-medium">
                  Instututions and Organizations
                </p>
              </div>
              <div className="flex items-center gap-2 text-orange-500">
                <FaAsterisk />
                <p className="text-base text-black font-medium">
                  Individuals as SMEs
                </p>
              </div>
            </div>

            <div>
              <button className="bg-orange hover:bg-green-600 px-[35px] py-[9px] text-xl rounded-md backdrop-blur-md transition">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
