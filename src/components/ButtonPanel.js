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
        <Button buttonName="AC" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="+/-" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="A%" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="÷" onClick={onClick} rightB="yes" />
      </div>
      <div className="styleGroup2" style={styleGroup1}>
        <Button buttonName="7" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="8" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="9" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="X" onClick={onClick} rightB="yes" />
      </div>
      <div style={styleGroup1}>
        <Button buttonName="4" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="5" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="6" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="-" onClick={onClick} rightB="yes" />
      </div>
      <div className="styleGroup4" style={styleGroup1}>
        <Button buttonName="1" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="2" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="3" onClick={onClick} color="#dfe8f7" />
        <Button buttonName="+" onClick={onClick} rightB="yes" />
      </div>
      <div className="styleGroup5" style={styleGroup1}>
        <Button buttonName="0" onClick={onClick} ZeroB="yes" color="#dfe8f7" wide />
        <Button buttonName="." onClick={onClick} color="#dfe8f7" />
        <Button buttonName="=" onClick={onClick} rightB="yes" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
