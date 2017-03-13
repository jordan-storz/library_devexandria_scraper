const R = require('ramda');
const tagScout = require('./tag-scout');
const keywordCook = require('./keyword-cook');

module.exports = (function() {
  const grabMetas = tagScout.grabTags('meta');

  const reduceDescription = arr => {
    return R.compose(
      R.head,
      R.prop('content'),
      R.invert,
      R.head,
      R.filter(R.has('description')),
      R.map(R.invert),
      R.identity,
      R.pluck('attribs')
    )(arr);
  };

  const reduceKeywords = arr => {
    return R.compose(
      keywordCook.reduceKeywords,
      R.prop('content'),
      R.invert,
      R.head,
      R.filter(R.has('keywords')),
      R.map(R.invert),
      R.pluck('attribs')
    )(arr);
  }

  const grabMetaTags = (body) => {
    const metaArray = grabMetas(body);
    return {
      content: reduceDescription(metaArray),
      tags: reduceKeywords(metaArray)
    };
  }

  return {
    grabMetaTags
  }

}());
