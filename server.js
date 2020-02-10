const express = require('express');
const app = express();
const Twit = require('twit');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

const Twitter = new Twit({ 
  consumer_key:        process.env.CONSUMER_KEY,
  consumer_secret:     process.env.CONSUMER_SECRET,   
  access_token:        process.env.ACCESS_TOKEN,         
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.get('/', (req, res) => {
  Twitter.get('search/tweets', { q: '#iot', count: 100 }, function(err, data, response) {
    res.json(data);
  });
});

app.post('/', (req, res) => {
  Twitter.get('search/tweets', { q: req.body.value, count: 100 }, function(err, data, response) {
    res.json(data);
  });
});

app.listen(8080, () => console.log(`Listening on port 8080!`));