const promiseGet = require('./promise-get');
const R = require('ramda');

module.exports = (function htmlSwiper() {
  const getPage = (url) => {
    console.log('EXECUTING GET PAGE');
    return promiseGet(url)
      .then(R.identity)
      .catch(console.error);
  }

  return {
    getPage
  };
}());
