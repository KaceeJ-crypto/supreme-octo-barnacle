import React, { useState } from 'react';
import '../App.css';

export default function ScriptingLab() {
  const [script, setScript] = useState('');
  const [output, setOutput] = useState('');

  const runScript = () => {
    try {
      const result = eval(script);
      setOutput(String(result));
    } catch (error) {
      setOutput(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="page-container">
      <h2 className="page-title">🧠 Scripting Lab</h2>
      <p className="page-description">
        Write and execute JavaScript directly in the browser. (Python REPL & sandboxing under construction)
      </p>

      <textarea
        value={script}
        onChange={(e) => setScript(e.target.value)}
        className="script-input"
        placeholder="// Type JavaScript here..."
      />

      <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
        <button onClick={runScript} className="glow-button">▶ Run Script</button>
        <button onClick={() => { setScript(''); setOutput(''); }} className="glow-button">⛔ Clear</button>
      </div>

      <div className="terminal-log">
        <h3>💾 Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
