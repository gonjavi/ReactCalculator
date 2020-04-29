const Big = require('big-js');

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  let result = null;

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
      if (two === 0) {
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
  return { result };
};

export default operate;
