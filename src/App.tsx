import React, { useState } from "react";
import "./App.css";

function App() {
  const [coin, setCoin] = useState(0);

  const addCoin = () => {
    setCoin(coin + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <span id="coin-count">{coin}</span>
        <button id="coin-simon" onClick={addCoin}>
          Coin for Simon
        </button>
      </header>
    </div>
  );
}

export default App;
