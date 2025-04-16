import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css"; // Importing the CSS Module
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Importing Font Awesome icons
import psIcon from "/assets/icons/psIcon.png";
import reactIcon from "/assets/icons/reactIcon.png"; // React Icon
import bootstrapIcon from "/assets/icons/bootstrapIcon.png"; // Bootstrap Icon
import sassIcon from "/assets/icons/sassIcon.png"; // Sass Icon
import figmaIcon from "/assets/icons/figmaIcon.png"; // Figma Icon
import indesignIcon from "/assets/icons/indesignIcon.png"; // InDesign Icon
import illustratorIcon from "/assets/icons/illustratorIcon.png"; // Illustrator Icon
import afterEffectsIcon from "/assets/icons/afterEffectsIcon.png"; // After Effects Icon
import wordpressIcon from "/assets/icons/wordpressIcon.png"; // Import WordPress icon
import woocommerceIcon from "/assets/icons/woo.png"; // for example
import premiereProIcon from "/assets/icons/premierepro.png"; // adjust path/filename as needed


/* import premiereProIcon from "./assets/icons/premiere-pro-icon.png";
import characterAnimatorIcon from "./assets/icons/character-animator-icon.png";
import blenderIcon from "./assets/icons/blender-icon.png"; */


const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={50} color="#E34F26" />, // HTML icon from Font Awesome
    description:
      "Jeg har et solidt kendskab til HTML og har bygget flere websites med det.",
    level: "Avanceret",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={50} color="#1572B6" />, // CSS icon from Font Awesome
    description:
      "Erfaren i at style websites med CSS, herunder animationer og responsiv design.",
    level: "Avanceret",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={50} color="#F7DF1E" />, // JavaScript icon from Font Awesome
    description:
      "Jeg er dygtig i JavaScript og har bygget dynamiske webapplikationer med det.",
    level: "Avanceret",
  },

  {
    name: "React",
    icon: (
      <img
        src={reactIcon}
        alt="React"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Erfaring med at bygge dynamiske brugergrænseflader med React, inkl. hooks, context API og state management.",
    level: "Avanceret",
  },
  {
    name: "WordPress",
    icon: (
      <img
        src={wordpressIcon}
        alt="WordPress"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Erfaring med at bruge WordPress til at skabe og administrere websites med brugerdefinerede temaer og plugins.",
    level: "Avanceret",
  },
  {
    name: "WooCommerce",
    icon: (
      <img
        src={woocommerceIcon}
        alt="WooCommerce"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Har arbejdet med WooCommerce til opsætning af webshops, produkthåndtering, betalingsgateways og tilpasning af design og funktionalitet.",
    level: "Avanceret",
  },
  

  {
    name: "Bootstrap",
    icon: (
      <img
        src={bootstrapIcon}
        alt="Bootstrap"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Erfaren i at bruge Bootstrap til hurtigt at oprette responsive og moderne weblayouts.",
    level: "Mellem",
  },
  {
    name: "Sass",
    icon: (
      <img
        src={sassIcon}
        alt="Sass"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Erfaring med at bruge Sass til avanceret CSS-styling med variabler, nesting og mixins.",
    level: "Mellem",
  },
  {
    name: "Figma",
    icon: (
      <img
        src={figmaIcon}
        alt="Figma"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description: "Proficient i at bruge Figma til UI/UX design og prototyping.",
    level: "Højt niveau, flere års erfaring",
  },
  {
    name: "Photoshop",
    icon: (
      <img
        src={psIcon}
        alt="Photoshop"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Professionelt niveau i Adobe Photoshop med mange års erfaring indenfor grafisk design, billedredigering og digital kunst.",
    level: "Professionelt niveau, mange års erfaring",
  },

  {
    name: "InDesign",
    icon: (
      <img
        src={indesignIcon}
        alt="InDesign"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Erfaring med at bruge Adobe InDesign til at skabe professionelle trykte og digitale layouts.",
    level: "Højt niveau, flere års erfaring",
  },
  {
    name: "Illustrator",
    icon: (
      <img
        src={illustratorIcon}
        alt="Illustrator"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Proficient i Adobe Illustrator til at skabe vektorgrafik, illustrationer og logoer.",
    level: "Højt niveau, flere års erfaring",
  },
  {
    name: "After Effects",
    icon: (
      <img
        src={afterEffectsIcon}
        alt="After Effects"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Erfaren i motion graphics og videokomposition med Adobe After Effects.",
    level: "Moderat erfaring",
  },
  {
    name: "Premiere Pro",
    icon: (
      <img
        src={premiereProIcon}
        alt="Premiere Pro"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Erfaren i videoredigering, og klipning med Adobe Premiere Pro.",
    level: "Moderat erfaring",
  },
  

/*   {
    name: "Character Animator",
    icon: (
      <img
        src={characterAnimatorIcon}
        alt="Character Animator"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Lidt erfaring med animation og karakterdesign med Adobe Character Animator.",
    level: "Lidt erfaring",
  },
  {
    name: "Blender",
    icon: (
      <img
        src={blenderIcon}
        alt="Blender"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    description:
      "Lidt erfaring med 3D-modellering og animation med Blender.",
    level: "Lidt erfaring",
  },  */
];


 


const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  // Close modal if clicked outside of modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains(styles.modal)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>Mine Færdigheder</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={styles.skillItem}
            onClick={() => openModal(skill)}
          >
            <div className={styles.skillIcon}>
              <div className={styles.skillImage}>{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedSkill.name}</h3>
            <div className={styles.modalImage}>{selectedSkill.icon}</div>
            <p>{selectedSkill.description}</p>
             <p className={styles.skillText}>
              Færdighedsniveau: {selectedSkill.level}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
