"use client"
import React from "react";
import HomeBannerSection from "./_components/home-banner";
import WhyUs from "./_components/why-us";
import HomeCourses from "./_components/home-courses";
import HomeStats from "./_components/home-stats";
import HomeContactUs from "./_components/home-contact-us";
import BaseHeader from "./_components/base-header";
import BaseLayout from "./_components/base-layout";

function HomePage() {
  return (
    <div>
      <BaseLayout>
        <HomeBannerSection />
        <WhyUs />
        <HomeCourses />
        <HomeStats />
        <HomeContactUs />
      </BaseLayout>
    </div>
  );
}

export default HomePage;
