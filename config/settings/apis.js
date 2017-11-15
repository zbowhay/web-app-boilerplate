const darkSkyApiKey = require('../sensitive/darkSkyWeather.js').apiKey;

const apis = [
  {
    name: 'darkSkyWeather',
    url: `https://api.darksky.net/forecast/${darkSkyApiKey}/`
  },
  {
    name: 'someOtherApi',
    url: `https://someOtherApi.com/someApiKey/`
  }
];

exports.apis = apis;
