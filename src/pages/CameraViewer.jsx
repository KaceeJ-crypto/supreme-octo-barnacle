import React from 'react';
import '../App.css';

export default function CameraViewer() {
  return (
    <div className="page-container">
      <h2 className="page-title">📷 Live Camera & Feed Viewer</h2>
      <p className="page-description">
        Embed feeds for reconnaissance or monitoring public streams. Below is a demo viewer using JSLinux cam placeholder.
      </p>

      <div className="iframe-container">
        <iframe
          src="https://bellard.org/jslinux/"
          title="Live Cam Feed (Simulated)"
          width="100%"
          height="400"
          frameBorder="0"
        />
      </div>

      <div className="terminal-log">
        <p>🔒 Note: Real camera feeds require user hardware, IP configuration, or network stream integrations.</p>
        <p>💡 Suggestion: Integrate with IP Webcam, ONVIF, or Tailscale tunnel for secure local stream injection.</p>
      </div>
    </div>
  );
}
