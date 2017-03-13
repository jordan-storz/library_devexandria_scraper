const R = require('ramda');
const cheerio = require('cheerio');
const metaWorker = require('../components/meta-worker');

module.exports = (function captureContent() {

  const hierarchy = [
    'meta[name="content"]',
    'h1',
    'h2',
    'h3',
    'p'
  ]

  const execute = body => {
    let $ = cheerio.load(body);
    let metas = metaWorker.grabMetaTags(body);
    return metas;
  }

  return {
    execute
  };

}());
