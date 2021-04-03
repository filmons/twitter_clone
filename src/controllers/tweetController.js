const { response } = require("express");
const Tweet = require("../models/tweet");

exports.findAllTweets = (request, response) => {
    const { tweet } = request;

    Tweet.getAllTweets((error, tweets) => {
        if (error) {
            response.send(error.message);
        }

        // console.log(tweet);

        response.render("index.ejs", { tweets, tweet });
    });
}

exports.getTweetsFromUser = (request, response) => { // list of tweets from one user
    // console.log(request.params);

    const { userID } = request.params;
    // console.log(`++++`, userID);
    Tweet.getAllTweetsFromUser(userID, (error, result) => {
        if (error) {
            response.send(error.message);
        }
        response.send(`selected user ${userID}!`);

        // response.redirect("/user/1");
    })
}
exports.getSpecificTweetFromUser = (request, response) => { // details of one tweet
    const { userID } = request.params; // log routes variables! ex: /path/:id < 
    const { tweetID } = request.params;

    console.log(request.params);

    Tweet.getOneTweetFromUser(userID, tweetID, (error, result) => {
        if (error) {
            response.send(error.message);
        }
        console.log(`getSpecificTweetFromUser: ` + result);
        response.send(`got tweet ${tweetID} from user ${userID}!`)
            // response.redirect(`/user/${userID}/tweet/${tweetID}`);
    })
}


exports.addOneTweet = (request, response) => {
    Tweet.createTweet(request.body, (error, result) => {
        if (error) {
            response.send(error.message);
        }

        response.redirect("/");
    })
}

exports.deleteOneTweet = (request, response) => { // request is an OBjECT that contains all the informations of the http request // request.body is the BODY of the http request, it contains the DATA sent by the user
    const { id } = request.params;
    // console.log(request.params);
    Tweet.deleteTweet(id, (error, tweet) => {
        // console.log(tweet);
        if (error) {
            response.send(error.message);
        }
        response.redirect("/");
    });
}

exports.editOneTweet = (request, response) => {
    const { id } = request.params; // Get/destructure key "id" from request.params
    const { name } = request.body; // Get/destructure key "name" from request.body

    console.log(`++request.params object KEYS: ` + Object.keys(request.params));
    console.log(`++request.params id: ` + id);
    console.log(`++request.body.name (message aka "name") = ` + request.body.name);

    Tweet.editTweet(id, name, (error, result) => {
        if (error) {
            response.send(error.message);
        }
        // console.log(result); // To see the result of the request
        response.redirect("/");
    });
}