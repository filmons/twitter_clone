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
/////////////////////////////////////////////////////::
// exports.getAllTweets= (request, response) => {
  
//   response.send("toto");

  
 
// }
exports.getAllTweets = (request, response) => {
    const { id } = request.params;
    const { tweets } = request;
  
    Tweet.getAllTweet(id, (error, result) => {
      if (error) {
        response.send(error.message);
      }
  
      const oneTweet = result;
      const tweeterName = result[0].name;
  
      response.render("profile.ejs", { tweeterName, oneTweet, tweets});
      
    });
  }


//////////////////////////////////////////////////
//////////////////////////////////////////////////