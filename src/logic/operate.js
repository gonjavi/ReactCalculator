const Big = require('big-js');

const operate = (numberOne, numberTwo, operation) => {
  let result = null;
  if (numberOne === '.' || numberTwo === '.') {
    result = 'error';
    return result.toString();
  }
  const one = Big(numberOne);
  const two = Big(numberTwo);

  if (two === '0' && operation === '÷') {
    result = 'you cannot divide by zero';
    return result.toString();
  }

  switch (operation) {
    case '-':
      result = one.minus(two);
      break;
    case '+':
      result = one.plus(two);
      break;
    case 'X':
      result = one.times(two);
      break;
    case '÷':
      if (two === '0') {
        result = 'you cannot divide by zero';
      } else {
        result = one.div(two);
      }
      break;
    case '%':
      result = one.div(two);
      break;
    default:
      result = null;
  }
  return result.toString();
};

export default operate;
