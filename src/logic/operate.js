const Big = require('big.js');

const Operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  let result = 0;

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
      result = one.div(two);
      break;
    default:
  }
  return { result };
};

export default Operate;
