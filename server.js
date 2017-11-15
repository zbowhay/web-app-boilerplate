const express = require('express');
const path = require('path');
const app = express(),
  port = 3001,
  DIST_DIR = path.join(__dirname, 'dist'),
  INDEX_HTML = path.join(DIST_DIR, 'index.html');
const config = require('./config/index.js');

// setup middleware
app.use(require('morgan')('tiny'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());


// setup routes
app.use(express.static(DIST_DIR));
app.use('/api', config.routes.api);

// start app
app.listen(port, () => { console.log(`App listening on ${port}`); });
