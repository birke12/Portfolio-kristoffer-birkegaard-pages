import About from "../components/About/About";
import ImageSwitcher from "../components/imageSwitcher/ImageSwitcher";
import PageHeader from "../components/pageheader/PageHeader";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
/* import About from "../components/about/About"; */




function Home() {
  return (
    <>
  <PageHeader />
 <About />
 <Skills />
 <Projects />
 <ImageSwitcher />
    </>
  );
}

export default Home;
