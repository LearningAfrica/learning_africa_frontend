import Hero from "../../components/home/Hero";
import Whyus from "../../components/home/Whyus";
import About from "../../components/home/About";
import WhatsNew from "../../components/home/WhatsNew";
import PopularCourses from "../../components/home/PopularCourses";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Whyus />
      <About />
      <PopularCourses />
      <WhatsNew />
    </main>
  );
}