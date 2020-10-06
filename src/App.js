import React from 'react';
import './App.css';

function App({text}) {
  return (
    <div className="App">
     <header data-testid="header">{text}</header>
    </div>
  );
}

export default App;
