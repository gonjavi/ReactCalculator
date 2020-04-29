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
    this.setState(data);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <Display result={total || next} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
