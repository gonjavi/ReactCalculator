import React from 'react';
import PropTypes from 'prop-types';
import '../css/styles.css';

const style = {
  display: 'flex',
  flexDirection: 'row',
  width: 700,
  height: 100,
  marginTop: 50,
  boxSizing: 'border-box',
  justifyContent: 'flex-end',
  alignItems: 'center',
  color: '#ffffff',
  fontSize: 30,
  fontWeight: '700',
  backgroundColor: 'gray',
};

const Display = ({ result }) => <div className="display" style={style}><h1>{result || '0' }</h1></div>;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
