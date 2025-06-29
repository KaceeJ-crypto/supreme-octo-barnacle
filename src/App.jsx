y
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Tools from './Tools';
import BotnetLab from './pages/BotnetLab';
import Scanner from './pages/Scanner';
import CameraViewer from './pages/CameraViewer';
import ScriptingLab from './pages/ScriptingLab';
import ThreatMap from './pages/ThreatMap';
import NewsFeed from './pages/NewsFeed';
import EntropyEngine from './pages/EntropyEngine';
import PurpleTeamHub from './pages/PurpleTeamHub';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>👻 GHOSTFACE</h1>
          <nav className="nav-bar">
            <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Tools</NavLink>
            <NavLink to="/botnet" className={({isActive}) => isActive ? 'active' : ''}>Botnet Lab</NavLink>
            <NavLink to="/scanner" className={({isActive}) => isActive ? 'active' : ''}>Scanner</NavLink>
            <NavLink to="/camera" className={({isActive}) => isActive ? 'active' : ''}>Camera View</NavLink>
            <NavLink to="/reactor" className={({isActive}) => isActive ? 'active' : ''}>Entropy Reactor</NavLink>
            <NavLink to="/threatmap" className={({isActive}) => isActive ? 'active' : ''}>Threat Map</NavLink>
            <NavLink to="/news" className={({isActive}) => isActive ? 'active' : ''}>News Feed</NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Tools />} />
            <Route path="/botnet" element={<BotnetLab />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/camera" element={<CameraView />} />
            <Route path="/reactor" element={<EntropyReactor />} />
            <Route path="/threatmap" element={<ThreatMap />} />
            <Route path="/news" element={<NewsFeed />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>KrowPhirst — mess with the best, die like the rest.</p>
        </footer>
      </div>
    </Router>
  );
}x

