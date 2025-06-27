import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Sacred Space Foundation</h1>
      </header>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          sacredspacefoundationatlanta.org <br />
          <em>Coming Soon</em> <br />
          Contact admin at <strong>Kacee J</strong> — if you know, you know.
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fefdfb',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: '"Brush Script MT", cursive, sans-serif',
    padding: '2rem',
    textAlign: 'center',
  },
  header: {
    marginTop: '2rem',
  },
  title: {
    fontSize: '3.5rem',
    color: '#4b2e83',
  },
  footer: {
    marginBottom: '2rem',
  },
  footerText: {
    fontSize: '1.2rem',
    color: '#444',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
