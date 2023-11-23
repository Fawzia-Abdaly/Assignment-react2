import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect starting');

    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="big-font">Vite + React</h1>
      <div className="card">
        <div className="counter-display">{counter}</div>
        <button onClick={handleReset}>Reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
