var express = require('express');
var path = require('path');
var app = express();

var routes = require('./api/routes');

app.set('port', 3000);//setting property on app

app.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});//use middleware to log req and res

app.use(express.static(path.join(__dirname, 'public')));//middleware
// above replaces below:
// app.get('/', function(req, res) {
// 	console.log('GET the homepage');
// 	res
// 		.status(200)
// 		.sendFile(path.join(__dirname, 'public', 'index.html'));
// });//defining a route for get /

app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;//gets the port
	console.log('Magic happens on port' + port);
});//set up listener to port, with callback. when does callback fire?
//returns an object with cool stuff, so we set it to server
