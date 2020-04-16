import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <h1> React Calclulator</h1>
        <Display  />
        <ButtonPanel   />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
