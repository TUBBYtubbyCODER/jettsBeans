// --- src/pages/HomePage.jsx ---
import React from 'react';
import styles from '../styles/styles';


const HomePage = ({ setCurrentPage }) => {
  return (
    <div style={{ ...styles.homeHero, backgroundImage: "url('/images/jettChef.jpeg')" }}>
      <div style={styles.overlay}></div>
      <div style={styles.heroContent}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={styles.heroTitle}>Welcome to Jett's Beans!</h1>
          <p style={styles.heroSubtitle}>Order your favorite beans from Jett's Beans!</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setCurrentPage('order')}
            style={styles.ctaButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b45309'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#d97706'}
          >
            Start Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;