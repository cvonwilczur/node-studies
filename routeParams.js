const express = require('express');

const app = express();

// route params

app.get('/r/:patternName', (req, res) => {
  res.send('welcome to this pattern');
});


app.get('*', (req, res) => {
  res.send('You a star');
})

app.listen(3000);
