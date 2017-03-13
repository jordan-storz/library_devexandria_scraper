const R = require('ramda');
const request = require('request');
const defaultRequest = request.defaults({
  jar: true,
  followAllRedirects: true
});
const pRequest = require('promisified-request').create(defaultRequest);
const formScraper = require('form-scraper');


module.exports = (function formSwiper() {
  const formUrl = 'https://www.uclassify.com/browse/uclassify/topics?input=Url';
  const formSelector = '.body-content form';

  const takeFormStructure = () =>
    formScraper.fetchForm(formSelector, formUrl, pRequest);

  return {
    takeFormStructure
  }

}());
