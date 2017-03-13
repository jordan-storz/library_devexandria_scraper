const R = require('ramda');
const cheerio = require('cheerio');

module.exports = (function() {
  const grabTags = R.curry((selector, body) => {
    let $ = cheerio.load(body);
    return Array.from($(selector));
  });

  return {
    grabTags
  };
}());
