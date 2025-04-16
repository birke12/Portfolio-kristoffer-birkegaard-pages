import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Sektion 1: Kort Info */}
      <div className={styles.footerSection}>
        <h2 className={styles.sectionHeader}>Kristoffer Birkegaard</h2>
        <p className={styles.sectionText}>
        Tak fordi du tog dig tid til at udforske min portfolio. Som webudvikler og grafiker brænder jeg for at skabe digitale løsninger med både funktion og æstetik i fokus.  
        Har du spørgsmål, idéer eller ønsker du at samarbejde? Så er du mere end velkommen til at tage kontakt – jeg ser frem til at høre fra dig!
        </p>
      </div>

      {/* Sektion 2: Copyright & Juridisk Information */}
      <div className={styles.footerSection}>
        <p className={styles.sectionText}>
         biirkegaard@gmail.com, <br />
         Nørremøllevej 79, 1. <br />Viborg 8800, Danmark
        </p>
      </div>

      {/* Sektion 3: Sociale Medier & Chat */}
      <div className={styles.footerSection}>
        {/* Følg Os Sektion */}
        <h3 className={styles.followUsHeader}>Følg os</h3>

        <div className={styles.socialIcons}>
  <a
    href="https://www.facebook.com/kristoffer.birkegaard"
    target="_blank"
    rel="noopener noreferrer"
    title="Facebook"
    className={styles.iconLink}
  >
    <FaFacebook className={styles.icon} />
  </a>
  <a
    href="https://www.instagram.com/kristoffer_birkegaard/"
    target="_blank"
    rel="noopener noreferrer"
    title="Instagram"
    className={styles.iconLink}
  >
    <FaInstagram className={styles.icon} />
  </a>
  <a
    href="https://www.linkedin.com/in/kristoffer-birkegaard-47b8781b9/"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
    className={styles.iconLink}
  >
    <FaLinkedin className={styles.icon} />
  </a>
</div>

        <div className={styles.chatSection}>
  <p className={styles.sectionText}>Send Email</p>
  <a
    href="biirkegaard@gmail.com"
    className={styles.iconLink}
    title="Send en email"
  >
    <FaEnvelope className={styles.icon} />
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;
