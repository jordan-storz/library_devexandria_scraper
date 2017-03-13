const R = require('ramda');
const tagScout = require('./tag-scout');

module.exports = (function() {
  const grabTitleTag = R.head(tagScout.grabTags('title'));

  const grabTitle = (body) => {
    let titleTag = grabTitleTag(body);
    return R.defaultTo('', titleTag.text());
  }

  return {
    grabTitle
  }

}());
