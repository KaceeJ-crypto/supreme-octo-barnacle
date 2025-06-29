import React, { useState, useEffect } from 'react';
import './App.css';

const redTeamTools = [
  { name: 'Sliver C2', url: 'https://github.com/BishopFox/sliver' },
  { name: 'Mythic C2', url: 'https://github.com/its-a-feature/Mythic' },
  { name: 'Metasploit', url: 'https://github.com/rapid7/metasploit-framework' },
  { name: 'CrackMapExec', url: 'https://github.com/Porchetta-Industries/CrackMapExec' },
  { name: 'Responder', url: 'https://github.com/lgandx/Responder' }
];

const blueTeamTools = [
  { name: 'Zeek IDS', url: 'https://github.com/zeek/zeek' },
  { name: 'Wazuh SIEM', url: 'https://github.com/wazuh/wazuh' },
  { name: 'TheHive', url: 'https://github.com/TheHive-Project/TheHive' },
  { name: 'Security Onion', url: 'https://github.com/Security-Onion-Solutions/securityonion' },
  { name: 'Suricata', url: 'https://github.com/OISF/suricata' }
];

const osintTools = [
  { name: 'SpiderFoot', url: 'https://github.com/smicallef/spiderfoot' },
  { name: 'Recon-ng', url: 'https://github.com/lanmaster53/recon-ng' },
  { name: 'Photon', url: 'https://github.com/s0md3v/Photon' },
  { name: 'GHunt', url: 'https://github.com/mxrch/GHunt' },
  { name: 'Maltego', url: 'https://www.maltego.com' }
];

const sigintTools = [
  { name: 'GQRX (WebSDR)', url: 'https://websdr.org/' },
  { name: 'KiwiSDR Public', url: 'https://kiwisdr.com/public/' },
  { name: 'RTL_433 Demo', url: 'https://triq.org/sdr/' },
  { name: 'SigDigger', url: 'https://github.com/BatchDrake/SigDigger' },
  { name: 'Universal Radio Hacker', url: 'https://github.com/jopohl/urh' }
];

export default function App() {
  const [logs, setLogs] = useState(['👁‍🗨 GHOSTFACE terminal initialized...']);
  const [command, setCommand] = useState('');
  const [threatLevel, setThreatLevel] = useState(35);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatLevel(Math.floor(Math.random() * 100));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!command.trim()) return;
    setLogs(prev => [...prev, `> ${command}`, `⚙️ Executed: ${command}`]);
    setCommand('');
  };

  const handleDeploy = () => {
    setLogs(prev => [...prev, '🚀 Payload deployed to target node.']);
  };

  const renderTools = (tools) =>
    tools.map((tool, i) => (
      <li key={i}>
        <a href={tool.url} target="_blank" rel="noopener noreferrer">{tool.name}</a>
      </li>
    ));

  return (
    <div className="console-container">
      <header className="neon-title animated-glitch">
        <h1>👻 GHOSTFACE</h1>
        <p className="subtitle">Red · Blue · SIGINT · ISR · PurpleOps</p>
      </header>

      {/* Threat meter */}
      <div className="threat-meter">
        <div className="threat-level" style={{ width: `${threatLevel}%` }} />
      </div>

      {/* Terminal logs */}
      <section className="terminal">
        {logs.map((line, i) => <div key={i}>{line}</div>)}
      </section>

      {/* Command input */}
      <form className="command-input" onSubmit={handleCommand}>
        <input
          value={command}
          onChange={e => setCommand(e.target.value)}
          placeholder="Enter command..."
        />
        <button type="submit">Run</button>
        <button type="button" onClick={handleDeploy}>Deploy Payload</button>
      </form>

      {/* Tool cards */}
      <div className="grid-layout">
        <section className="card red">
          <h2>🔴 RED TEAM</h2>
          <ul>{renderTools(redTeamTools)}</ul>
        </section>
        <section className="card blue">
          <h2>🔵 BLUE TEAM</h2>
          <ul>{renderTools(blueTeamTools)}</ul>
        </section>
        <section className="card intel">
          <h2>🛰 OSINT</h2>
          <ul>{renderTools(osintTools)}</ul>
        </section>
        <section className="card shadow">
          <h2>📻 SIGINT</h2>
          <ul>{renderTools(sigintTools)}</ul>
        </section>
      </div>

      {/* Embedded feeds */}
      <section className="card iframe">
        <h2>🌍 Live SDR Feed</h2>
        <iframe src="https://websdr.org/" title="WebSDR" width="100%" height="300" />
      </section>
      <section className="card iframe">
        <h2>🎧 KiwiSDR Audio</h2>
        <iframe src="https://kiwisdr.com/public/" title="KiwiSDR" width="100%" height="300" />
      </section>
      <section className="card iframe">
        <h2>📡 WiGLE Map</h2>
        <iframe src="https://wigle.net/map" title="WiGLE" width="100%" height="300" />
      </section>
      <section className="card iframe">
        <h2>🖥 Browser Shell</h2>
        <iframe src="https://bellard.org/jslinux/" title="JSLinux" width="100%" height="300" />
      </section>

      <footer className="footer">
        <p><span className="tagline">KROWPHIRST</span> — mess with the best, die like the rest.</p>
      </footer>
    </div>
  );
}
