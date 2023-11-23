import { whyus } from "./Data";

const Whyus = () => {
  const { title, subtitle, reasons } = whyus;
  return (
    <section className="section pb-0 mt-20 lg:mt-0">
      <div className="container mx-auto">
        <div>
          <h2 className="title text-center mb-8">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[50px]">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-4 lg:gap-[30px]">
          {reasons.map((reason, index) => (
            <div key={index} className="w-full max-x-[290px] h-[350px]">
              <div className="border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex flex-col transition p-4">
                <div className="h-[100px] mb-4">
                  <img className="h-full" src="/avatars/avatar.jpg" alt="" />
                </div>
                <h2 className="text-xl font-semibold mb-4">{reason.title}</h2>
                <p className="text-base">{reason.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyus;