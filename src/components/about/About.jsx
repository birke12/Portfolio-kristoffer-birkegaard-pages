import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Om Mig</h2>
      </div>
      <div className={styles.description}>
        <div className={styles.line}></div>
        <p className={styles.aboutText}>
          Jeg er en passioneret og kreativ webudvikler studerende med en
          baggrund som Grafiker, hvilket har givet mig en stærk visuel
          forståelse i mit arbejde.
          <br />
          Mit mål med praktikopholdet er at opnå værdifuld erhvervserfaring og
          videreudvikle mine færdigheder inden for webudvikling, så jeg kan
          skabe løsninger, der både ser godt ud og leverer en optimal
          brugeroplevelse.
        </p>
      </div>
    </div>
  );
};

export default About;
