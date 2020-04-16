import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'row',
  width: 600,
  height: 450,
  marginTop: 1,
  marginLeft: 330,
  justifyContent: 'flex-end',
  backgroundColor: '#E0E0E0',
};

const styleGroup1 = {
  display: 'flex 50',
  width: 500,
  height: 90,
  marginTop: 1,
  border: '1px solid gray',
  justifyContent: 'flex-end',
};

const styleGroup2 = {
  display: 'flex 2',
  width: 500,
  height: 90,
  marginTop: 1,
  border: '1px solid black',
  justifyContent: 'flex-end',
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
    <div style={styleGroup1}>group3</div>
  );
};

const Group4 = () => {
  return (
    <div style={styleGroup1}>group4</div>
  );
};

const Group5 = () => {
  return (
    <div style={styleGroup1}>group5</div>
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
