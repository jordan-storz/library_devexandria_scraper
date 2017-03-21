const R = require('ramda');
const tagScout = require('./tag-scout');
const truncate = require('truncate');
const cLog = R.curry(console.log);

module.exports = (function() {
  const grabPTags =
    R.compose(
      tagScout.grabRawTags('p')
    );

  const findLongest = $elements => {
    // return $elements;
    let text = $elements.text();
    return truncate($elements.text(), 350);
  }

  const grabParagraph = (body) => {
    console.log('grabbing headings');
    let pTags = grabPTags(body);
    return findLongest(pTags);
  }

  return {
    grabParagraph
  }

}());
