const R = require('ramda');
const request = require('request');
const defaultRequest = request.defaults({
  jar: true,
  followAllRedirects: true
});
const pRequest = require('promisified-request').create(defaultRequest);
const formScraper = require('form-scraper');

const formSwiper = require('./form-swiper');

module.exports = (function formTransmitter() {
  const submit = (url) => {
    const formValues = {url};
    const formStructure = formSwiper.takeFormStructure();
    return formScraper
      .submitForm(formValues, formScraper.provideForm(formStructure), pRequest)
      .then(R.prop('body'))
      // .then(R.tap(console.log));
  }

  return {
    submit
  };
}());
