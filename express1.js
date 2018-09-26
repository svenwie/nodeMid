var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
})

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
})

app.get('/', function(req, res){
  res.render('index');
})

app.get('/profile/:name', function(req, res){
  var data = {age: '29', job: 'ninja', hobbys: ['reading','swimming','fighting']};
  res.render('profile', {person: req.params.name, data: data})
});

app.listen(3000);

// // contact?dept=marketing&person=joe
// npmjs.com/package/body-parser
