const Big = require('big.js');

const Operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  let result = 0;

  if (operation === '-') {
    result = one - two;
  }
  return { result };
};

export default Operate;
