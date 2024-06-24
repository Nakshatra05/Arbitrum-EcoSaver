// App.js

import React from 'react';
import Wallet from './Wallet';
import Lending from './Lending';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Arbitrum EcoSaver</h1>
        <Wallet />
        <Lending />
      </header>
    </div>
  );
}

export default App;
