const Tweet = require("../models/tweet");

exports.findAllTweets= (request, response) => {
  const { tweet} = request;

  Tweet.findAllTweets((error, tweets) => {
    if (error) {
      response.send(error.message);
    }

    console.log(tweet);

    response.render("index.ejs", { tweet,tweets });
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
  response.render("profile.ejs", { tweet ,tweets});
  });
}

///////////////

 