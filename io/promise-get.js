const request = require('request');

const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      return !!error ? reject(error) : resolve(body);
    });
  });
}
