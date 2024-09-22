import React from 'react';
import './App.css';
import batteryLogo from './battery_logo.png';  // Import the image

function App() {
  return (
    <div className="app">
      <img src={batteryLogo} alt="Logo" className="logo" /> 
      <h2>Set Up New Charger</h2>
    </div>
  );
}

export default App;
