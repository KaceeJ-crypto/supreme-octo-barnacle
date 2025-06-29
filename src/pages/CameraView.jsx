// src/pages/CameraView.jsx
import React from 'react';
import '../App.css';

export default function CameraView() {
  return (
    <div className="page-container">
      <h2 className="page-title">📷 Camera Surveillance</h2>
      <p className="page-description">
        This page embeds a real-time browser-based virtual camera emulator or feed. For simulation, public cam feeds or virtualized surveillance tools can be loaded.
      </p>
      <div className="iframe-wrapper">
        <iframe
          src="https://www.earthcam.com/usa/newyork/timessquare/"
          title="Live Camera Feed"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
