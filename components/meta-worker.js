const R = require('ramda');
const tagScout = require('./tag-scout');
const keywordCook = require('./keyword-cook');

module.exports = (function() {
  const grabMetas = tagScout.grabTags('meta');

  const reduceDescription = arr => {
    let result;
    try {
      result = R.compose(
        R.head,
        R.prop('content'),
        R.invert,
        R.head,
        R.filter(R.has('description')),
        R.map(R.invert),
        R.identity,
        R.pluck('attribs')
      )(arr);
    } catch (e) {
      result = ''
    }
    return result;
  };

  const reduceKeywords = arr => {
    let result;
    try {
      result = R.compose(
        keywordCook.reduceKeywords,
        R.tap(console.log),
        R.prop('content'),
        R.invert,
        R.head,
        R.filter(R.has('keywords')),
        R.map(R.invert),
        R.pluck('attribs')
      )(arr);
    } catch(e) {
      result = [];
    }
    return result;
  }

  const grabMetaTags = (body) => {
    const metaArray = grabMetas(body);
    let result = {
      content: reduceDescription(metaArray),
      tags: reduceKeywords(metaArray)
    };
    return result;
  }

  return {
    grabMetaTags
  }

}());
