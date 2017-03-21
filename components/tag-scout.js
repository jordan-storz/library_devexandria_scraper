const R = require('ramda');
const cheerio = require('cheerio');

module.exports = (function() {
  const grabTags = R.curry((selector, body) => {
    let $ = cheerio.load(body);
    return Array.from($(selector));
  });

  const grabRawTags = R.curry((selector, body) => {
    let $ = cheerio.load(body);
    return $(selector);
  })

  return {
    grabTags,
    grabRawTags
  };
}());
