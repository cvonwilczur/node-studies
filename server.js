// need to use the below two expressions to enable express in server file
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// used for static requests
app.use(express.static(__dirname + '/public'))

app.use() is a middleware request that intercepts the request, runs our code,
and moves on to the next aspects of the get requests
app.use((req, res, next) => {
  console.log('<h1>Hello!</h1>');
  next();
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

capture requests with .get and respond with data. will have request objects.
app.get('/', (req, res) => {
  req.query - used for a get query, gives you access to the query string
  req.body - used for requests that have bodies like jsons or texts
  req.header - used to get access for the request's header
  req.params - used to get you the parameters of the URL
  res.send(user);
  res.status - used to respond with a certain status
})

app.get('/profile', (req, res) => {
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  }
  res.send(user);
})

app.post('/profile', (req, res) => {
  console.log(req.body)
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  }
  res.send(user);
})

set where server will be located/listening for requests
app.listen(3000);
