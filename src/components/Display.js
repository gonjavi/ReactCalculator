import React from 'react';
import PropTypes from 'prop-types';
import { white } from 'color-name';

const style = {
  display: 'flex',
  flexDirection: 'row',
  width: 700,
  height: 100,
  marginTop: 20,
  marginLeft: 300,
  justifyContent: 'flex-end',
  color: 'white',
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
