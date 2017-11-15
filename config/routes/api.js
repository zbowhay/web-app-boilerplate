const express = require('express');
const router = express.Router();
const apis = require('../index.js').settings.apis;
const request = require('request');

router.all(/darkSkyWeather/, handleApiCall('darkSkyWeather'));

function handleApiCall(apiName) {
  const api = apis.find((el) => el.name === apiName);

  if (api.name === apiName) {
    const apiCall = function(req, res, next) {
      const reqOpts = {
        uri: api.url + req.path.replace('/darkSkyWeather/', ''),
        method: req.method
      };

      request(reqOpts, (err, response, body) => {
        err ? res.end(err) : res.end(body);
      });
    };
    return apiCall;
  } else {
    const apiNotRegistered = function(req, res, next) {
      res.end(`API '${apiName}' is not a registered api.`);
    }
    return apiNotRegistered;
  }
}

exports.apiRouter = router;
