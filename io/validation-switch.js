const R = require('ramda');

module.exports = (validationResult) => {
  let {result, message} = validationResult;
  return new Promise((resolve, reject) => {
    return result ? resolve(message) : reject(message);
  });
}
