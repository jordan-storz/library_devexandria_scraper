const promiseGet = require('./promise-get');
const R = require('ramda');

module.exports = (function htmlSwiper() {
  const getPage = (url) => {
    promiseGet(url)
      .then(R.identity)
      .catch(console.error);
  }

  return {
    getPage
  };
}());
