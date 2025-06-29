import React from 'react';

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

const sigintTools = [
  { name: 'WebSDR', url: 'https://websdr.org/' },
  { name: 'KiwiSDR', url: 'https://kiwisdr.com/public/' },
  { name: 'RTL_433', url: 'https://triq.org/sdr/' },
  { name: 'SigDigger', url: 'https://github.com/BatchDrake/SigDigger' },
  { name: 'URH', url: 'https://github.com/jopohl/urh' }
];

const renderTools = (tools) =>
  tools.map((tool, index) => (
    <li key={index}>
      <a href={tool.url} target="_blank" rel="noopener noreferrer">
        {tool.name}
      </a>
    </li>
  ));

export default function Tools() {
  return (
    <div className="console-container">
      <header className="neon-title animated-glitch">
        <h1>👻 GHOSTFACE</h1>
        <p className="subtitle">Red · Blue · ShadowOps Virtual ISR</p>
      </header>

      <div className="grid-layout">
        <section className="card red">
          <h2>🔴 RED TEAM</h2>
          <ul className="tool-list">{renderTools(redTeamTools)}</ul>
        </section>

        <section className="card blue">
          <h2>🔵 BLUE TEAM</h2>
          <ul className="tool-list">{renderTools(blueTeamTools)}</ul>
        </section>

        <section className="card intel">
          <h2>🛰 OSINT</h2>
          <ul className="tool-list">{renderTools(osintTools)}</ul>
        </section>

        <section className="card shadow">
          <h2>📻 SIGINT</h2>
          <ul className="tool-list">{renderTools(sigintTools)}</ul>
        </section>

        <section className="card map">
          <h2>📡 WiGLE Signal Map</h2>
          <iframe src="https://wigle.net/map" title="WiGLE Map" />
        </section>

        <section className="card shell">
          <h2>🖥 Virtual Terminal</h2>
          <iframe src="https://bellard.org/jslinux/" title="JSLinux Terminal" />
        </section>
      </div>

      <footer className="footer">
        <p><span className="tagline">KROWPHIRST</span> — mess with the best, die like the rest.</p>
      </footer>
    </div>
  );
}
