// src/pages/CamViewer.jsx
import React from 'react';
import '../App.css';

export default function CamViewer() {
  return (
    <div className="page-container">
      <h2 className="page-title">🎥 Camera Viewer</h2>
      <p className="page-description">Live streaming feeds from public and simulated cameras.</p>

      <div className="cam-grid">
        {/* Public street cams (examples) */}
        <iframe
          title="Times Square Live Cam"
          src="https://www.earthcam.com/usa/newyork/timessquare/?cam=tsrobo1"
          width="48%"
          height="300"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          title="London Eye Cam"
          src="https://www.earthcam.com/uk/london/londoneye/?cam=londoneye"
          width="48%"
          height="300"
          frameBorder="0"
          allowFullScreen
        />

        {/* Simulated internal cam */}
        <div className="cam-placeholder">
          <p>Internal Lab Cam Feed (Simulated)</p>
          <video width="100%" height="300" controls>
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
