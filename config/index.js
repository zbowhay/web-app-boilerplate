exports = module.exports = {};
const path = require('path');
const DIR_SETTINGS = path.join(__dirname, '/settings');
const DIR_ROUTES = path.join(__dirname, '/routes');

exports.settings = {
  apis: require(path.join(DIR_SETTINGS, '/apis.js')).apis
};

exports.routes = {
  api: require(path.join(DIR_ROUTES, '/api.js')).apiRouter
};
