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
