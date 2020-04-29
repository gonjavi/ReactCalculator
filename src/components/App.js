import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const data = calculate(this.state, buttonName);
    const { total, next, operation } = data;
    this.setState({
      total,
      next,
      operation,
    });
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
