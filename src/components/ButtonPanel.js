import React from 'react';
import Button from './Button';
import '../css/styles.css';

const styleGroup1 = {
  position: 'relative',
  width: 700,
  height: 100,
};

const Group1 = () => (
  <div className="styleGroup1" style={styleGroup1}>
    <Button buttonName="AC" color="#dfe8f7" />
    <Button buttonName="+/-" color="#dfe8f7" />
    <Button buttonName="A%" color="#dfe8f7" />
    <Button buttonName="÷" rightB="yes" />
  </div>
);

const Group2 = () => (
  <div className="styleGroup2" style={styleGroup1}>
    <Button buttonName="7" color="#dfe8f7" />
    <Button buttonName="8" color="#dfe8f7" />
    <Button buttonName="9" color="#dfe8f7" />
    <Button buttonName="X" rightB="yes" />
  </div>
);

const Group3 = () => (
  <div style={styleGroup1}>
    <Button buttonName="4" color="#dfe8f7" />
    <Button buttonName="5" color="#dfe8f7" />
    <Button buttonName="6" color="#dfe8f7" />
    <Button buttonName="-" rightB="yes" />
  </div>
);


const Group4 = () => (
  <div className="styleGroup4" style={styleGroup1}>
    <Button buttonName="1" color="#dfe8f7" />
    <Button buttonName="2" color="#dfe8f7" />
    <Button buttonName="3" color="#dfe8f7" />
    <Button buttonName="+" rightB="yes" />
  </div>
);

const Group5 = () => (
  <div className="styleGroup5" style={styleGroup1}>
    <Button buttonName="0" ZeroB="yes" color="#dfe8f7" wide />
    <Button buttonName="." color="#dfe8f7" />
    <Button buttonName="=" rightB="yes" />
  </div>
);

const ButtonPanel = () => (
  <div className="style">
    <Group1 />
    <Group2 />
    <Group3 />
    <Group4 />
    <Group5 />
  </div>
);

export default ButtonPanel;
