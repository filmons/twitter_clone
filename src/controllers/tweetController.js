const Tweet = require("../models/tweet");

exports.findAllTweets = (request, response) => {
    const { tweet } = request;

    Tweet.getAllTweets((error, tweets) => {
        if (error) {
            response.send(error.message);
        }

        console.log(tweet);

        response.render("index.ejs", { tweets, tweet });
    });
}

/////////////////////////////////////////////////////
exports.getTweetsDetail= (request, response) => {

  const{ id} = request.params;
  const { tweet } = request;
  console.log(request.body);


  Tweet.getTweetById(id, (error, tweets) => {
    if (error) {
      response.send(error.message);
    }
    console.log(request, id);
    console.log(tweets);
    //console.log(tweet);

  response.render("profile.ejs", { tweet ,tweets});
  });
}

///////////////

 
