const express = require('express');
const path = require('path');
const port = process.env.PORT || 4200;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('App is running on http://localhost:' + port);
 });