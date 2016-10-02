// 

// init project
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', function (req, res) {
  // todo pass in theme name as a request
  res.render('index', { title: 'Hey', message: 'Hello there!', mytheme:"superhero"});
});

app.get('/buttons', function (req, res) {
  res.render('buttons');
});

app.get('/lists', function (req, res) {
  res.render('lists');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});