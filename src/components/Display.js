import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';

const style = {
  display: 'flex',
  flexDirection: 'row',
  width: 700,
  height: 100,
  boxSizing: 'border-box',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: '#ffffff',
  fontWeight: '700',
  backgroundColor: 'gray',
};

const Display = ({ result }) => <div className="display" style={style}><h1>{result}</h1></div>;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
