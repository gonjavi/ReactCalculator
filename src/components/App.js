import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

Calculate({ total, next, operation }, buttonName);

function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
