import React from 'react';
import PropTypes from 'prop-types';

let styleButton = {};

const Button = props => {
  const { buttonName, rightB, ZeroB } = props;
  if (rightB === 'yes') {
    styleButton = {
      display: 'inline-flex',
      width: 147,
      height: 90,
      border: '1px solid black',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF8645',
    };
  } else if (ZeroB === 'yes') {
    styleButton = {
      display: 'inline-flex',
      width: 296,
      height: 90,
      border: '1px solid black',
      justifyContent: 'center',
      alignItems: 'center',
    };
  } else {
    styleButton = {
      display: 'inline-flex',
      width: 147,
      height: 90,
      border: '1px solid black',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }
  return (
    <div style={styleButton}>{buttonName}</div>
  );
};

Button.defaultProps = {
  rightB: '',
  ZeroB: '',
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  rightB: PropTypes.string,
  ZeroB: PropTypes.string,
};

export default Button;
