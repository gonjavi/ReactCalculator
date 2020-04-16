import React from 'react';

const style = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  width: 600,
  height: 460,
  marginTop: 1,
  marginLeft: 330,
  justifyContent: 'flex-end',
  backgroundColor: '#E0E0E0',
};

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

const Group1 = () => {
  return (
    <div style={styleGroup1}>group1</div>
  );
};

const Group2 = () => {
  return (
    <div style={styleGroup2}>group2</div>
  );
};

const Group3 = () => {
  return (
    <div style={styleGroup3}>group3</div>
  );
};

const Group4 = () => {
  return (
    <div style={styleGroup4}>group4</div>
  );
};

const Group5 = () => {
  return (
    <div style={styleGroup5}>group5</div>
  );
};

const ButtonPanel = () => {
  return (
    <div style={style}>
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
};

export default ButtonPanel;
