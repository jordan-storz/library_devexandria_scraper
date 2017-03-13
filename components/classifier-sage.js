const R = require('ramda');

module.exports = (function() {
  const isComputerEnough = R.flip(R.gt)(88);
  const assessVal = R.defaultTo(88);

  const validate =
    val => R.compose(
      isComputerEnough,
      assessVal
      )(val);

  return {
    validate
  }

}());
