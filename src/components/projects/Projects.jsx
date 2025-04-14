import { Link } from "react-router-dom";
import styles from "./projects.module.css";

// Import images for each project
import projectImage1 from "/assets/images/excalibur.png";
import projectImage2 from "/assets/images/myth.png";
import projectImage3 from "/assets/images/futureWeb.png";

const Projects = () => {
  const projectData = [
    {
      title: "Fremtidens Web",
      description: "Et projekt der fokusere på Webudvikling i fremtiden. ",
      image: projectImage3,
      link: "https://birke12.github.io/Future-Web-done-pages/",
      external: true,
    },
  /*   {
      title: "Excalibur",
      description:
        "Vi skulle lave en hjemmeside for den fiktive rollespilsblub Excalibur, og forsiden skulle være et spil.",
      image: projectImage1,
      link: "/projects/1",
      external: false,
    }, */
    {
      title: "Ancient Journeys",
      description:
        "Vi skulle lave en rejseblog, og jeg valgte at fokusere på historiske og mytologiske steder.",
      image: projectImage2,
      link: "/projects/2",
      external: false,
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.projectsTitle}>Projekter</h2>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) =>
          project.external ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ) : (
            <Link
              key={index}
              to={project.link}
              className={styles.projectCard}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
