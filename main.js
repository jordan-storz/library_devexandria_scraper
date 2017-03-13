const R = require('ramda');
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const validateSource = require('./missions/validate-source');
const captureTitle   = require('./missions/capture-title');
const captureContent = require('./missions/capture-content');
const validationSwitch = require('./io/validation-switch');
const errorDispatch = require('./io/error-dispatch');
const promiseGet = require('./io/promise-get');
const htmlSwiper = require('./io/html-swiper');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/populate', (req, res, next) => {
  validateSource.execute(req.body.url)
    .then(validationSwitch)
    .catch(errorDispatch(res))
    .then(R.always(req.body.url))
    .then(htmlSwiper.getPage)
    .then(body => {
      let title = captureTitle.execute(body);
      let {content, tags} = captureContent.execute(body);
      res.json({title, content, tags});
    });





  // captureTitle.execute(req.body.url).then(result => {
  //   res.json(result);
  // });
});


module.exports = {
  app
};
