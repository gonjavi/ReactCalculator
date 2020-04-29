import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  HandleClick(buttonName) {
    const data = Calculate(this.state, buttonName);
    const { total, next, operation } = data;

    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
