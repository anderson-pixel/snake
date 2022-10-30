import React from 'react';
import './App.css';

function App() {
    return (
      <>
      <div className="App">
      <canvas id='game' width='440' height='440'></canvas>
      </div>
      <h1 className="">Snake Game</h1>
      <p>W A S D / Arrow Keys for Movement</p>
      <button onClick={() => window.location.reload()}>Press R to Restart</button>
      <a href='https://github.com/anderson-pixel' style={{position: 'absolute', zIndex: '10',
  color: 'cyan',
  left: '20px', top: '550px', 
  margin: '0', fontSize: '14.5px', wordBreak: 'break-word', maxWidth: '150px'}}>Made By Anderson Pereira 2022
  </a>
      </>
    );
}

export default App;
