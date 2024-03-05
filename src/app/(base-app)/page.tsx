import React from "react";
import HomeBannerSection from "./_components/home-banner";
import WhyUs from "./_components/why-us";
import HomeCourses from "./_components/home-courses";
import HomeStats from "./_components/home-stats";

function HomePage() {
  return (
    <div>
      <HomeBannerSection />
      <WhyUs />
      <HomeCourses/>
      <HomeStats/>
    </div>
  );
}

export default HomePage;
