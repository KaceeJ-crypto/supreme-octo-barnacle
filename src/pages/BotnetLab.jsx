// src/pages/BotnetLab.jsx
import React, { useState } from 'react';
import '../App.css';

export default function BotnetLab() {
  const [logs, setLogs] = useState(["🧠 Botnet Lab initialized..."]);
  const [script, setScript] = useState('');
  const [activePayload, setActivePayload] = useState(null);

  const log = (msg) => setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()} › ${msg}`]);

  const deploy = () => {
    if (!script.trim()) return log("⚠️ No payload entered.");
    setActivePayload(script);
    log("🚀 Payload deployed to test botnet node.");
  };

  const analyze = () => {
    log("🔬 Analyzing payload behavior...");
    log("📊 Simulated: HTTP beacon, reverse shell, port scan.");
  };

  const mitigate = () => {
    log("🛡 Mitigation executed: traffic blocked, payload neutralized.");
    setActivePayload(null);
  };

  return (
    <div className="page-container">
      <h2 className="page-title">🧪 Purple Team Botnet Lab</h2>
      <p className="page-description">Simulate payload deployments, defensive reactions, and hybrid threat scenarios.</p>

      <textarea
        className="payload-editor"
        placeholder="// Enter your JS or bash payload here..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
      />

      <div className="action-buttons">
        <button onClick={deploy} className="glow-button">💣 Deploy</button>
        <button onClick={analyze} className="glow-button">🧬 Analyze</button>
        <button onClick={mitigate} className="glow-button">🛡 Mitigate</button>
      </div>

      <div className="terminal-log">
        {logs.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}
