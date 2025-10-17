// --- src/pages/AboutPage.jsx ---
import React from "react";
import styles from "../styles/styles";

const AboutPage = () => {
  return (
    <div style={styles.aboutBackground}>
      <div style={styles.aboutOverlay}></div>
      <div style={styles.aboutContainer}>
        <h1 style={styles.aboutTitle}>About Jett's Beans</h1>
        <div>
          <p style={styles.aboutText}>
            Founded in 2025, Jett's Beans started as a dream...
          </p>
          {/* Keep all remaining <p> content */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
