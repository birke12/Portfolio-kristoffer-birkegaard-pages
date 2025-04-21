import React, { useState } from 'react';
import styles from './ImageSwitcher.module.css';
import beforeImg from './dragonBefore.jpg';
import afterImg from './dragonAfter.jpg';

const ImageSwitcher = () => {
  const [showAfter, setShowAfter] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const currentImage = showAfter ? afterImg : beforeImg;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Demonstration af photoshop færdigheder</h2>
        <div className={styles.demoContainer}>
<h3 className={styles.subTitle}>"Den Gyldne Drage"</h3>

        <p className={styles.demoText}>Dette billede er resultatet af en opgave, jeg lavede under min tid på mediegrafikeruddannelsen, hvor vi fik til opgave at designe vores egen wallpaper-baggrund til computeren. Som fan af Game of Thrones valgte jeg at tage udgangspunkt i en scene med en drage fra serien.
<br />
<br />
Jeg arbejdede intensivt med billedredigering i Photoshop for at transformere dragen til en gylden version – et valg, der både skaber en unik visuel identitet og demonstrerer min evne til at manipulere lys, farver og stemning, samt tilføje en stor mængde detaljer, som ikke fandtes i det oprindelige billede. Billedet er gennemgribende redigeret og repræsenterer både min stil og mine tekniske færdigheder som grafiker og illustrator.
<br />
<br />
Formålet med dette værk var ikke blot at skabe en visuelt iøjnefaldende baggrund, men også at demonstrere min evne til at forvandle eksisterende visuelle elementer til noget nyt og unikt. </p>
        </div>
        <img
          src={currentImage}
          alt="Preview"
          className={`${styles.image} ${showAfter ? styles.after : ''}`}
          onClick={() => setModalOpen(true)}
        />
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${!showAfter ? styles.active : ''}`}
            onClick={() => setShowAfter(false)}
          >
            Before
          </button>
          <button
            className={`${styles.button} ${showAfter ? styles.active : ''}`}
            onClick={() => setShowAfter(true)}
          >
            After
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modal} onClick={() => setModalOpen(false)}>
          <img src={currentImage} alt="Enlarged view" className={styles.modalImage} />
          <button className={styles.closeButton}>&times;</button>
        </div>
      )}
    </>
  );
};

export default ImageSwitcher;
