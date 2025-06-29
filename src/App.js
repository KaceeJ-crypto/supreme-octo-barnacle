import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tools from './Tools';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;
