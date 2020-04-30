import React from 'react';
import PropTypes from 'prop-types';

let styleButton = {};
let widthh = '25%';

const Button = props => {
  const {
    buttonName,
    rightB,
    ZeroB,
    color,
    wide,
    handleClick,
  } = props;
  if (wide === true) {
    widthh = '50%';
  }

  if (rightB === 'yes') {
    styleButton = {
      display: 'inline-flex',
      width: '25%',
      height: 100,
      border: '1px solid gray',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      backgroundColor: color,
    };
  } else if (ZeroB === 'yes') {
    styleButton = {
      display: 'inline-flex',
      width: widthh,
      height: 100,
      border: '1px solid gray',
      justifyContent: 'center',
      boxSizing: 'border-box',
      alignItems: 'center',
      backgroundColor: color,
    };
  } else {
    styleButton = {
      display: 'inline-flex',
      width: '25%',
      height: 100,
      border: '1px solid gray',
      justifyContent: 'center',
      boxSizing: 'border-box',
      alignItems: 'center',
      backgroundColor: color,
    };
  }
  return (
    <button style={styleButton} onClick={() => handleClick(buttonName)} type="button">{buttonName}</button>
  );
};

Button.defaultProps = {
  rightB: '',
  ZeroB: '',
  color: '#FF8645',
  wide: false,
};
Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  rightB: PropTypes.string,
  ZeroB: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
