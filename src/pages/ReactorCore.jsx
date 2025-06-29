import React, { useState, useEffect } from 'react';
import '../App.css';

export default function ReactorCore() {
  const [temperature, setTemperature] = useState(450);
  const [status, setStatus] = useState('🟢 Stable');
  const [log, setLog] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = Math.floor(Math.random() * 20) - 10;
      const newTemp = temperature + fluctuation;
      setTemperature(newTemp);
      if (newTemp > 600) {
        setStatus('🔴 Overload');
        setLog(prev => [...prev, `⚠️ Reactor overheating at ${newTemp}°C`]);
      } else if (newTemp < 300) {
        setStatus('🟡 Underpowered');
        setLog(prev => [...prev, `⚠️ Reactor underpowered at ${newTemp}°C`]);
      } else {
        setStatus('🟢 Stable');
        setLog(prev => [...prev, `✅ Reactor holding at ${newTemp}°C`]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [temperature]);

  return (
    <div className="page-container">
      <h2 className="page-title">⚛️ Reactor Core</h2>
      <p className="page-description">
        Real-time simulation of GhostFace core load, temperature fluctuation, and energy matrix behavior.
      </p>

      <div className="reactor-display">
        <h3>Core Temperature: <span>{temperature}°C</span></h3>
        <h4>Status: <span>{status}</span></h4>
      </div>

      <div className="terminal-log">
        {log.slice(-10).map((entry, idx) => (
          <div key={idx}>{entry}</div>
        ))}
      </div>
    </div>
  );
}
