const express = require('express');
const morgan = require('morgan');
const playstore = require('./playstore');

const app = express();

app.use(morgan('common'));

app.get('/apps', (req,res) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let filteredPlaystore = [...playstore];
  const sortOptions = ['Rating','App'];
  const sort = req.query.sort.toLowerCase();
  const capitalSort = capitalizeFirstLetter(sort);
  if(capitalSort && sortOptions.includes(capitalSort)) {
    filteredPlaystore = filteredPlaystore.sort((a,b) => {
      return a[capitalSort] < b[capitalSort] ? 1 : -1;
    });
  }
  console.log('/apps loaded');
  res.json(filteredPlaystore);
});

app.listen(8000, () => {
  console.log('Listening on Port 8000...');
});