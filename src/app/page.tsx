import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Appreciation from "@/components/Appreciation";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MyBestProjects from "@/components/MyBestProjects";
import PersonalSkills from "@/components/PersonalSkills";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="bg-red-500  p-1 min-h-dvh">
      <Hero />
      <About />
      <PersonalSkills />
      <RecentProjects />
      <MyBestProjects />
      <Achievements />
      <Testimonials />
      <Contact />
      <Appreciation />
    </div>
  );
};

export default Home;
