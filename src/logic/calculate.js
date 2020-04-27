import Operate from './operate';

const Calculate = buttonName => {
  let total;
  let next;
  let operation;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {

  } else if (buttonName === 'A%') {
    
  } else if (buttonName === '÷') {
    total = Operate();
  } else if (buttonName === 'X') {
    
  } else if (buttonName === '-') {
    
  } else if (buttonName === '+') {
    
  } else if (buttonName === '=') {
    
  }

  return { total, next, operation };
};

export default Calculate;
