import React from 'react';
import Button from './Button';
import '../css/styles.css';


const styleGroup1 = {
  width: 598,
  height: 90,
  marginTop: 1,
  border: '1px solid gray',
  justifyContent: 'flex-end',
};

const styleGroup2 = {
  position: 'absolute',
  top: 92,
  left: 0,
  width: 598,
  height: 90,
  border: '1px solid black',
  justifyContent: 'center',
};

const styleGroup3 = {
  position: 'absolute',
  top: 184,
  left: 0,
  width: 598,
  height: 90,
  border: '1px solid black',
  justifyContent: 'center',
};

const styleGroup4 = {
  position: 'absolute',
  top: 276,
  left: 0,
  width: 598,
  height: 90,
  border: '1px solid black',
  justifyContent: 'center',
};

const styleGroup5 = {
  position: 'absolute',
  top: 368,
  left: 0,
  width: 598,
  height: 90,
  border: '1px solid black',
  justifyContent: 'center',
};

const Group1 = () => (
  <div style={styleGroup1}>
    <Button buttonName="AC" />
    <Button buttonName="+/-" />
    <Button buttonName="A%" />
    <Button buttonName="÷" rightB="yes" />
  </div>
);

const Group2 = () => (
  <div style={styleGroup2}>
    <Button buttonName="7" />
    <Button buttonName="8" />
    <Button buttonName="9" />
    <Button buttonName="X" rightB="yes" />
  </div>
);

const Group3 = () => (
  <div style={styleGroup3}>
    <Button buttonName="4" />
    <Button buttonName="5" />
    <Button buttonName="6" />
    <Button buttonName="-" rightB="yes" />
  </div>
);


const Group4 = () => (
  <div style={styleGroup4}>
    <Button buttonName="1" />
    <Button buttonName="2" />
    <Button buttonName="3" />
    <Button buttonName="+" rightB="yes" />
  </div>
);

const Group5 = () => (
  <div style={styleGroup5}>
    <Button buttonName="0" ZeroB="yes" />
    <Button buttonName="." />
    <Button buttonName="=" rightB="yes" />
  </div>
);

const ButtonPanel = () => (
  <div className="style">
    <Group1 className="styleGroup1" />
    <Group2 />
    <Group3 />
    <Group4 />
    <Group5 />
  </div>
);

export default ButtonPanel;
