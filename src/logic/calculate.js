import Operate from './operate';

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = 0;
    next = 0;
    operation = 0;
  } else if (buttonName === '%') {
    total = Operate(one, two, '%');
  } else if (buttonName === '÷') {
    total = Operate(one, two, '÷');
  } else if (buttonName === 'X') {
    total = Operate(one, two, 'X');
  } else if (buttonName === '-') {
    total = Operate(one, two, '-');
  } else if (buttonName === '+') {
    total = Operate(one, two, '+');
  }
  return { total, next, operation };
};

export default Calculate;
