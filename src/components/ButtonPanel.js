import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../css/styles.css';

const styleGroup1 = {
  position: 'relative',
  width: 700,
  height: 100,
};

const ButtonPanel = props => {
  const { onClick } = props;
  return (
    <div className="style">
      <div className="styleGroup1" style={styleGroup1}>
        <Button buttonName="AC" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="+/-" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="%" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="÷" handleClick={onClick} rightB="yes" />
      </div>
      <div className="styleGroup2" style={styleGroup1}>
        <Button buttonName="7" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="8" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="9" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="X" handleClick={onClick} rightB="yes" />
      </div>
      <div style={styleGroup1}>
        <Button buttonName="4" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="5" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="6" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="-" handleClick={onClick} rightB="yes" />
      </div>
      <div className="styleGroup4" style={styleGroup1}>
        <Button buttonName="1" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="2" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="3" handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="+" handleClick={onClick} rightB="yes" />
      </div>
      <div className="styleGroup5" style={styleGroup1}>
        <Button buttonName="0" handleClick={onClick} ZeroB="yes" color="#dfe8f7" wide />
        <Button buttonName="." handleClick={onClick} color="#dfe8f7" />
        <Button buttonName="=" handleClick={onClick} rightB="yes" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
