import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { whatsNew } from "./Data";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const WhatsNew = () => {
  const { caption, image, title, subtitle, newItems } = whatsNew;

  return (
    <section className="section bg-grey-2">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 order-1 flex justify-center mt-8 lg:mt-0">
            <div className="mx-auto h-[450] w-[600]">
              <img
                className="h-full rounded-lg shadow-lg"
                src={image}
                alt="hero-image"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <p className="mb-4 text-[#f66962]">{caption}</p>
            <h2 className="title">{title}</h2>
            <p className="text-[#71717a]">{subtitle}</p>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4">
              {newItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 border">
                  <div className="inline-block mb-2 px-[10px] py-[10px] text-xl bg-[#cad8d8] rounded-full">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <h4 className="mb-4 text-lg text-[#18181b]">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
