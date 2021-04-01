const { response } = require("express");
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


exports.addOneTweet = (request, response) => {
    Tweet.createTweet(request.body, (error, result) => {
        if (error) {
            response.send(error.message);
        }

        response.redirect("/");
    })
}

exports.deleteOneTweet = (request, response) => {
    // request is an OBjECT that contains all the informations of the http request
    // request.body is the BODY of the http request, it contains the DATA sent by the user
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

    const { id } = request.params; // Get key(?) "id" from request.params
    const { name } = request.body; // Get key(?) "name" from request.body

    console.log(`--------------------------------------------------------------------------`);
    console.log(`++request.params object KEYS: ` + Object.keys(request.params));
    console.log(`++request.params > id: ` + id);
    console.log(`++request.body.name (message aka "name") = ` + request.body.name);
    console.log(`--------------------------------------------------------------------------`);

    Tweet.editTweet(id, name, (error, result) => {
        if (error) {
            response.send(error.message);
        }
        // console.log(result); // To see the result of the request
        response.redirect("/");
    });
}