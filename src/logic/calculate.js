import Operate from './operate';

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = 0;
  } else if (buttonName === '=') {
    total = (Operate(total, next, buttonName)).string;
    operation = null;
    next = null;
  } else {
    next = Operate(next, total, buttonName);
  }
  return { total, next, operation };
};

export default Calculate;
