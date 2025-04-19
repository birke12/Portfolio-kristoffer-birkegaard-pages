import { useState } from 'react';
import styles from './cvResume.module.css';

function CvResume() {
  const [cvPage, setCvPage] = useState(1);
  const [resumePage, setResumePage] = useState(1);

  const cvImages = [
    './cv1.jpg', // Replace with the actual paths to your JPGs
    './cv2.jpg',
    './cv3.jpg',
    // Add more pages if necessary
  ];
  const resumeImages = [
    './cv1.jpg', 
    './cv2.jpg',
    './cv3.jpg',
  
  ];

  return (
    <div className={styles.container}>
      {/* CV Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Curriculum Vitae</h2>
        <div className={styles.imageWrapper}>
          <img
            src={cvImages[cvPage - 1]}
            alt={`CV Page ${cvPage}`}
            className={styles.image}
          />
          <div className={styles.controls}>
            <button
              onClick={() => setCvPage(prev => Math.max(prev - 1, 1))}
              disabled={cvPage <= 1}
              className={styles.button}
            >
              Previous
            </button>
            <div>Page {cvPage} of {cvImages.length}</div>
            <button
              onClick={() => setCvPage(prev => Math.min(prev + 1, cvImages.length))}
              disabled={cvPage >= cvImages.length}
              className={styles.button}
            >
              Next
            </button>
          </div>
          <div className={styles.downloadLink}>
            <a href={cvImages[cvPage - 1]} download>Download CV JPG</a>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Resume</h2>
        <div className={styles.imageWrapper}>
          <img
            src={resumeImages[resumePage - 1]}
            alt={`Resume Page ${resumePage}`}
            className={styles.image}
          />
          <div className={styles.controls}>
            <button
              onClick={() => setResumePage(prev => Math.max(prev - 1, 1))}
              disabled={resumePage <= 1}
              className={styles.button}
            >
              Previous
            </button>
            <div>Page {resumePage} of {resumeImages.length}</div>
            <button
              onClick={() => setResumePage(prev => Math.min(prev + 1, resumeImages.length))}
              disabled={resumePage >= resumeImages.length}
              className={styles.button}
            >
              Next
            </button>
          </div>
          <div className={styles.downloadLink}>
            <a href={resumeImages[resumePage - 1]} download>Download Resume JPG</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvResume;
