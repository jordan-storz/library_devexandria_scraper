const R = require('ramda');
const tagScout = require('./tag-scout');

module.exports = (function() {
  const grabTitleTag =
    R.compose(R.head, tagScout.grabTags('title'));

  const grabTitle = (body) => {
    let titleTag = grabTitleTag(body);
    return R.defaultTo(
      'Web Bookmark',
      R.prop('data', R.head(titleTag.children))
    );
  }

  return {
    grabTitle
  }

}());
