require("dotenv").config();
const Twitter = require ('twit');
const Express = require("express");
const app = Express();


const twit = new Twitter({
  consumer_key:  process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret:  process.env.access_token_secret,
});

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.get('/tweets', function(req,res){
//   twit.get('search/tweets', { q: '@lenoxhill', count: 3 }, function(err, data, response) {
//     res.json(data)
//   });
// });


const params = {
  q: "lenox+hill+hospital%3A%29+-filter%3Aretweets",
	count: 15,
};

app.get('/tweets', function(req,res) {
  twit.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    const tweets = data.statuses;
    res.json(tweets);

  }
});

const port = process.env.PORT || 3002;
app.listen(port, function() {
	console.log("Listening on port " + port);
});
