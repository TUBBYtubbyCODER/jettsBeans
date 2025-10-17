import React from 'react';
import styles from '../styles/styles';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <p style={{ marginBottom: '0.5rem' }}>
          © {new Date().getFullYear()} <strong>Jett’s Beans</strong>. All rights reserved.
        </p>
        <p style={{ fontSize: '0.95rem', color: '#d1d5db' }}>
          Crafted with ❤️ by the <span style={{ color: '#fbbf24' }}>Roo Brew & Meat Stew Wrecking Crew</span>.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          Contact us at{' '}
          <a
            href="mailto:jettsbeans@rooroorooroorooroo.com"
            style={styles.footerLink}
          >
            jettsbeans@rooroorooroorooroo.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
