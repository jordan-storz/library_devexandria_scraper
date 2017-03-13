const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const validateSource = require('./missions/validate-source');


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/test', (req, res, next) => {
  validateSource.execute(req.body.url).then(result => {
    res.json(result);
  });
});


module.exports = {
  app
};
