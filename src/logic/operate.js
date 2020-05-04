const Big = require('big-js');

const operate = (numberOne, numberTwo, operation) => {
  let result = null;
  if (numberOne === '.' || numberTwo === '.' || numberTwo === '' || numberOne === 'error') {
    result = 'error';
    return result.toString();
  }
  if (numberTwo === '0' && operation === '÷') {
    result = 'error';
    return result.toString();
  }

  const one = Big(numberOne);
  const two = Big(numberTwo);

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
      result = one.div(two);
      break;
    case '%':
      result = one.times(two).div(100);
      break;
    default:
      result = null;
  }
  return result.toString();
};

export default operate;
