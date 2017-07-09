console.log("hey, i'm working");

var Twit = require("twit");
var config = require("configcool");

var T = new Twit(config);

var params = {
	q:"sachin Tendulkar",
	count: 3
}

function twitdata(err, data, response){
	var tweets = data.statuses;
	for (var i=0;i<tweets.length;i++){
		console.log(tweets[i].text);
	}
}

T.get("search/tweets",params,twitdata);

T.post('statuses/update', { status: 'cool' }, function(err, data, response) {
  console.log(data)
})