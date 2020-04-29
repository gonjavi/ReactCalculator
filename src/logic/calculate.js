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
    total = (operate(total, next, buttonName)).string;
    operation = null;
    next = null;
  } else {
    next = operate(next, total, buttonName);
    operation = buttonName;
  }
  return { total, next, operation };
};

export default calculate;
