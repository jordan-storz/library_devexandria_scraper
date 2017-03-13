const R = require('ramda');

module.exports = (function() {

  const reduceKeywords = keywords => {
    return R.compose(
      R.map(x => x.replace(',', '')),
      // R.map(x => x.replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g), 'ss'),
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
