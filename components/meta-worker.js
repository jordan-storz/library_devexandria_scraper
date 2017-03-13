const R = require('ramda');
const tagScout = require('./tag-scout');

module.exports = (function() {
  const grabMetas = tagScout.grabTags('meta');

  reduceByName = R.curry((name, arr) => {
    return R.compose(
      R.head,
      R.pluck('content'),
      R.invert,
      R.filter(R.has(name)),
      R.invert,
      R.pick(['name', 'content'])
    )(arr);
  });

  const reduceDescription = reduceByName('description');
  const reduceKeywords = reduceByName('keywords');

  const grabMetaTags = (body) => {
    const metaArray = grabMetas(body);
    return {
      description: reduceDescription(metaArray),
      keywords: reduceKeywords(metaArray)
    };
  }

  return {
    grabMetaTags
  }
  
}());
