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
    if (total !== null && next !== null && operation !== null) {
      total = operate(total, next, operation);
      operation = null;
      next = null;
    } else {
      total = null;
    }
  } else {
    if ((next === '' || next === null) && total === null && buttonName === '-') {
      next = buttonName;
    }
    if (buttonName !== '+' && buttonName !== '-' && buttonName !== 'X' && buttonName !== '÷' && buttonName !== '%') {
      if (next === null) {
        next = '';
      }
      next += buttonName;
    }
    if (next !== '-' && (buttonName === '+' || buttonName === '-' || buttonName === 'X' || buttonName === '÷' || buttonName === '%')) {
      operation = buttonName;
      if (total === 'error') {
        total = null;
      }
      if (total === null && next !== '') {
        total = next;
        next = '';
      }
    }
  }
  return { total, next, operation };
};

export default calculate;
