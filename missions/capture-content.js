const R = require('ramda');
const cheerio = require('cheerio');
const metaWorker = require('../components/meta-worker');
const paragraphWorker = require('../components/paragraph-worker');

module.exports = (function captureContent() {

  const execute = body => {
    let $ = cheerio.load(body);
    let metas = metaWorker.grabMetaTags(body);
    let headings = paragraphWorker.grabParagraph(body);
    let content;
    if (metas.content.length < 1) {
      console.log('meta not long enough');
      content = headings;
    } else {
      content = metas.content;
    }
    return {content, tags: metas.tags};
  }

  return {
    execute
  };

}());
