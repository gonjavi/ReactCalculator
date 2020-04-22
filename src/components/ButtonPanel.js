import React from 'react';

const style = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  width: 600,
  height: 460,
  marginTop: 1,
  marginBottom: 30,
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

const styleButton = {
  display: 'inline-flex',
  width: 147,
  height: 90,
  border: '1px solid black',
  justifyContent: 'center',
  alignItems: 'center',
};
const rightButtons = {
  display: 'inline-flex',
  width: 147,
  height: 90,
  border: '1px solid black',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FF8645',
};

const styleZero = {
  display: 'inline-flex',
  width: 296,
  height: 90,
  border: '1px solid black',
  justifyContent: 'center',
  alignItems: 'center',
};


const Group1 = () => (
  <div style={styleGroup1}>
    <div style={styleButton}>AC</div>
    <div style={styleButton}>+/-</div>
    <div style={styleButton}>A%</div>
    <div style={rightButtons}>÷</div>
  </div>
);

const Group2 = () => (
  <div style={styleGroup2}>
    <div style={styleButton}>7</div>
    <div style={styleButton}>8</div>
    <div style={styleButton}>9</div>
    <div style={rightButtons}>X</div>
  </div>
);

const Group3 = () => (
  <div style={styleGroup3}>
    <div style={styleButton}>4</div>
    <div style={styleButton}>5</div>
    <div style={styleButton}>6</div>
    <div style={rightButtons}>-</div>
  </div>
);


const Group4 = () => (
  <div style={styleGroup4}>
    <div style={styleButton}>1</div>
    <div style={styleButton}>2</div>
    <div style={styleButton}>3</div>
    <div style={rightButtons}>+</div>
  </div>
);

const Group5 = () => (
  <div style={styleGroup5}>
    <div style={styleZero}>0</div>
    <div style={styleButton}>.</div>
    <div style={rightButtons}>=</div>
  </div>
);

const ButtonPanel = () => (
  <div style={style}>
    <Group1 />
    <Group2 />
    <Group3 />
    <Group4 />
    <Group5 />
  </div>
);


export default ButtonPanel;
