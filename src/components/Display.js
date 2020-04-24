import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  flexDirection: 'row',
  width: 600,
  marginTop: 20,
  marginLeft: 330,
  justifyContent: 'flex-end',
  backgroundColor: 'gray',
};

const Display = ({ result }) => <div style={style}><h1>{result}</h1></div>;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
