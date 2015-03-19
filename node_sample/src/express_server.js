var express = require('express');
var app = express();

// Routing
app.get('/', function(req, res) {
  res.send('Hello world\n');
});

app.get(/^\/[0-9]+$/, function(req, res) {
  res.send('Number');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');
