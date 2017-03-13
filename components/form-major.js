const R = require('ramda');
const cheerio = require('cheerio');

module.exports = (function formMajor() {
  const elementSelector = 'div.progress-bar-classify';
  const load = body => cheerio.load(body);

  const extractStatus = ($selector) => {
    return $selector
      .first()
      .text()
      .trim()
      .replace('%', '');
  }

  const captureStatus = (body) => {
    let $ = load(body);
    return R.compose(Number, extractStatus, $)(elementSelector);
  };

  return {
    captureStatus
  };

}());
