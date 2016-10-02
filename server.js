// 

// init project
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render("index", { title: 'Hey', message: 'Hello there!'});
});

app.get('/*ex', function (req, res) {
  console.log(req.params);
  res.render(req.params[0]+"ex", { title: 'Hey', message: 'Hello there!'});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});