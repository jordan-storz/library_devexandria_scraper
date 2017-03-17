const R = require('ramda');

module.exports = (function() {
  const isComputerEnough =
    R.either(R.equals(10), R.flip(R.gt)(1));

  const resultMessage = bool => {
    return bool ?
      {
        result: bool,
        message: 'This book is computer-related'
      } :
      {
        result: bool,
        message: 'This resource is not related enough to the world of computers.'
      };
  }

  const assessVal = R.defaultTo(88);

  const validate =
    val => R.compose(
      resultMessage,
      isComputerEnough,
      assessVal
      )(val);

  return {
    validate
  };

}());
