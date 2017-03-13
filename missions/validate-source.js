const R = require('ramda');
const formTransmitter = require('../io/form-transmitter');
const formMajor = require('../components/form-major');
const classifierSage = require('../components/classifier-sage');

module.exports = (function() {
  const execute = (url) => {
    return formTransmitter
      .submit(url)
      .then(formMajor.captureStatus)
      .then(classifierSage.validate)
      .then(R.tap(console.log));
  }

  return {
    execute
  };

}());
