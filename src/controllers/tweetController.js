
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
    console.log(tweets);
  response.render("profile.ejs", { tweet ,tweets});
  });
}

// exports.addOneTweet = (request, response) => {
//   Tweet.createTweet(request.body, (error, result) => {
//       if (error) {
//           response.send(error.message);
//       }

//       response.redirect("/");
//   })
// }

exports.deleteOneTweet = (request, response) => {
  
  const { id} = request.params;
  Tweet.deleteTweet(id, (error, tweet) => {
      if (error) {
          response.send(error.message);
      }
      //response.redirect("index.ejs"`/index/${ reque.params.idList }`);
      // response.redirect("index.ejs"`/index/${ req.params.idList }`);
      response.redirect("/")
  });
}
exports.editOneTweet = (request, response) => {
  


  const { id } = request.params; 
  const { name } = request.body; 

  Tweet.editTweet(id, name, (error, result) => {
      if (error) {
          response.send(error.message);
      }
    
      response.redirect("index.ejs");
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



// const { response } = require("express");
// const Tweet = require("../models/tweet");

// exports.getAllTweets = (request, response) => {
//     const { tweet } = request;

//     Tweet.findAllTweets((error, tweets) => {
//         if (error) {
//             response.send(error.message);
//         }

//         // console.log(tweet);

//         response.render("index.ejs", { tweets, tweet });
//     });
// }

// /////////////////////////////////////////////////////
// exports.getTweetsDetail= (request, response) => {

//   const{ id} = request.params;
//   const { tweet } = request;
//   console.log(request.body);


//   Tweet.getTweetById(id, (error, tweets) => {
//     if (error) {
//       response.send(error.message);
//     }
//     console.log(request, id);
//     console.log(tweets);
//     //console.log(tweet);

//   response.render("profile.ejs", { tweet ,tweets});
//   });
// }

///////////////

 
// exports.getTweetsFromUser = (request, response) => { // list of tweets from one user
//     // console.log(request.params);

//     const { userID } = request.params;
//     // console.log(`++++`, userID);
//     Tweet.getAllTweetsFromUser(userID, (error, result) => {
//         if (error) {
//             response.send(error.message);
//         }
//         response.send(`selected user ${userID}!`);

//         // response.redirect("/user/1");
//     })
// }
////////////////////
// exports.getSpecificTweetFromUser = (request, response) => { // details of one tweet
//     const { userID } = request.params; // log routes variables! ex: /path/:id < 
//     const { tweetID } = request.params;

//     // console.log(request.params);

//     Tweet.getOneTweetFromUser(userID, tweetID, (error, result) => {
//         if (error) {
//             response.send(error.message);
//         }
//         // console.log(`getSpecificTweetFromUser: ` + result);
//         response.send(`got tweet ${tweetID} from user ${userID}!`)
//             // response.redirect(`/user/${userID}/tweet/${tweetID}`);
//     })
// }


// exports.addOneTweet = (request, response) => {
//     Tweet.createTweet(request.body, (error, result) => {
//         if (error) {
//             response.send(error.message);
//         }

//         response.redirect("/");
//     })
// }
/////////////////////////////
// exports.deleteOneTweet = (request, response) => { // request is an OBjECT that contains all the informations of the http request // request.body is the BODY of the http request, it contains the DATA sent by the user
//     const { tweetID } = request.params;
//     // console.log(request.params); 

//     // console.log(`+++reponse: ` + response);
//     // console.log(request.params);
//     Tweet.deleteTweet(tweetID, (error, tweet) => {
//         // console.log(tweet);
//         if (error) {
//             response.send(error.message);
//         }
//         response.redirect("/");
//     });
// }
//////////////////////

