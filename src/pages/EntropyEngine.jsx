
import React, { useState } from 'react';
import '../App.css';

export default function EntropyEngine() {
  const [entropy, setEntropy] = useState('');
  const [log, setLog] = useState([]);

  const generateEntropy = () => {
    // Generate 8 random 32-bit unsigned integers
    const randomData = window.crypto.getRandomValues(new Uint32Array(8));
    // Convert to hex strings
    const hex = Array.from(randomData)
      .map(n => n.toString(16).padStart(8, '0'))
      .join(' ');
    setEntropy(hex);
    setLog(prev => [...prev, `🧬 Generated entropy chunk: ${hex}`]);
  };

  return (
    <div className="page-container">
      <h2 className="page-title">🧬 Entropy Engine</h2>
      <p className="page-description">
        This page simulates secure random data generation for keys and cryptographic operations.
      </p>

      <button onClick={generateEntropy} className="glow-button">
        Generate Entropy
      </button>

      <div className="entropy-display">
        <code>{entropy || 'Press generate to produce entropy'}</code>
      </div>

      <div className="terminal-log">
        {log.map((entry, index) => (
          <div key={index}>{entry}</div>
        ))}
      </div>
    </div>
  );
}
