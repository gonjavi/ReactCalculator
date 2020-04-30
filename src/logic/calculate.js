import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    operation = null;
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '=') {
    if (total !== null && next !== null) {
      total = operate(total, next, buttonName);
    }
    operation = buttonName;
    next = null;
  } else {
    next += buttonName;
    if (buttonName === '+' || buttonName === '-' || buttonName === 'X' || buttonName === '÷') {
      total = next.slice(0, -1);
      next = '';
    }
  }
  return { total, next, operation };
};

export default calculate;
