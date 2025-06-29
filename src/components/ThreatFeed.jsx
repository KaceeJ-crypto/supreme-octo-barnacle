import React, { useEffect, useState } from 'react';

const MOCK_THREATS = [
  { id: 1, ip: '192.168.1.101', threat: 'Brute Force SSH', severity: 'High' },
  { id: 2, ip: '203.0.113.42', threat: 'Malware C2', severity: 'Critical' },
  { id: 3, ip: '198.51.100.23', threat: 'Port Scanning', severity: 'Medium' },
];

export default function ThreatFeed({ onNewThreat }) {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat = MOCK_THREATS[Math.floor(Math.random() * MOCK_THREATS.length)];
      setThreats((prev) => [newThreat, ...prev].slice(0, 10));
      if (onNewThreat) onNewThreat(newThreat);
    }, 10000);

    return () => clearInterval(interval);
  }, [onNewThreat]);

  return (
    <section className="card intel">
      <h2>⚠️ Real-Time Threat Feed</h2>
      <ul className="tool-list">
        {threats.length === 0 && <li>No threats detected</li>}
        {threats.map(({ id, ip, threat, severity }) => (
          <li key={id} style={{ color: severity === 'Critical' ? '#ff0000' : severity === 'High' ? '#ff6600' : '#ffff00' }}>
            <strong>{severity}</strong> — {threat} from IP: {ip}
          </li>
        ))}
      </ul>
    </section>
  );
}
