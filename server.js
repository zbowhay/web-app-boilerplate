const express = require('express');
const path = require('path');
const app = express(),
      port = 3000,
      DIST_DIR = path.join(__dirname, 'dist'),
      INDEX_HTML = path.join(DIST_DIR, 'index.html');

// setup middleware
app.use(require('morgan')('tiny'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());


// setup routes
app.use(express.static(DIST_DIR));
app.get('/something', (req, res) => { console.log('here?'); res.end('hello!'); });
app.get('*', (req, res) => { res.sendFile(INDEX_HTML); });

app.listen(port, () => { console.log(`App listening on ${port}`); });