import React from 'react';
import PropTypes from 'prop-types';

let styleButton = {};

const Button = props => {
  const {
    buttonName,
    rightB,
    ZeroB,
    color,
  } = props;
  if (rightB === 'yes') {
    styleButton = {
      display: 'inline-flex',
      width: '23.5%',
      height: 100,
      border: '1px solid black',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
    };
  } else if (ZeroB === 'yes') {
    styleButton = {
      display: 'inline-flex',
      width: '50.3%',
      height: 100,
      border: '1px solid black',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
    };
  } else {
    styleButton = {
      display: 'inline-flex',
      width: '25%',
      height: 100,
      border: '1px solid black',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
    };
  }
  return (
    <div style={styleButton}>{buttonName}</div>
  );
};

Button.defaultProps = {
  rightB: '',
  ZeroB: '',
  color: '#FF8645',
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  rightB: PropTypes.string,
  ZeroB: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
