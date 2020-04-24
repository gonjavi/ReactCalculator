import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  flexDirection: 'row',
  width: 700,
  height: 100,
  marginTop: 20,
  justifyContent: 'flex-end',
  color: '#ffffff',
  fontWeight: '700',
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
