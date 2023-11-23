import { Link } from "react-router-dom";

import { popularCourses } from "./Data";

const PopularCourses = () => {
  const { title, subtitle, caption, courses } = popularCourses;
  return (
    <section className="section pb-0">
      <div className="container mx-auto">
        <div>
          <p className="text-center text-[#f66962] mb-4">{caption}</p>
          <h2 className="title text-center mb-8">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[50px]">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-3 lg:gap-[20px] max-w-[1200px] w-[800px] mx-auto">
          {courses.map((course, index) => {
            const { lessons, seats, title, cost, image, instructor, profile } =
              course;
            return (
              <div key={index} className="w-full max-w-[300px] h-[400px]">
                <div className="border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[350px] flex flex-col transition p-4">
                  <div className="h-[100px] mb-4 relative">
                    <img className="h-full" src={image} alt="" />

                    <p className="bg-green-500 h-10 w-10 rounded-full flex items-center justify-center absolute bottom-0 right-10">
                      {cost}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 mb-2">
                    <p className="text-sm">{lessons}</p>
                    <p className="text-sm">{seats}</p>
                  </div>

                  <Link
                    to={"/"}
                    className="text-lg font-semibold mb-4 hover:text-blue-600 hover:underline"
                  >
                    {title}
                  </Link>

                  <div className="border m-4"></div>

                  <div className="flex gap-4 items-center">
                    <img
                      className="h-[40px] w-[40px] rounded-full"
                      src={profile}
                      alt=""
                    />
                    <h2 className="text-lg font-semibold">{instructor}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;