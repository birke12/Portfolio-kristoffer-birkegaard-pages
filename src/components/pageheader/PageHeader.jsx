import React from "react";
import styles from "./PageHeader.module.css";
import profileImage from "./profile.png"; // adjust path as needed

const PageHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.intro}>
        <h1>Hej, mit navn er Kristoffer</h1>
        <p>
          Jeg er webudvikler og Grafiker med en passion for design,
          interaktivitet og at skabe unikke digitale oplevelser.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={profileImage}
          alt="Kristoffer"
          className={styles.profileImage}
        />
      </div>
    </header>
  );
};

export default PageHeader;
