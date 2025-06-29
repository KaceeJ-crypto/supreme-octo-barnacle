/* Base reset */
body, html, #root {
  margin: 0;
  padding: 0;
  background: #000;
  color: #39ff14;
  font-family: 'Courier New', monospace;
  overflow-x: hidden;
}

/* Smooth font */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* React root sizing */
#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Link default styling */
a {
  color: #39ff14;
  text-decoration: none;
}
a:hover {
  text-shadow: 0 0 4px #ff00ff;
}
