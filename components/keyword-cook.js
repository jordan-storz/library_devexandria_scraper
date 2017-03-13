const R = require('ramda');

module.exports = (function() {

  const reduceKeywords = keywords => {
    return R.compose(
      R.take(4),
      R.filter(a => a.length > 4),
      R.uniq,
      R.flatten,
      R.map(R.split(' '))
    )(keywords);
  }


  return {
    reduceKeywords
  }

}());
