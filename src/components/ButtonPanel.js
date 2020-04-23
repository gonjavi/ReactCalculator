import React from 'react';
import Button from './Button';
import '../css/styles.css';

const Group1 = () => (
  <div className="styleGroup1">
    <Button buttonName="AC" />
    <Button buttonName="+/-" />
    <Button buttonName="A%" />
    <Button buttonName="÷" rightB="yes" />
  </div>
);

const Group2 = () => (
  <div className="styleGroup2">
    <Button buttonName="7" />
    <Button buttonName="8" />
    <Button buttonName="9" />
    <Button buttonName="X" rightB="yes" />
  </div>
);

const Group3 = () => (
  <div className="styleGroup3">
    <Button buttonName="4" />
    <Button buttonName="5" />
    <Button buttonName="6" />
    <Button buttonName="-" rightB="yes" />
  </div>
);


const Group4 = () => (
  <div className="styleGroup4">
    <Button buttonName="1" />
    <Button buttonName="2" />
    <Button buttonName="3" />
    <Button buttonName="+" rightB="yes" />
  </div>
);

const Group5 = () => (
  <div className="styleGroup5">
    <Button buttonName="0" ZeroB="yes" />
    <Button buttonName="." />
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
