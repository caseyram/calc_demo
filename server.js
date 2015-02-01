var express = require('express');
var assets = require('connect-assets');
var app = express();


app.use(assets());

app.use(express.static(process.cwd() + '/www'));

app.listen(8080, function() {
  return console.log("Listening on " + 8080 + "\nPress CTRL-C to stop server.");
});
