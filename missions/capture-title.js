const R = require('ramda');
const titleWorker = require('../components/title-worker');
const htmlSwiper = require('../io/html-swiper');

module.exports = (function captureTitle() {

  const execute = body => {
    console.log('EXECUTING TITLE GRAB');
    return titleWorker.grabTitle(body);
  }

  return {
    execute
  };

}());
