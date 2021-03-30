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
    const { tweet } = request;
    console.log(tweet);

    Tweet.deleteTweet((error, tweet) => {
        if (error) {
            response.send(error.message);
        }

        console.log(tweet);
        server.response("tweet deleted");
        // response.redirect("/");



        // response.render("index.ejs", { tweets, tweet });
    });
}



// exports.findOne = (request, response) => {
//     const { id } = request.params;
//     const { user } = request;

//     Promo.getOne(id, (error, result) => {
//         if (error) {
//             response.send(error.message);
//         }

//         const students = result;
//         const promoName = result[0].name;

//         response.render("promo.ejs", { promoName, students, user });
//     });
// }

// exports.addOne = (request, response) => {
//     Promo.create(request.body, (error, result) => {
//         if (error) {
//             response.send(error.message);
//         }

//         response.redirect("/");
//     })
// }