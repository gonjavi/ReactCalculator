import React from 'react';
import { lightblue } from 'color-name';

const style = {
  
  backgroundColor: 'lightblue',
};

const Display = props => {
  const { result } = props;

  return (
    <div style={style}>
      <h1>Display</h1>
      {result}
    </div>
  );
};

export default Display;
