import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-title-wrapper">
          <img src="/mylogo.png" alt="Sacred Space Logo" className="logo" />
          <div>
            <h1 className="title">Sacred Space Foundation</h1>
            <p className="pillars">Balance • Wellness • Recovery</p>
          </div>
        </div>
        <nav className="nav">
          <button>Home</button>
          <button>Resources</button>
          <button>Meetings</button>
          <button>Contact</button>
        </nav>
      </header>

      <section className="section">
        <h2>💡 Resources</h2>
        <ul>
          <li>
            <a href="https://www.aa.org" target="_blank" rel="noopener noreferrer">
              Alcoholics Anonymous
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
              <th>Group</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>8:00 PM</td>
              <td>Hearth & Home</td>
              <td>Hybrid Book Study</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>5:45 PM</td>
              <td>No More Shadows</td>
              <td>CMA</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6:30 PM</td>
              <td>AA Daily Reprieve</td>
              <td>Open AA</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>8:00 PM</td>
              <td>There Is A Solution</td>
              <td>Hybrid (In-person & Zoom)</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>1:00 PM</td>
              <td>All Recovery Meeting</td>
              <td>Hybrid (In-person & Zoom)</td>
            </tr>
          </tbody>
        </table>

        <p className="calendar-link">
          📅{' '}
          <a
            href="https://calendar.google.com/calendar/u/0/r?cid=sacredspacefoundationatlanta@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Google Calendar
          </a>
        </p>

        <p className="newsletter">
          📰{' '}
          <a
            href="https://example.com/newsletter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to <strong>The Sacred Signal</strong> Newsletter
          </a>
        </p>
      </section>

      <section className="section">
        <h2>💬 Connect With Us</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/share/g/16qkUGgduW"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Community Page
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          <em>
            “Recovery isn’t about becoming someone new — it’s about remembering who you were
            before the world told you to forget. Every scar is a signature of survival, and
            every breath is a rebellion against the silence of shame.”<br />— Kacee J
          </em>
        </p>
        <p>
          <strong>Contact:</strong>{' '}
          <a href="mailto:admin@sacredspacefoundationatlanta.org">
            admin@sacredspacefoundationatlanta.org
          </a>
          <br />
          <strong>Email Kacee J:</strong>{' '}
          <a href="mailto:kaceej@sacredspacefoundationatlanta.org">
            kaceej@sacredspacefoundationatlanta.org
          </a>
          <br />
          <strong>Warmline:</strong>{' '}
          <a href="tel:+14707814777">+1 (470) 781-4777</a>
        </p>
        <p className="zoom-link">
          🔗{' '}
          <a
            href="https://us02web.zoom.us/j/5471397255?pwd=228426"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Zoom Meeting (ID: 547 139 7255)
          </a>
          <br />
          Passcode: 228426
        </p>
      </footer>

      <div className="bottom-logo">
        <img src="/mylogo2.png" alt="Sacred Space Bottom Logo" />
      </div>
    </div>
  );
}

export default App;
