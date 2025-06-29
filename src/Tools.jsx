import React from 'react';
import Tools from './Tools';
import './App.css';

export default function App() {
  return (
    <div className="console-container">
      <header className="neon-title animated-glitch">
        <h1>👻 GHOSTFACE</h1>
        <p className="subtitle">Red · Blue · SIGINT · ISR · PurpleOps</p>
      </header>

      {/* Tools Section */}
      <Tools />

      {/* Purple Team Command Center */}
      <section className="card purple">
        <h2>🛡️ Purple Team C2 Framework</h2>
        <ul className="tool-list">
          <li>
            <a href="https://github.com/redcanaryco/pyrat" target="_blank" rel="noopener noreferrer">
              Pyrat C2 (Hybrid Red/Blue)
            </a>
          </li>
          <li>
            <a href="https://github.com/preludeorg/operator" target="_blank" rel="noopener noreferrer">
              Operator by Prelude
            </a>
          </li>
        </ul>
      </section>

      {/* SIGINT Radio Feeds */}
      <section className="card live">
        <h2>📻 WebSDR Feed</h2>
        <iframe src="https://websdr.org/" title="WebSDR Stream" width="100%" height="350" />
      </section>

      <section className="card live">
        <h2>🎧 KiwiSDR Public Audio</h2>
        <iframe src="https://kiwisdr.com/public/" title="KiwiSDR Feed" width="100%" height="350" />
      </section>

      {/* Camera Viewer */}
      <section className="card cam">
        <h2>📸 RTSP/IP Camera Viewer</h2>
        <iframe src="http://your-shinobi-ip:port/viewer" title="Camera Feed" width="100%" height="350" />
      </section>

      {/* Network Scanner */}
      <section className="card scanner">
        <h2>📡 Local Network Scanner</h2>
        <iframe src="https://zz85.github.io/netscan/" title="NetScanner" width="100%" height="300" />
      </section>

      {/* Code Execution Lab */}
      <section className="card code-lab">
        <h2>💻 Browser Code Execution Sandbox</h2>
        <iframe
          src="https://stackblitz.com/edit/react?embed=1&file=index.js"
          title="Code Sandbox"
          width="100%"
          height="400"
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p><span className="tagline">KROWPHIRST</span> — mess with the best, die like the rest.</p>
      </footer>
    </div>
  );
}
