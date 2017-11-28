var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");


var app = express();
var port = 3000


var person = [];

//home.html is root
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"))
});

//survey.html is "url/form"
app.get("/form", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"))
});

//post the person object to the server
app.post("/form", function(req, res){
	var dating profile = req.body
	  console.log(dating profile);
		person.push(datingprofile);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
