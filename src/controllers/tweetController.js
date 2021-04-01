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

// data sent by
exports.deleteOneTweet = (request, response) => {
    const { id } = request.params; // get id from string from param :id
    console.log(request.params);
    // request = obj contenant toutes informations de la requete http
    // request.body = corp de la req http (data sent by user)
    // const { tweet } = request.body; // get tweet from req.body
    // console.log(`tweet contents: ` + tweet);
    // console.log(response);
    Tweet.deleteTweet(id, (error, tweet) => { // method
        console.log(tweet);
        if (error) {
            response.send(error.message);
        }
        // console.log(tweet);
        // server.response("tweet deleted");
        response.redirect("/");
        // response.render("index.ejs", { tweets, tweet });
    });
}

exports.editOneTweet = (request, response) => {
    // const { req } = request;
    // const { tweet_data } = request; // get id from string from param :id
    // const { id } = request.params; // get id from string from param :id
    const { id } = request.params; // get id from string from param :id
    const { message } = request; // get id from string from param :id
    // const {  } = request.params;
    // console.log(`body` + request.body);


    // const { res } = response;
    // console.log(`response_contents: ` + res);
    // const { id } = request.params; // get id from string from param :id
    // console.log(`(tweet_data)/request: ` + request);
    console.log(`++(id)/requestObj: ` + id);
    // console.log(`message: ` + message);

    console.log(`++SECOND LOG(req.key): ` + request.key);
    console.log(`++THIRD LOG req obj KEYS / req.params: ` + Object.keys(request.params));
    // console.log(`FOURTH LOG: ` + message);



    // const { tweet_text } = request.params; // get id from string from param :id
    // const { tweet_text } = request.params.message;
    // console.log(tweet_text);

    Tweet.editTweet(id, (error, tweet) => { // method
        // console.log(tweet);

        if (error) {
            response.send(error.message);
        }
        // console.log(tweet);
        response.redirect("/");
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


////
// server 
// >
// route
// >
// controller(get infos from model then display view) >