import HeroSection from "~/components/HeroSection";
import Overview from "~/components/Overview";
import ProfessionalSkills from "~/components/ProfessionalSkills";
import Skills from "~/components/Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Overview />
      <Skills />
      <ProfessionalSkills />
      {/* <div class="h-[200vh]"></div> */}
    </>
  );
};

export default Home;
