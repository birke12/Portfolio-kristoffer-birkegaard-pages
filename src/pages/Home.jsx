import { Element } from "react-scroll";
import About from "../components/About/About";
import ImageSwitcher from "../components/imageSwitcher/ImageSwitcher";
import PageHeader from "../components/pageheader/PageHeader";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

function Home() {
  return (
    <>
      <Element name="home">
        <PageHeader />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="gallery">
        <ImageSwitcher />
      </Element>
      <Element name="kontakt">
        <div id="kontakt"></div> {/* Optional if footer already has id */}
      </Element>
    </>
  );
}

export default Home;
