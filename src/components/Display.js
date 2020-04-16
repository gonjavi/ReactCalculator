import React from 'react';
import { lightblue } from 'color-name';

const style = {
  display: 'flex',
  flexDirection: 'row',
  width: 500,
  marginLeft: 200,
  justifyContent: 'flex-end',
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
