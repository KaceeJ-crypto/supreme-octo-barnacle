import React from 'react';
import '../App.css';

export default function ThreatMap() {
  return (
    <div className="page-container">
      <h2 className="page-title">🛰 Threat Intelligence Map</h2>
      <p className="page-description">
        Global threat telemetry view — overlays cyber, political, and infrastructure alerts in real-time.
      </p>

      <div className="iframe-container">
        <iframe
          src="https://threatmap.checkpoint.com/"
          title="Live Threat Map"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="terminal-log">
        <p>🌐 Source: Check Point ThreatCloud | Updated live every 30 seconds</p>
        <p>📍 Layers: Cyber Attacks, Botnets, Malware Beacons, and Threat Origination Zones</p>
      </div>
    </div>
  );
}
