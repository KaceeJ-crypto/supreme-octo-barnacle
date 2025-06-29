import React, { useState } from 'react';
import '../App.css';

export default function PurpleTeam() {
  const [payload, setPayload] = useState('');
  const [logs, setLogs] = useState(['🔮 Purple Team Lab Initialized...']);

  const log = (msg) =>
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()} › ${msg}`]);

  const handleDeploy = () => {
    if (!payload.trim()) return log('⚠️ No payload to deploy.');
    log('🚀 Deploying payload...');
    log('📡 Simulating lateral movement...');
    log('🛡 Monitoring EDR response...');
    log('✅ Purple Team Exercise Complete.');
  };

  const handleClear = () => {
    setPayload('');
    setLogs(['🔁 Reset Purple Team Lab...']);
  };

  return (
    <div className="page-container">
      <h2 className="page-title">🟣 Purple Team Lab</h2>
      <p className="page-description">
        Simulate coordinated red & blue exercises. Use this lab to deploy mock payloads, test detection logic, and evaluate defense triggers.
      </p>

      <textarea
        className="payload-editor"
        placeholder="// Write a simulated attack payload here (bash, ps1, or logic)..."
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
      />

      <div className="action-buttons">
        <button onClick={handleDeploy} className="glow-button">Deploy Payload</button>
        <button onClick={handleClear} className="glow-button">Reset</button>
      </div>

      <div className="terminal-log">
        {logs.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </div>
  );
}
