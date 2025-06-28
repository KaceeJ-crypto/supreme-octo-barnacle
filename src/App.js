import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Sacred Space Foundation</h1>
        <p>
          <a
            className="zoom-link"
            href="https://us02web.zoom.us/j/5471397255?pwd=228426"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Join Our Zoom Meeting (ID: 547 139 7255)
          </a>
          <br />
          Passcode: 228426
        </p>
      </header>

      <nav className="nav">
        <button>Home</button>
        <button>Resources</button>
        <button>Meetings</button>
        <button>Contact</button>
      </nav>

      <section className="section">
        <h2>💡 Resources</h2>
        <ul>
          <li>
            <a href="https://recoverydh.org/resources/recovery-guide.pdf" target="_blank" rel="noopener noreferrer">
              Recovery Guide PDF
            </a>
          </li>
          <li>
            <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer">
              988 Suicide & Crisis Lifeline
            </a>
          </li>
          <li>
            <a href="https://na.org" target="_blank" rel="noopener noreferrer">
              Narcotics Anonymous
            </a>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>📅 Weekly Meeting Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Location</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>8:00 PM</td>
              <td>Sacredspace Clubhouse / Zoom</td>
              <td>Hybrid Recovery</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>8:00 PM</td>
              <td>No More Shadows CMA</td>
              <td>Spiritual Growth</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6:30 PM</td>
              <td>Daily Reprieve - AA</td>
              <td>In-Person</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>8:00 PM</td>
              <td>There is a Solution - AA</td>
              <td>Rotating Format</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>1:00 PM</td>
              <td>Hybrid Recovery Meeting</td>
              <td>Open Discussion</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>💬 Connect With Us</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/share/g/16anom2UGn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Event #1
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/share/g/16qkUGgduW"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Event #2
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          <em>
            “Recovery isn’t about becoming someone new — it’s about remembering who you were before the world told you to forget.<br />
            Every scar is a signature of survival, and every breath is a rebellion against the silence of shame.”<br />
            — Kacee J
          </em>
          <br /><br />
          <strong>Contact:</strong> <a href="mailto:admin@sacredspacefoundationatlanta.org">admin@sacredspacefoundationatlanta.org</a><br />
          Email <strong>Kacee J</strong>: <a href="mailto:kaceej@sacredspacefoundationatlanta.org">kaceej@sacredspacefoundationatlanta.org</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
