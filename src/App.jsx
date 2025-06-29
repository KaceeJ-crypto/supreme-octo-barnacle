import React from 'react';
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
  { name: 'Maltego (CE)', url: 'https://www.paterva.com' }
];

function App() {
  const renderTools = (tools) =>
    tools.map((tool, i) => (
      <li key={i}>
        <a href={tool.url} target="_blank" rel="noopener noreferrer">
          {tool.name}
        </a>
      </li>
    ));

  return (
    <div className="console-container">
      <header className="neon-title animated-glitch">
        <h1>👻 GHOSTFACE</h1>
        <p className="subtitle">Red · Blue · ShadowOps Interface</p>
      </header>

      <div className="grid-layout">
        <section className="card red">
          <h2>🔴 RED TEAM TOOLS</h2>
          <ul className="tool-list">{renderTools(redTeamTools)}</ul>
        </section>

        <section className="card blue">
          <h2>🔵 BLUE TEAM TOOLS</h2>
          <ul className="tool-list">{renderTools(blueTeamTools)}</ul>
        </section>

        <section className="card intel">
          <h2>🛰 OSINT FRAMEWORKS</h2>
          <ul className="tool-list">{renderTools(osintTools)}</ul>
        </section>
      </div>

      <footer className="footer">
        <p><span className="tagline">KROWPHIRST</span> — mess with the best, die like the rest.</p>
      </footer>
    </div>
  );
}

export default App;
