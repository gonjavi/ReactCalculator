import React from 'react';
import { lightblue } from 'color-name';

const style = {
  background: lightblue,
};

const Display = props => {
  const { result } = props;

  return (
    <div style={style}>
      {result}
    </div>
  );
};

export default Display;
