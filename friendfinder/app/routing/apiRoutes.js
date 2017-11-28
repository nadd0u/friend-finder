//GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//POST routes /api/friends. This will be used to handle incoming survey results.
 //This route will also be used to handle the compatibility logic.
var friends = require('../data/friends.js');
var person = [];
//why do i not need to require express? 
module.exports = function (app) {
  // //api path to get the friends data, responds with a json object (an array of friends). Activated on both html pages with blue API Link
  app.get('/api/friends', function (req,res) {
      res.json(friends);
  });

  app.post("/form", function(req, res){
  	var datingprofile = req.body
  	  console.log(datingprofile);
  		person.push(datingprofile);
      //how do I push datingprofile to the friend.js array.
      var Match = {};
        //turn scores in the score array into integers
      for (i=0; i>datingprofile.scores.length, i++){
        datingprofile.scores[i]=parseInt(datingprofile.scores[i]);
      }
      //compare tofriends scores
      for(i=0;i<friends.length;i++){
        var difference= 0;
        for(i=0;friends[i].scores.length;i++){
          var scorediff = Math.abs(friends[i].scores[i]-datingprofile.scores[i]);
          difference += scorediff
        }
      }
  });
