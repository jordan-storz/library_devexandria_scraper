const R = require('ramda');

module.exports = (function() {
  const isComputerEnough =
    R.either(R.equals(10), R.flip(R.gt)(88));
    
  const assessVal = R.defaultTo(88);

  const validate =
    val => R.compose(
      isComputerEnough,
      R.tap(console.log),
      assessVal
      )(val);

  return {
    validate
  };

}());
