const R = require('ramda');
const titleWorker = require('../components/title-worker');
const htmlSwiper = require('../io/html-swiper');

module.exports = (function captureTitle() {

  const execute = body => {
    return titleWorker.grabTitle(body);
  }

  return {
    execute
  };

}());
