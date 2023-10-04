import Contact from "~/components/Contact";
import HeroSection from "~/components/HeroSection";
import Overview from "~/components/Overview";
import ProfessionalSkills from "~/components/ProfessionalSkills";
import Skills from "~/components/Skills";
import Works from "~/components/Works";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Overview />
      <Skills />
      <ProfessionalSkills />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
