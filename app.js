const express = require('express');
const morgan = require('morgan');
const playstore = require('./playstore');

const app = express();

app.use(morgan('common'));

app.get('/apps', (req,res) => {
  console.log('/apps loaded');
  res.json(playstore);
});

app.listen(8000, () => {
  console.log('Listening on Port 8000...');
});