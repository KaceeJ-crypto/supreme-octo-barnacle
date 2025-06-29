import React from 'react';

export default function ThreatMap() {
  return (
    <div className="page-container">
      <h2>🌐 Real-Time Threat Map</h2>
      <p>Monitoring global cyber and physical threats.</p>
      {/* Embed WiGLE.net map for wireless threats */}
      <iframe
        title="WiGLE Wireless Threat Map"
        src="https://wigle.net/map"
        width="100%"
        height="500"
        frameBorder="0"
        style={{ borderRadius: '8px', boxShadow: '0 0 15px #00ff90' }}
      />
    </div>
  );
}
