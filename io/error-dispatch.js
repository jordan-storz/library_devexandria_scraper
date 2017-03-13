const R = require('ramda');

module.exports = R.curry((res, message) => {
  res.status(500).json({message})
});
