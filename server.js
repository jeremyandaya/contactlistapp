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

app.delete('/contactList/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactList.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.get('/contactList/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.contactList.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
		res.json(doc);
	});
});

app.put('/contactList/:id', function (req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	db.contactList.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true}, function (err, doc) {
			res.json(doc);
		});
});

app.listen(3000);
console.log("Server running on port 3000");