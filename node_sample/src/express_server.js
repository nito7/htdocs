var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();

//app.use(express.bodyDecoder());

app.register('.ejs', ejs);

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.post('/', function(req, res) {
  res.render('result.ejs', {
    locals: { message: req.body.url }
  });
});

app.get(/^\/[0-9]+$/, function(req, res) {
  res.send('Number');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
