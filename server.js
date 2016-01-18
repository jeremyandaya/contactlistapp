var express = require('express');
var app = express();
var mongojs = require('mongojs'); // requires the mongojs module
var db = mongojs('contactList', ['contactList']); // mongodb database
var bodyParser = require('body-parser');

// app.get('/', function (req, res) {
// 	res.send("Hello world from server.js")
// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList', function(req, res) {
	console.log("I received a GET request!");

	// person1 = {
	// 	name: 'Hulk',
	// 	email: 'hulk@avengers.com',
	// 	number: '(111) 111-1111'
	// };

	// person2 = {
	// 	name: 'Tony',
	// 	email: 'tony@avengers.com',
	// 	number: '(222) 222-2222'
	// };

	// person3 = {
	// 	name: 'Thor',
	// 	email: 'thor@avengers.com',
	// 	number: '(333) 333-3333'
	// };

	// var contactList = [person1, person2, person3];
	// res.json(contactList);

	db.contactList.find(function(err, docs) {
		console.log(docs); //  test to see if we receive data from db
		res.json(docs); // sends data back to the controller
	});
});

app.post('/contactList', function(req, res) {
	console.log(req.body); // uses body-parser
	db.contactList.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.listen(3000);
console.log("Server running on port 3000");