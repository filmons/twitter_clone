const { response } = require("express");
const Tweet = require("../models/tweet");

exports.findAllTweets = (request, response) => {
  const { tweet } = request;
  const { user } = request;

  Tweet.getAllTweets((error, tweets) => {
    if (error) {
      response.send(error.message);
    }

    response.render("index.ejs", { tweets, tweet, user });
  });
};

exports.getTweetsFromUser = (request, response) => {
  const { userID } = request.params;
  Tweet.getAllTweetsFromUser(userID, (error, tweets) => {
    if (error) {
      response.send(error.message);
    }

    response.render(`profile.ejs`, { tweets });
  });
};
exports.getSpecificTweetFromUser = (request, response) => {
  const { userID } = request.params;
  const { tweetID } = request.params;

  Tweet.getOneTweetFromUser(userID, tweetID, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    response.redirect(`user/${userID}/tweet/${tweetID}`);
  });
};

exports.addOneTweet = (request, response) => {
  Tweet.createTweet(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  });
};

exports.deleteOneTweet = (request, response) => {
  const { tweetID } = request.params;
  Tweet.deleteTweet(tweetID, (error, tweet) => {
    if (error) {
      response.send(error.message);
    }
    response.redirect("/");
  });
};

exports.editOneTweet = (request, response) => {
  const { tweetID } = request.params;
  const { name } = request.body;

  Tweet.editTweet(tweetID, name, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  });
};
