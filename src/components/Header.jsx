import styles from '../styles/styles';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        {/* Row 1: Logo only */}
        <div style={styles.logoRow}>
          <button
            onClick={() => setCurrentPage('home')}
            style={styles.logo}
            onMouseOver={(e) => e.target.style.color = '#fbbf24'}
            onMouseOut={(e) => e.target.style.color = 'white'}
          >
            Jett's Beans
          </button>
        </div>

        {/* Row 2: Navigation */}
        <nav style={styles.navRow}>
          <ul style={styles.nav}>
            {['home', 'about', 'order'].map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  style={{
                    ...styles.navButton,
                    ...(currentPage === page ? styles.navButtonActive : styles.navButtonInactive),
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== page) e.target.style.backgroundColor = '#78350f';
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== page) e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
